import Link from 'next/link';
import {
  NameValueList,
  NameValuePair,
  PageHeader,
  Text,
} from '../../../components/Grommet';
import { ReverseAnchor } from '../../../components/ReverseAnchor';
import { UserType } from '../../../utilities/types';

async function getUser(id: string) {
  const res = await fetch(`http://localhost:8080/users/${id}`);
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
        title={searchParams.name}
        parent={<ReverseAnchor href="/users" label="Users" />}
      />
      <NameValueList>
        {Object.entries(user).map(([key, value]) => {
          console.log(key, value);

          return (
            <NameValuePair key={key} name={key}>
              <Text>{value}</Text>
            </NameValuePair>
          );
        })}
      </NameValueList>
    </>
  );
};

export default User;
