import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextApiRequest, NextApiResponse } from "next";

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { Key } = req.query;
  if (!Key) return res.status(400).json({ success: false, error: "No Key" });

  const command = new GetObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
    Key: Key as string,
  });

  const url = await getSignedUrl(client, command, {
    expiresIn: 3600,
  });

  return res.send(url);
}
