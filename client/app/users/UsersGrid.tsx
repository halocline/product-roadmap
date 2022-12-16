'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  CardBody,
  CardHeader,
  Header,
  Heading,
  Layer,
  Text,
} from '../../components/Grommet';
import { Add, FormClose } from '../../components/grommet-icons';
import { Grid } from '../../components/Grid';
import { NavCard } from '../../components/NavCard';
import { UserType } from '../../utilities/types';

export const UsersGrid = ({ users: usersProp }: { users: [UserType] }) => {
  const [users, setUsers] = useState<UserType[]>(usersProp);
  const [addUserLayer, setAddUserLayer] = useState<boolean>(false);

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
      {addUserLayer && <CreateUser onClose={() => setAddUserLayer(false)} />}
    </>
  );
};

const UserCard = ({
  href,
  index,
  user,
  ...rest
}: {
  href: string;
  index: number;
  user: UserType;
}) => {
  const { name, birthdate } = user;

  return (
    <NavCard href={href} index={index} {...rest}>
      <CardHeader>
        <Heading level={2} size="small" margin="none">
          {name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{birthdate}</Text>
      </CardBody>
    </NavCard>
  );
};

const CreateUser = ({ onClose }: { onClose: () => void }) => {
  return (
    <Layer full>
      <Header>
        <></>
        <Button
          a11yTitle="Close add user layer"
          icon={<FormClose />}
          onClick={() => onClose()}
        />
      </Header>
      <Box direction="row" gap="small">
        <Button
          label="Create user"
          primary
          onClick={() => {
            onClose();
          }}
        />
        <Button
          label="Cancel"
          onClick={() => {
            onClose();
          }}
        />
      </Box>
    </Layer>
  );
};
