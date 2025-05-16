import { Invitation } from "@/types/invitation/Types.invitation";
import { prisma } from "../../../lib/prisma";

export const getInvitation = async (
  id: string
): Promise<{ data: Invitation }> => {
  try {
    const invitation = await prisma.invitation.findUnique({
      where: {
        id,
      },
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

    if (!invitation) {
      throw new Error("Invitation not found");
    }
    if (!invitation) {
      throw new Error("User not found");
    }
    return {
      data: invitation as Invitation,
    };
  } catch (error) {
    console.error("[GET USERS ERROR]", error);
    throw new Error("Failed to fetch invitations");
  }
};
