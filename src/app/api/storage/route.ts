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
  const formData = await req.formData();
  const file = formData.get("file") as File;
  console.log("file", file);
  const body: PostStorageBody = {
    file: file,
  };
  if (!body) {
    return NextResponse.json({ message: "File is required" }, { status: 400 });
  }
  try {
    const result = await uploadMedia(body); // Pass the FormData directly
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("[POST STORAGE ERROR]", error);
    return NextResponse.json(
      { message: "Failed to upload file" },
      { status: 500 }
    );
  }
}
