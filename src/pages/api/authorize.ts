// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";
import { generateRandomString } from "../../utils/generateRandomString";

type Data = {
  name: string;
};

const client_id = "349e5de246bb4fd0af1a67344230008b";
const redirect_uri = "http://localhost:3000";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      stringify({
        client_id: client_id,
        response_type: "code",
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
}
