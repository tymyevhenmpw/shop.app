import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/models/user.model";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {

 

  providers: [
    GoogleProvider({
      clientId: '767104947000-v5q3202gojgfrukrqbbv3ncq28rfiqfs.apps.googleusercontent.com',
      clientSecret: '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',
      profile(profile:any){
        return{
          ...profile,
          role: 'User',
        }
      },
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password }:any = credentials;

        try {
          await connectToDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: 'siodffjisdhjkfdsiojiojhiuoho',
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    // If you want to use the role in client components
    async session({ session, token }) {
        if (session?.user) session.user.role = token.role
        return session
    },
    async signIn({ user, account }:any) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectToDB();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });

            if (res.ok) {
        
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },
};


