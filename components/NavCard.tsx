'use client';

import React, { useState } from 'react';
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
  draggable?: boolean;
  onDragStart?: (event: React.SyntheticEvent) => void;
  onDragEnter?: (event: React.SyntheticEvent) => void;
  onDragOver?: (event: React.SyntheticEvent) => void;
  onDrop?: (event: React.SyntheticEvent) => void;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={href}>
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
