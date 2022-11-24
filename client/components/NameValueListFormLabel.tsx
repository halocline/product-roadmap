'use client';

import { useContext } from 'react';
import { Box, Text, ThemeContext } from 'grommet';

export const NameValueListFormLabel = ({
  data,
  name,
}: {
  data: { displayName: string; required?: boolean; help?: string };
  name: string;
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Box margin={{ top: 'small' }}>
      <Text as="label" {...theme.nameValuePair.name} htmlFor={name} name={name}>
        {data.displayName}
        {data.required && (
          <Text aria-label="required" weight="normal">
            *
          </Text>
        )}
      </Text>
      {data.help && <Text size="xsmall">{data.help}</Text>}
    </Box>
  );
};
