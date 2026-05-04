"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { VaultMarkdown } from "./VaultMarkdown";
import type { VaultEntry } from "@/lib/vault";

interface VaultExplorerProps {
  tree: VaultEntry[];
}

// Folder display names
const folderLabels: Record<string, string> = {
  Notes: "Notes d'étude",
  Memoire: "Mémoire",
  Ressources: "Ressources",
  Priere: "Prières",
  Template: "Templates",
  "01-Pentateuque": "Pentateuque",
  "02-Livres-Historiques": "Livres Historiques",
  "03-Poetiques-Sapientiaux": "Poétiques & Sapientiaux",
  "04-Grands-Prophetes": "Grands Prophètes",
  "05-Petits-Prophetes": "Petits Prophètes",
  "06-Evangiles": "Évangiles",
  "07-Actes": "Actes",
  "08-Epîtres-Pauliniennes": "Épîtres Pauliniennes",
  "09-Epîtres-Catholiques": "Épîtres Catholiques",
  "10-Apocalypse": "Apocalypse",
  Droit: "Droit Canonique",
  Dogme: "Dogme",
  "Cheat-Sheets": "Cheat-Sheets",
  Discipline: "Discipline",
  Crise: "Crise",
  Index: "Index",
  Bible: "Bible",
};

function getLabel(name: string): string {
  if (folderLabels[name]) return folderLabels[name];
  return name.replace(/^\d+-/, "").replace(/-/g, " ");
}

function formatTitle(name: string): string {
  let title = name.replace(/\.[^.]+$/, "");
  title = title.replace(/^\d+-/, "");
  title = title.replace(/-/g, " ");
  return title;
}

