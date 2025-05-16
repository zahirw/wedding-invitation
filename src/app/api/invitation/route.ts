import { NextRequest, NextResponse } from "next/server";
import { getInvitations } from "@/services/invitation/getInvitations";
import { createInvitation } from "@/services/invitation/createInvitation";
import { PostInvitationsBody } from "@/types/invitation/Types.invitation";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  try {
    const result = await getInvitations(searchParams);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body: PostInvitationsBody = await req.json();

  // List of required fields
  const requiredFields = [
    "groomName",
    "brideName",
    "slug",
    "venue",
    "template",
    "date",
    "userId",
  ];

  // Check for missing fields
  for (const field of requiredFields) {
    if (!body[field as keyof PostInvitationsBody]) {
      return NextResponse.json(
        { message: `${field} is required` },
        { status: 400 }
      );
    }
  }
  try {
    const invitation = createInvitation(body);
    return Response.json({ invitation }, { status: 201 }); // ⬅️ Ganti res.status().json() dengan Response.json()
  } catch (error) {
    console.error("[POST USER ERROR]", error);
    return NextResponse.json("Failed to create invitation", { status: 500 });
  }
}
