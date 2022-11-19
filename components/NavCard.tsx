'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from './Grommet';

export const NavCard = ({
  children,
  key,
  index,
  href,
  ...rest
}: {
  children: React.ReactNode;
  key: string | number;
  index: number;
  href: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={href} key={key}>
      <Card
        animation={{ type: 'fadeIn', delay: index * 50, duration: 500 }}
        elevation={hover ? 'medium' : 'small'}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {}}
        {...rest}
      >
        {children}
      </Card>
    </Link>
  );
};
