import { CardBody, CardHeader, Heading, Text } from '../../components/Grommet';
import { NavCard } from '../../components/NavCard';
import { UserType } from '../../utilities/types';

export const UserCard = ({
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
