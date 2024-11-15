import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Button 
      size={'sm'}
      variant={'destructive'}>Click Me</Button>
    </div>
  )
}
