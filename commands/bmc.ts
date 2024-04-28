import neynarClient from "../utils/neynarClient";

export default async(data: any): Promise<string>=>{
  const reply = await neynarClient.publishCast(
    process.env.SIGNER_UUID!,
    `Made by: @yaotoshi`,
    {
      embeds: [
        {
          // url: `https://bmacf.vercel.app/api/${data.author.username}`,
          url: `https://tip-toshi-v2.replit.app`,
        },
      ],
      replyTo: data.hash,
    },
  );

  return reply.hash;
}