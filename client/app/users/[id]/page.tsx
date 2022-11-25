import Link from 'next/link';
import { PageHeader } from '../../../components/Grommet';
import { ReverseAnchor } from '../../../components/ReverseAnchor';
import { UserType } from '../../../utilities/types';
import { UserForm } from './UserForm';

async function getUser(id: string) {
  const res = await fetch(`${process.env.API_URL}/users/${id}`);
  return res.json();
}

const User = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { name: string };
}) => {
  const user: UserType = await getUser(params.id);

  return (
    <>
      <PageHeader
        title={user.name || searchParams.name}
        parent={<ReverseAnchor href="/users" label="Users" />}
      />
      <UserForm user={user} />
    </>
  );
};

export default User;
