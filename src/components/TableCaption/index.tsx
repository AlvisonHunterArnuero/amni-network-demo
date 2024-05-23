import React from 'react';
import Tabs from '../Tabs';

const TableCaption: React.FC = () => (
  <div className="container mx-auto">
    <div className="h-32 flex flex-col justify-between mt-12">
      <div className="basis-1/2">
        <h1 className="text-gray-800 text-2xl float-left">My Products</h1>
      </div>
      <div className="basis-1/2">
        <button
          type="button"
          className="float-end rounded p-2 px-3 text-sm text-[#143751] bg-[#BEE6E8] flex items-center justify-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          New SKU
        </button>
      </div>
      <div className="w-full h-48">
        <Tabs />
      </div>
    </div>
  </div>
);

export default TableCaption;
