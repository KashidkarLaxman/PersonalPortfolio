// All portfolio content lives here so it can be updated without touching layout code.

export const profile = {
    name: 'Laxman Kashidkar',
    role: 'Senior Software Engineer',
    company: 'CitiusTech',
    location: 'Pune, Maharashtra',
    email: 'kashidkar37@gmail.com',
    resume: '/laxman_kashidkar_resume.pdf',
    headline: 'Full Stack Python Engineer building GenAI systems & data platforms',
    rotating: [
        'Python · FastAPI · React',
        'RAG & Agentic AI',
        'Databricks · PySpark · Snowflake',
    ],
    summary:
        'Full Stack Developer with 6+ years designing and scaling Python/FastAPI systems, distributed data pipelines and production AI applications. ' +
        'I build Retrieval-Augmented Generation (RAG) pipelines with vector search on Azure AI Search and Azure AI Foundry, process data at scale on Azure Databricks, PySpark and Snowflake, ' +
        'and work hands-on with agentic AI tooling: LangChain, LangGraph and MCP (Model Context Protocol). ' +
        'I measurably improve performance, cut latency and ship production features end to end.',
    education: [
        { degree: 'Master of Computer Applications (MCA)', school: 'IICMR, Pune', years: '2017 – 2020' },
        { degree: 'Bachelor of Computer Applications (BCA)', school: 'Sangameshwar College, Solapur', years: '2014 – 2017' },
    ],
    certifications: ['Machine Learning — Coursera', 'Data Analysis — Coursera'],
}

export const stats = [
    { value: '6+', label: 'Years building production software' },
    { value: '40%', label: 'Average API latency cut' },
    { value: '35%', label: 'Better test-case relevance with RAG' },
    { value: '100+', label: 'Documents ingested per session' },
]

export const expertise = [
    {
        key: 'fullstack',
        title: 'Full Stack Python + React',
        description:
            'Async FastAPI, Flask and Django services with React and Vue front ends. REST APIs, OAuth 2.0, caching and system design for distributed, production workloads.',
        tags: ['Python', 'FastAPI', 'Django', 'Flask', 'React', 'Vue', 'OAuth 2.0', 'System Design'],
        gradient: 'from-cyan-400 to-blue-600',
    },
    {
        key: 'genai',
        title: 'Generative & Agentic AI',
        description:
            'RAG pipelines from ingestion through embedding to retrieval, vector search on Azure AI Search, Azure AI Foundry, multi-provider LLM routing, tool calling and agent workflows.',
        tags: ['LLMs', 'RAG', 'Azure AI Foundry', 'Azure AI Search', 'LangChain', 'LangGraph', 'MCP', 'Prompt Engineering'],
        gradient: 'from-violet-400 to-fuchsia-600',
    },
    {
        key: 'data',
        title: 'Data Engineering at Scale',
        description:
            'Config-driven Spark pipelines on Azure Databricks and Snowflake, tuned with AQE, shuffle-partition tuning and broadcast joins, plus JDBC integrations and audit-grade validation.',
        tags: ['Azure Databricks', 'PySpark', 'Snowflake', 'Spark SQL', 'SQL Server', 'PostgreSQL', 'ETL'],
        gradient: 'from-emerald-400 to-teal-600',
    },
]

export const experience = [
    {
        company: 'CitiusTech',
        role: 'Senior Software Engineer',
        location: 'Pune',
        period: 'Feb 2024 – Present',
        current: true,
        points: [
            'Built and scaled full stack services for an enterprise document management platform, cutting manual documentation effort by 30%+.',
            'Developed FastAPI pipelines for Word/Excel/PDF document transformation, improving processing efficiency by 25%.',
            'Implemented caching and API optimizations that cut average response latency by 40%.',
            'Worked across Azure Databricks (PySpark) and Snowflake for large-scale healthcare data processing and validation.',
        ],
        highlights: [
            {
                title: 'AI Test Case Generator (RAG)',
                text: 'Conversational test-case generator on FastAPI with an Azure AI Foundry / Azure AI Search vector store: 35% more relevant test cases, 40% less authoring time.',
            },
            {
                title: 'HEDIS Validation Pipeline (Databricks / Spark)',
                text: 'Config-driven HEDIS measure validation on Azure Databricks with SQL Server (JDBC) lookups, shipped as a Python wheel via Databricks Jobs.',
            },
        ],
        tags: ['FastAPI', 'Azure AI Foundry', 'Azure AI Search', 'Databricks', 'PySpark', 'Snowflake'],
    },
    {
        company: 'Zinrelo',
        role: 'Full Stack Developer',
        location: 'Pune',
        period: 'Dec 2022 – Oct 2023',
        points: [
            'Led development of timezone-aware features, improving global usability across 10+ regions.',
            'Conducted code reviews and mentored developers, increasing team productivity and reducing defects.',
            'Worked in an Agile process: design-doc reviews, stand-ups and retrospectives.',
        ],
        tags: ['Python', 'React', 'REST APIs', 'Code Review'],
    },
    {
        company: 'Incentius',
        role: 'Solutions Developer',
        location: 'Pune',
        period: 'Jun 2020 – Dec 2022',
        points: [
            'Built full-stack B2B e-commerce applications with Flask/Django and Vue (Quasar), supporting thousands of users.',
            'Improved system reliability and cut issue-resolution time by 20% through stronger debugging practices and documentation.',
        ],
        tags: ['Flask', 'Django', 'Vue', 'Quasar', 'MongoDB'],
    },
    {
        company: '10x Academy',
        role: 'DSA & Full Stack Mentor (part-time)',
        location: 'Remote',
        period: 'Sep 2022 – Jan 2023',
        points: ['Mentored students on data structures, algorithms and full stack development through assignments and one-on-one sessions.'],
        tags: ['Mentoring', 'DSA'],
    },
]

