'use client';

import React, { useEffect, useState } from 'react';
import {
  DateInput,
  Form,
  NameValueList,
  NameValuePair,
  TextInput,
} from '../../../components/Grommet';
import { NameValueListFormField } from '../../../components/NameValueListFormField';
import { NameValueListFormLabel } from '../../../components/NameValueListFormLabel';
import { UserType } from '../../../utilities/types';

interface InputType {
  id: string;
  name: string;
  value: string;
  onChange: () => {};
}

const INPUT_MAP = new Map();
INPUT_MAP.set('id', (props: InputType) => (
  <TextInput type="number" {...props} />
));
INPUT_MAP.set('name', (props: InputType) => <TextInput {...props} />);
INPUT_MAP.set('birthdate', (props: InputType) => (
  <DateInput format="mm/dd/yyyy" {...props} />
));

export const UserForm = ({ user }: { user: UserType }) => {
  const [formValue, setFormValue] = useState<UserType>(user);
  const onChange = (event: React.SyntheticEvent | any, key: string) => {
    const nextValue: any = { ...formValue };
    nextValue[key as keyof UserType] =
      (event.target as HTMLInputElement)?.value || event.value;
    setFormValue(nextValue);
  };

  useEffect(() => {
    Object.values(formValue).forEach((value) => {
      console.log(value, typeof value);
    });
  }, [formValue]);

  return (
    <Form value={formValue}>
      <NameValueList
        nameProps={{ width: ['xxsmall', 'xsmall'] }}
        valueProps={{ width: 'medium' }}
      >
        {Object.entries(user).map(([key, value]) => {
          const Input = INPUT_MAP.get(key);

          return (
            <NameValuePair
              key={key}
              name={
                <NameValueListFormLabel
                  data={{ displayName: key }}
                  name={key}
                />
              }
            >
              <NameValueListFormField name={key}>
                <Input
                  id={key}
                  name={key}
                  value={formValue[key as keyof UserType]}
                  onChange={(event: React.SyntheticEvent) =>
                    onChange(event, key)
                  }
                />
              </NameValueListFormField>
            </NameValuePair>
          );
        })}
      </NameValueList>
    </Form>
  );
};
