import DonationCard from "./DonationCard";

const DonationCards = ({ donations }) => {
  // console.log(donations);
  return (
    <div>
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donations.map((donation) => (
            <DonationCard key={donation.id} donation={donation}></DonationCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationCards;
