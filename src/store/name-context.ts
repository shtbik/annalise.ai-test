import { createContext, Dispatch, SetStateAction } from 'react'

export type TNameValue = string

export const NameContext = createContext<TNameValue>('')
export const DispatchNameContext = createContext((() => {}) as Dispatch<SetStateAction<TNameValue>>)
