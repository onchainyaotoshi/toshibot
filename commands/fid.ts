import neynarClient from "../utils/neynarClient";

export default async(data: any): Promise<string>=>{
  const reply = await neynarClient.publishCast(
    process.env.SIGNER_UUID!,
    `Here's your fid: ${data.author.fid}`,
    {
      replyTo: data.hash,
    },
  );

  return reply.hash;
}