import { Text } from '@/components/elements/Text';
import { SimpleNavbar } from '@/components/fragments/Navigation';
import Auth from '@/layouts/Auth';

export default function Dashboard() {
  return (
    <>
      <SimpleNavbar />
      <Auth>
        <Text variant="heading">Dashboard</Text>
      </Auth>
    </>
  );
}
