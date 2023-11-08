import { ReactNode } from 'react';

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col ml-[20.8rem] min-h-screen">
      {children}
    </div>
  );
}