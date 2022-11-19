import Link from 'next/link';
import { Anchor, PageHeader, Text } from '../../../components/Grommet';
import { FormPrevious } from '../../../components/grommet-icons';

const User = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { name: string };
}) => {
  return (
    <>
      <PageHeader
        title={searchParams.name}
        parent={
          <Link href="/users">
            <Anchor
              as={Text}
              label="Users"
              icon={<FormPrevious />}
              gap="hair"
            />
          </Link>
        }
      />
      {params.id}
    </>
  );
};

export default User;
