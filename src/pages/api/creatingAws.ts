import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import type { PutObjectCommandInput } from "@aws-sdk/client-s3";
import { Readable, Stream } from "stream";
import { generateRandomString } from "../../utils/generateRandomString";

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default async function aws(file: Readable) {
  try {
    const body = new Stream.PassThrough();
    const fileParams: PutObjectCommandInput = {
      Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
      Key: `${generateRandomString(8)}.mp3`,
      ContentType: "audio/mpeg",
      Body: file,
      ACL: "spact",
    };

    console.log(fileParams);

    await client.send(new PutObjectCommand(fileParams));

    return "uploaded";
  } catch (error) {
    return error;
  }
}
