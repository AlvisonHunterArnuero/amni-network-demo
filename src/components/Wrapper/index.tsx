import Header from "../Header";
import Table from "../Table";
import TableCaption from "../TableCaption";

function Wrapper() {
  return (
    <div className="flex flex-col justify-between items-start">
      <Header />
      <TableCaption />
      <Table />
    </div>
  );
}

export default Wrapper;
