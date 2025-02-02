import clsx from "clsx";
import React, { ComponentProps, createElement } from "react";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

import { Card, Cards } from "./card";
import { Pre } from "./pre";

function heading<T extends keyof JSX.IntrinsicElements>(
    element: T,
    { id, children, className, ...props }: ComponentProps<T> & { id?: string; className?: string }
) {
    return createElement(element, {
        ...props,
        className: clsx(`group`, className),
        children: [
            <span key="anchor" id={id} className="absolute -mt-20" />,
            children,
            <a
                key="link"
                href={`#${id}`}
                className="opacity-0 group-hover:opacity-100 inline-block ml-2 text-muted-foreground"
            >
                <LinkIcon className="w-4 h-4" />
            </a>,
        ],
    });
}

export function MdxContent({ code }: { code: string }) {
    const MDXComponent = useMDXComponent(code);

    return (
        <div className="prose prose-text prose-pre:grid prose-pre:border-[1px] prose-code:bg-secondary prose-code:p-1 max-w-none">
            <MDXComponent
                components={{
                    Card: Card,
                    Cards: Cards,
                    pre: (props) => <Pre {...props} />,
                    h1: (props) => heading("h1", props),
                    h2: (props) => heading("h2", props),
                    h3: (props) => heading("h3", props),
                    h4: (props) => heading("h4", props),
                    h5: (props) => heading("h5", props),
                    h6: (props) => heading("h6", props),
                    a: ({ href, ref, ...props }) => {
                        if (href == null) return <></>;

                        const isExternalUrl = !(
                            href.startsWith("/") || href.startsWith("#")
                        );

                        return (
                            <Link
                                {...props}
                                href={href}
                                target={isExternalUrl ? "_blank" : "_self"}
                                rel={isExternalUrl ? "noreferrer" : undefined}
                            />
                        );
                    },
                }}
            />
        </div>
    );
}