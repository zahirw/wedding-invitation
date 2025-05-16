import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/services/user/getUser";
import { User } from "@/types/user/Types.users";
// import { createUser } from "@/services/user/createUser";
// import { PostUsersBody } from "@/types/user/Types.users";

type Params = Promise<{ id: string }>;
export async function GET(
  req: NextRequest,
  segmentData: { params: Params }
): Promise<NextResponse<{ data: User } | { message: string }>> {
  const params = await segmentData.params;
  const { id } = params;
  try {
    const result = await getUser(id);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

// export async function POST(req: NextRequest) {
//   const body: PostUsersBody = await req.json();
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
//     const user = createUser(body);
//     return Response.json({ user }, { status: 201 }); // ⬅️ Ganti res.status().json() dengan Response.json()
//   } catch (error) {
//     console.error("[POST USER ERROR]", error);
//     return NextResponse.json("Failed to create user", { status: 500 });
//   }
// }
