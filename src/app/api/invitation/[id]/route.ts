import { NextRequest, NextResponse } from "next/server";
import { getInvitation } from "@/services/invitation/getInvitation";
// import { createInvitation } from "@/services/invitation/createInvitation";
// import { PostInvitationsBody } from "@/types/invitation/Types.invitations";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  try {
    const result = await getInvitation(id);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

// export async function POST(req: NextRequest) {
//   const body: PostInvitationsBody = await req.json();
//   if (!body.name) {
//     return NextResponse.json({ message: "Name is required" }, { status: 400 });
//   }
//   if (!body.email) {
//     return NextResponse.json({ message: "Email is required" }, { status: 400 });
//   }
//   if (!body.password) {
//     return NextResponse.json(
//       { message: "Password is required" },
//       { status: 400 }
//     );
//   }
//   try {
//     const invitation = createInvitation(body);
//     return Response.json({ invitation }, { status: 201 }); // ⬅️ Ganti res.status().json() dengan Response.json()
//   } catch (error) {
//     console.error("[POST USER ERROR]", error);
//     return NextResponse.json("Failed to create invitation", { status: 500 });
//   }
// }
