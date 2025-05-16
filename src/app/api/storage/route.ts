import { NextRequest, NextResponse } from "next/server";
// import { getUsers } from "@/services/user/getUsers";
import { PostStorageBody } from "@/types/storage/Types.storage";
import { uploadMedia } from "@/services/storage/uploadMedia";

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   try {
//     const result = await getUsers(searchParams);
//     return NextResponse.json(result, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(error, { status: 500 });
//   }
// }

export async function POST(req: NextRequest) {
  const blob = await req.blob();
  const file = new File([blob], "uploadedFile"); // Create a File object from the Blob
  const body: PostStorageBody = { file }; // Construct the PostStorageBody object
  if (!body.file) {
    return NextResponse.json({ message: "File is required" }, { status: 400 });
  }
  try {
    const storage = uploadMedia(body);
    return Response.json({ storage }, { status: 201 }); // ⬅️ Ganti res.status().json() dengan Response.json()
  } catch (error) {
    console.error("[POST USER ERROR]", error);
    return NextResponse.json("Failed to create user", { status: 500 });
  }
}
