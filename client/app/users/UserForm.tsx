'use client';

import { forwardRef, useEffect, useRef, useState } from 'react';
import {
  DateInput,
  Form,
  NameValueList,
  NameValuePair,
  TextInput,
} from '../../components/Grommet';
import { NameValueListFormField } from '../../components/NameValueListFormField';
import { NameValueListFormLabel } from '../../components/NameValueListFormLabel';
import { UserType } from '../../utilities/types';
import { API_URL } from '../../utilities/client-side-config';

async function createUser(user: UserType, callback: () => void) {
  const res = await fetch(`${API_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (res.ok) {
    callback();
  }
  return res.json();
}

async function updateUser(user: UserType) {
  const res = await fetch(`${API_URL}/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.json();
}

interface InputType {
  id: string;
  name: string;
  value: string;
  onChange: () => {};
}

const INPUT_MAP = new Map();
INPUT_MAP.set(
  'id',
  forwardRef<HTMLInputElement, InputType>((props, ref) => (
    <TextInput ref={ref} type="number" {...props} />
  ))
);
INPUT_MAP.set(
  'name',
  forwardRef<HTMLInputElement, InputType>((props, ref) => (
    <TextInput ref={ref} {...props} />
  ))
);
INPUT_MAP.set(
  'birthdate',
  forwardRef<HTMLInputElement, InputType>((props, ref) => (
    <DateInput ref={ref} format="mm/dd/yyyy" {...props} />
  ))
);

export const UserForm = ({
  children,
  user,
  method = 'update',
  onCreate,
}: {
  children: React.ReactNode;
  user: UserType;
  method: 'create' | 'update';
  onCreate: () => void;
}) => {
  const [formValue, setFormValue] = useState<UserType>(user);
  const inputRef = useRef<HTMLElement>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onBlur = (nextUser: UserType) => {
    if (method === 'update') {
      updateUser(nextUser).then((res) => console.log(res.value));
    }
  };

  const onSave = (nextUser: UserType) => {
    if (method === 'create') {
      createUser(nextUser, onCreate).then((res) => console.log(res.value));
    } else {
      updateUser(nextUser).then((res) => console.log(res.value));
    }
  };

  return (
    <Form
      value={formValue}
      onChange={(nextValue) => setFormValue(nextValue)}
      onSubmit={({ value }) => onSave(value)}
    >
      <NameValueList
        nameProps={{ width: ['xxsmall', 'xsmall'] }}
        valueProps={{ width: 'medium' }}
      >
        {Object.entries(user).map(([key, value], index) => {
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
                  ref={index === 0 ? inputRef : undefined}
                  id={key}
                  name={key}
                  value={formValue[key as keyof UserType]}
                  onBlur={() => onBlur(formValue)}
                />
              </NameValueListFormField>
            </NameValuePair>
          );
        })}
      </NameValueList>
      {children}
    </Form>
  );
};
