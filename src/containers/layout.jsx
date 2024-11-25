import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar"

export default function Layout() { 
    return (
        <div className="flex w-screen h-screen gap-4">
            <Sidebar />
            <main className="flex flex-col grow">
                <Outlet/>
            </main>
        </div>
    )
}