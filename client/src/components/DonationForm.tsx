import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

const PRESET_AMOUNTS = [10, 25, 50, 100, 250];

const INITIAL_STATE = {
  donationAmount: 0,
  isOtherClicked: false,
  isSubmitted: false,
};

export default function DonationForm() {
  const [{ donationAmount, isOtherClicked, isSubmitted }, setDonationFormData] =
    useState(INITIAL_STATE);

  // Sets the donation amount and sets other button to false if not already
  const handlePresetAmountClicked = (amount: number) => {
    setDonationFormData((prev) => ({
      ...prev,
      donationAmount: amount,
      isOtherClicked: false,
    }));
  };

  // Sets other to clicked and automatically sets donation amount to 0
  const handleOtherOptionClicked = () => {
    setDonationFormData((prev) => ({
      ...prev,
      donationAmoun: 0,
      isOtherClicked: true,
    }));
  };

  return (
    <>
      {!isSubmitted && (
        <form className="flex flex-col p-4 gap-4 w-full">
          <div className="flex flex-col p-4 gap-4 bg-main-gray shadow-shift-left-secondary rounded-lg overflow-hidden">
            <p className="text-xs font-bold">
              Please select or enter an amount:
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {PRESET_AMOUNTS.map((amount, index) => (
                <button
                  type="button"
                  key={index}
                  className={`btn-red p-3 text-xs sm:text-sm ${
                    // If "Other" isn't clicked and this button is clicked, show active css
                    !isOtherClicked &&
                    donationAmount === amount &&
                    "bg-secondary-red text-main-white"
                  }`}
                  onClick={() => handlePresetAmountClicked(amount)}
                >
                  ${amount}
                </button>
              ))}
              <button
                type="button"
                className={`btn-red p-3 text-xs sm:text-sm ${
                  isOtherClicked && "bg-secondary-red text-main-white"
                }`}
                onClick={handleOtherOptionClicked}
              >
                Other
              </button>
            </div>

            {isOtherClicked && (
              <CurrencyInput
                name="price"
                className="border rounded-lg p-2 text-xs sm:text-sm max-w-xs ml-auto"
                placeholder="$250"
                defaultValue={donationAmount}
                prefix="$"
                decimalsLimit={2}
                onValueChange={(value) => {
                  if (isNaN(Number(value))) value = "0";

                  setDonationFormData((prev) => ({
                    ...prev,
                    donationAmount: Number(value),
                  }));
                }}
              />
            )}
          </div>

          <div className="flex flex-col p-4 gap-4 bg-main-gray shadow-shift-right-main rounded-lg overflow-hidden">
            <h4 className="text-center text-xl">Donor Information</h4>
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm">First Name</label>
              <input className="border p-1 text-xs" required />
            </div>

            <div className="flex flex-col">
              <label className="text-xs sm:text-sm">Last Name</label>
              <input className="border p-1 text-xs" required />
            </div>

            <div className="flex flex-col">
              <label className="text-xs sm:text-sm">Email</label>
              <input className="border p-1 text-xs" required />
            </div>

            <div className="flex flex-col">
              <label className="text-xs sm:text-sm">Message (Optional)</label>
              <textarea className="border p-1 text-xs" />
            </div>

            <button type="submit" className="text-sm btn-red w-32 ml-auto">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
}
