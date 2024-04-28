import neynarClient from "../utils/neynarClient";

export default async(data: any): Promise<string>=>{
  const reply = await neynarClient.publishCast(
    process.env.SIGNER_UUID!,
    `Made by: @complexlity`,
    {
      embeds: [
        {
          url: `https://bmacf.vercel.app/api/${data.author.username}`,
        },
      ],
      replyTo: data.hash,
    },
  );

  return reply.hash;
}