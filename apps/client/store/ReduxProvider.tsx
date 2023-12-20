'use client';

import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import reduxStore from '@/store/store';

type ReduxProviderProps = {
  children: ReactNode;
};

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};

export default ReduxProvider;
