import type { Session as NextAuthSession } from 'next-auth';

export interface Session {
  user: {
    email: string;
    id: string;
    username: string;
  };
}

export interface User {
  email: string;
  password: string;
  username: string;
  gender: 'male' | 'female' | 'unknown';
  role: 'user' | 'admin';
  avatar: string | null;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserDocs extends User {
  id: string;
}

export interface JWTDecoded {
  id: string;
  username: string;
  email: string;
}

export interface Session extends NextAuthSession {
  user: JWTDecoded;
}
