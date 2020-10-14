import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart({ metric, data }) {
  return (
    <div>
      <h2>{metric.metric_name}</h2>
      <Line
        options={{
          responsive: true,
        }}
        data={data}
      />
    </div>
  );
}
