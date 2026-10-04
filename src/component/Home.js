import React, { Suspense, useEffect, useState } from 'react'
import axios from 'axios'
import ReactTypingEffect from 'react-typing-effect'
import {
    AcademicCapIcon,
    ArrowRightIcon,
    BadgeCheckIcon,
    BriefcaseIcon,
    ChipIcon,
    CodeIcon,
    DatabaseIcon,
    DownloadIcon,
    ExternalLinkIcon,
    LocationMarkerIcon,
    MailIcon,
    MenuIcon,
    SparklesIcon,
    XIcon,
} from '@heroicons/react/outline'
import { Reveal, SceneBoundary, TiltCard } from './Effects'
import { expertise, experience, marquee, profile, projects, skills, socials, stats } from '../data/profile'

const Scene3D = React.lazy(() => import('./Scene3D'))

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
]

const expertiseIcons = { fullstack: CodeIcon, genai: SparklesIcon, data: DatabaseIcon }

const socialIcons = {
    LinkedIn: (props) => (
        <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.790 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
    ),
    GitHub: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.110-1.466-1.110-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.910.832.092-.647.350-1.088.636-1.338-2.220-.253-4.555-1.113-4.555-4.951 0-1.093.390-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.650 0 0 .840-.270 2.750 1.026A9.564 9.564 0 0112 6.844c.850.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.100 2.651.640.700 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.920.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.180.580.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
        </svg>
    ),
    Medium: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
    ),
    X: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    Instagram: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    ),
}

function hasWebGL() {
    try {
        const canvas = document.createElement('canvas')
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl2') || canvas.getContext('webgl')))
    } catch (e) {
        return false
    }
}

function SectionHeading({ eyebrow, title, subtitle }) {
    return (
        <Reveal className="max-w-3xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">{title}</h2>
            {subtitle && <p className="mt-4 text-lg text-slate-400">{subtitle}</p>}
        </Reveal>
    )
}

function Tag({ children }) {
    return (
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            {children}
        </span>
    )
}

function SocialLinks({ className = '' }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {socials.map((s) => {
                const Icon = socialIcons[s.name]
                return (
                    <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.name}
                        className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-white"
                    >
                        <Icon className="h-4 w-4" />
                    </a>
                )
            })}
        </div>
    )
}

