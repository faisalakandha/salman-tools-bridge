import { CheckIcon, CrossIcon, X } from "lucide-react";

const PricingTable = (props: {}) => {

    return (
        <div style={{ borderRadius: '5px' }} className="bg-white h-[480px] w-[320px] flex flex-col items-center justify-center py-10">

            <h1 className="text-md text-gray-500"> BLOGGER'S PLAN</h1>

            <h1 className="text-5xl font-bold py-4">₹499</h1>

            <div className="flex items-center justify-center pb-2">
                <span>OR</span>
            </div>

            <h1 className="text-4xl font-bold pb-4">$6 USD</h1>

            <div className="flex flex-col items-center justify-center">
                <div style={{ border: '1px solid black', borderRadius: '5px' }} className="p-2">
                    Tools List
                </div>
                <ul className="text-center py-2">
                    <li className="flex gap-x-2"> <CheckIcon className="text-green-500" /> Included 12 Tools</li>
                    <li className="flex gap-x-2"> <CheckIcon className="text-green-500" /> Included 12 Tools</li>
                    <li className="flex gap-x-2"> <X className="text-red-500" /> Included 12 Tools</li>
                    <li className="flex gap-x-2"> <CheckIcon className="text-green-500" /> Included 12 Tools</li>
                </ul>

            </div>

            <button style={{border:'1px solid black'}} className="px-16 py-2 mt-2">Choose Plan</button>

        </div>
    );
}

export default PricingTable;