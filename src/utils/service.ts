const BASE_URL = 'https://catalog-api-delta.vercel.app/api';

function request<T>(
  url: string,
  method: string = 'GET',
): Promise<T> {
  return fetch(BASE_URL + url)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
}

export const service = {
  get: <T>(url: string) => request<T>(url),
}