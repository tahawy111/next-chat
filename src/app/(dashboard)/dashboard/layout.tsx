import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { FC } from "react";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const Layout = async ({ children }: layoutProps) => {
  const session = await getServerSession();
  if(!session) notFound()

  return <div className="w-full flex h-screen">{children}</div>;
};

export default Layout;
