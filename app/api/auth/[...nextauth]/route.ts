import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { request } from "../../../../utils";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // const user = await request(
        //   "http://localhost:3002/auth/login",
        //   {
        //     username: "john",
        //     password: "123456",
        //   },
        //   "POST"
        // );
        let user: any = null;
        try {
          user = await fetch("http://localhost:3002/auth/login", {
            method: "post",
            body: JSON.stringify({
              username: "john",
              password: "123456",
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => res.json());
          // .then((res) => {});
        } catch {
          return null;
        }
        console.log("user", user);
        return user;
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token, user }) {
  //     session.user = token as any;
  //     return session;
  //   },
  // },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
