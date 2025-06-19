import { NextRequest, NextResponse } from "next/server";
import { getMedia } from "@/services/storage/getMedia";
import { Media } from "@/types/storage/Types.storage";
// import { createMedia } from "@/services/media/createMedia";
// import { PostMediasBody } from "@/types/media/Types.medias";

type Params = Promise<{ id: string }>;
export async function GET(
  req: NextRequest,
  segmentData: { params: Params }
): Promise<NextResponse<{ data: Media } | { message: string }>> {
  const params = await segmentData.params;
  const { id } = params;
  try {
    const result = await getMedia(id);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
