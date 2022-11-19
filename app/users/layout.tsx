import Link from 'next/link'
import { Anchor, Page, PageContent, PageHeader } from '../../components/Grommet'

const UsersLayout = ({ children }: { children: React.ReactNode }) => (
  <Page>
    <PageContent>
      <PageHeader
        title="Users"
        parent={
          <Link href="/">
            <Anchor label="Home" />
          </Link>
        }
      />
      {children}
    </PageContent>
  </Page>
)

export default UsersLayout
