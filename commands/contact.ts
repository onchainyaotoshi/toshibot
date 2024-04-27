import neynarClient from "../utils/neynarClient";

export default async(data: any): Promise<string>=>{
  const reply = await neynarClient.publishCast(
    process.env.SIGNER_UUID!,
    `The owner of this bot:`,
    {
      embeds: [
        {
          url: "https://frames.neynar.com/f/5311c7b4/0bd91320",
        },
      ],
      replyTo: data.hash,
    },
  );

  return reply.hash;
}