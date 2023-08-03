import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = ({
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
        
    },
    async signIn({ account, profile, user, credentials }) {
        try {
            return true;
        } catch (err) {
            return false;
        }
    },
  },
});

export default NextAuth(authOptions);