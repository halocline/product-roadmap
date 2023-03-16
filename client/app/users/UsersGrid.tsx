'use client';

import { useState } from 'react';
import { Box, Button, Layer } from '../../components/Grommet';
import { Add } from '../../components/grommet-icons';
import { Grid } from '../../components/Grid';
import { CreateUser } from './CreateUser';
import { UserCard } from './UserCard';
import { UserType } from '../../utilities/types';
import { API_URL } from '../../utilities/client-side-config';

async function getUsers() {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
}

export const UsersGrid = ({ users: usersProp }: { users: [UserType] }) => {
  const [users, setUsers] = useState<UserType[]>(usersProp);
  const [addUserLayer, setAddUserLayer] = useState<boolean>(false);

  const handleClose = () => {
    setAddUserLayer(false);
  };

  const onCreate = async () => {
    setAddUserLayer(false);
    const nextUsers = await getUsers();
    setUsers(nextUsers);
  };

  return (
    <>
      <Grid data={users} setData={setUsers}>
        {users.map((user: UserType, index) => {
          const { id, name } = user;
          return (
            <UserCard
              key={id}
              href={`/users/${id}?name=${name}`}
              index={index}
              user={user}
            />
          );
        })}
        <Box fill align="start" justify="end">
          <Button
            kind="round"
            a11yTitle="Add user"
            icon={<Add />}
            onClick={() => setAddUserLayer(true)}
          />
        </Box>
      </Grid>
      {addUserLayer && (
        <Layer full>
          <section>
            <CreateUser onCancel={handleClose} onCreate={onCreate} />
          </section>
        </Layer>
      )}
    </>
  );
};
