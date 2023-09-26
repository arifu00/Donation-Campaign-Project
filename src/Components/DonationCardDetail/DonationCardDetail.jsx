import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "./CardDetail";

const DonationCardDetail = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();

  const donations = useLoaderData();
  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id === id);
    setDonation(findDonation);
  }, [id, donations]);
  

  //   console.log(donation);

  return (
    <div>
      <div className="px-4 md:px-12 py-3 md:py-6">
        <CardDetail donation={donation}></CardDetail>
      </div>
    </div>
  );
};

export default DonationCardDetail;
