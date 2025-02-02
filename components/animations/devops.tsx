"use client";

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '@/public/animations/devops.json';

const DevOpsAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <svg width="689" height="541" viewBox="0 0 689 541" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-18" y="-73" width="707" height="707" fill="url(#pattern0_3276_3561)" />
            <defs>
                <pattern id="pattern0_3276_3561" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_3276_3561" transform="scale(0.000512295)" />
                </pattern>
            </defs>
            <foreignObject x="0" y="0" width="689" height="541">
                <div style={{ width: '100%', height: '100%' }}>
                    <Lottie options={defaultOptions} height="100%" width="100%" />
                </div>
            </foreignObject>
        </svg>
    );
};

export default DevOpsAnimation;