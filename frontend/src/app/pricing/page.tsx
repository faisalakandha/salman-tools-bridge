import PricingTable from "@/components/PricingTabe";

const PricingPage = () =>{


    return(
        <div>
            <h1 className="text-2xl py-8 font-semibold">Buy Subscriptions</h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-y-6 gap-x-4">

                <PricingTable />
                <PricingTable />
                <PricingTable />
                <PricingTable />


            </div>
        </div>
    );
}

export default PricingPage;