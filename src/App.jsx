import {useEffect, useMemo, useState} from "react";
import {motion as Motion} from "framer-motion";

import {Badge} from "../components/ui/badge";
import {Button} from "../components/ui/button";
import {
    ArrowUp,
    ArrowUpRight,
    BookOpen,
    BriefcaseBusiness,
    CalendarFold,
    Download,
    FileText,
    Github,
    Globe2,
    GraduationCap,
    Linkedin,
    Mail,
    MapPin,
    Moon,
    Newspaper,
    School,
    Sun,
} from "lucide-react";

const reveal = {
    initial: {opacity: 0, y: 14},
    whileInView: {opacity: 1, y: 0},
    viewport: {once: true, margin: "-80px"},
    transition: {duration: 0.55, ease: [0.22, 1, 0.36, 1]},
};

function getInitialTheme() {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function ThemeToggle() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="theme-toggle"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
            <span className="theme-toggle-glow"/>
            {isDark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
        </button>
    );
}

function Intro() {
    return (
        <span>
            Hi! I&apos;m a PhD student at UC San Diego, working with{" "}
            <a className="inline-link" href="https://pages.ucsd.edu/~ztu/" target="_blank" rel="noreferrer">
                Prof. Zhuowen Tu
            </a>
            . Previously, I completed my bachelor&apos;s in Computer Science at ShanghaiTech University under the
            supervision of Prof. Xuming He. My research focuses on generative models and controllable image and video
            generation. I&apos;m passionate about turning ambitious research ideas into useful creative systems.
        </span>
    );
}

