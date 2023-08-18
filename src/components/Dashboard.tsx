import React from 'react';
import { LineChart } from './LineChart';
import { CovidMap } from './CovidMap';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <LineChart />
      <CovidMap />
    </div>
  );
};

export default Dashboard;
