"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type Option = {
    value: string;
    label: string;
};

type CustomSelectProps = {
    value: Option | null;
    onChange: (selectedOption: Option | null) => void;
    options: Option[];
    placeholder?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
    value,
    onChange,
    options,
    placeholder = "Select an option",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: Option) => {
        onChange(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            selectRef.current &&
            !selectRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={selectRef} className="relative w-64">
            <button
                type="button"
                onClick={handleToggle}
                className="w-full px-4 py-3 text-left text-white bg-gray-800 rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-700 transition-colors"
            >
                <span>{value ? value.label : placeholder}</span>
                {isOpen ? (
                    <FaChevronUp className="ml-2 text-white" />
                ) : (
                    <FaChevronDown className="ml-2 text-white" />
                )}
            </button>

            {isOpen && (
                <>
                    {/* Dropdown List */}
                    <ul className="absolute z-20 w-full mt-2 bg-gray-900 text-white rounded-lg shadow-xl max-h-60 overflow-auto border border-gray-700 transition-transform duration-300 ease-out">
                        {options.map((option) => (
                            <li
                                key={option.value}
                                onClick={() => handleOptionClick(option)}
                                className="px-4 py-2 cursor-pointer hover:bg-indigo-500 hover:text-white transition-colors duration-150"
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default CustomSelect;