export default function PersonalSite() {
    const data = useMemo(
        () => ({
            name: "Bingnan Li",
            title: "Generative Models & Controllable Generation",
            affiliation: "CogSci PhD @ UC San Diego",
            location: "San Diego, CA",
            cvUrl: "/cv.pdf",
            avatar: "/portrait.jpg",
            intro: <Intro/>,
            links: [
                {label: "Email", href: "mailto:bil018@ucsd.edu", icon: Mail},
                {
                    label: "Google Scholar",
                    href: "https://scholar.google.com/citations?user=pjnt_HkAAAAJ&hl=en",
                    icon: Globe2,
                },
                {label: "GitHub", href: "https://github.com/cuttle-fish-my", icon: Github},
                {label: "LinkedIn", href: "https://www.linkedin.com/in/bingnan-li-380579319/", icon: Linkedin},
            ],
            news: [
                {
                    date: "Jul 2026",
                    text: "Released a new paper on classifier-free guidance in on-policy diffusion distillation!",
                    type: "New paper",
                },
                {
                    date: "Mar 2026",
                    text: "Released CyCLeGen, a unified model for layout prediction and image generation.",
                    type: "New paper",
                },
                {date: "Sep 2025", text: "One paper got accepted to NeurIPS 2025 D&B Track! 🎉", type: "Publication"},
                {date: "Jun 2025", text: "Started my internship as Applied Scientist at Amazon!", type: "Experience"},
                {date: "May 2025", text: "One paper got accepted to ICCV 2025! 🎉", type: "Publication"},
                {date: "Sep 2024", text: "One paper got accepted to NeurIPS 2024! 🎉", type: "Publication"},
                {
                    date: "Jun 2024",
                    text: "Graduated from ShanghaiTech University as a Shanghai Outstanding Graduate.",
                    type: "Milestone",
                },
                {date: "Nov 2023", text: "One paper got accepted to ML4H 2023! 🎉", type: "Publication"},
            ],
            research: [
                {
                    lab: "Qwen Application",
                    role: "Research Intern",
                    location: "Shanghai, China",
                    date: "Summer 2026",
                    mentors: [{label: "Jiaming Liu", href: "https://jiamingliu.xyz"}],
                },
                {
                    lab: "Amazon AWS AI Labs",
                    role: "Applied Scientist Intern",
                    date: "Summer 2025",
                    mentors: [
                        {label: "Yantao Shen", href: "https://yantaoshen.github.io"},
                        {label: "Zhaoyang Zhang", href: "https://zzyfd.github.io/#/"},
                    ],
                },
                {
                    lab: "UCSD MLPC Lab",
                    role: "Research Intern",
                    date: "2024 — Present",
                    mentors: [{label: "Prof. Zhuowen Tu", href: "https://pages.ucsd.edu/~ztu/"}],
                },
                {
                    lab: "ShanghaiTech University PLUS Lab",
                    role: "Research Intern",
                    date: "2022 — 2024",
                    mentors: [{label: "Prof. Xuming He", href: "https://xmhe.bitbucket.io"}],
                },
            ],
            papers: [
                {
                    title: "Rethinking Classifier-Free Guidance in On-Policy Diffusion Distillation",
                    authors: [
                        {label: "Bingnan Li"},
                        {label: "Haozhe Wang"},
                        {label: "Haozhong Xiong"},
                        {label: "Fangtai Wu"},
                        {label: "Jinpeng Yu"},
                        {label: "Yang Shi"},
                        {label: "Jiaming Liu", href: "https://jiamingliu.xyz"},
                        {label: "Ruihua Huang"},
                    ],
                    venue: "arXiv 2026",
                    year: "2026",
                    links: [
                        {label: "Paper", href: "https://arxiv.org/abs/2607.24731"},
                        {label: "Website", href: "https://rethinking-cfg-opd.github.io"},
                    ],
                    tags: ["On-Policy Distillation", "Classifier-Free Guidance", "Video Generation"],
                },
                {
                    title: "CyCLeGen: Cycle-Consistent Layout Prediction and Image Generation in Vision Foundation Models",
                    authors: [
                        {label: "Xiaojun Shan", href: "https://shanxiaojun.github.io"},
                        {label: "Haoyu Shen"},
                        {label: "Yucheng Mao"},
                        {label: "Xiang Zhang", href: "https://xzhang.dev"},
                        {label: "Abhay Anand"},
                        {label: "Bingnan Li"},
                        {
                            label: "Haiyang Xu",
                            href: "https://scholar.google.com/citations?user=ds8ZvyMAAAAJ&hl=en",
                        },
                        {label: "Zhuowen Tu", href: "https://pages.ucsd.edu/~ztu/"},
                    ],
                    venue: "arXiv 2026",
                    year: "2026",
                    links: [{label: "Paper", href: "https://arxiv.org/abs/2603.14957"}],
                    tags: ["Vision-Language Model", "Image Generation", "Layout Prediction"],
                },
                {
                    title: "OverLayBench: A Benchmark for Layout-to-Image Generation with Dense Overlaps",
                    authors: [
                        {label: "Bingnan Li*"},
                        {label: "Chen-Yu Wang*", href: "https://www.linkedin.com/in/chenyu-wang-profile/"},
                        {
                            label: "Haiyang Xu*",
                            href: "https://scholar.google.com/citations?user=ds8ZvyMAAAAJ&hl=en",
                        },
                        {label: "Xiang Zhang", href: "https://xzhang.dev"},
                        {
                            label: "Ethan Armand",
                            href: "https://scholar.google.com/citations?user=LE6bioEAAAAJ&hl=en",
                        },
                        {
                            label: "Divyansh Srivastava",
                            href: "https://scholar.google.com/citations?user=kw6DWjsAAAAJ&hl=en",
                        },
                        {label: "Xiaojun Shan", href: "https://shanxiaojun.github.io"},
                        {label: "Zeyuan Chen", href: "https://zeyuan-chen.com"},
                        {label: "Jianwen Xie", href: "http://www.stat.ucla.edu/~jxie/"},
                        {label: "Zhuowen Tu", href: "https://pages.ucsd.edu/~ztu/"},
                    ],
                    venue: "NeurIPS 2025 · D&B Track",
                    year: "2025",
                    links: [
                        {label: "Paper", href: "https://arxiv.org/abs/2509.19282"},
                        {label: "Code", href: "https://github.com/mlpc-ucsd/OverLayBench"},
                        {label: "Website", href: "https://mlpc-ucsd.github.io/OverLayBench/"},
                    ],
                    tags: ["Layout-to-Image", "Evaluation"],
                },
                {
                    title: "YOLO-Count: Differentiable Object Counting for Text-to-Image Generation",
                    authors: [
                        {label: "Guanning Zeng"},
                        {label: "Xiang Zhang", href: "https://xzhang.dev"},
                        {label: "Zirui Wang", href: "https://zwcolin.github.io"},
                        {label: "Haiyang Xu"},
                        {label: "Zeyuan Chen", href: "https://zeyuan-chen.com"},
                        {label: "Bingnan Li"},
                        {label: "Zhuowen Tu", href: "https://pages.ucsd.edu/~ztu/"},
                    ],
                    venue: "ICCV 2025",
                    year: "2025",
                    links: [
                        {label: "Paper", href: "https://arxiv.org/html/2508.00728v1/"},
                        {label: "Code", href: "https://github.com/mlpc-ucsd/YOLO-Count"},
                    ],
                    tags: ["Object Detection", "Classifier Guidance", "Text-to-Image"],
                },
                {
                    title: "Generalize or Detect? Towards Robust Semantic Segmentation Under Multiple Distribution Shifts",
                    authors: [
                        {label: "Zhitong Gao", href: "https://gaozhitong.github.io"},
                        {label: "Bingnan Li"},
                        {label: "Mathieu Salzmann", href: "https://people.epfl.ch/mathieu.salzmann"},
                        {label: "Xuming He", href: "https://xmhe.bitbucket.io"},
                    ],
                    venue: "NeurIPS 2024",
                    year: "2024",
                    links: [
                        {
                            label: "Paper",
                            href: "https://proceedings.neurips.cc/paper_files/paper/2024/file/5d3b57e06e3fc45f077eb5c9f28156d4-Paper-Conference.pdf",
                        },
                        {label: "Code", href: "https://github.com/gaozhitong/MultiShiftSeg"},
                    ],
                    tags: ["OoD Detection", "Domain Generalization", "Semantic Segmentation"],
                },
                {
                    title: "Gradient-Map-Guided Adaptive Domain Generalization for Cross Modality MRI Segmentation",
                    authors: [
                        {label: "Bingnan Li"},
                        {label: "Zhitong Gao", href: "https://gaozhitong.github.io"},
                        {label: "Xuming He", href: "https://xmhe.bitbucket.io"},
                    ],
                    venue: "ML4H 2023",
                    year: "2023",
                    links: [
                        {label: "Paper", href: "https://arxiv.org/pdf/2311.09737"},
                        {label: "Code", href: "https://github.com/cuttle-fish-my/GM-Guided-DG"},
                    ],
                    tags: ["Domain Generalization", "Test Time Adaptation", "MRI Segmentation"],
                },
            ],
        }),
        [],
    );

    return (
        <main className="site-shell">
            <AmbientBackground/>
            <Nav name={data.name} cvUrl={data.cvUrl}/>
            <Hero data={data}/>

            <Section
                id="news"
                eyebrow="Now & next"
                title="Latest signals"
                description="A running log of papers, places, and moments along the way."
                icon={<Newspaper className="h-5 w-5"/>}
            >
                <News items={data.news}/>
            </Section>

            <Section
                id="research"
                eyebrow="Where ideas happened"
                title="Research journey"
                description="Learning from outstanding teams across academia and industry."
                icon={<School className="h-5 w-5"/>}
            >
                <Research items={data.research}/>
            </Section>

            <Section
                id="papers"
                eyebrow={`${data.papers.length} selected works`}
                title="Publications"
                description="Generative models, controllability, and robust visual intelligence."
                icon={<FileText className="h-5 w-5"/>}
            >
                <Papers items={data.papers}/>
            </Section>

            <Footer data={data}/>
            <BackToTop/>
        </main>
    );
}

