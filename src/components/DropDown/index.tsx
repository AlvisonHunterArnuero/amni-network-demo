import React from 'react';

const DropDown: React.FC = () => (
    <>
        <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-black bg-transparent border-2 border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center h-8
             dark:bg-transparent dark:hover:bg-gray-400 dark:focus:ring-gray-800"
            type="button"
        >
            More
            <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                />
            </svg>
        </button>

        <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
            <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
            >
                {['View', 'Edit', 'Archive'].map((item, ndx) => {
                    return (
                        <li key={ndx + item}>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                {item}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    </>
);
export default DropDown;




