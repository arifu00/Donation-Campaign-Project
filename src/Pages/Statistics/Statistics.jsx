import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
  // json data
  const donations = useLoaderData();
  //   console.log(donations.length);

  //   get localStorage data
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    const totalDonate = JSON.parse(localStorage.getItem("donateList"));
    if (totalDonate) {
      setDonationData(totalDonate);
    }
  }, []);
  //   console.log(donationData.length);

  // Calculate percentages
  const donateCalculate = (donationData.length / donations.length) * 100;
  const totalDonationCalculate = 100 - donateCalculate;

  console.log(donateCalculate.toFixed(2));
  console.log(totalDonationCalculate.toFixed(2));
  // Data for Pie Chart
  const pieChartData = [
    { name: "Donations from API", value: donateCalculate },
    { name: "Donations from Local Storage", value: totalDonationCalculate },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  return (
    <div>
      <div className="flex justify-center px-10 w-[320px] md:w-[650px] lg:w-full ">
        <PieChart width={550} height={500}>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center gap-10 ">
        <div className="flex justify-center items-center gap-2">
          <p className="font-medium">Your Donation</p>
          <p className="w-14 h-3 rounded-sm bg-[#00C49F]"></p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="font-medium">Total Donation</p>
          <p className="w-14 h-3 rounded-sm bg-[#FF444A]"></p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
