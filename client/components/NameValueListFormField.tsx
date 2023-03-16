import { FormField, ThemeContext } from './Grommet';

export const NameValueListFormField = ({
  children,
  data,
  name,
  ...rest
}: {
  children: React.ReactNode;
  data?: { required?: boolean };
  name: string;
}) => {
  return (
    <ThemeContext.Extend value={{ formField: { border: 'none' } }}>
      <FormField name={name} required={data?.required} {...rest}>
        {children}
      </FormField>
    </ThemeContext.Extend>
  );
};
