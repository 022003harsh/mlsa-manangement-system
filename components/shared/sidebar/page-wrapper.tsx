import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-2 px-[3.8rem] space-y-5 flex-grow">
      {children}
    </div>
  );
}
