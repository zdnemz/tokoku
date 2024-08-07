import { googleSignIn, signIn } from '@/lib/firebase/service';
import { compare } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { z } from 'zod';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const validated = schema.safeParse(credentials);
        if (!validated.success) {
          throw new Error(validated.error.issues[0].message);
        }

        const user = await signIn(validated.data.email);
        if (!user) {
          throw new Error('Email or password wrong');
        }

        if (await compare(validated.data.password, user.password)) {
          return { email: user.email, id: user.id, username: user.username };
        }

        throw new Error('Email or password wrong');
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === 'credentials') {
        token.user = user;
      }

      if (account?.provider === 'google') {
        token.user = await googleSignIn(user as any);
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: 'auth/login',
  },
};

const schema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, { message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' }),
});

export default authOptions;
