import fs from "fs";
import path from "path";

const VAULT_PATH = path.join(process.cwd(), "public", "vault");

export interface VaultEntry {
  name: string;
  slug: string;
  type: "file" | "directory";
  extension?: string;
  content?: string; // Markdown content (only for .md files)
  children?: VaultEntry[];
}

/**
 * Scan the vault directory and return the full tree with markdown content.
 * Excludes hidden directories (.obsidian, .smite).
 */
export function scanVault(dirPath: string = VAULT_PATH, relativePath: string = ""): VaultEntry[] {
  if (!fs.existsSync(dirPath)) return [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const result: VaultEntry[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;

    const entryRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      const children = scanVault(path.join(dirPath, entry.name), entryRelativePath);
      if (children.length > 0) {
        result.push({
          name: entry.name,
          slug: entryRelativePath,
          type: "directory",
          children,
        });
      }
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      const entry_: VaultEntry = {
        name: entry.name,
        slug: entryRelativePath,
        type: "file",
        extension: ext,
      };

      // Pre-load markdown content
      if (ext === ".md") {
        const fullPath = path.join(dirPath, entry.name);
        try {
          entry_.content = fs.readFileSync(fullPath, "utf-8");
        } catch {
          // Skip unreadable files
        }
      }

      result.push(entry_);
    }
  }

  result.sort((a, b) => {
    if (a.type !== b.type) return a.type === "directory" ? -1 : 1;
    return a.name.localeCompare(b.name, "fr");
  });

  return result;
}

/**
 * Format a filename into a display title.
 */
export function formatTitle(name: string): string {
  let title = name.replace(/\.[^.]+$/, "");
  title = title.replace(/^\d+-/, "");
  title = title.replace(/-/g, " ");
  return title;
}

/**
 * Get human-readable section label from folder name.
 */
export function folderLabel(name: string): string {
  let label = name.replace(/^\d+-/, "");
  label = label.replace(/-/g, " ");
  return label;
}

/**
 * Parse Obsidian-style markdown.
 */
export function parseObsidianMarkdown(content: string): string {
  content = content.replace(/^---\n[\s\S]*?\n---\n?/, "");

  content = content.replace(
    /^>\s*\[!(\w+)\]\s*(.*)$/gm,
    (_match, type, title) => {
      return `> **${title || type}**`;
    }
  );

  content = content.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_match, target, label) => {
    const displayText = label || target;
    return `**${displayText}**`;
  });

  return content;
}
