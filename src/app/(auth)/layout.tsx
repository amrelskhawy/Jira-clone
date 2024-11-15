import { Button } from "@/components/ui/button";
import Image from "next/image";

interface IAuthLayout {
  children: React.ReactNode;
}

export default function AuthLayout(
  { children }: Readonly<IAuthLayout>) {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image alt="Logo" src={'/logo.svg'} height={80} width={156} />
          <div className="flex items-center gap-2">
            <Button variant="secondary">
              Sign Up
            </Button>
          </div>
        </nav>

        {children}
      </div>
    </main>
  );
}
