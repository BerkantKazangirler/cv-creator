// export async function requestData<T>(url: string, params: string): Promise<T> {
//   return fetch(url + params, {
//     method: "GET",
//     headers: {
//       "X-linkdapi-apikey": import.meta.env.VITE_LINKDAPI_TOKEN_BK,
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     });
// }

// export async function requestData<T>(params: string): Promise<T> {
//   const response = await fetch(
//     `https://linkedin-proxy.berkantkazangirler.workers.dev/?username=${params}`
//   );

//   if (!response.ok) {
//     throw new Error("Profile not found");
//   }

//   const data = await response.json();
//   return data;
// }

export async function requestData<T>(url: string, params: string): Promise<T> {
  const response = await fetch(`http://localhost:3000/api/profile`);

  if (!response.ok) {
    throw new Error("Profile not found");
  }

  const data = await response.json();
  return data.data;
}
