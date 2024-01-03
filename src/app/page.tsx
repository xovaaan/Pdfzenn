import FileUpload from "@/components/ui/FileUpload";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Link from "next/link";


export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId
  return (
   <div className="w-screen min-h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="flex flex-col text-center items-center">
        <div className=" items-center flex ">
          <h1 className="font-bold mr-3 text-5xl">Chat In Real Time <br /> With Your <span className="text-blue-600">PDF!</span>  </h1>
          <UserButton afterSignOutUrl="/"/>
        </div>
        <div className="flex mt-7 mb-5">
          {isAuth && <Button>Go to Chats</Button>}
        </div>
        <p className="text-slate-600 font-semibold max-w-xl mt-1 text-lg">Get access to the power of AI to chat with your documents in real time which helps you to get answers in seconds</p>
        <div className="mt-4 w-full">
          {isAuth ? (<FileUpload/>):(
            <Link href='/sign-in'>
              <Button>Login to get started
                <LogIn className="w-4 h-4 ml-2"/>
              </Button>

            </Link>
          )}
        </div>
      </div>
    </div>
   </div>
  )
}
