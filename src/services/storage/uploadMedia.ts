import {
  PostStorageResponse,
  PostStorageBody,
} from "@/types/storage/Types.storage";
import { prisma } from "../../../lib/prisma";
import { supabase } from "../../../lib/supabase";

export const uploadMedia = async (
  body: PostStorageBody
): Promise<PostStorageResponse> => {
  try {
    console.log("body", body);
    const { file } = body;

    const { data, error } = await supabase.storage
      .from("wedding-invitation")
      .upload(`wedding/${file.name}`, file, {
        contentType: file.type,
      });
    console.log("error", error);
    if (error) throw new Error(error.message);

    const publicUrl = supabase.storage
      .from("wedding-invitation")
      .getPublicUrl(data.path).data.publicUrl;

    const media = await prisma.media.create({
      data: {
        url: publicUrl,
        type: file.type.startsWith("image") ? "image" : "video",
        description: "Uploaded via Supabase Storage",
      },
    });
    console.log("media", media);
    return {
      data: {
        status: "success",
        message: "File uploaded successfully",
        url: publicUrl,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to upload file");
  }
};
