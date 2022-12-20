import {
  Box,
  Button,
  Header,
  Page,
  PageContent,
  PageHeader,
} from '../../components/Grommet';
import { FormClose } from '../../components/grommet-icons';
import { UserForm } from './UserForm';
import { UserType } from '../../utilities/types';

const newUser: UserType = {
  name: '',
  birthdate: '',
};

export const CreateUser = ({
  onCancel,
  onCreate,
}: {
  onCancel: () => void;
  onCreate: () => void;
}) => {
  return (
    <Page kind="narrow">
      <Header>
        <></>
        <Button
          a11yTitle="Close add user layer"
          icon={<FormClose />}
          onClick={() => onCancel()}
        />
      </Header>
      <PageContent>
        <Box gap="medium">
          <PageHeader title="Create user" />
          <UserForm user={newUser} method="create" onCreate={onCreate}>
            <Box direction="row" gap="small" pad={{ vertical: 'medium' }}>
              <Button label="Create user" type="submit" primary />
              <Button label="Cancel" onClick={onCancel} />
            </Box>
          </UserForm>
        </Box>
      </PageContent>
    </Page>
  );
};
