export async function requestData<T>(url: string): Promise<T> {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const response = await fetch(`${BASE_URL}/${url}`);

  const data = await response.json();
  return data.data;
}
