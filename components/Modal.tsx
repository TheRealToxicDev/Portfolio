"use client";

import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-black-100 p-6 rounded-lg shadow-lg max-w-lg w-full">
                <div className="flex justify-end">
                    <button onClick={onClose}>
                        <FaTimes className="text-gray-500" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;