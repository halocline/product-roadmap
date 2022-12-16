import { Box, Button, Header } from '../../components/Grommet';
import { FormClose } from '../../components/grommet-icons';

export const CreateUser = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
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
    </>
  );
};