function AmbientBackground() {
    return (
        <div className="ambient-background" aria-hidden="true">
            <div className="aurora aurora-one"/>
            <div className="aurora aurora-two"/>
            <div className="aurora aurora-three"/>
            <div className="noise-layer"/>
            <div className="grid-layer"/>
        </div>
    );
}

function Nav({name, cvUrl}) {
    return (
        <header className="site-nav-wrap">
            <nav className="site-nav" aria-label="Primary navigation">
                <a href="#home" className="brand-mark" aria-label={`${name}, back to home`}>
                    <span>BL</span>
                    <span className="brand-name">{name}</span>
                </a>

                <div className="nav-links">
                    <a href="#news">News</a>
                    <a href="#research">Journey</a>
                    <a href="#papers">Work</a>
                </div>

                <div className="nav-actions">
                    {cvUrl && (
                        <a className="cv-link" href={cvUrl} target="_blank" rel="noreferrer">
                            <Download className="h-3.5 w-3.5"/>
                            <span>CV</span>
                        </a>
                    )}
                    <ThemeToggle/>
                </div>
            </nav>
        </header>
    );
}

function Hero({data}) {
    return (
        <section id="home" className="hero-section">
            <div className="hero-copy">
                <Motion.div
                    initial={{opacity: 0, y: 14}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.45}}
                    className="availability-pill"
                >
                    PhD · UC San Diego
                </Motion.div>

                <Motion.h1
                    initial={{opacity: 0, y: 22}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1]}}
                    className="hero-name"
                >
                    Bingnan <span>Li.</span>
                </Motion.h1>

                <Motion.div
                    initial={{opacity: 0, y: 18}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.55, delay: 0.16}}
                    className="hero-title"
                >
                    <div>
                        <p>{data.affiliation}</p>
                        <h2>{data.title}</h2>
                    </div>
                </Motion.div>

                <Motion.p
                    initial={{opacity: 0, y: 18}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.55, delay: 0.24}}
                    className="hero-intro"
                >
                    {data.intro}
                </Motion.p>

                <Motion.div
                    initial={{opacity: 0, y: 18}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.55, delay: 0.32}}
                    className="hero-actions"
                >
                    {data.links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                            className="social-link"
                        >
                            <link.icon className="h-4 w-4"/>
                            <span>{link.label}</span>
                            <ArrowUpRight className="social-arrow"/>
                        </a>
                    ))}
                </Motion.div>

                <Motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8, delay: 0.45}}
                    className="hero-meta"
                >
                    <span><MapPin className="h-3.5 w-3.5"/>{data.location}</span>
                </Motion.div>
            </div>

            <Motion.div
                initial={{opacity: 0, y: 14}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1]}}
                className="portrait-stage"
            >
                <div className="portrait-orbit" aria-hidden="true">
                    <span className="orbit-dot orbit-dot-one"/>
                    <span className="orbit-dot orbit-dot-two"/>
                </div>
                <div className="portrait-frame">
                    <img src={data.avatar} alt="Bingnan Li" className="portrait-image"/>
                    <div className="portrait-shine"/>
                </div>
            </Motion.div>
        </section>
    );
}

