import { Card, Grid, Heading, List } from '../../components/Grommet'

async function getUsers() {
  const res = await fetch('http://localhost:8080/users')
  return res.json()
}

const Page = async () => {
  const users: [{ id: number; name: string }] = await getUsers()

  return (
    <>
      <Grid columns={{ size: 'small' }} gap="small">
        {users.map(({ id, name }: { id: number; name: string }) => (
          <Card key={id}>{name}</Card>
        ))}
      </Grid>
    </>
  )
}

export default Page