function getExcerpt(content: string | undefined, maxLen = 120): string {
  if (!content) return "";
  const stripped = content
    .replace(/^---\n[\s\S]*?\n---\n?/, "")
    .replace(/^#+\s+.*$/gm, "")
    .replace(/>\s*\[!\w+\]\s*/gm, "")
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, "$1")
    .replace(/[*_`#|>\[\]()!-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (stripped.length <= maxLen) return stripped;
  return stripped.slice(0, maxLen) + "…";
}

// Search through tree recursively
function searchTree(
  entries: VaultEntry[],
  query: string
): VaultEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return entries;

  const results: VaultEntry[] = [];
  for (const entry of entries) {
    if (entry.type === "file") {
      if (
        entry.name.toLowerCase().includes(q) ||
        (entry.content && entry.content.toLowerCase().includes(q))
      ) {
        results.push(entry);
      }
    } else if (entry.children) {
      const childResults = searchTree(entry.children, q);
      if (childResults.length > 0) {
        results.push({
          ...entry,
          children: childResults,
        });
      }
    }
  }
  return results;
}

// Collect all files from tree
function collectFiles(entries: VaultEntry[]): VaultEntry[] {
  const files: VaultEntry[] = [];
  for (const entry of entries) {
    if (entry.type === "file") {
      files.push(entry);
    } else if (entry.children) {
      files.push(...collectFiles(entry.children));
    }
  }
  return files;
}

type ViewMode = "tree" | "grid";

export function VaultExplorer({ tree }: VaultExplorerProps) {
  const [selectedFile, setSelectedFile] = useState<VaultEntry | null>(null);
  const [expandedDirs, setExpandedDirs] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("tree");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const filteredTree = useMemo(
    () => searchTree(tree, search),
    [tree, search]
  );

  const allFiles = useMemo(() => collectFiles(tree), [tree]);

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [selectedFile?.slug]);

  const toggleDir = useCallback((slug: string) => {
    setExpandedDirs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  }, []);

  const handleFileClick = useCallback((entry: VaultEntry) => {
    if (entry.extension === ".pdf") {
      const encoded = entry.slug.split("/").map(encodeURIComponent).join("/");
      window.open(`/vault/${encoded}`, "_blank");
      return;
    }
    setSelectedFile((prev) => (prev?.slug === entry.slug ? null : entry));
    // On mobile, close sidebar when selecting a file
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, []);

  const goBack = useCallback(() => setSelectedFile(null), []);

  // Expand dirs matching search
  useEffect(() => {
    if (search.trim()) {
      const expandAll = (entries: VaultEntry[]) => {
        for (const entry of entries) {
          if (entry.type === "directory" && entry.children) {
            setExpandedDirs((prev) => new Set(prev).add(entry.slug));
            expandAll(entry.children);
          }
        }
      };
      expandAll(filteredTree);
    }
  }, [search, filteredTree]);

  return (
    <div className="vault-explorer">
      {/* Mobile toggle sidebar button */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="vault-mobile-toggle"
          aria-label="Ouvrir l'explorateur"
        >
          ☰ Explorer
        </button>
      )}

      {/* Sidebar: file tree */}
      <aside className={`vault-tree ${sidebarOpen ? "" : "vault-tree-hidden"}`}>
        <div className="vault-tree-header">
          <span className="vault-tree-header-title">Explorer</span>
          {/* View mode toggle */}
          <button
            onClick={() => setViewMode(viewMode === "tree" ? "grid" : "tree")}
            className="vault-view-toggle"
            title={
              viewMode === "tree"
                ? "Passer en vue grille"
                : "Passer en vue liste"
            }
          >
            {viewMode === "tree" ? "⊞" : "☰"}
          </button>
          {/* Mobile close */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="vault-mobile-close"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Search */}
        <div className="vault-search">
          <svg
            className="vault-search-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher…"
            className="vault-search-input"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="vault-search-clear"
              aria-label="Effacer"
            >
              ✕
            </button>
          )}
        </div>

        {viewMode === "tree" ? (
          <nav className="vault-tree-nav">
            {filteredTree.length === 0 ? (
              <p className="vault-empty">Aucun résultat</p>
            ) : (
              filteredTree.map((entry) => (
                <TreeNode
                  key={entry.slug}
                  entry={entry}
                  depth={0}
                  expandedDirs={expandedDirs}
                  selectedSlug={selectedFile?.slug || null}
                  onToggleDir={toggleDir}
                  onSelectFile={handleFileClick}
                />
              ))
            )}
          </nav>
        ) : (
          <nav className="vault-tree-nav vault-grid-nav">
            {allFiles
              .filter(
                (f) =>
                  !search.trim() ||
                  f.name.toLowerCase().includes(search.toLowerCase()) ||
                  (f.content &&
                    f.content.toLowerCase().includes(search.toLowerCase()))
              )
              .map((f) => (
                <button
                  key={f.slug}
                  onClick={() => handleFileClick(f)}
                  className={`vault-grid-item ${
                    selectedFile?.slug === f.slug
                      ? "vault-grid-item-active"
                      : ""
                  }`}
                >
                  <span className="vault-grid-icon">
                    {f.extension === ".pdf"
                      ? "\u{1F4D5}"
                      : f.extension === ".md"
                        ? "\u{1F4DD}"
                        : "\u{1F4C4}"}
                  </span>
                  <span className="vault-grid-title">
                    {formatTitle(f.name)}
                  </span>
                  {f.content && (
                    <span className="vault-grid-excerpt">
                      {getExcerpt(f.content, 80)}
                    </span>
                  )}
                </button>
              ))}
          </nav>
        )}
      </aside>

      {/* Content area */}
      <section className="vault-content-area" ref={contentRef}>
        {selectedFile ? (
          <div className="vault-note">
            <button onClick={goBack} className="vault-back-btn">
              {"\u2190"} Retour à l&apos;explorateur
            </button>
            <h2 className="vault-note-title">
              {formatTitle(selectedFile.name)}
            </h2>
            <div className="vault-note-body">
              {selectedFile.content ? (
                <VaultMarkdown content={selectedFile.content} />
              ) : (
                <p className="text-ink-600 italic">
                  Aucun contenu disponible.
                </p>
              )}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="vault-back-to-top"
              aria-label="Remonter en haut"
            >
              {"\u2191"} Remonter en haut
            </button>
          </div>
        ) : (
          <div className="vault-welcome">
            <div className="vault-welcome-inner">
              <span className="text-5xl block mb-4">{"\u{1F4D6}"}</span>
              <h2 className="font-serif text-2xl text-ink-900 mb-2">
                Le Livre
              </h2>
              <p className="text-ink-600">
                Sélectionnez une note dans l&apos;explorateur pour la lire.
                Naviguez dans les dossiers pour découvrir les notes d&apos;étude
                bibliques, les prières et les ressources.
              </p>
              <div className="vault-stats mt-8 grid grid-cols-3 gap-4 text-center">
                {tree
                  .filter((e) => e.type === "directory")
                  .map((dir) => {
                    const count = countFiles(dir);
                    return (
                      <div key={dir.slug} className="vault-stat">
                        <span className="block font-serif text-2xl text-gold-600">
                          {count}
                        </span>
                        <span className="text-xs text-ink-500">
                          {getLabel(dir.name)}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function TreeNode({
  entry,
  depth,
  expandedDirs,
  selectedSlug,
  onToggleDir,
  onSelectFile,
}: {
  entry: VaultEntry;
  depth: number;
  expandedDirs: Set<string>;
  selectedSlug: string | null;
  onToggleDir: (slug: string) => void;
  onSelectFile: (entry: VaultEntry) => void;
}) {
  const isExpanded = expandedDirs.has(entry.slug);
  const indent = depth * 16;

  if (entry.type === "directory") {
    const icon = isExpanded ? "\u{1F4C2}" : "\u{1F4C1}";
    const label = getLabel(entry.name);
    const fileCount = entry.children?.filter((c) => c.type === "file").length || 0;

    return (
      <div>
        <button
          onClick={() => onToggleDir(entry.slug)}
          className="vault-tree-dir"
          style={{ paddingLeft: `${indent + 8}px` }}
        >
          <span className="vault-tree-arrow">
            {isExpanded ? "\u25BE" : "\u25B8"}
          </span>
          <span className="vault-tree-icon">{icon}</span>
          <span className="vault-tree-label">{label}</span>
          {fileCount > 0 && (
            <span className="vault-tree-count">{fileCount}</span>
          )}
        </button>
        {isExpanded && entry.children && (
          <div>
            {entry.children.map((child) => (
              <TreeNode
                key={child.slug}
                entry={child}
                depth={depth + 1}
                expandedDirs={expandedDirs}
                selectedSlug={selectedSlug}
                onToggleDir={onToggleDir}
                onSelectFile={onSelectFile}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // File
  const isSelected = selectedSlug === entry.slug;
  const isPdf = entry.extension === ".pdf";
  const isMd = entry.extension === ".md";
  const icon = isPdf
    ? "\u{1F4D5}"
    : isMd
      ? "\u{1F4DD}"
      : "\u{1F4C4}";
  const label = formatTitle(entry.name);

  return (
    <button
      onClick={() => onSelectFile(entry)}
      className={`vault-tree-file ${isSelected ? "vault-tree-file-active" : ""}`}
      style={{ paddingLeft: `${indent + 28}px` }}
    >
      <span className="vault-tree-icon">{icon}</span>
      <span className="vault-tree-label">{label}</span>
      {isPdf && <span className="vault-tree-badge">PDF</span>}
    </button>
  );
}

function countFiles(entry: VaultEntry): number {
  if (!entry.children) return 0;
  return entry.children.reduce((sum, child) => {
    if (child.type === "directory") return sum + countFiles(child);
    return sum + 1;
  }, 0);
}
