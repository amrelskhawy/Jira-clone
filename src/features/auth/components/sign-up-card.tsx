import { DottedSeperator } from '@/components/dotted-speration'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import React from 'react'
import Link from 'next/link'


const SignUpCard = () => {
  return (
    <Card className='w-full h-full md:h-[487px] border-none shadow-none'>
      <CardHeader className='flex items-center justify-center text-center p-7'>
        <CardTitle className='text-2xl'>Sign Up</CardTitle>
        <CardDescription>
          By Signing up, you agree to our {" "}
          <Link href={"/privacy"}>
            <span className='text-blue-700' >Privacy Policy</span>
          </Link>  {" "}
          and {" "}
          <Link href={"/terms"}>
            <span className='text-blue-700' >Terms of services</span>
          </Link>  {" "}
        </CardDescription>
      </CardHeader>
      <div className='px-7'>
        <DottedSeperator />
      </div>
      <CardContent className='p-7'>
        <form className='space-y-4'>
          <Input
            required
            type='text'
            onChange={() => { }}
            value={""}
            placeholder='Enter your name'
            disabled={false}
          />
          <Input
            required
            type='email'
            onChange={() => { }}
            value={""}
            placeholder='Enter your email address'
            disabled={false}
          />
          <Input
            required
            type='password'
            onChange={() => { }}
            value={""}
            placeholder='Enter your password'
            disabled={false}
            min={8}
            max={256}
          />
           <Input
            required
            type='password'
            onChange={() => { }}
            value={""}
            placeholder='Confirm your password'
            disabled={false}
            min={8}
            max={256}
          />

          <Button className='w-full'>
            Sign Up
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
          Sign Up with Google
        </Button>
        <Button
          disabled={false}
          variant={'secondary'}
          size={'lg'}
          className='w-full'
        >
          <FaGithub className='mr-2 size-5' />
          Sign Up with Github
        </Button>
      </CardContent>
    </Card>
  )
}

export default SignUpCard