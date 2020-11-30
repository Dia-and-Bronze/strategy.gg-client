import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';






const GoldChart = ({gold}) => {
 
  
  let data = [];
  let check = 0;
  const gradientOffset = () => {
    let dataMax = Math.max(...data.map(i => i.uv));
    let dataMin = Math.min(...data.map(i => i.uv))
    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

  return dataMax / (dataMax - dataMin);
};

   console.log(gold);
    for(var i=0;i<gold.length;i++){
        if(check===0){
        data.push({name : i, uv: gold[i]});
        }
        if(i === gold.length-1){
            check=1;
        }
    }
    let off = gradientOffset();
    return (
      <AreaChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
      </AreaChart>
    );
  }
  export default GoldChart;