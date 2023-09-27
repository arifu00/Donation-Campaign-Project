import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "../../Components/Header/Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {
  const donations = useLoaderData();
  console.log(donations);

  const [search, setSearch] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  // console.log(search);
  useEffect(() => {
    if (search === null) {
      setSearchResults(donations);
      // console.log(searchResults);
    }
    else if(search === 'Clothing' || search === 'clothing'){
      setSearchResults(donations.filter(item => item.category === 'Clothing')) 
      
    }
    else if(search === 'Food' || search === 'food'){
      setSearchResults(donations.filter(item => item.category === 'Food')) 
      
    }
    else if(search === 'Education' || search === 'education'){
      setSearchResults(donations.filter(item => item.category === 'Education')) 
      
    }
    else if(search === 'Health' || search === 'health'){
      setSearchResults(donations.filter(item => item.category === 'Health')) 
      
    }

  }, [donations, search]);

  return (
    <div>
      <Banner donations={donations} setSearch={setSearch}></Banner>
      <DonationCards searchResults={searchResults}></DonationCards>
    </div>
  );
};

export default Home;