function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled || open ? 'border-b border-white/10 bg-slate-950/80 backdrop-blur-xl' : 'bg-transparent'
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a href="#top" className="flex items-center gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 font-display text-sm font-bold text-white shadow-lg shadow-violet-500/30">
                        LK
                    </span>
                    <span className="font-display font-semibold text-white">Laxman</span>
                </a>
                <div className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((l) => (
                        <a key={l.name} href={l.href} className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                            {l.name}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <a
                        href={profile.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200 sm:inline-flex"
                    >
                        <DownloadIcon className="h-4 w-4" /> Resume
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </nav>
            {open && (
                <div className="border-t border-white/10 px-4 pb-6 pt-2 lg:hidden">
                    {navLinks.map((l) => (
                        <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">
                            {l.name}
                        </a>
                    ))}
                    <a href={profile.resume} target="_blank" rel="noreferrer" className="mt-2 block rounded-lg bg-white px-3 py-3 text-center font-semibold text-slate-900">
                        Download Resume
                    </a>
                </div>
            )}
        </header>
    )
}

function Hero() {
    const [webgl, setWebgl] = useState(true)
    useEffect(() => setWebgl(hasWebGL()), [])
    const orb = <div className="hero-orb" aria-hidden="true" />
    return (
        <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
            <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div className="relative z-10">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                            {profile.role} @ {profile.company}
                        </span>
                    </Reveal>
                    <Reveal delay={100}>
                        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-7xl">
                            Hi, I'm <span className="text-gradient inline-block pr-2">Laxman</span>
                            <br />
                            Kashidkar.
                        </h1>
                    </Reveal>
                    <Reveal delay={200}>
                        <p className="mt-6 max-w-xl text-lg text-slate-300 sm:text-xl">{profile.headline}.</p>
                    </Reveal>
                    <Reveal delay={300}>
                        <div className="mt-4 h-8 font-mono text-base text-cyan-300 sm:text-lg">
                            <span className="text-slate-500">&gt; </span>
                            <ReactTypingEffect text={profile.rotating} speed={60} eraseSpeed={30} typingDelay={300} eraseDelay={1800} />
                        </div>
                    </Reveal>
                    <Reveal delay={400}>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#projects" className="btn-primary">
                                View projects <ArrowRightIcon className="h-4 w-4" />
                            </a>
                            <a href={`mailto:${profile.email}`} className="btn-ghost">
                                <MailIcon className="h-4 w-4" /> Let's talk
                            </a>
                        </div>
                        <SocialLinks className="mt-8" />
                    </Reveal>
                </div>
                <div className="relative h-[360px] sm:h-[460px] lg:h-[620px]">
                    {webgl ? (
                        <SceneBoundary fallback={orb}>
                            <Suspense fallback={orb}>
                                <Scene3D />
                            </Suspense>
                        </SceneBoundary>
                    ) : (
                        orb
                    )}
                    <div className="float-chip left-0 top-10 sm:left-6">
                        <SparklesIcon className="h-4 w-4 text-fuchsia-300" /> RAG · Agents · MCP
                    </div>
                    <div className="float-chip float-delay right-0 top-1/2 sm:right-4">
                        <DatabaseIcon className="h-4 w-4 text-emerald-300" /> Databricks · Snowflake
                    </div>
                    <div className="float-chip float-delay-2 bottom-8 left-6 sm:left-16">
                        <CodeIcon className="h-4 w-4 text-cyan-300" /> FastAPI · React
                    </div>
                </div>
            </div>
            <div className="marquee mt-10 border-y border-white/10 bg-white/[0.02] py-4">
                <div className="marquee-track">
                    {[...marquee, ...marquee].map((m, i) => (
                        <span key={i} className="mx-6 font-display text-sm font-medium uppercase tracking-widest text-slate-400">
                            {m} <span className="ml-6 text-cyan-400/60">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Stats() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {stats.map((s, i) => (
                    <Reveal key={s.label} delay={i * 80}>
                        <TiltCard className="glass h-full rounded-2xl p-6">
                            <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">{s.value}</p>
                            <p className="mt-2 text-sm text-slate-400">{s.label}</p>
                        </TiltCard>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

function About() {
    return (
        <section id="about" className="section">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
                <Reveal className="lg:col-span-2">
                    <TiltCard max={14} className="portrait mx-auto max-w-sm rounded-3xl p-2">
                        <img src="/WhatsApp1.jpeg" alt="Laxman Kashidkar" className="aspect-square w-full rounded-[1.25rem] object-cover" />
                        <div className="portrait-badge">
                            <p className="font-display text-2xl font-bold text-white">6+ yrs</p>
                            <p className="text-xs text-slate-300">Python · AI · Data</p>
                        </div>
                    </TiltCard>
                </Reveal>
                <div className="lg:col-span-3">
                    <SectionHeading eyebrow="About me" title="Engineering AI products that ship to production." />
                    <Reveal delay={100}>
                        <p className="mt-6 text-lg leading-relaxed text-slate-300">{profile.summary}</p>
                    </Reveal>
                    <Reveal delay={200}>
                        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="glass rounded-2xl p-4">
                                <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">
                                    <BriefcaseIcon className="h-4 w-4" /> Currently
                                </dt>
                                <dd className="mt-1 font-medium text-white">
                                    {profile.role}, {profile.company}
                                </dd>
                            </div>
                            <div className="glass rounded-2xl p-4">
                                <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">
                                    <LocationMarkerIcon className="h-4 w-4" /> Based in
                                </dt>
                                <dd className="mt-1 font-medium text-white">{profile.location}</dd>
                            </div>
                            <div className="glass rounded-2xl p-4">
                                <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">
                                    <AcademicCapIcon className="h-4 w-4" /> Education
                                </dt>
                                <dd className="mt-1 font-medium text-white">MCA, IICMR Pune</dd>
                            </div>
                        </dl>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

function Expertise() {
    return (
        <section id="expertise" className="section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="What I do"
                    title="Three disciplines, one engineer."
                    subtitle="I work across the whole stack: the API, the UI, the model behind it and the data pipeline that feeds it."
                />
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {expertise.map((e, i) => {
                        const Icon = expertiseIcons[e.key]
                        return (
                            <Reveal key={e.key} delay={i * 120}>
                                <TiltCard className="glass h-full rounded-3xl p-8">
                                    <div className={`depth-pop grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${e.gradient} shadow-lg`}>
                                        <Icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="depth-pop mt-6 font-display text-2xl font-semibold text-white">{e.title}</h3>
                                    <p className="mt-3 text-slate-400">{e.description}</p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {e.tags.map((t) => (
                                            <Tag key={t}>{t}</Tag>
                                        ))}
                                    </div>
                                </TiltCard>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function Experience() {
    return (
        <section id="experience" className="section">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Experience" title="Where I've built things." />
                <ol className="relative mt-12 space-y-10 border-l border-white/10 pl-8 sm:pl-10">
                    {experience.map((job, i) => (
                        <li key={job.company} className="relative">
                            <span
                                className={`absolute -left-[42px] top-3 h-5 w-5 rounded-full border-2 sm:-left-[50px] ${
                                    job.current ? 'border-cyan-200 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]' : 'border-slate-500 bg-slate-900'
                                }`}
                            />
                            <Reveal delay={i * 60}>
                                <TiltCard max={4} className="glass rounded-3xl p-6 sm:p-8">
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <div>
                                            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{job.role}</h3>
                                            <p className="text-cyan-300">
                                                {job.company} <span className="text-slate-500">· {job.location}</span>
                                            </p>
                                        </div>
                                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
                                            {job.period}
                                        </span>
                                    </div>
                                    <ul className="mt-5 space-y-2">
                                        {job.points.map((p) => (
                                            <li key={p} className="flex gap-3 text-slate-300">
                                                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-violet-400" />
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {job.highlights && (
                                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                            {job.highlights.map((h) => (
                                                <div key={h.title} className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                                                    <p className="flex items-center gap-2 font-medium text-white">
                                                        <ChipIcon className="h-4 w-4 flex-none text-cyan-300" /> {h.title}
                                                    </p>
                                                    <p className="mt-2 text-sm text-slate-400">{h.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {job.tags.map((t) => (
                                            <Tag key={t}>{t}</Tag>
                                        ))}
                                    </div>
                                </TiltCard>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

function Projects() {
    return (
        <section id="projects" className="section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Featured work"
                    title="Projects across AI and data."
                    subtitle="Production systems from my day job, plus the things I build for fun."
                />
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {projects.map((p, i) => (
                        <Reveal key={p.title} delay={i * 120}>
                            <TiltCard className="glass flex h-full flex-col overflow-hidden rounded-3xl">
                                <div className={`relative h-40 bg-gradient-to-br ${p.gradient}`}>
                                    <div className="project-grid absolute inset-0" />
                                    <span className="absolute left-5 top-5 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                                        {p.kind}
                                    </span>
                                    <h3 className="depth-pop absolute bottom-5 left-5 right-5 font-display text-2xl font-bold text-white">{p.title}</h3>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <p className="text-slate-300">{p.description}</p>
                                    <ul className="mt-4 space-y-2">
                                        {p.points.map((pt) => (
                                            <li key={pt} className="flex gap-3 text-sm text-slate-400">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-400" />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                                        {p.tags.map((t) => (
                                            <Tag key={t}>{t}</Tag>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Skills() {
    return (
        <section id="skills" className="section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Toolbox" title="Skills & technologies." />
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((s, i) => (
                        <Reveal key={s.group} delay={(i % 3) * 100}>
                            <div className="glass h-full rounded-3xl p-6">
                                <h3 className="font-display text-lg font-semibold text-white">{s.group}</h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {s.items.map((it) => (
                                        <span key={it} className="skill-chip">
                                            {it}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                    <Reveal delay={100}>
                        <div className="glass h-full rounded-3xl p-6">
                            <h3 className="font-display text-lg font-semibold text-white">Education & certifications</h3>
                            <ul className="mt-4 space-y-3">
                                {profile.education.map((e) => (
                                    <li key={e.degree} className="flex gap-3">
                                        <AcademicCapIcon className="mt-0.5 h-5 w-5 flex-none text-violet-300" />
                                        <span className="text-sm text-slate-300">
                                            {e.degree}
                                            <br />
                                            <span className="text-slate-500">
                                                {e.school} · {e.years}
                                            </span>
                                        </span>
                                    </li>
                                ))}
                                {profile.certifications.map((c) => (
                                    <li key={c} className="flex gap-3">
                                        <BadgeCheckIcon className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                                        <span className="text-sm text-slate-300">{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

function stripHtml(html) {
    const div = document.createElement('div')
    div.innerHTML = html
    return (div.textContent || '').trim()
}

function Blog() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios
            .get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@laxmankashidkar')
            .then((res) => setPosts((res.data.items || []).slice(0, 3)))
            .catch(() => setPosts([]))
    }, [])
    return (
        <section id="blog" className="section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <SectionHeading eyebrow="Writing" title="From my blog." />
                    <a href="https://medium.com/@laxmankashidkar" target="_blank" rel="noreferrer" className="btn-ghost">
                        All posts on Medium <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                </div>
                {posts.length > 0 && (
                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {posts.map((post, i) => (
                            <Reveal key={post.guid || post.link} delay={i * 100}>
                                <a href={post.link} target="_blank" rel="noreferrer" className="block h-full">
                                    <TiltCard max={6} className="glass h-full overflow-hidden rounded-3xl">
                                        {post.thumbnail ? (
                                            <img src={post.thumbnail} alt="" className="h-44 w-full object-cover" />
                                        ) : (
                                            <div className="h-44 bg-gradient-to-br from-violet-600/60 to-cyan-500/60" />
                                        )}
                                        <div className="p-6">
                                            <p className="font-mono text-xs text-slate-500">
                                                {new Date(String(post.pubDate).replace(' ', 'T')).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </p>
                                            <h3 className="mt-2 font-display text-lg font-semibold text-white">{post.title}</h3>
                                            <p className="mt-2 text-sm text-slate-400">{stripHtml(post.description || '').slice(0, 160)}…</p>
                                        </div>
                                    </TiltCard>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

function Contact() {
    return (
        <section id="contact" className="section">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <TiltCard max={5} className="contact-card rounded-[2rem] p-8 text-center sm:p-16">
                        <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Contact</p>
                        <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl">Let's build something intelligent.</h2>
                        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-200">
                            Have a GenAI, full stack or data platform role or project in mind? My inbox is open.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <a href={`mailto:${profile.email}`} className="btn-primary break-all">
                                <MailIcon className="h-4 w-4 flex-none" /> {profile.email}
                            </a>
                            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
                                <DownloadIcon className="h-4 w-4" /> Resume
                            </a>
                        </div>
                        <SocialLinks className="mt-8 justify-center" />
                    </TiltCard>
                </Reveal>
            </div>
        </section>
    )
}

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-200">
            <div className="aurora" aria-hidden="true">
                <span className="aurora-a" />
                <span className="aurora-b" />
                <span className="aurora-c" />
            </div>
            <div className="bg-grid" aria-hidden="true" />
            <Navbar />
            <main className="relative">
                <Hero />
                <Stats />
                <About />
                <Expertise />
                <Experience />
                <Projects />
                <Skills />
                <Blog />
                <Contact />
            </main>
            <footer className="relative border-t border-white/10 py-10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
                    <p>
                        © {new Date().getFullYear()} {profile.name}. Built with React & Three.js.
                    </p>
                    <SocialLinks />
                </div>
            </footer>
        </div>
    )
}
