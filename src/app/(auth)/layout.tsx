"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IAuthLayout {
  children: React.ReactNode;
}

export default function AuthLayout(
  { children }: Readonly<IAuthLayout>) {

  const path = usePathname()
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image alt="Logo" src={'/logo.svg'} height={80} width={156} />
          <div className="flex items-center gap-2">
            <Button variant="secondary">
              <Link href={path === "/sign-up" ? "/sign-in" : "/sign-up"} >
                {path === "/sign-up" ? "Login" : "Sign Up"} 
              </Link>
            </Button>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
        {children}
        </div>

      </div>
    </main>
  );
}
