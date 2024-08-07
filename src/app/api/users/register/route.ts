import type { NextRequest } from 'next/server';
import { signUp } from '@/lib/firebase/service';
import response, { responseStatus } from '@/utils/response';
import { z } from 'zod';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validated = schema.safeParse(body);
  if (!validated.success) {
    return response(400, {
      message: validated.error.issues[0].message,
    });
  }
  const { status, message } = await signUp(validated.data);

  return response(status as keyof typeof responseStatus, { message });
}

const schema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, { message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' }),
  username: z
    .string({ required_error: 'Username is required' })
    .min(1, { message: 'Username is required' })
    .min(4, { message: 'Username must be at least 4 characters' }),
});
