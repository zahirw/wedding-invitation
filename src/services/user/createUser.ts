import { PostUserResponse, PostUsersBody } from "@/types/user/Types.users";
import { prisma } from "../../../lib/prisma";
import bcrypt from "bcrypt";

export const createUser = async (
  body: PostUsersBody
): Promise<PostUserResponse> => {
  try {
    const { name, email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return { user };
  } catch (error) {
    console.error("[POST USER ERROR]", error);
    throw new Error("Failed to create user");
  }
};
