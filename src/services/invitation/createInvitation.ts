import {
  PostInvitationResponse,
  PostInvitationsBody,
} from "@/types/invitation/Types.invitation";
import { prisma } from "../../../lib/prisma";

export const createInvitation = async (
  body: PostInvitationsBody
): Promise<PostInvitationResponse> => {
  try {
    const { groomName, brideName, slug, venue, template, date, userId } = body;

    const invitation = await prisma.invitation.create({
      data: { groomName, brideName, slug, venue, template, date, userId },
      select: {
        id: true,
        slug: true,
        groomName: true,
        brideName: true,
        date: true,
        venue: true,
        template: true,
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
    return { invitation };
  } catch (error) {
    console.error("[POST USER ERROR]", error);
    throw new Error("Failed to create invitation");
  }
};
