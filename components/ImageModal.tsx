import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

type ImageModalProps = {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string | null;
};

const ImageModal: React.FC<ImageModalProps> = ({
    isOpen,
    onClose,
    imageUrl,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !imageUrl) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative bg-white dark:bg-black-100 p-6 rounded-lg shadow-lg max-w-4xl w-full">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500"
                >
                    <FaTimes size={24} />
                </button>
                <img
                    src={imageUrl}
                    alt="Expanded screenshot"
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </div>
    );
};

export default ImageModal;
