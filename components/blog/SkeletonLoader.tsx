import React from "react";
import { cn } from "@/utils/cn";

const SkeletonLoader = ({ className }: { className?: string }) => {
    return (
        <div className={cn("animate-pulse bg-gray-700 rounded-3xl", className)} />
    );
};

export default SkeletonLoader;