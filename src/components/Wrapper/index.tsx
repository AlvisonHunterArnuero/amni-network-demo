import React from 'react';
import DashboardDataGrid from '../DashboardDataGrid';
import Header from '../Header';
import TableCaption from '../TableCaption';

const Wrapper: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-start">
      <Header />
      <TableCaption />
      <DashboardDataGrid />
    </div>
  );
};

export default Wrapper;
