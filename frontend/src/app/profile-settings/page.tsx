import AccountOverview from "@/components/ProfileSettings/AccountOverview";
import { CalendarIcon, Key, KeySquareIcon, LocateIcon } from "lucide-react";

const ProfileSettinsPage = () => {


    return (
        <div className="px-24">
            <h1 className="py-6 text-3xl font-semibold">My Account</h1>

            <div className="pb-6">
                <AccountOverview />
            </div>

            <div style={{ width: '100%' }} className="flex flex-col items-center justify-center bg-white">
                <table className="" style={{ width: '100%', tableLayout: 'fixed' }}>
                    <tbody>
                        <tr>
                            <td style={{ width: '50%', padding: '8px', textAlign: 'right' }}>Username</td>
                            <td style={{ width: '50%', padding: '8px', textAlign: 'left' }}>sss347</td>
                        </tr>

                        <tr>
                            <td style={{ width: '50%', padding: '8px', textAlign: 'right' }}>First & Last Name</td>
                            <td style={{ width: '50%', padding: '8px', textAlign: 'left' }}>mr aNimator</td>
                        </tr>

                        <tr>
                            <td style={{ width: '50%', padding: '8px', textAlign: 'right' }}>* E-Mail Address</td>
                            <td style={{ width: '50%', padding: '8px', textAlign: 'left' }}>lilly.ma.777@gmail.com</td>
                        </tr>

                        <tr>
                            <td style={{ width: '50%', padding: '8px', textAlign: 'right' }}>Password</td>
                            <td style={{ width: '50%', padding: '8px', textAlign: 'left' }}>Change</td>
                        </tr>
                    </tbody>
                </table>

                <button style={{ border: '1px solid black' }} className="px-8 py-2 mt-2 my-8">Save Profile</button>
            </div>


        </div>
    );
}

export default ProfileSettinsPage;