export const projects = [
    {
        title: 'AI Video Generation Tool',
        kind: 'Personal project',
        description:
            'Turns a topic or news-article URL into a narrated, captioned video. A multi-provider LLM router writes the script scene by scene, TTS narrates it and Whisper syncs word-level captions.',
        points: [
            'Custom LLM router across Gemini, OpenAI, OpenRouter and Ollama with automatic fallback',
            'Multi-tier visual sourcing: web search, then Pexels stock, then AI-generated imagery',
            'Parallel scene rendering with ThreadPoolExecutor; MoviePy composition with karaoke captions',
            'Streamlit UI with a review-and-edit script stage for news articles',
        ],
        tags: ['Python', 'Streamlit', 'MoviePy', 'Whisper', 'edge-tts', 'LLM Routing'],
        gradient: 'from-fuchsia-500 via-violet-500 to-indigo-500',
    },
    {
        title: 'AI Test Case Generator',
        kind: 'Enterprise · CitiusTech',
        description:
            'A conversational RAG system that generates test cases grounded in project documentation, backed by an Azure AI Foundry / Azure AI Search vector store.',
        points: [
            'End-to-end ingestion, embedding and retrieval pipeline',
            'Secure multipart uploads handling 100+ documents per session',
            '35% better test-case relevance, 40% less authoring time',
        ],
        tags: ['FastAPI', 'RAG', 'Azure AI Foundry', 'Azure AI Search', 'LLMs'],
        gradient: 'from-cyan-500 via-sky-500 to-blue-600',
    },
    {
        title: 'HEDIS Validation Pipeline',
        kind: 'Enterprise · CitiusTech',
        description:
            'An automated, config-driven pipeline that validates HEDIS healthcare quality measures at scale, with dynamic rule and threshold lookups from SQL Server.',
        points: [
            'PySpark on Azure Databricks, packaged as a Python wheel and run as Databricks Jobs',
            'Spark tuning: AQE, shuffle-partition sizing, broadcast joins',
            'Structured audit reporting with schema and row-count validation',
        ],
        tags: ['Azure Databricks', 'PySpark', 'Spark SQL', 'SQL Server', 'JDBC'],
        gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    },
]

export const skills = [
    { group: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'Spark SQL'] },
    {
        group: 'Backend & APIs',
        items: ['FastAPI', 'Flask', 'Django', 'REST APIs', 'Async Processing', 'OAuth 2.0', 'System Design', 'Distributed Systems'],
    },
    { group: 'Frontend', items: ['React', 'Vue', 'Quasar', 'Tailwind CSS', 'Firebase'] },
    {
        group: 'GenAI & Agentic AI',
        items: ['LLMs', 'RAG', 'Vector Search', 'LangChain', 'LangGraph', 'MCP', 'Tool / Function Calling', 'LLM Fine-Tuning', 'Prompt Engineering'],
    },
    {
        group: 'Data & Big Data',
        items: ['Azure Databricks', 'PySpark', 'Snowflake', 'SQL Server', 'PostgreSQL', 'MongoDB', 'JDBC', 'ETL'],
    },
    {
        group: 'Cloud & DevOps',
        items: ['Azure AI Foundry', 'Azure AI Search', 'AWS EC2', 'Docker', 'CI/CD', 'Git', 'Logging & Monitoring'],
    },
    { group: 'Media AI', items: ['Streamlit', 'MoviePy', 'Whisper', 'edge-tts / gTTS', 'Multi-provider LLM routing'] },
]

export const marquee = [
    'Python', 'FastAPI', 'React', 'LangChain', 'LangGraph', 'MCP', 'Azure AI Foundry', 'RAG',
    'Databricks', 'PySpark', 'Snowflake', 'Django', 'Docker', 'PostgreSQL', 'Vector Search', 'Spark SQL',
]

export const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/laxmankashidkar/' },
    { name: 'GitHub', href: 'https://github.com/KashidkarLaxman/' },
    { name: 'Medium', href: 'https://medium.com/@laxmankashidkar' },
    { name: 'X', href: 'https://twitter.com/kashidkarLaxman' },
    { name: 'Instagram', href: 'https://www.instagram.com/kashidkarlaxman/' },
]
