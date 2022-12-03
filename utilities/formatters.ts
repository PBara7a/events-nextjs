export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateShortVersion(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function formatAddress(address: string): string {
  return address.replace(", ", "\n");
}
