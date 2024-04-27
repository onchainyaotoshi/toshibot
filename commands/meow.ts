import neynarClient from "../utils/neynarClient";

export default async(data: any): Promise<string>=>{
  const reply = await neynarClient.publishCast(
    process.env.SIGNER_UUID!,
    `Here's the link of active meow DAO proposal`,
    {
      embeds: [
        {
          url:"https://poll.cool/meow",
        },
      ],
      replyTo: data.hash,
    },
  );

  return reply.hash;
}