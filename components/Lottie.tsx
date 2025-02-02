"use client";

import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

const CustomLottie = ({ options, height, width }: { options: any, height: number, width: number }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return <Lottie options={options} height={height} width={width} />;
};

export default CustomLottie;