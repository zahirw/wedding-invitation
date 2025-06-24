import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  debug: true,
  callbacks: {
    async signIn({ profile }) {
      // Only allow sign in for users with email addresses ending with "yourdomain.com"\
      console.log("aaaaaaaaaaaaaaa", profile);
      return true;
      // return profile?.email?.endsWith("@yourdomain.com")
    },
  },
});
