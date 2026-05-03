"use client";

import { useState, useCallback, useRef, useEffect } from "react";
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

export function VaultExplorer({ tree }: VaultExplorerProps) {
  const [selectedFile, setSelectedFile] = useState<VaultEntry | null>(null);
  const [expandedDirs, setExpandedDirs] = useState<Set<string>>(new Set());
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [selectedFile?.slug]);

  const toggleDir = useCallback((slug: string) => {
    setExpandedDirs(prev => {
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
      // Encode each path segment to handle spaces and special characters
      const encoded = entry.slug.split("/").map(encodeURIComponent).join("/");
      window.open(`/vault/${encoded}`, "_blank");
      return;
    }
    setSelectedFile(prev => (prev?.slug === entry.slug ? null : entry));
  }, []);

  const goBack = useCallback(() => setSelectedFile(null), []);

  return (
    <div className="vault-explorer">
      {/* Sidebar: file tree */}
      <aside className="vault-tree">
        <div className="vault-tree-header">
          <span className="vault-tree-header-title">
            Explorer
          </span>
        </div>
        <nav className="vault-tree-nav">
          {tree.map(entry => (
            <TreeNode
              key={entry.slug}
              entry={entry}
              depth={0}
              expandedDirs={expandedDirs}
              selectedSlug={selectedFile?.slug || null}
              onToggleDir={toggleDir}
              onSelectFile={handleFileClick}
            />
          ))}
        </nav>
      </aside>

      {/* Content area */}
      <section className="vault-content-area" ref={contentRef}>
        {selectedFile ? (
          <div className="vault-note">
            <button
              onClick={goBack}
              className="vault-back-btn"
            >
              {"\u2190"} Retour à l&apos;explorateur
            </button>
            <h2 className="vault-note-title">{formatTitle(selectedFile.name)}</h2>
            <div className="vault-note-body">
              {selectedFile.content ? (
                <VaultMarkdown content={selectedFile.content} />
              ) : (
                <p className="text-ink-600 italic">Aucun contenu disponible.</p>
              )}
            </div>
          </div>
        ) : (
          <div className="vault-welcome">
            <div className="vault-welcome-inner">
              <span className="text-5xl block mb-4">{"\u{1F4D6}"}</span>
              <h2 className="font-serif text-2xl text-ink-900 mb-2">Le Livre</h2>
              <p className="text-ink-600">
                Sélectionnez une note dans l&apos;explorateur pour la lire.
                Naviguez dans les dossiers pour découvrir les notes d&apos;étude bibliques,
                les prières et les ressources.
              </p>
              <div className="vault-stats mt-8 grid grid-cols-3 gap-4 text-center">
                {tree
                  .filter(e => e.type === "directory")
                  .map(dir => {
                    const count = countFiles(dir);
                    return (
                      <div key={dir.slug} className="vault-stat">
                        <span className="block font-serif text-2xl text-gold-600">{count}</span>
                        <span className="text-xs text-ink-500">{getLabel(dir.name)}</span>
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
    const isPdf = entry.extension === ".pdf";
    const icon = isExpanded ? "\u{1F4C2}" : "\u{1F4C1}";
    const label = getLabel(entry.name);
    const fileCount = entry.children?.filter(c => c.type === "file").length || 0;

    return (
      <div>
        <button
          onClick={() => onToggleDir(entry.slug)}
          className="vault-tree-dir"
          style={{ paddingLeft: `${indent + 8}px` }}
        >
          <span className="vault-tree-arrow">{isExpanded ? "\u25BE" : "\u25B8"}</span>
          <span className="vault-tree-icon">{icon}</span>
          <span className="vault-tree-label">{label}</span>
          {fileCount > 0 && (
            <span className="vault-tree-count">{fileCount}</span>
          )}
        </button>
        {isExpanded && entry.children && (
          <div>
            {entry.children.map(child => (
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
  const icon = isPdf ? "\u{1F4D5}" : isMd ? "\u{1F4DD}" : "\u{1F4C4}";
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