function Section({id, eyebrow, title, description, icon, children}) {
    return (
        <section id={id} className="content-section">
            <Motion.div {...reveal} className="section-heading">
                <div className="section-icon">{icon}</div>
                <div>
                    <p className="section-eyebrow">{eyebrow}</p>
                    <h2>{title}</h2>
                    <p className="section-description">{description}</p>
                </div>
            </Motion.div>
            {children}
        </section>
    );
}

function News({items}) {
    const [latest, ...rest] = items;

    return (
        <Motion.div {...reveal} className="news-layout">
            <article className="news-feature">
                <div className="news-feature-top">
                    <span className="news-live"><span/>Latest</span>
                    <time>{latest.date}</time>
                </div>
                <div className="news-feature-icon">
                    <BookOpen className="h-6 w-6"/>
                </div>
                <p>{latest.text}</p>
                <span className="news-type">{latest.type}</span>
            </article>

            <div className="news-list">
                {rest.map((item, index) => (
                    <article className="news-row" key={`${item.date}-${item.text}`}>
                        <div className="news-index">{String(index + 2).padStart(2, "0")}</div>
                        <time>{item.date}</time>
                        <p>{item.text}</p>
                        <span className="news-row-type">{item.type}</span>
                    </article>
                ))}
            </div>
        </Motion.div>
    );
}

