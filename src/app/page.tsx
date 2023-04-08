import Image from 'next/image';
import { Inter } from 'next/font/google';
import { db } from '@/lib/db';

const inter = Inter({ subsets: ['latin'] });

 export default async function Home() {

  await db.set("Hello","World")

  return (
    <div className="text-red-500">
      Hello world
    </div>
  );
}
