import Link from 'next/link';
import { PageHeader } from '../../components/Grommet';
import { ReverseAnchor } from '../../components/ReverseAnchor';
import { UsersGrid } from '../../components/UsersGrid';
import { UserType } from '../../utilities/types';

async function getUsers() {
  const res = await fetch('http://localhost:8080/users');
  return res.json();
}

const Page = async () => {
  const users: [UserType] = await getUsers();

  return (
    <>
      <PageHeader
        title="Users"
        parent={<ReverseAnchor href="/" label="Home" />}
      />
      <UsersGrid users={users} />
    </>
  );
};

export default Page;
