#!/bin/bash
# Fix broken /** comment blocks to proper /* */

# Files to fix
files="leviticus.ts maccabees.ts minor-prophets.ts numbers.ts genesis.ts sirach.ts summaries.ts"

for file in $files; do
  if [ -f "$file" ]; then
    # Replace the pattern of multiple /** with proper /* */
    sed -i 's|^/\*\* \(.*\)|/* \1|' "$file"
    sed -i 's|^/\*\*|/*|' "$file"
    # Add */ to lines that need closing
    sed -i 's|^\* \(.*\)$| * \1|' "$file"
    sed -i 's|^\*$| *|' "$file"
  fi
done
