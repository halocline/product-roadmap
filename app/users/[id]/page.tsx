import Link from 'next/link';
import { PageHeader } from '../../../components/Grommet';
import { ReverseAnchor } from '../../../components/ReverseAnchor';

const User = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { name: string };
}) => {
  return (
    <>
      <PageHeader
        title={searchParams.name}
        parent={<ReverseAnchor href="/users" label="Users" />}
      />
      {params.id}
    </>
  );
};

export default User;
