import neynarClient from "./utils/neynarClient";
import { NeynarFrameCreationRequest } from "@neynar/nodejs-sdk/build/neynar-api/v2";
import express from "express";

import filter from './commands/index';

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json

app.get("/", (req, res) => {
  console.log("it's working");
  return res.send("it's working!");
});

app.post("/", async (req, res) => {
  try {
    const hash = await filter(req.body.data);

    return res.status(200).send(`Replied to the cast with hash: ${hash}`);
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
