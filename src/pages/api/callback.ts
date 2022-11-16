// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";

type Data = {
  name: string;
};

const client_id = "349e5de246bb4fd0af1a67344230008b";
const redirect_uri = "http://localhost:3000";
const client_secret = "c9ba6cc477ef4ca9bf894c63c4b81dc9";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect("/#" + stringify({ error: "state_mismatch" }));
  } else {
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };
  }
}
