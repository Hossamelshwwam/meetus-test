import { type AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const nextAuth: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          const body = req.body ? JSON.parse(req?.body.body) : null;

          if (!body) {
            throw new Error("Missing credentials");
          }

          return body;
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token as any;
      }
      return session;
    },
  },
};

export default nextAuth;