function Research({items}) {
    return (
        <div className="timeline">
            {items.map((item, index) => (
                <Motion.article
                    {...reveal}
                    transition={{...reveal.transition, delay: index * 0.06}}
                    className="timeline-item"
                    key={`${item.lab}-${item.date}`}
                >
                    <div className="timeline-rail">
                        <span className="timeline-node">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="experience-card">
                        <div className="experience-main">
                            <p className="experience-role">
                                <BriefcaseBusiness className="h-4 w-4"/>
                                {item.role}
                            </p>
                            <h3>{item.lab}</h3>
                            {item.location && (
                                <p className="experience-location">
                                    <MapPin className="h-3.5 w-3.5"/>
                                    {item.location}
                                </p>
                            )}
                            {item.mentors?.length > 0 && (
                                <div className="mentor-list">
                                    <span>Mentored by</span>
                                    {item.mentors.map((mentor, mentorIndex) => (
                                        <span key={mentor.label}>
                                            <a href={mentor.href} target="_blank" rel="noreferrer">
                                                {mentor.label}
                                            </a>
                                            {mentorIndex < item.mentors.length - 1 && <span>, </span>}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="experience-date">
                            <CalendarFold className="h-4 w-4"/>
                            {item.date}
                        </div>
                    </div>
                </Motion.article>
            ))}
        </div>
    );
}

function Author({author, isLast}) {
    const className = author.label.includes("Bingnan Li") ? "author author-self" : "author";
    const content = (
        <>
            {author.label}
            {!isLast && ","}
        </>
    );

    return author.href ? (
        <a className={className} href={author.href} target="_blank" rel="noreferrer">
            {content}
        </a>
    ) : (
        <span className={className}>{content}</span>
    );
}

function Papers({items}) {
    return (
        <div className="papers-grid">
            {items.map((paper, index) => (
                <Motion.article
                    {...reveal}
                    transition={{...reveal.transition, delay: (index % 2) * 0.06}}
                    className={`paper-card ${index === 0 ? "paper-card-featured" : ""}`}
                    key={paper.title}
                >
                    <div className="paper-card-glow"/>
                    <div className="paper-topline">
                        <span className="paper-index">{String(index + 1).padStart(2, "0")}</span>
                        <span className="paper-venue">{paper.venue}</span>
                    </div>

                    <h3>{paper.title}</h3>

                    <div className="paper-authors">
                        {paper.authors.map((author, authorIndex) => (
                            <Author
                                key={`${author.label}-${authorIndex}`}
                                author={author}
                                isLast={authorIndex === paper.authors.length - 1}
                            />
                        ))}
                    </div>

                    <div className="paper-footer">
                        <div className="paper-tags">
                            {paper.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="paper-tag">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <div className="paper-links">
                            {paper.links.map((link) => (
                                <Button key={link.label} asChild variant="ghost" size="sm" className="paper-link">
                                    <a href={link.href} target="_blank" rel="noreferrer">
                                        {link.label}
                                        <ArrowUpRight className="h-3.5 w-3.5"/>
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>
                </Motion.article>
            ))}
        </div>
    );
}

function Footer({data}) {
    return (
        <footer className="site-footer">
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} {data.name}</p>
                <div className="footer-links">
                    {data.links.slice(0, 3).map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <p>{data.location}</p>
            </div>
        </footer>
    );
}

function BackToTop() {
    return (
        <a href="#home" className="back-to-top" aria-label="Back to top">
            <ArrowUp className="h-4 w-4"/>
        </a>
    );
}
