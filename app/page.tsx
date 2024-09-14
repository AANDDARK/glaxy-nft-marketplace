import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <body>
    <div className="grid justify-items-center space-y-4">
      <h1 className="logos-font">Welcome to Galaxy</h1>
      <Button>Start serve</Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="drop-shadow-2xl bg-gray-900 rounded-md pl-2">
          <Image src={"/ton_symbol.svg"} alt={"ton svg"} width={40} height={40}/>
          <h1 className="text-font">Ton blockchain</h1>
          <div className="text-font">
            the blockchain of freedom and anonyms
          </div>
        </div>
        <div className="drop-shadow-2xl bg-gray-900 rounded-md">
        <img width="40" height="40" src="https://img.icons8.com/windows/40/gender-neutral-user.png" alt="gender-neutral-user"/>
        <h1 className="text-font">40 thousand users</h1>
        <div className="text-font">yea we are popularity</div>
        </div>
        <div className="drop-shadow-2xl bg-gray-900 rounded-md pr-2">
        <img width="40" height="40" src="https://img.icons8.com/fluency-systems-regular/40/security-checked--v1.png" alt="security-checked--v1"/>
        <h1 className="text-font">Security</h1>
        <div className="text-font">
          we are super security
        </div>
        </div>
      </div>
      </body>
    </>
  ); 
}
