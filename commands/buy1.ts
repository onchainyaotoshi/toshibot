import neynarClient from "../utils/neynarClient";

export default async(data: any): Promise<string>=>{
  const reply = await neynarClient.publishCast(
    process.env.SIGNER_UUID!,
    `Made by: @iamng`,
    {
      embeds: [
        {
          url: "https://freddie.trade/quote/base/0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4?symbol=TOSHI&color=ffffff&bg=2050f5",
        },
      ],
      replyTo: data.hash,
    },
  );

  return reply.hash;
}