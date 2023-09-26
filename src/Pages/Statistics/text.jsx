import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
  // json data
  const donations = useLoaderData();
  console.log(donations.length);
  const [donationData, setDonationData] = useState([]);

  //   get localStorage data
  useEffect(() => {
    const totalDonate = JSON.parse(localStorage.getItem("donateList"));
    if (totalDonate) {
      setDonationData(totalDonate);
    }
  }, []);
  console.log(donationData.length);

  // Calculate percentages
  const donateDataCalculate = (
    (donationData.length / donations.length) *
    100
  ).toFixed(2);
  const totalDonation = 100 - donateDataCalculate;

  console.log(donateDataCalculate);
  console.log(totalDonation);

  // Data for Pie Chart
  const pieChartData = [
    { name: "Donations from json file", value: donateDataCalculate },
    { name: "Donate from Local Storage", value: totalDonation },
  ];

  const COLORS = ["#00C49F", "#FF444A"];


  return (
    <div>
      <h2 className="text-5xl">Hlw world</h2>

      <PieChart width={600} height={400}>
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={180}
          label
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Statistics;
