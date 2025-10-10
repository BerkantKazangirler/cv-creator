import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.LINKDAPI_API_KEY;
  const baseUrl = process.env.NEXT_BASE_URL;

  if (!apiKey || !baseUrl) {
    return res.status(500).json({
      error:
        "Missing environment variables (LINKDAPI_API_KEY or NEXT_BASE_URL)",
    });
  }

  const { endpoint, ...query } = req.query;

  if (!endpoint) {
    return res.status(400).json({ error: "Missing 'endpoint' parameter" });
  }

  const queryString = new URLSearchParams(
    query as Record<string, string>
  ).toString();

  const targetUrl = `${baseUrl}/${endpoint}${
    queryString ? `?${queryString}` : ""
  }`;

  console.log("➡️ Fetching:", targetUrl);

  try {
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "X-linkdapi-apikey": apiKey,
      },
    });

    const textData = await response.text();

    try {
      const json = JSON.parse(textData);
      return res.status(response.status).json(json);
    } catch {
      return res.status(response.status).send(textData);
    }
  } catch (error: any) {
    console.error("❌ Fetch error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
}
