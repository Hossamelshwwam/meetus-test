import nextAuth from "@/utils/nextAuthProvider";

import NextAuth from "next-auth";

const handler = NextAuth(nextAuth);

export { handler as GET, handler as POST };
