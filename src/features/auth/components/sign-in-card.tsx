import { DottedSeperator } from '@/components/dotted-speration'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardTitle,
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

const formSchema = z.object({
  email: z.string().trim().min(1, "Required").email(),
  password: z.string().min(8, "Minimum 8 Charachters")
})


const SignInCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({values})
  }

  return (
    <Card className='w-full h-full md:h-[487px] border-none shadow-none'>
      <CardHeader className='flex items-center justify-center text-center p-7'>
        <CardTitle className='text-2xl'>Welcome Back</CardTitle>
      </CardHeader>
      <div className='px-7'>
        <DottedSeperator />
      </div>
      <CardContent className='p-7'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
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




            <Button type='submit' disabled={false} size={"lg"} className='w-full'>
              Login
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
      <div className='px-7'>
        <DottedSeperator />
      </div>

      <CardContent className='p-7 flex items-center justify-center'>
        Don&apos;t have an account?
        <Link className='text-blue-700' href={"/sign-up"}>
            <span>&nbsp; Sign Up</span>
        </Link>
      </CardContent>
    </Card>
  )
}

export default SignInCard