import neynarClient from "../utils/neynarClient";

export default async(data: any): Promise<string>=>{
  const reply = await neynarClient.publishCast(
    process.env.SIGNER_UUID!,
    `
/filters - To show all filter commands.
/fid
/buy
/poll - to create a poll directly on frame.
/rubik - play to earn rubik's cube.
/bmc - Tip 😺 $TOSHI frame.
/tip - Tip 😺 ($TOSHI) action.
/meow - active Meow DAO proposal.
/contact
    `,
    {
      replyTo: data.hash,
    },
  );

  return reply.hash;
}