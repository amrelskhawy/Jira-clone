import { DottedSeperator } from '@/components/dotted-speration'
import { Button } from '@/components/ui/button'
import { 
    Card,
    CardContent ,
    CardTitle,
    CardHeader,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import React from 'react'


const SignInCard = () => {
  return (
    <Card className='w-full h-full md:h-[487px] border-none shadow-none'>
        <CardHeader className='flex items-center justify-center text-center p-7'>
            <CardTitle className='text-2xl'>Welcome Back</CardTitle>
        </CardHeader>
        <div className='px-7'>
            <DottedSeperator />
        </div>
        <CardContent className='p-7'>
            <form className='space-y-4'>
                <Input
                    required
                    type='email'
                    onChange={() => {}}
                    value={""}
                    placeholder='Enter your email address'
                    disabled={false}
                />
                <Input
                    required
                    type='password'
                    onChange={() => {}}
                    value={""}
                    placeholder='Enter your password'
                    disabled={false}
                    min={8}
                    max={256}
                />

                <Button className='w-full'>
                    Login
                </Button>
            </form>
        </CardContent>

        <div className='px-7'>
            <DottedSeperator />
        </div>

        <CardContent className='p-7 flex flex-col gap-y-4'>
            <Button
                disabled={false}
                variant={'secondary'}
                size={'lg'}
                className='w-full'
                >
                <FcGoogle className='mr-2 size-5' />
                Login with Google
            </Button>
            <Button
                disabled={false}
                variant={'secondary'}
                size={'lg'}
                className='w-full'
                >
                <FaGithub className='mr-2 size-5' />
                Login with Github
            </Button>
        </CardContent>
    </Card>
  )
}

export default SignInCard