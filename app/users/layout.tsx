import Link from 'next/link';
import {
  Anchor,
  Page,
  PageContent,
  PageHeader,
  Text,
} from '../../components/Grommet';

const UsersLayout = ({ children }: { children: React.ReactNode }) => (
  <Page>
    <PageContent>{children}</PageContent>
  </Page>
);

export default UsersLayout;
