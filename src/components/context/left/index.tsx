import { SelectorsProvider } from './selectors';

export const LeftProvider = ({children}: any) => {
  return (
    <SelectorsProvider>
      {children}
    </SelectorsProvider>
  )
}

LeftProvider.displayName="LeftProvider";