'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Input from '@/components/elements/Input';
import Main from '@/layouts/Main';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import Button from '@/components/elements/Button';
import Divider from '@/components/elements/Divider';
import OAuth from '@/components/elements/OAuth';
import Image from 'next/image';

function LoginContent() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl') || '/';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const res = await signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
      redirect: false,
    });

    if (res?.error) {
      toast.error(res.error);
    }

    if (res?.ok) {
      toast.success('Login successful');
      router.push('/');
    }

    setLoading(false);
  }

  return (
    <section className="flex items-center flex-col w-56 max-w-[100vw]">
      <header className="text-2xl font-semibold mb-4">Welcome Back</header>
      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-center items-center flex-col gap-3"
      >
        <Input
          label="Email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="fill"
          disabled={loading}
          type="submit"
          className="w-full disabled:opacity-50"
        >
          Login
        </Button>
      </form>
      <div>
        <p className="mt-3 text-sm text-fade">
          {"Don't have an account? "}
          <Link
            href="/auth/register"
            className="text-primary-light/70 dark:text-primary-dark/70 hover:text-primary-light hover:dark:text-primary-dark font-semibold transition-all duration-200"
          >
            Register
          </Link>
        </p>
      </div>
      <Divider className="my-3">
        <span className="text-text-light/70 dark:text-text-dark/70">OR</span>
      </Divider>
      <div className="w-full flex gap-3 flex-col">
        <OAuth
          onClick={() => signIn('google', { callbackUrl, redirect: false })}
          logo={
            <Image
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              width={15}
              height={15}
              alt="Google logo"
            />
          }
        >
          Continue with Google
        </OAuth>
      </div>
    </section>
  );
}

export default function Login() {
  return (
    <Main className="flex justify-center items-center min-h-[100vh] flex-col">
      <React.Suspense fallback={<div>Loading...</div>}>
        <LoginContent />
      </React.Suspense>
    </Main>
  );
}
