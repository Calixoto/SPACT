// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import aws from "./creatingAws";
import { generateRandomString } from "../../utils/generateRandomString";

import { connect } from "mqtt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      const url = req.body.url;
      const format = req.body.type;
      const client = connect("mqtt://broker.hivemq.com:1883");
      if (!ytdl.validateID(url) && !ytdl.validateURL(url)) {
        return res
          .status(400)
          .json({ success: false, error: "No valid YouTube Id!" });
      }
      if (format === "mp3") {
        res.setHeader("content-type", "audio/mpeg");
        const file = ytdl(url, { format, filter: "audioonly" });
        const Key = `${generateRandomString(8)}.mp3`;
        const urlSigned = await aws(file, Key);
        client.publish("spact/download", urlSigned as string);
        return res.send({ success: true, data: "Upload done", urlSigned });
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}
