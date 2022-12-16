import { Page, PageContent } from '../../components/Grommet';

const UsersLayout = ({ children }: { children: React.ReactNode }) => (
  <Page>
    <PageContent>{children}</PageContent>
  </Page>
);

export default UsersLayout;
