import React from "react";

const Terms = () => {
  return (
    <div className="p-8 w-[100vw] h-[100vh]   mx-auto text-gray-800 bg-[#FDEAD5] flex justify-center">
      <div className="lg:w-[70%] w-[100%] h-[100%]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions
        </h1>

        <p className="mb-4">
          Welcome to our marketing agency. By engaging our services, you agree
          to the following terms and conditions. Please read them carefully
          before using our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Service Disclaimer
        </h2>
        <p className="mb-4">
          We provide digital marketing and promotional services to help increase
          your brand visibility. While we strive to achieve the best results
          possible, we do not guarantee specific outcomes, such as increased
          sales, engagement, or conversions. Marketing performance depends on
          multiple factors beyond our control, including market conditions and
          audience behavior. We offer our professional digital marketing
          services in the best of our ability. While we strive to maintain the
          highest quality in both our service and products, if the service
          causes loss of access to your website or damages your website or
          business in any way, the company, its owners and it’s officers cannot
          be held liable.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Refund Policy</h2>
        <p className="mb-4">
          Due to the nature of digital services, all completed or in-progress
          work is non-refundable. Once a project has started, cancellation
          requests will not be eligible for refunds.
        </p>

        <p className="mb-4">
          Refunds may only be issued in cases of accidental duplicate payments
          or if a service was not delivered due to our error. Approved refunds
          will be processed within 7–10 business days via the original payment
          method.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Client Responsibilities
        </h2>
        <p className="mb-4">
          Clients are responsible for providing accurate information, timely
          feedback, and all necessary materials required for project completion.
          Delays or issues resulting from the client’s inaction or incomplete
          information do not qualify for refunds or revisions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Acceptance</h2>
        <p>
          By continuing to use our services, you acknowledge that you have read,
          understood, and agreed to these terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default Terms;
