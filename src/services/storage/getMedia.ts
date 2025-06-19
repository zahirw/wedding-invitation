import { Media } from "@/types/storage/Types.storage";
import { prisma } from "../../../lib/prisma";

export const getMedia = async (id: string): Promise<{ data: Media }> => {
  try {
    const media = await prisma.media.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        url: true,
        type: true,
        description: true,
        createdAt: true,
      },
    });

    if (!media) {
      throw new Error("Media not found");
    }

    return {
      data: media as Media,
    };
  } catch (error) {
    console.error("[GET MEDIA ERROR]", error);
    throw new Error("Failed to fetch medias");
  }
};
