'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from './Grommet';

export const NavCard = ({
  children,
  index,
  href,
  ...rest
}: {
  children: React.ReactNode;
  index: number;
  href: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={href} {...rest}>
      <Card
        animation={{ type: 'fadeIn', delay: index * 50, duration: 500 }}
        elevation={hover ? 'medium' : 'small'}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {}}
      >
        {children}
      </Card>
    </Link>
  );
};
