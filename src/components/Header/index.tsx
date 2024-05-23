import React from 'react';
import User from '../menuIcons/user';
import Gear from '../menuIcons/gear';
import PowerOff from '../menuIcons/powerOff';
import logo from '../../assets/amni-logo.png';
import './header.css';

const mnuItems: string[] = [
    'Dashboard',
    'Products',
    'Orders',
    'Manufacturers',
    'Trulnsights',
];

const Header: React.FC = () => (
    <div className="w-full h-screen flex flex-col basis-full">
        <h1 className="text-gray-300 text-2xl my-1">Products: Column Hovers</h1>
        <nav className="bg-white border-gray-200 dark:bg-[#143751]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src={logo}
                        width="133"
                        className="h-auto"
                        alt="Amni Network Logo"
                    />
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent dark:border-gray-700">
                        {mnuItems.map((elem) => {
                            return (
                                <li className="hover:text-white hover:border-b-2 hover:border-[#BEE6E8]">
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-[#61737a] hover:text-white
                                        bg-transparent text-sm font-light"
                                    >
                                        {elem}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex gap-4">
                    <User stroke="white" className="size-5" />
                    <Gear stroke="white" className="size-5" />
                    <PowerOff stroke="white" className="size-5" />
                </div>
            </div>
        </nav>
    </div>
);

export default Header;
