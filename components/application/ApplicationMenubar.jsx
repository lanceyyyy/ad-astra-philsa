import { Button } from "@/components/ui/button";

const ApplicationMenubar = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-[#133B61] w-[80%] p-8 flex flex-col items-center mt-3 rounded-lg">
        <div className="flex flex-row gap-2">
          <span className="text-white text-3xl md:text-4xl font-bold">AD</span>
          <span className="text-[#F5D26F] text-3xl md:text-4xl font-bold">
            ASTRA
          </span>
        </div>
        <span className="text-white font-semibold tracking-widest">
          SCHOLARSHIP 2023
        </span>
      </div>
      <div className="bg-[#5A84AA] w-[80%] flex justify-center rounded-lg mt-[-13px] p-2 gap-1">
        <Button className="application_button bg-[#133B61]" variant="primary">
          ELIGIBILITY REQUIREMENTS
        </Button>
        <Button className="application_button" variant="primary">
          FINAL SCREENING
        </Button>
        <Button className="application_button" variant="primary">
          INTERVIEW
        </Button>
        <Button className="application_button" variant="primary">
          ONBOARDING
        </Button>
      </div>
    </div>
  );
};

export default ApplicationMenubar;
