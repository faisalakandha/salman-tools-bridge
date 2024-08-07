import { CoinsIcon, GroupIcon, HistoryIcon, HomeIcon, LogOutIcon, LucideGroup, Settings2Icon } from "lucide-react";
import Link from "next/link";

const Navigation = () => {

    return (
        <div style={{ borderBottom: '1px solid grey' }} className="min-h-[50px] px-24 flex items-center gap-x-8">
            <Link href='/'>
                <div className="flex gap-x-2">
                    <HomeIcon style={{ color: 'grey' }} />
                    <p>Dashboard</p>
                </div>
            </Link>

            <Link href='/pricing'>
                <div className="flex gap-x-2">
                    <CoinsIcon style={{ color: 'grey' }} />
                    <p>Plans Pricing</p>
                </div>
            </Link>

            <Link href='/profile-settings'>
                <div className="flex gap-x-2">
                    <Settings2Icon style={{ color: 'grey' }} />
                    <p>Profile Settings</p>
                </div>
            </Link>

            <Link href='/payment-history'>

                <div className="flex gap-x-2">
                    <HistoryIcon style={{ color: 'grey' }} />
                    <p>Payment History</p>
                </div>
            </Link>

            <div className="flex gap-x-2">
                <LucideGroup style={{ color: 'grey' }} />
                <p>Affiliate Area</p>
            </div>

            <div className="flex gap-x-2">
                <LogOutIcon style={{ color: 'grey' }} />
                <p>Logout</p>
            </div>
        </div>
    );
}

export default Navigation;