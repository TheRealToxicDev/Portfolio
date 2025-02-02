"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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

const CustomSelect: React.FC<CustomSelectProps> = ({ value, onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: Option) => {
        onChange(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={selectRef} className="relative w-fit-content">
            <button
                type="button"
                onClick={handleToggle}
                className="w-full px-4 py-2 text-left bg-gray-800 text-white rounded-lg focus:outline-none flex justify-between items-center"
            >
                <span>{value ? value.label : placeholder}</span>
                {isOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 bg-gray-800 text-white rounded-lg shadow-lg max-h-60 overflow-auto">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className="px-4 py-2 cursor-pointer hover:bg-black-200"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;