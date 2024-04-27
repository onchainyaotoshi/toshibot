import neynarClient from "../utils/neynarClient";

export default async(data: any): Promise<string>=>{
  const reply = await neynarClient.publishCast(
    process.env.SIGNER_UUID!,
    `Made by: @yaotoshi`,
    {
      embeds: [
        {
          url: "https://tip-toshi.replit.app",
        },
      ],
      replyTo: data.hash,
    },
  );

  return reply.hash;
}