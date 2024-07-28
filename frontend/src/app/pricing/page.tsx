import PricingTable from "@/components/PricingTabe";

const PricingPage = () =>{


    return(
        <div>
            <h1 className="text-2xl py-8 font-semibold">Buy Subscriptions</h1>

            <div className="grid grid-cols-4 gap-x-4">

                <PricingTable />
                <PricingTable />
                <PricingTable />
                <PricingTable />


            </div>
        </div>
    );
}

export default PricingPage;