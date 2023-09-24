import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  const donations = useLoaderData();
//   console.log(donations);
  return (
    <div>
      <Banner></Banner>
      <DonationCards donations={donations}></DonationCards>
    </div>
  );
};

export default Home;
