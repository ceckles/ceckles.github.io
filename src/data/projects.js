// Featured projects — these mirror the pinned repos on https://github.com/ceckles.
// Keep this list in sync with your pinned repos; edit freely.
// Each project with a `caseStudy` object gets a generated page at /projects/[slug].
export const projects = [
  {
    slug: 'nextjs-fullstack',
    title: 'Inventory Manager',
    tagline: 'A full-stack inventory system with auth, analytics, and real-time search.',
    description:
      'A test/learning project for modern Next.js fullstack patterns — product CRUD, an analytics dashboard, and inventory tracking behind real authentication.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'PostgreSQL (Neon)', 'Stack Auth', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/ceckles/nextjs-fullstack',
    demo: 'https://nextjs-fullstack-swart-delta.vercel.app',
    stars: 0,
    outcome: 'A working inventory system — auth, CRUD, low-stock tracking, and an analytics dashboard — deployed end to end.',
    featured: true,
    caseStudy: {
      problem:
        "I wanted a real fullstack build to learn modern Next.js patterns properly — Server Components and Server Actions — rather than another toy CRUD app. Inventory management gave it enough surface area: auth, relational data, and a dashboard.",
      constraints:
        'Needed end-to-end type safety without giving up a simple Vercel deploy, which meant a serverless-friendly Postgres (Neon) and an auth provider that doesn\'t require running a separate server alongside the app.',
      architecture:
        'Next.js Server Actions handle mutations directly, skipping a separate API route layer entirely. Prisma models a Product table with inventory-specific fields (quantity, low-stock threshold), Stack Auth handles authentication, and Recharts renders the analytics dashboard from the same data.',
      results: [
        'Product CRUD, real-time search, and pagination all working',
        'Analytics dashboard with live charts',
        'Deployed and live on Vercel',
      ],
      lessons:
        'Using Server Actions instead of hand-rolled API routes cut out a whole layer of boilerplate — the tradeoff is tighter coupling to Next.js itself if I ever wanted a separate mobile client.',
    },
  },
  {
    slug: 'react-go',
    title: 'Fiber + React Todo',
    tagline: 'A todo app split across a Go backend and a React frontend.',
    description:
      'A full-stack todo app with a Go/Fiber REST API backed by MongoDB, and a separate React + Vite frontend — deployed as two independently running services.',
    tech: ['Go', 'Fiber', 'MongoDB', 'React', 'Vite', 'TypeScript', 'Chakra UI', 'TanStack Query'],
    github: 'https://github.com/ceckles/react-go',
    demo: 'https://react-go-api-task.vercel.app',
    stars: 0,
    outcome: 'Working CRUD todos with real-time status toggling, running as two independently deployed services.',
    featured: true,
    caseStudy: {
      problem:
        'I wanted hands-on practice pairing a Go backend with a modern React frontend, and to do it as two genuinely separate deployable services instead of a monolith.',
      constraints:
        'Frontend and backend needed independent deploy targets (Vercel for the client, Render for the API), so CORS handling and environment-based API URLs had to be right from the start rather than assumed away by same-origin requests.',
      architecture:
        'Go + Fiber exposes a REST CRUD API backed by MongoDB. The React + Vite frontend uses TanStack Query for server state and Chakra UI for components. Air and Vite give hot-reload on the backend and frontend respectively during development.',
      results: [
        'Full CRUD API with create/read/update/delete and status toggling',
        'Frontend and backend deployed independently (Vercel + Render)',
        'Documented REST endpoints with example requests/responses',
      ],
      lessons:
        'Splitting frontend and backend into separately deployed services surfaced CORS and environment-config issues immediately during development — better than discovering them after a "works on my machine" monolith deploy.',
    },
  },
  {
    slug: 'go-task-cli',
    title: 'Go Task CLI',
    tagline: 'A command-line task tracker written in Go.',
    description:
      'A CLI tool for adding, listing, and completing tasks from the terminal — a from-scratch Go project to learn the language\'s standard library.',
    tech: ['Go', 'CLI', 'JSON storage'],
    github: 'https://github.com/ceckles/GO-Task-Cli',
    demo: null,
    stars: 0,
    outcome: 'A dependency-free way to track todos without leaving the terminal.',
    featured: true,
    caseStudy: {
      problem:
        "I wanted a hands-on project to learn Go's standard library — argument parsing, file I/O, and structuring a CLI — without reaching for a framework.",
      constraints:
        'Kept it dependency-free on purpose: no third-party CLI framework, just the Go standard library, to force a deeper understanding of the basics.',
      architecture:
        'Tasks are stored as JSON on disk; the CLI parses subcommands (add, list, complete, delete) and reads/writes the task file on each invocation.',
      results: [
        'Fully working CLI with add/list/complete/delete commands',
        'Zero external dependencies',
      ],
      lessons:
        'Writing the JSON persistence layer by hand made Go\'s explicit error handling click in a way tutorials hadn\'t.',
    },
  },
  {
    slug: 'vite-popularmovies',
    title: 'Movie Discovery',
    tagline: 'Search movies and see what everyone else is searching for.',
    description:
      'A movie discovery app built on the TMDB API, with a twist: it tracks and surfaces the titles other users search for most, not just what TMDB thinks is popular.',
    tech: ['React 19', 'Vite', 'Tailwind CSS 4', 'TMDB API', 'Appwrite'],
    github: 'https://github.com/ceckles/vite-popularmovies',
    demo: 'https://vite-popularmovies.vercel.app',
    stars: 0,
    outcome: 'A trending section grounded in real search activity, not just TMDB\'s own popularity metric.',
    featured: true,
    caseStudy: {
      problem:
        'Most TMDB-wrapper apps just mirror TMDB\'s own "popular" endpoint. I wanted the trending section to reflect what people were actually searching for in this app.',
      constraints:
        "TMDB's API has no concept of this app's search trends, so tracking \"trending searches\" meant standing up a persistence layer myself instead of just reading from the API.",
      architecture:
        'The React + Vite frontend debounces search input against the TMDB API for results, and separately logs each search term to an Appwrite database. A query against that Appwrite table aggregates the top 5 most-searched titles for the trending section.',
      results: [
        'Debounced live search against TMDB',
        'Trending-titles section driven by real, persisted search data',
        'Deployed and live on Vercel',
      ],
      lessons:
        'Debouncing cut wasted API calls immediately, but the bigger lesson was that "trending" needed its own data store — TMDB\'s API alone couldn\'t answer that question.',
    },
  },
  {
    slug: 'crypto-watch',
    title: 'Crypto Watch',
    tagline: 'A real-time cryptocurrency tracker with history, not just a price ticker.',
    description:
      'A dashboard for the top 100 cryptocurrencies with 7-day price history, sortable/filterable views, and per-coin detail pages — built to be fast and readable at a glance.',
    tech: ['React 19', 'Vite', 'Recharts', 'CoinGecko API'],
    github: 'https://github.com/ceckles/crypto-watch',
    demo: 'https://crypto-watch-puce.vercel.app',
    stars: 0,
    outcome: 'Lets you check live crypto prices and trends without wading through a cluttered exchange UI.',
    featured: true,
    caseStudy: {
      problem:
        'Exchange dashboards bury price data under trading UI you don\'t need if you just want to check where the market is and how it got there. Crypto Watch strips that down to numbers and a chart.',
      constraints:
        "CoinGecko's free tier caps at 50 calls/minute, so polling, sorting, and filtering all had to work against a single fetched page of data rather than re-querying the API on every interaction.",
      architecture:
        "A React + Vite app hits CoinGecko's markets, coin-detail, and chart endpoints. Recharts renders 7-day price history, sorting/filtering happens client-side against the last fetched page, and theme preference persists in localStorage.",
      results: [
        'Live tracker for the top 100 coins with 7-day history charts',
        'Sortable/filterable list with grid and list view modes',
        'Light/dark theme, deployed and live on Vercel',
      ],
      lessons:
        'Keeping sorting and filtering entirely client-side over one fetched page avoided extra API calls, at the cost of not supporting a true search-the-entire-market feature.',
    },
  },
  {
    slug: 'express-movies',
    title: 'Movie Watchlist API',
    tagline: 'A REST API for movies and watchlists with real auth and ownership rules.',
    description:
      'A backend API for managing movies and personal watchlists — JWT auth, per-user ownership checks, and Zod-validated requests in front of Postgres.',
    tech: ['Node.js', 'Express 5', 'Prisma', 'PostgreSQL (Neon)', 'JWT', 'Zod'],
    github: 'https://github.com/ceckles/express-movies',
    demo: null,
    stars: 0,
    outcome: 'A working auth + ownership model so users can only edit the movie entries they created.',
    featured: true,
    caseStudy: {
      problem:
        'I wanted a backend counterpart with actual auth and data ownership — not open CRUD where anyone can edit anyone\'s data — to pair with my frontend movie projects.',
      constraints:
        'Needed per-user ownership rules (only creators can modify their own entries) plus request validation strict enough to reject bad data before it ever reached Postgres.',
      architecture:
        'Express 5 and Prisma sit over PostgreSQL (Neon). JWT handles authentication, Zod schemas validate every request body, and Doppler manages secrets with a `.env` fallback for local development.',
      results: [
        'Auth (register/login/logout) and movie CRUD with ownership checks',
        'Watchlist API: status tracking (planned/watching/completed/dropped), ratings, notes',
        'Health check endpoint and Prisma Studio for local DB inspection',
      ],
      lessons:
        'Putting Zod validation in front of Prisma caught malformed requests before they hit the database — worth the small amount of schema duplication between the two.',
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
