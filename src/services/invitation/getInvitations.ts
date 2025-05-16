import {
  GetInvitationsResponse,
  Invitation,
} from "@/types/invitation/Types.invitation";
import { prisma } from "../../../lib/prisma";

export const getInvitations = async (
  searchParams?: URLSearchParams
): Promise<GetInvitationsResponse> => {
  const page = parseInt(searchParams?.get("page") || "1", 10);
  const limit = parseInt(searchParams?.get("limit") || "10", 10);
  const skip = (page - 1) * limit;
  try {
    const invitations: Invitation[] = await prisma.invitation.findMany({
      skip, // Offset
      take: limit, // Limit
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

    const totalInvitations = await prisma.invitation.count(); // Get total number of invitations
    const totalPages = Math.ceil(totalInvitations / limit); // Calculate total pages
    return {
      data: invitations,
      meta: {
        totalInvitations,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("[GET USERS ERROR]", error);
    throw new Error("Failed to fetch invitations");
  }
};
