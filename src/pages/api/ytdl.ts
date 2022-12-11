// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import aws from "./creatingAws";
import { generateRandomString } from "../../utils/generateRandomString";

import { connect } from "mqtt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      const { url, type: format } = req.body;

      if (!ytdl.validateID(url) && !ytdl.validateURL(url)) {
        return res
          .status(400)
          .json({ success: false, error: "No valid YouTube Id!" });
      }

      const video = await prisma.file.findFirst({
        where: {
          videoId: url,
        },
      });

      const client = connect("mqtt://broker.hivemq.com:1883");

      if (!video) {
        if (format === "mp3") {
          res.setHeader("content-type", "audio/mpeg");
          const file = ytdl(url, { format, filter: "audioonly" });
          const Key = `${generateRandomString(8)}.mp3`;
          const urlSigned = await aws({ file, Key });
          client.publish("spact/download", Key);
          await prisma.file.create({
            data: {
              videoId: url,
              path: Key,
            },
          });
          return res.send({ success: true, data: "Download done", urlSigned });
        }
      } else {
        res.setHeader("content-type", "audio/mpeg");
        const urlSigned = await aws({ path: video.path });
        client.publish("spact/download", video.path);
        return res.send({ success: true, data: "Get from bd done", urlSigned });
      }
    } catch (err) {
      console.log("error", err);
      return res.status(500).send({ success: false, error: err });
    }
  }
}
