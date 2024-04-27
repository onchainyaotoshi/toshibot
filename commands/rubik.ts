import neynarClient from "../utils/neynarClient";

export default async(data: any): Promise<string>=>{
  const reply = await neynarClient.publishCast(
    process.env.SIGNER_UUID!,
    `Made by: @yaotoshi`,
    {
      embeds: [
        {
          url: "coral-app-9pbpd.ondigitalocean.app/frame",
        },
      ],
      replyTo: data.hash,
    },
  );

  return reply.hash;
}