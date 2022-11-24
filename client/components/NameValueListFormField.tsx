import { FormField } from './Grommet';

export const NameValueListFormField = ({
  children,
  data,
  name,
  ...rest
}: {
  children: React.ReactNode;
  data?: { required?: boolean };
  name: string;
}) => (
  <FormField id={name} name={name} required={data?.required} {...rest}>
    {children}
  </FormField>
);
