"use client";

interface VaultMarkdownProps {
  content: string;
}

/**
 * Renders Obsidian-style markdown as HTML (client component).
 */
export function VaultMarkdown({ content }: VaultMarkdownProps) {
  const html = markdownToHtml(content);

  return (
    <div
      className="vault-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function markdownToHtml(md: string): string {
  // Strip YAML frontmatter
  md = md.replace(/^---\n[\s\S]*?\n---\n?/, "");

  // Convert Obsidian callouts
  md = md.replace(/^>\s*\[!(\w+)\]\s*(.*)$/gm, (_match, _type, title) => {
    return `> **${title || "Note"}**`;
  });

  // Convert [[wiki-links]] to bold (no navigation in single-page mode)
  md = md.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_match, _target, label) => {
    return `**${label || _target}**`;
  });

  const lines = md.split("\n");
  const output: string[] = [];
  let inList = false;
  let listType = "";
  let inTable = false;
  let tableRows: string[] = [];
  let inBlockquote = false;
  let blockquoteLines: string[] = [];

  function closeList() {
    if (inList) {
      output.push(listType === "ul" ? "</ul>" : "</ol>");
      inList = false;
    }
  }

  function closeTable() {
    if (inTable && tableRows.length > 0) {
      output.push('<div class="vault-table"><table>');
      const headerCells = tableRows[0].split("|").filter(c => c.trim() !== "");
      output.push("<thead><tr>");
      for (const cell of headerCells) {
        output.push(`<th>${inlineFmt(cell.trim())}</th>`);
      }
      output.push("</tr></thead>");
      output.push("<tbody>");
      for (let i = 2; i < tableRows.length; i++) {
        const cells = tableRows[i].split("|").filter(c => c.trim() !== "");
        output.push("<tr>");
        for (const cell of cells) {
          output.push(`<td>${inlineFmt(cell.trim())}</td>`);
        }
        output.push("</tr>");
      }
      output.push("</tbody></table></div>");
      tableRows = [];
      inTable = false;
    }
  }

  function closeBlockquote() {
    if (inBlockquote) {
      const inner = blockquoteLines.join("\n");
      output.push(`<blockquote>${markdownToHtml(inner)}</blockquote>`);
      blockquoteLines = [];
      inBlockquote = false;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      closeList();
      closeBlockquote();
      inTable = true;
      tableRows.push(line.trim());
      continue;
    } else if (inTable) {
      closeTable();
    }

    // Empty
    if (line.trim() === "") {
      closeList();
      closeBlockquote();
      continue;
    }

    // Heading
    const hMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (hMatch) {
      closeList();
      closeBlockquote();
      const lvl = hMatch[1].length;
      output.push(`<h${lvl}>${inlineFmt(hMatch[2])}</h${lvl}>`);
      continue;
    }

    // HR
    if (line.trim().match(/^(---|\*\*\*|___)$/)) {
      closeList();
      closeBlockquote();
      output.push("<hr/>");
      continue;
    }

    // Blockquote
    if (line.startsWith(">")) {
      closeList();
      inBlockquote = true;
      blockquoteLines.push(line.replace(/^>\s?/, ""));
      continue;
    } else if (inBlockquote) {
      closeBlockquote();
    }

    // Unordered list
    const ulMatch = line.match(/^\s*[-*+]\s+(.+)/);
    if (ulMatch) {
      closeBlockquote();
      if (!inList || listType !== "ul") {
        closeList();
        output.push("<ul>");
        inList = true;
        listType = "ul";
      }
      output.push(`<li>${inlineFmt(ulMatch[1])}</li>`);
      continue;
    }

    // Ordered list
    const olMatch = line.match(/^\s*\d+\.\s+(.+)/);
    if (olMatch) {
      closeBlockquote();
      if (!inList || listType !== "ol") {
        closeList();
        output.push("<ol>");
        inList = true;
        listType = "ol";
      }
      output.push(`<li>${inlineFmt(olMatch[1])}</li>`);
      continue;
    }

    // Paragraph
    closeList();
    closeBlockquote();
    output.push(`<p>${inlineFmt(line)}</p>`);
  }

  closeList();
  closeTable();
  closeBlockquote();

  return output.join("\n");
}

function inlineFmt(text: string): string {
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  text = text.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
  text = text.replace(/_(.+?)_/g, "<em>$1</em>");
  text = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener">$1</a>'
  );
  text = text.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" style="max-width:100%;height:auto;"/>'
  );
  return text;
}
