'use client';

import { useState } from 'react';
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

async function updateUser(user: UserType) {
  const res = await fetch(`http://localhost:8080/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log('RESPONSE', res);
  return res.json();
}

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

  const onSave = (nextUser: UserType) => {
    updateUser(nextUser).then((res) => console.log(res.value));
  };

  return (
    <Form value={formValue} onChange={(nextValue) => setFormValue(nextValue)}>
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
                  onBlur={() => onSave(formValue)}
                />
              </NameValueListFormField>
            </NameValuePair>
          );
        })}
      </NameValueList>
    </Form>
  );
};
