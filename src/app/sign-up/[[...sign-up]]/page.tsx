import { SignUp } from "@clerk/nextjs";

export default function Page(){
    return(
        <div className="mt-40 flex justify-center items-center ">
             <SignUp/>
        </div>
       
        ) 
}