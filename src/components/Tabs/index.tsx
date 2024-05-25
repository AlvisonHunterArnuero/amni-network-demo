import React from 'react';

const Tabs: React.FC = () => (
    <>
        <div className="border-b border-gray-300">
            <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="default-tab"
                data-tabs-toggle="#default-tab-content"
                role="tablist"
            >
                <li className="" role="presentation">
                    <button
                        className="inline-block py-4 hover:border-b-4 rounded-t-lg hover:border-gray-800"
                        id="profile-tab"
                        data-tabs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >
                        Products
                    </button>
                </li>
                <li className="" role="presentation">
                    <button
                        className="inline-block p-4 hover:border-b-4 rounded-t-lg  hover:border-gray-800"
                        id="dashboard-tab"
                        data-tabs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
                    >
                        Raw Materials
                    </button>
                </li>
            </ul>
        </div>
        <div id="default-tab-content">
            <div
                className="hidden p-4 rounded-lg bg-white"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
            >
                <p className="text-sm text-gray-700 dark:text-gray-900">
                    Table placeholder
                </p>
            </div>
        </div>
    </>
);

export default Tabs;
