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
  

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    // Calculate label position
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    // Format the label text
    const labelText = `${(percent * 100).toFixed(2)}%`;

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {labelText}
      </text>
    );
  };

  // Calculate percentages
  const donateCalculate = ((donationData.length / donations.length) * 100);
  const totalDonationCalculate = (100 - donateCalculate);
  // Data for Pie Chart
  const pieChartData = [
    { name: "Total Donations ", value: donateCalculate },
    { name: "Your Donation", value: totalDonationCalculate },
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
            outerRadius={100}
            fill="#8884d8"
            
            labelLine={false}
            label={renderCustomizedLabel}
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
