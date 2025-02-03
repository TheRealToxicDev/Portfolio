import {
    SiReact,
    SiHeadlessui,
    SiChakraui,
    SiShadcnui,
    SiNodedotjs,
    SiNextdotjs,
    SiSupabase,
    SiNuxtdotjs,
    SiPostgresql,
    SiSequelize,
    SiPrisma,
    SiLerna,
    SiGit,
    SiPreact,
    SiPnpm,
    SiClerk,
    SiExpress,
    SiFastify,
    SiVuedotjs,
    SiNextra,
    SiVercel,
    SiNetlify,
    SiRailway,
    SiMysql,
    SiRedis,
    SiMongodb,
    SiAmazons3,
    SiDocker,
    SiCloudflare,
    SiGithub,
    SiAngular,
    SiGitlab,
    SiKubernetes,
    SiGooglecloud,
    SiDigitalocean,
    SiHeroku,
    SiNpm,
    SiYarn,
    SiBun,
    SiGatsby,
    SiJekyll,
    SiTailwindcss,
    SiBootstrap,
    SiBulma,
    SiGraphql,
    SiApollographql,
    SiSwagger,
    SiAuth0,
    SiFirebase,
    SiPassport,
    SiPrometheus,
    SiGrafana,
    SiDatadog,
} from "react-icons/si";

