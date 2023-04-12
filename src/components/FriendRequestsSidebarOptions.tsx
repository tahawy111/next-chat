import Link from 'next/link';
import { FC } from 'react'

interface FriendRequestsSidebarOptionsProps {
  
}

const FriendRequestsSidebarOptions: FC<FriendRequestsSidebarOptionsProps> = ({}) => {
  return <Link href="/dashboard/requests" className='text-gray-600 hover:text-indigo-600 hover:bg-gray-50 group flex items-center gap-x-3 rounded-md'></Link>
}

export default FriendRequestsSidebarOptions