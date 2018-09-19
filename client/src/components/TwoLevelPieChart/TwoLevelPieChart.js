import React from "react";
import { PieChart, Pie, Cell, Label, LabelList, Tooltip } from 'recharts';


 const data= [{name: 'Protein', value: 100}, {name: 'Carb', value: 300},
                 {name: 'Fat', value: 300},]

                 const RADIAN = Math.PI / 180;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
//  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

//  return (
//    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
     
//    </text>
//  );
// };

// const RADIAN = Math.PI / 180;     

// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
//  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

//  return (
//    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
//        {`${(percent * 100).toFixed(0)}%`}
//    </text>
//  );
// };

const TwoLevelPieChart = (props) => {

    
  return (
    	<PieChart width={400} height={400} onMouseEnter={this.onPieEnter}>
       
        <Pie
          dataKey="value"
          data={props.data} 
          cx={200} 
          cy={200} 
          labelLine={false}
          // label={renderCustomizedLabel}
          outerRadius={150} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell key={index}fill={COLORS[index % COLORS.length]}/>)
          }
         
        
          
        </Pie>
        <Pie 
          data={props.data02} 
          dataKey="value" 
          nameKey="name" 
          cx={200}
          cy={200} 
          innerRadius={150} 
          outerRadius={170} 
          fill="#82ca9d" 
          >
          {
          	data.map((entry, index) => <Cell key={index}fill={COLORS[index % COLORS.length]}/>)
          }
          
          </Pie>
      </PieChart>
    );
}


export default TwoLevelPieChart