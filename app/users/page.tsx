import Link from 'next/link';
import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  Text,
} from '../../components/Grommet';

async function getUsers() {
  const res = await fetch('http://localhost:8080/users');
  return res.json();
}

const Page = async () => {
  const users: [{ id: number; name: string; birthdate: string }] =
    await getUsers();

  return (
    <>
      <Grid columns={{ size: 'small' }} gap="small">
        {users.map(
          ({
            id,
            name,
            birthdate,
          }: {
            id: number;
            name: string;
            birthdate: string;
          }) => (
            <Link key={id} href={`/users/${id}`}>
              <Card as="a">
                <CardHeader>
                  <Heading level={2} size="small" margin="none">
                    {name}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>{birthdate}</Text>
                </CardBody>
              </Card>
            </Link>
          )
        )}
      </Grid>
    </>
  );
};

export default Page;
