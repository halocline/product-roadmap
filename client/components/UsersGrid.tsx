'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  Text,
} from './Grommet';
import { Add } from './grommet-icons';
import { NavCard } from './NavCard';
import { UserType } from '../utilities/types';

export const UsersGrid = ({ users: usersProp }: { users: [UserType] }) => {
  const [users, setUsers] = useState<UserType[]>(usersProp);
  const [active, setActive] = useState<number | null>(null);
  const [target, setTarget] = useState<number | null>(null);

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
          <Button kind="round" a11yTitle="Add user" icon={<Add />} />
        </Box>
      </Grid>
    </>
  );
};