const technologies = [
    {
        category: "Frontend",
        items: [
            {
                name: "React",
                icon: <SiReact className="w-10 h-10 text-blue-500" />,
                link: "https://reactjs.org/",
                description:
                    "A JavaScript library for building user interfaces.",
            },
            {
                name: "Vue.js",
                icon: <SiVuedotjs className="w-10 h-10 text-green-500" />,
                link: "https://vuejs.org/",
                description: "The Progressive JavaScript Framework.",
            },
            {
                name: "Next.js",
                icon: <SiNextdotjs className="w-10 h-10 text-white" />,
                link: "https://nextjs.org/",
                description: "The React Framework for Production.",
            },
            {
                name: "Angular",
                icon: <SiAngular className="w-10 h-10 text-red-500" />,
                link: "https://angular.io/",
                description: "One framework. Mobile & desktop.",
            },
            {
                name: "Nuxt.js",
                icon: <SiNuxtdotjs className="w-10 h-10 text-white" />,
                link: "https://nuxtjs.org/",
                description: "The Intuitive Vue Framework.",
            },
            {
                name: "Preact",
                icon: <SiPreact className="w-10 h-10 text-green-500" />,
                link: "https://preactjs.com/",
                description:
                    "Fast 3kB alternative to React with the same modern API.",
            },
        ],
    },
    {
        category: "Backend",
        items: [
            {
                name: "Node.js",
                icon: <SiNodedotjs className="w-10 h-10 text-green-500" />,
                link: "https://nodejs.org/",
                description: "JavaScript runtime built on Chrome's V8 engine.",
            },
            {
                name: "Express",
                icon: <SiExpress className="w-10 h-10 text-white" />,
                link: "https://expressjs.com/",
                description:
                    "Fast, unopinionated, minimalist web framework for Node.js.",
            },
            {
                name: "Fastify",
                icon: <SiFastify className="w-10 h-10 text-blue-500" />,
                link: "https://www.fastify.io/",
                description:
                    "Fast and low overhead web framework, for Node.js.",
            },
        ],
    },
    {
        category: "Database",
        items: [
            {
                name: "MySQL",
                icon: <SiMysql className="w-10 h-10 text-blue-500" />,
                link: "https://www.mysql.com/",
                description: "The world's most popular open source database.",
            },
            {
                name: "MongoDB",
                icon: <SiMongodb className="w-10 h-10 text-green-500" />,
                link: "https://www.mongodb.com/",
                description: "The database for modern applications.",
            },
            {
                name: "Redis",
                icon: <SiRedis className="w-10 h-10 text-red-500" />,
                link: "https://redis.io/",
                description: "An open source, in-memory data structure store.",
            },
            {
                name: "PostgreSQL",
                icon: <SiPostgresql className="w-10 h-10 text-blue-500" />,
                link: "https://www.postgresql.org/",
                description: "The world's most advanced open source database.",
            },
            {
                name: "Sequelize",
                icon: <SiSequelize className="w-10 h-10 text-blue-500" />,
                link: "https://sequelize.org/",
                description:
                    "A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.",
            },
            {
                name: "Prisma",
                icon: <SiPrisma className="w-10 h-10 text-white" />,
                link: "https://www.prisma.io/",
                description: "Next-generation ORM for Node.js and TypeScript.",
            },
        ],
    },
    {
        category: "Cloud & DevOps",
        items: [
            {
                name: "AWS",
                icon: <SiAmazons3 className="w-10 h-10 text-orange-400" />,
                link: "https://aws.amazon.com/",
                description:
                    "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
            },
            {
                name: "Docker",
                icon: <SiDocker className="w-10 h-10 text-blue-400" />,
                link: "https://www.docker.com/",
                description:
                    "Empowering app development for developers and development teams.",
            },
            {
                name: "Cloudflare",
                icon: <SiCloudflare className="w-10 h-10 text-orange-500" />,
                link: "https://www.cloudflare.com/",
                description: "Making the Internet work the way it should.",
            },
            {
                name: "Vercel",
                icon: <SiVercel className="w-10 h-10 text-white" />,
                link: "https://vercel.com/",
                description:
                    "Develop. Preview. Ship. For the best frontend teams.",
            },
            {
                name: "Netlify",
                icon: <SiNetlify className="w-10 h-10 text-white" />,
                link: "https://www.netlify.com/",
                description: "Build, deploy, and scale modern web projects.",
            },
            {
                name: "Railway",
                icon: <SiRailway className="w-10 h-10 text-white" />,
                link: "https://railway.app/",
                description:
                    "Infrastructure platform where you can provision infrastructure, develop with that infrastructure locally, and then deploy to the cloud.",
            },
            {
                name: "Google Cloud Platform (GCP)",
                icon: <SiGooglecloud className="w-10 h-10 text-blue-500" />,
                link: "https://cloud.google.com/",
                description:
                    "Build, deploy, and scale applications, websites, and services on the same infrastructure as Google.",
            },
            {
                name: "DigitalOcean",
                icon: <SiDigitalocean className="w-10 h-10 text-blue-500" />,
                link: "https://www.digitalocean.com/",
                description:
                    "Simplifies cloud computing so developers and businesses can spend more time building software that changes the world.",
            },
            {
                name: "Heroku",
                icon: <SiHeroku className="w-10 h-10 text-purple-500" />,
                link: "https://www.heroku.com/",
                description:
                    "Build, run, and operate applications entirely in the cloud.",
            },
            {
                name: "GitLab CI/CD",
                icon: <SiGitlab className="w-10 h-10 text-orange-500" />,
                link: "https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",
                description:
                    "A complete DevOps platform, delivered as a single application.",
            },
            {
                name: "Kubernetes",
                icon: <SiKubernetes className="w-10 h-10 text-blue-500" />,
                link: "https://kubernetes.io/",
                description:
                    "Automating deployment, scaling, and management of containerized applications.",
            },
        ],
    },
    {
        category: "Version Control",
        items: [
            {
                name: "GitHub",
                icon: <SiGithub className="w-10 h-10 text-gray-200" />,
                link: "https://github.com/",
                description: "Where the world builds software.",
            },
            {
                name: "Lerna",
                icon: <SiLerna className="w-10 h-10 text-blue-500" />,
                link: "https://lerna.js.org/",
                description:
                    "A tool for managing JavaScript projects with multiple packages.",
            },
            {
                name: "Git",
                icon: <SiGit className="w-10 h-10 text-red-500" />,
                link: "https://git-scm.com/",
                description:
                    "Free and open source distributed version control system.",
            },
        ],
    },
    {
        category: "Package Managers",
        items: [
            {
                name: "npm",
                icon: <SiNpm className="w-10 h-10 text-red-500" />,
                link: "https://www.npmjs.com/",
                description: "The package manager for JavaScript.",
            },
            {
                name: "bun",
                icon: <SiBun className="w-10 h-10 text-red-500" />,
                link: "https://bun.sh",
                description: "Bun is a fast JavaScript package manager",
            },
            {
                name: "Yarn",
                icon: <SiYarn className="w-10 h-10 text-blue-500" />,
                link: "https://yarnpkg.com/",
                description:
                    "Fast, reliable, and secure dependency management.",
            },
            {
                name: "pnpm",
                icon: <SiPnpm className="w-10 h-10 text-yellow-500" />,
                link: "https://pnpm.io/",
                description: "Fast, disk space efficient package manager.",
            },
        ],
    },
    {
        category: "Static Site Generators",
        items: [
            {
                name: "Gatsby",
                icon: <SiGatsby className="w-10 h-10 text-purple-500" />,
                link: "https://www.gatsbyjs.com/",
                description: "Blazing fast modern site generator for React.",
            },
            {
                name: "Jekyll",
                icon: <SiJekyll className="w-10 h-10 text-red-500" />,
                link: "https://jekyllrb.com/",
                description:
                    "Transform your plain text into static websites and blogs.",
            },
            {
                name: "Nextra",
                icon: <SiNextra className="w-10 h-10 text-white" />,
                link: "https://nextra.vercel.app/",
                description: "The Next.js static site generator.",
            },
        ],
    },
    {
        category: "CSS Frameworks",
        items: [
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="w-10 h-10 text-blue-500" />,
                link: "https://tailwindcss.com/",
                description:
                    "A utility-first CSS framework for rapid UI development.",
            },
            {
                name: "Bootstrap",
                icon: <SiBootstrap className="w-10 h-10 text-purple-500" />,
                link: "https://getbootstrap.com/",
                description:
                    "The most popular HTML, CSS, and JS library in the world.",
            },
            {
                name: "Bulma",
                icon: <SiBulma className="w-10 h-10 text-green-500" />,
                link: "https://bulma.io/",
                description: "Modern CSS framework based on Flexbox.",
            },
            {
                name: "Chakra UI",
                icon: <SiChakraui className="w-10 h-10 text-blue-500" />,
                link: "https://chakra-ui.com/",
                description:
                    "Simple, modular and accessible component library.",
            },
            {
                name: "Headless UI",
                icon: <SiHeadlessui className="w-10 h-10 text-blue-500" />,
                link: "https://headlessui.dev/",
                description:
                    "Completely unstyled, fully accessible UI components.",
            },
            {
                name: "Shadcn UI",
                icon: <SiShadcnui className="w-10 h-10 text-blue-500" />,
                link: "https://ui.shadcn.com/",
                description:
                    "A collection of re-usable components built using Radix UI and Tailwind CSS.",
            },
        ],
    },
    {
        category: "API Tools",
        items: [
            {
                name: "GraphQL",
                icon: <SiGraphql className="w-10 h-10 text-pink-500" />,
                link: "https://graphql.org/",
                description: "A query language for your API.",
            },
            {
                name: "Apollo",
                icon: <SiApollographql className="w-10 h-10 text-blue-500" />,
                link: "https://www.apollographql.com/",
                description: "The industry-standard GraphQL implementation.",
            },
            {
                name: "Swagger",
                icon: <SiSwagger className="w-10 h-10 text-green-500" />,
                link: "https://swagger.io/",
                description:
                    "Simplify API development for users, teams, and enterprises.",
            },
        ],
    },
    {
        category: "Authentication",
        items: [
            {
                name: "Auth0",
                icon: <SiAuth0 className="w-10 h-10 text-orange-500" />,
                link: "https://auth0.com/",
                description: "Secure access for everyone. But not just anyone.",
            },
            {
                name: "Firebase Authentication",
                icon: <SiFirebase className="w-10 h-10 text-yellow-500" />,
                link: "https://firebase.google.com/products/auth",
                description:
                    "Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.",
            },
            {
                name: "Passport.js",
                icon: <SiPassport className="w-10 h-10 text-green-500" />,
                link: "http://www.passportjs.org/",
                description: "Simple, unobtrusive authentication for Node.js.",
            },
            {
                name: "Supabase",
                icon: <SiSupabase className="w-10 h-10 text-blue-500" />,
                link: "https://supabase.io/",
                description: "The open source Firebase alternative.",
            },
            {
                name: "Clerk",
                icon: <SiClerk className="w-10 h-10 text-blue-500" />,
                link: "https://clerk.dev/",
                description:
                    "The easiest way to add authentication and user management to your application.",
            },
        ],
    },
    {
        category: "Monitoring and Logging",
        items: [
            {
                name: "Prometheus",
                icon: <SiPrometheus className="w-10 h-10 text-orange-500" />,
                link: "https://prometheus.io/",
                description: "Powerful monitoring and alerting toolkit.",
            },
            {
                name: "Grafana",
                icon: <SiGrafana className="w-10 h-10 text-orange-500" />,
                link: "https://grafana.com/",
                description: "The open observability platform.",
            },
            {
                name: "Datadog",
                icon: <SiDatadog className="w-10 h-10 text-purple-500" />,
                link: "https://www.datadoghq.com/",
                description: "Cloud-scale monitoring and security.",
            },
        ],
    },
];

export default technologies;
