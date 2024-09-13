'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Layout() {
    const pathname = window.location.pathname;
    return (
        <>
        <div className="flex">
            <div className="flex-1">
                <aside>
                    <Image 
                        src={"/sing_photo.jpg"} 
                        alt={"login photo"} 
                        layout="responsive" 
                        width={500} 
                        height={500} 
                        style={{ width: '100%', height: '100%' }} 
                        className="mb-5"
                    />
                </aside>
            </div>
            {pathname === '/auth/singin' && (
                <div className="flex flex-col ml-4 space-y-3 flex-1">
                    <h1 className="text-2xl">We will be glad to see you</h1>
                    <div>
                        <h2>Name:</h2>
                        <Input />
                    </div>
                    <div>
                        <h2>Username:</h2>
                        <Input />
                    </div>
                    <div>
                        <h2>Mail:</h2>
                        <Input />
                    </div>
                    <div>
                        <h2>Password:</h2>
                        <Input />
                    </div>
                    <div>
                        <h2>Remember password:</h2>
                        <Input />
                    </div>
                    <Button>Singin</Button>
                </div>
            )}
            {pathname === '/auth/login' && (
                <div className="flex flex-col ml-4 space-y-3 flex-1">
                    <h1 className="text-2xl">We will be glad to see you</h1>
                    <div>
                        <h2>Username or mail:</h2>
                        <Input />
                    </div>
                    <div>
                        <h2>Password:</h2>
                        <Input />
                    </div>
                    <Button>Login</Button>
                </div>
            )}
        </div>
        </>
    );
}