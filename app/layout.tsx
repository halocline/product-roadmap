import './globals.css';
import { Footer, Grommet, Header, Main } from '../components/Grommet';
import { hpe } from '../themes/hpe';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Grommet theme={hpe} themeMode="dark" full>
          <Header background="background-contrast">My header</Header>
          <Main>{children}</Main>
          <Footer background="background-contrast">My footer</Footer>
        </Grommet>
      </body>
    </html>
  );
}
