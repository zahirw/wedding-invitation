// pages/api/users/index.ts
// import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { UserBody } from "./Types.users";

export async function GET(req: NextRequest) {
  if (req.method === "GET") {
    const user = await prisma.user.findMany();
    return NextResponse.json(user, { status: 200 });
  }
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}

export async function POST(req: NextRequest) {
  try {
    const body: UserBody = await req.json(); // ⬅️ Ambil body dari request
    const { name, email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return Response.json(user, { status: 201 }); // ⬅️ Ganti res.status().json() dengan Response.json()
  } catch (error) {
    console.error("[POST USER ERROR]", error);
    return new Response("Failed to create user", { status: 500 });
  }
}
