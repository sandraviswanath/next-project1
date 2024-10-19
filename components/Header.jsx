import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
    <div className="container max-auto flex justify-between items-center">
    <Link href='/'>
    <h1 className="text-4xl font-semibold">
        Luke<span className="text-[#00ff99]">.</span>
    </h1>
    </Link>
    {/* desktop nav &hire me button */}
    <div className="hidden xl:flex items-center gap-8">
    <Nav/>
    <Link href='/contact'>
    <Button>hire me</Button>
    </Link>
    </div>
{/* mobile nav */}
<div className="xl:hidden">
  <MobileNav/>
</div>

    </div>
    </header>
  )
};

export default Header;