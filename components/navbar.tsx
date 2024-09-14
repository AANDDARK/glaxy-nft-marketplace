import { Avatar, AvatarImage } from "./ui/avatar";

export default function Navbar() {
    return (
        <nav className="bg-slate-800 flex items-center">
            <div className="flex-grow flex justify-center space-x-4">
                <button className="hover:bg-slate-900"><p className="m-4">marketplace</p></button>
                <button className="hover:bg-slate-900"><p className="m-4">support</p></button>
                <button className="hover:bg-slate-900"><p className="m-4">top rate</p></button>
            </div>
            <Avatar className="ml-4">
                <AvatarImage src="https://github.com/shadcn.png"/>
            </Avatar>
        </nav>
    );
}
