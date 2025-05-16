import { GetUsersResponse, User } from "@/types/user/Types.users";
import { prisma } from "../../../lib/prisma";

export const getUsers = async (
  searchParams?: URLSearchParams
): Promise<GetUsersResponse> => {
  const page = parseInt(searchParams?.get("page") || "1", 10);
  const limit = parseInt(searchParams?.get("limit") || "10", 10);
  const skip = (page - 1) * limit;
  try {
    const users: User[] = await prisma.user.findMany({
      skip, // Offset
      take: limit, // Limit
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    const totalUsers = await prisma.user.count(); // Get total number of users
    const totalPages = Math.ceil(totalUsers / limit); // Calculate total pages
    return {
      data: users,
      meta: {
        totalUsers,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("[GET USERS ERROR]", error);
    throw new Error("Failed to fetch users");
  }
};
