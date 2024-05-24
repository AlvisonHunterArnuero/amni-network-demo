import React from 'react';
import { ToggleSwitchProps } from '../../CustomTypes';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isChecked, isDisabled }) => {
    const [checked, setChecked] = React.useState(isChecked);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <label className="inline-flex items-start mb-2 cursor-pointer w-20">
            <input
                onChange={handleChange}
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={checked}
                disabled={isDisabled} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4cbac0]"></div>
        </label>
    );
}
export default ToggleSwitch;