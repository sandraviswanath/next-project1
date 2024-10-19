'use client';

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from 'react-icons/ci'
import Link from "next/link";

const links =[
    {
        name:'home',
        path:'/',
    },
    {
        name:'services',
        path:'/services',
    },
    {
        name:'resume',
        path:'/resume',
    },
    {
        name:'work',
        path:'/work',
    },
    {
        name:'contact',
        path:'/contact',
    },
]
const MobileNav = () => {
    const pathname=usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-[#00ff99]"/>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href='/'>
                <h1 className="text-4xl font-semibold ">Luke<span className="text-[#00ff99]">.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link,index)=>{
                    return(
                        <Link href={link.path} key={index} className={`${link.path === pathname && 'text-[#00ff99] border-b-2 border-[#00ff99]'}text-xl capitalize hover:text-[#00ff99] transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
