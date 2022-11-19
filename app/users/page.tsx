import Link from 'next/link';
import {
  Anchor,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  PageHeader,
  Text,
} from '../../components/Grommet';
import { NavCard } from '../../components/NavCard';
import { ReverseAnchor } from '../../components/ReverseAnchor';

async function getUsers() {
  const res = await fetch('http://localhost:8080/users');
  return res.json();
}

const Page = async () => {
  const users: [{ id: number; name: string; birthdate: string }] =
    await getUsers();

  return (
    <>
      <PageHeader
        title="Users"
        parent={<ReverseAnchor href="/" label="Home" />}
      />
      <Grid columns={{ size: 'small' }} gap="small">
        {users.map(
          (
            {
              id,
              name,
              birthdate,
            }: {
              id: number;
              name: string;
              birthdate: string;
            },
            index
          ) => (
            <NavCard key={id} index={index} href={`/users/${id}?name=${name}`}>
              <CardHeader>
                <Heading level={2} size="small" margin="none">
                  {name}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>{birthdate}</Text>
              </CardBody>
            </NavCard>
          )
        )}
      </Grid>
    </>
  );
};

export default Page;
