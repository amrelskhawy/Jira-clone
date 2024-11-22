import { DottedSeperator } from '@/components/dotted-speration'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import React from 'react'
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"
import Link from 'next/link'
import { registerSchema } from '../schemas'
import { useRegister } from '../api/use-register'



const SignUp = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    }
  })

  const { mutate } = useRegister()

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    mutate({ json: values })
  }

  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              name='name'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>

                    <Input
                      {...field}
                      type='name'
                      placeholder='Enter your name'
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}

            />
            <FormField
              name='email'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>

                    <Input
                      {...field}
                      type='email'
                      placeholder='Enter your email address'
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}

            />


            <FormField
              name='password'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type='password'
                      placeholder='Enter your password'
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}

            />

            <FormField
              name='confirm_password'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type='password'
                      placeholder='Confirm your password'
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}

            />



            <Button type='submit' disabled={false} size={"lg"} className='w-full'>
              Sign Up
            </Button>
          </form>
        </Form>
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
      <div className='px-7'>
        <DottedSeperator />
      </div>

      <CardContent className='p-7 flex items-center justify-center'>
        Already have an account?
        <Link className='text-blue-700' href={"/sign-in"}>
            <span>&nbsp; Sign In</span>
        </Link>
      </CardContent>
    </Card>
  )
}

export default SignUp