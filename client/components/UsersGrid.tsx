'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  CardBody,
  CardHeader,
  Grid,
  Header,
  Heading,
  Layer,
  Text,
} from './Grommet';
import { Add, FormClose } from './grommet-icons';
import { NavCard } from './NavCard';
import { UserType } from '../utilities/types';

export const UsersGrid = ({ users: usersProp }: { users: [UserType] }) => {
  const [users, setUsers] = useState<UserType[]>(usersProp);
  const [active, setActive] = useState<number | null>(null);
  const [target, setTarget] = useState<number | null>(null);
  const [addUserLayer, setAddUserLayer] = useState<boolean>(false);

  const onDragStart = (e: React.SyntheticEvent, i: number) => {
    // e.preventDefault();
    setActive(i);
  };
  const onDragEnter = (e: React.SyntheticEvent, i: number) => {
    e.preventDefault();
    setTarget(i);
  };

  const onDragOver = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const onDrop = (e: React.SyntheticEvent) => {
    if (active !== null && target !== null) {
      const nextUsers = [...users];
      nextUsers.splice(active, 1);
      nextUsers.splice(target, 0, users[active]);
      setUsers(nextUsers);
    }
  };

  return (
    <>
      <Grid columns={{ size: 'small' }} gap="small">
        {users.map(({ id, name, birthdate }: UserType, index) => (
          <NavCard
            key={id}
            index={index}
            href={`/users/${id}?name=${name}`}
            draggable
            onDragStart={(event) => onDragStart(event, index)}
            onDragEnter={(event) => onDragEnter(event, index)}
            onDragOver={(event) => onDragOver(event)}
            onDrop={(event) => onDrop(event)}
          >
            <CardHeader>
              <Heading level={2} size="small" margin="none">
                {name}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>{birthdate}</Text>
            </CardBody>
          </NavCard>
        ))}
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
