export async function fetchInventory() {
  const response = await fetch('/api/inventory'); // Your Azure Function endpoint
  return await response.json();
}
