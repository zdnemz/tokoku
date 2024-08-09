import authOptions from '@/lib/auth/nextAuth';
import { retrieveDataById } from '@/lib/firebase/service';
import { Session } from '@/types/lib';
import response from '@/utils/response';
import { Timestamp } from 'firebase/firestore';
import { getServerSession } from 'next-auth';

export async function GET() {
  const session = (await getServerSession(authOptions)) as Session | null;

  if (!session) {
    return response(401, {
      message: "You don't have permission to access this resource",
    });
  }

  const user = await retrieveDataById('users', session.user.id);

  if (!user) {
    return response(404, {
      message: 'User not found',
    });
  }

  // remove password from user
  const { password, role, updatedAt, createdAt, ...data } = user;
  const updated = new Timestamp(
    updatedAt.seconds,
    updatedAt.nanoseconds,
  ).toDate();
  const created = new Timestamp(
    createdAt.seconds,
    createdAt.nanoseconds,
  ).toDate();

  return response(200, {
    ...data,
    updatedAt: updated,
    createdAt: created,
  });
}
