import { User } from "@/types/user/Types.users";
import { prisma } from "../../../lib/prisma";

export const getUser = async (id: string): Promise<{ data: User }> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return {
      data: user as User,
    };
  } catch (error) {
    console.error("[GET USERS ERROR]", error);
    throw new Error("Failed to fetch users");
  }
};
