import { Bird, MenuIcon } from "lucide-react";

const HeaderMobile = () => {

    return(
        <div className="bg-white min-h-[80px] flex items-center justify-between px-8">

        <div className="flex gap-x-4 items-center">
            <Bird className="text-[#1983E8]" size={50} />
            <h1 className="text-3xl font-bold text-[#1983E8]">Tools Bridge</h1>
        </div>

        <MenuIcon size={30} />

        </div>
    );
}

export default HeaderMobile;