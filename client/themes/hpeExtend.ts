'use client';

import { deepMerge } from 'grommet/utils';

import { hpe } from './hpe';

export const hpeExtend = deepMerge(hpe, {
  button: {
    round: {
      border: {
        color: 'border-strong',
        radius: '100%',
        width: '2px',
      },
      padding: {
        vertical: '10px',
        horizontal: '10px',
      },
    },
    hover: {
      round: {
        background: {
          color: 'background-contrast',
        },
      },
    },
  },
});
