'use client';

import SimpleNavbar from '@/components/fragments/Navigation/SimpleNavbar';
import { Avatar, AvatarSkeleton } from '@/components/fragments/Profile';
import Auth from '@/layouts/Auth';
import { User } from '@/types/lib';
import useFetch from '@/hooks/useFetch';
import { Text, TextSkeleton } from '@/components/elements/Text';

export default function Profile() {
  const {
    response: { data },
    loading,
  } = useFetch('/api/users/me', 'get');
  const user = data as User;

  return (
    <>
      <SimpleNavbar />
      <Auth>
        <Text variant="heading">Profile</Text>
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          {loading ? <AvatarSkeleton /> : <Avatar src={user?.avatar || ''} />}
          <div className="flex gap-2 justify-center items-center flex-col">
            {loading ? (
              <TextSkeleton className="w-32" variant="heading" />
            ) : (
              <>
                <Text variant="heading">{user?.username}</Text>
                {/* {user?.verified && <Verified />} */}
              </>
            )}
            {loading ? (
              <TextSkeleton className="w-32" />
            ) : (
              <Text className="text-text-light/70 dark:text-text-dark/70">
                {new Date(user?.createdAt).toLocaleDateString()}
              </Text>
            )}
          </div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </Auth>
    </>
  );
}
