import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noData, setNoData] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const totalDonate = JSON.parse(localStorage.getItem("donateList"));
    if (totalDonate) {
      setDonations(totalDonate);
    } else {
      setNoData("No Data Found");
    }
  }, []);

  return (
    <div>
      <div className="px-4">
        {noData ? (
          <p className="flex h-[70vh]  justify-center items-center text-4xl font-bold">
            {noData}
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {isShow
              ? donations.map((donation) => (
                  <DonationCard
                    key={donation.id}
                    donation={donation}
                  ></DonationCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((donation) => (
                    <DonationCard
                      key={donation.id}
                      donation={donation}
                    ></DonationCard>
                  ))}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsShow(!isShow)}
            className={`text-base font-semibold text-white bg-[#009444] rounded-lg px-7 py-3 ${
                donations.length < 5 && 'hidden'
              }`}
          >
            {isShow? 'Show Less' : 'Show more'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
