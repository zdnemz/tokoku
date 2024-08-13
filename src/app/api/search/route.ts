import authOptions from '@/lib/auth/nextAuth';
import redis from '@/lib/redis/init';
import { Session } from '@/types/lib';
import response from '@/utils/response';
import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get('q');

  if (!query) {
    return response(400, {
      message: 'Query is required',
    });
  }

  const session = (await getServerSession(authOptions)) as Session | null;
  if (session) {
    const userId = session.user.id;
    const timestamp = Date.now();

    await redis.zadd(`user:${userId}:searches`, timestamp, query);
  }

  return response(200);
}
