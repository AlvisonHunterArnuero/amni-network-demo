import Header from './Header';
import TableCaption from './TableCaption';

function Wrapper() {
  return (
    <div className="flex flex-col justify-between items-start">
      <Header />
      <TableCaption />
    </div>
  );
}

export default Wrapper;
