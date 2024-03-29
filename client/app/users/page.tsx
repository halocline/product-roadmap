import { PageHeader } from '../../components/Grommet';
import { ReverseAnchor } from '../../components/ReverseAnchor';
import { UsersGrid } from './UsersGrid';
import { UserType } from '../../utilities/types';

async function getUsers() {
  const res = await fetch(`${process.env.API_URL}/users`);
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
