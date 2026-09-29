export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV ? 'http://localhost:8080' : '')
).replace(/\/$/, '')

export async function fetchApi(path, options) {
  if (!API_BASE_URL) {
    throw new Error('Backend API is not configured')
  }

  const response = await fetch(`${API_BASE_URL}${path}`, options)
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }

  return response.json()
}