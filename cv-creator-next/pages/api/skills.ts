// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function profileSkills(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.LINKDAPI_API_KEY;
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "API key not found in environment variables" });
  }
  const { urn } = req.query;

  const response = await fetch(
    `https://linkdapi.com/api/v1/profile/skills?urn=${urn}`,
    {
      method: "GET",
      headers: {
        "X-linkdapi-apikey": apiKey,
      },
    }
  );

  const textData = await response.text();
  res.status(200).send(textData);
}
