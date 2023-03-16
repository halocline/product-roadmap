'use client';

import React, { useState } from 'react';
import { Grid as GrommetGrid } from './Grommet';

type Props = {
  children: React.ReactElement[];
  data: any[];
  setData(arg0: any[]): void;
};

export const Grid: Function = ({ children, data, setData }: Props) => {
  // const [data, setData] = useState<any[]>(dataProp);
  const [active, setActive] = useState<number | null>(null);
  const [target, setTarget] = useState<number | null>(null);

  const onDragStart = (e: React.SyntheticEvent, i: number) => {
    // e.preventDefault();
    setActive(i);
  };
  const onDragEnter = (e: React.SyntheticEvent, i: number) => {
    e.preventDefault();
    setTarget(i);
  };

  const onDragOver = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const onDrop = (e: React.SyntheticEvent) => {
    if (active !== null && target !== null) {
      const nextData = [...data];
      nextData.splice(active, 1);
      nextData.splice(target, 0, data[active]);
      setData(nextData);
    }
  };

  return (
    <>
      <GrommetGrid columns={{ size: 'small' }} gap="small">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            draggable: true,
            index,
            onDragStart: (event: React.SyntheticEvent) =>
              onDragStart(event, index),
            onDragEnter: (event: React.SyntheticEvent) =>
              onDragEnter(event, index),
            onDragOver: (event: React.SyntheticEvent) => onDragOver(event),
            onDrop: (event: React.SyntheticEvent) => onDrop(event),
          });
        })}
      </GrommetGrid>
    </>
  );
};
