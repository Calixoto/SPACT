import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import type { PutObjectCommandInput } from "@aws-sdk/client-s3";
import { Readable, Stream } from "stream";
import { Upload } from "@aws-sdk/lib-storage";

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default async function aws(
  file: Readable,
  Key: string
): Promise<String> {
  try {
    const Body = new Stream.PassThrough();
    file.pipe(Body);
    const fileParams: PutObjectCommandInput = {
      Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
      Key,
      Body,
      ContentType: "audio/mpeg",
    };

    const upload = new Upload({
      client,
      params: fileParams,
    });

    await upload.done();

    const command = new GetObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
      Key,
    });

    const url = await getSignedUrl(client, command, {
      expiresIn: 3600,
    });

    return url;
  } catch (error) {
    return error as string;
  }
}
