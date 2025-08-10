export function getLocaleFromStorage(): string {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("locale") ?? "en";
}
