"use client"
import { ButtonHTMLAttributes, FC, useState } from 'react'
import Button from './ui/Button'
import { signOut } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { Loader2, LogInIcon } from 'lucide-react'

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

const SignOutButton: FC<SignOutButtonProps> = ({...props}) => {

    const [isSigningOut, setIsSigningOut] = useState<boolean>(false)

  return <Button {...props} variant={"ghost"} onClick={async (params) => {
    setIsSigningOut(true);
    try {
        await signOut()
    } catch (error) {
        toast.error("There was a problem in signing out")
    }
    finally {
        setIsSigningOut(false)
    }
  }
  } >
    {isSigningOut ? <Loader2 className='animate-spin h-4 w-4' /> : <LogInIcon className='w-4 h-4'/>}
  </Button>
}

export default SignOutButton