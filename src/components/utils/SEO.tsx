import Head from 'next/head';

interface SEOProps {
    title: string;
    description: string;
}

export const SEO = ({ title, description }: SEOProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@TheRealToxicDev" />
            <meta name="twitter:creator" content="@TheRealToxicDev" />
            <meta name="twitter:image" content="/banner.png" />

            <link rel="icon" href="/logo.png" />
        </Head>
    );
};
