// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function profile(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.LINKDAPI_API_KEY;
  if (!apiKey) {
    return res.status(500).send("API key not found in environment variables");
  }
  const response = await fetch(
    "https://linkdapi.com/api/v1/profile/overview?username=berkant-kazangirler",
    {
      method: "GET",
      headers: {
        "X-linkdapi-apikey": apiKey,
      },
    }
  );

  // JSON'a çevirmek yerine metin (string) olarak alıyoruz:
  const textData = await response.text();

  // ve bunu doğrudan döndürüyoruz
  res.status(200).send(textData);
}
