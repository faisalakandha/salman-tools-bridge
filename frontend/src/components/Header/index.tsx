import { Bird, MessageCircleQuestionIcon, Settings2Icon, User2Icon, VerifiedIcon } from "lucide-react";

const Header = () => {

    return (
        <div>
            <div className="flex px-24 items-center justify-between min-h-[125px]">
                <div className="flex gap-x-4 items-center justify-center">
                    <Bird className="text-[#1983E8]" size={50} />
                    <h1 className="text-3xl font-bold text-[#1983E8]">Tools Bridge</h1>
                </div>
                <div className="flex items-center justify-center gap-x-6">
                    <div style={{ border: '1px solid grey', borderRadius: '5px' }} className="p-2 flex gap-x-1 items-center justify-center">
                        <MessageCircleQuestionIcon />
                        <p>Help Desk</p>
                        <span style={{borderRadius:'5px'}} className="bg-[#EAF7EC] p-1 text-[#2FB344]">Online</span>
                    </div>

                    <div className="flex items-center justify-center gap-x-2">
                        <User2Icon className="text-[#1983E8]" />
                        <p>UserID: sss347</p>
                        <VerifiedIcon className="text-[#1983E8]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;