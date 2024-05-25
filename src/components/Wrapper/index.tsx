import DashboardDataGrid from "../DashboardDataGrid";
import Header from "../Header";
import TableCaption from "../TableCaption";

function Wrapper() {
  return (
    <div className="flex flex-col justify-between items-start">
      <Header />
      <TableCaption />
      <DashboardDataGrid />
    </div>
  );
}

export default Wrapper;
