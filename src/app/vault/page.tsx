import { scanVault } from "@/lib/vault";
import { VaultExplorer } from "@/components/vault/VaultExplorer";

export default function VaultPage() {
  const tree = scanVault();

  return <VaultExplorer tree={tree} />;
}
