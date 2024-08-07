import { CalendarIcon, KeySquareIcon, LocateIcon } from "lucide-react";

const AccountOverview = () => {


    return (
        <div className="flex flex-col md:flex-row gap-x-3">
            <div style={{ borderRadius: '5px' }} className="bg-white w-full h-[80px] flex gap-x-4 flex items-center px-8">
                <KeySquareIcon style={{ borderRadius: '5px' }} size={50} className="bg-blue-600 p-2 text-white" />

                <div className="flex flex-col">
                    <p>Last Login</p>
                    <p className="text-gray-600">1hrs ago</p>
                </div>

            </div>

            <div style={{ borderRadius: '5px' }} className="bg-white w-full h-[80px] flex gap-x-4 flex items-center px-8">
                <CalendarIcon style={{ borderRadius: '5px' }} size={50} className="bg-green-600 p-2 text-white" />

                <div className="flex flex-col">
                    <p>Joined ToolsBridge</p>
                    <p className="text-gray-600">1+ Years ago</p>
                </div>

            </div>

            <div style={{ borderRadius: '5px' }} className="bg-white w-full h-[80px] flex gap-x-4 flex items-center px-8">
                <LocateIcon style={{ borderRadius: '5px' }} size={50} className="bg-purple-600 p-2 text-white" />

                <div className="flex flex-col">
                    <p>Current Session</p>
                    <p className="text-gray-600">172.71.81.55</p>
                </div>

            </div>
        </div>

    );
}

export default AccountOverview;