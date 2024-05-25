import React from 'react';
import Tabs from '../Tabs';
import { toast } from 'react-toastify';

const TableCaption: React.FC = () => (
  <div className="container">
    <div className="flex flex-col justify-between mt-12 mx-6">
      <div className="basis-1/2">
        <h1 className="text-gray-800 text-2xl float-left">My Products</h1>
        <button
          onClick={() => toast.info("Feature under development")}
          type="button"
          className="float-end rounded p-2 px-3 text-sm text-[#143751] bg-[#BEE6E8] hover:text-white hover:bg-[#143751] flex items-center justify-center space-x-2"
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
      <div className="w-full">
        <Tabs />
      </div>
    </div>
  </div>
);

export default TableCaption;
