export function isItemActive(
  itemId: string,
  pathname: string,
  activeSection: string,
) {
  if (itemId === "gallery") return pathname === "/gallery";
  return pathname === "/" && activeSection === itemId;
}
