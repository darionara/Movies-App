'use client'
import { Provider } from 'react-redux'
import type { ProviderProps } from 'react-redux'
import reduxStore from './Store'
import type { FC, ReactNode } from 'react'

type ReduxProviderProps = {
  children: ReactNode
  store?: ProviderProps['store']
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={reduxStore}>{children}</Provider>
}

export default ReduxProvider
