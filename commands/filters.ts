import neynarClient from "../utils/neynarClient";

export default async(data: any): Promise<string>=>{
  const reply = await neynarClient.publishCast(
    process.env.SIGNER_UUID!,
    `
/filters - To show all filter commands.
/fid - to show your fid.
/buy - to buy $TOSHI directly on frame.
/poll - to create a poll directly on frame.
/rubik - play to earn rubik's cube.
/bmc - receive $TOSHI directly on frame.
/tip - Tip 😺 ($TOSHI) action.
/meow - active Meow DAO proposal.
/dev - about the dev.
    `,
    {
      replyTo: data.hash,
    },
  );

  return reply.hash;
}