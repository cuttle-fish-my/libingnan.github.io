import {useState, useEffect, useMemo} from "react";
import {motion} from "framer-motion";

// shadcn/ui imports (relative to src/)
import {Card, CardContent, CardHeader, CardTitle} from "../components/ui/card";
import {Badge} from "../components/ui/badge";
import {Button} from "../components/ui/button";
import {Input} from "../components/ui/input";
import {Separator} from "../components/ui/separator";

import {
    Github,
    Linkedin,
    Mail,
    FileText,
    ArrowUpRight,
    School,
    CalendarFold,
    Newspaper,
    GraduationCap,
    Link as LinkIcon,
    Globe,
    Sun,
    Moon,
} from "lucide-react";

// ===== Theme toggle (system preference by default) =====
function ThemeToggle() {
    const [theme, setTheme] = useState("system"); // "system" | "light" | "dark"

    useEffect(() => {
        // 1) Pick initial theme: saved -> system preference
        const saved = localStorage.getItem("theme"); // "light" | "dark" | null
        const prefersDark =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;

        const initial = saved || (prefersDark ? "dark" : "light");
        setTheme(saved ? saved : "system"); // reflect that we're using system if nothing saved
        document.documentElement.classList.toggle("dark", initial === "dark");
    }, []);

    const toggleTheme = () => {
        // simple toggle between light/dark; set localStorage override
        const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
            aria-label="Toggle Theme"
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
        >
            {document.documentElement.classList.contains("dark") ? (
                <Sun className="h-5 w-5"/>
            ) : (
                <Moon className="h-5 w-5"/>
            )}
        </button>
    );
}

export default function PersonalSite() {
    const data = useMemo(
        () => ({
            name: "Bingnan Li",
            title: "CS M.S. @ UC San Diego | Computer Vision & LLMs",
            location: "San Diego, CA",
            cvUrl: "/cv.pdf", // optional; place cv.pdf in /public
            avatar: "/portrait.jpg", // place your image in public/
            intro:
                "Hi! I'm a CS master's student at UC San Diego, working with Prof. Zhuowen Tu. Previously, I completed my bachelor's in Computer Science at ShanghaiTech University under the supervision of Prof. Xuming He. My research interests are mainly on computer vision, focusing on controllable image generation and image understanding. I'm passionate about advancing AI through innovative research and practical applications.",
            links: [
                {label: "Email", href: "mailto:bil018@ucsd.edu", icon: Mail},
                {
                    label: "Google Scholar",
                    href: "https://scholar.google.com/citations?user=pjnt_HkAAAAJ&hl=en",
                    icon: Globe
                },
                {label: "GitHub", href: "https://github.com/cuttle-fish-my", icon: Github},
                {label: "LinkedIn", href: "https://www.linkedin.com/in/bingnan-li-380579319/", icon: Linkedin},
            ],
            highlights: [
                "Computer Vision", "Layout to Image Generation", "Object Detection", "Segmentation",
                "Multi-Agent Systems", "Model Routing", "Model Merging",
                "PyTorch", "vLLM", "FSDP", "Docker",
            ],
            news: [
                {date: "Sep 2025", text: "One paper got accepted to NeurIPS 2025 D&B Track!🎉"},
                {date: "Jun 2025", text: "Started my internship as Applied Scientist at Amazon!"},
                {date: "May 2025", text: "One paper got accepted to ICCV 2025!🎉"},
                {date: "Sep 2024", text: "One paper got accepted to NeurIPS 2024!🎉"},
                {
                    date: "Jun 2024",
                    text: "Graduated from ShanghaiTech University, recognized as a Shanghai Outstanding Graduate."
                },
                {date: "Nov 2023", text: "One paper got accepted to ML4H 2023!🎉"},
            ],
            research: [
                {
                    lab: "Amazon AWS AI Labs",
                    role: "Applied Scientist Intern",
                    date: "Summer 2025",
                    mentors: [
                        {label: "Yantao Shen", href: "https://yantaoshen.github.io"},
                        {label: "Zhaoyang Zhang", href: "https://zzyfd.github.io/#/"},
                    ],
                    bullets: [
                    ],
                },
                {
                    lab: "UCSD MLPC Lab",
                    role: "Research Intern",
                    date: "2024 — Present",
                    mentors: [
                        {label: "Prof. Zhuowen Tu", href: "https://pages.ucsd.edu/~ztu/"},
                    ],
                },
                {
                    lab: "ShanghaiTech University PLUS Lab",
                    role: "Research Intern",
                    date: "2022 — 2024",
                    mentors: [
                        {label: "Prof. Xuming He", href: "https://xmhe.bitbucket.io"},
                    ],
                },
            ],
            papers: [
                {
                    title:
                        "OverLayBench: A Benchmark for Layout-to-Image Generation with Dense Overlaps",
                    authors: [
                        {label: "Bingnan Li*"},
                        {label: "Chen-Yu Wang*"},
                        {label: "Haiyang Xu*"}, // no link needed
                        {label: "Xiang Zhang", href: "https://xzhang.dev"},
                        {label: "Ethan Armand"},
                        {label: "Divyansh Srivastava"},
                        {label: "Xiaojun Shan", href: "https://shanxiaojun.github.io"},
                        {label: "Zeyuan Chen", href: "https://zeyuan-chen.com"},
                        {label: "Jianwen Xie", href: "http://www.stat.ucla.edu/~jxie/"},
                        {label: "Zhuowen Tu", href: "https://pages.ucsd.edu/~ztu/"},
                    ],
                    venue: "NeurIPS 2025 D&B Track",
                    links: [
                        {label: "Paper", href: "https://arxiv.org/abs/2509.19282"},
                        {label: "Code", href: "https://github.com/mlpc-ucsd/OverLayBench"},
                        {label: "Website", href: "https://mlpc-ucsd.github.io/OverLayBench/"},
                    ],
                    tags: ["Layout-to-Image", "Evaluation"],
                },
                {
                    title:
                        "YOLO-Count: Differentiable Object Counting for Text-to-Image Generation",
                    authors: [
                        {label: "Guanning Zeng"},
                        {label: "Xiang Zhang", href: "https://xzhang.dev"},
                        {label: "Zirui Wang", href: "https://zwcolin.github.io"}, // no link needed
                        {label: "Haiyang Xu"},
                        {label: "Zeyuan Chen", href: "https://zeyuan-chen.com"},
                        {label: "Bingnan Li"},
                        {label: "Zhuowen Tu", href: "https://pages.ucsd.edu/~ztu/"},
                    ],
                    venue: "ICCV 2025",
                    links: [
                        {label: "Paper", href: "https://arxiv.org/html/2508.00728v1/"},
                        // {label: "Code", href: "#"},
                        // {label: "Project", href: "#"},
                    ],
                    tags: ["Object Detection", "Classifier Guidance", "Text-to-Image"],
                },
                {
                    title:
                        "Generalize or Detect? Towards Robust Semantic Segmentation Under Multiple Distribution Shifts",
                    authors: [
                        {label: "Zhitong Gao", href: "https://gaozhitong.github.io"},
                        {label: "Bingnan Li"},
                        {label: "Mathieu Salzmann", href: "https://people.epfl.ch/mathieu.salzmann"},
                        {label: "Xuming He", href: "https://xmhe.bitbucket.io"} // no link needed
                    ],
                    venue: "NeurIPS 2024",
                    links: [
                        {
                            label: "Paper",
                            href: "https://proceedings.neurips.cc/paper_files/paper/2024/file/5d3b57e06e3fc45f077eb5c9f28156d4-Paper-Conference.pdf"
                        },
                        {label: "Code", href: "https://github.com/gaozhitong/MultiShiftSeg"},
                    ],
                    tags: ["OoD Detection", "Domain Generalization", "Text-to-Image"],
                },
                {
                    title:
                        "Gradient-Map-Guided Adaptive Domain Generalization for Cross Modality MRI Segmentation",
                    authors: [
                        {label: "Bingnan Li"},
                        {label: "Zhitong Gao", href: "https://gaozhitong.github.io"},
                        {label: "Xuming He", href: "https://xmhe.bitbucket.io"} // no link needed
                    ],
                    venue: "ML4H 2023",
                    links: [
                        {label: "Paper", href: "https://arxiv.org/pdf/2311.09737"},
                        {label: "Code", href: "https://github.com/cuttle-fish-my/GM-Guided-DG"},
                    ],
                    tags: ["Domain Generalization", "Test Time Adaptation", "MRI Segmentation"],
                },
            ],

        }),
        []
    );

    return (
        <main
            className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 dark:from-zinc-950 dark:to-black dark:text-zinc-100">
            <Nav name={data.name} cvUrl={data.cvUrl}/>
            <Hero data={data}/>
            <Section id="news" title="News" icon={<Newspaper className="h-5 w-5"/>}>
                <News items={data.news}/>
            </Section>

            <Section id="research" title="Research Experiences" icon={<School className="h-5 w-5"/>}>
                <Research items={data.research}/>
            </Section>

            <Section id="papers" title="Publications" icon={<FileText className="h-5 w-5"/>}>
                <Papers items={data.papers}/>
            </Section>

            <Footer name={data.name}/>

            <BackToTop/>
        </main>
    );
}

function Nav({name, cvUrl}) {
    return (
        // <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30 border-b border-zinc-200/60 dark:border-zinc-800/60">
        //     <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-3">
        //         <a href="#home" className="font-semibold tracking-tight text-lg">
        //             {name}
        //         </a>
        //
        //         {/* Primary links: hide on small, show from md up */}
        //         <nav className="hidden md:flex items-center gap-4 text-sm">
        //             <a href="#news" className="hover:opacity-80">News</a>
        //             <a href="#research" className="hover:opacity-80">Research</a>
        //             <a href="#papers" className="hover:opacity-80">Papers</a>
        //         </nav>
        //
        //         {/* Actions: always visible, even on mobile */}
        //         <div className="flex items-center gap-2 shrink-0">
        //             {cvUrl && (
        //                 <a
        //                     href={cvUrl}
        //                     target="_blank"
        //                     rel="noreferrer"
        //                     className="px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800
        //              text-xs md:text-sm whitespace-nowrap
        //              text-zinc-900 dark:text-zinc-100
        //              hover:bg-zinc-200 dark:hover:bg-zinc-700"
        //                 >
        //                     CV
        //                 </a>
        //             )}
        //             <ThemeToggle />
        //         </div>
        //     </div>
        // </header>
        <header
            className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30 border-b border-zinc-200/60 dark:border-zinc-800/60">
            <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
                <a href="#home" className="font-semibold tracking-tight text-lg">
                    {name}
                </a>
                <nav className="flex items-center gap-2 shrink-0">
                    <div className="hidden md:flex items-center gap-4 text-sm">
                        <a href="#news" className="hover:opacity-80">News</a>
                        <a href="#research" className="hover:opacity-80">Research</a>
                        <a href="#papers" className="hover:opacity-80">Papers</a>
                    </div>
                    {cvUrl && (
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                        >
                            CV
                        </a>
                    )}
                    <ThemeToggle/>
                </nav>
            </div>
        </header>
    );
}

function Hero({data}) {
    return (
        <section id="home" className="mx-auto max-w-5xl px-4 pt-10 md:pt-16 pb-8">
            <div className="grid md:grid-cols-[1.2fr_.8fr] gap-6 md:gap-10 items-center">
                <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.4}}>
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{data.name}</h1>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">{data.title}</p>
                    <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">{data.intro}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {data.highlights.map((h, i) => (
                            <Badge key={i} variant="secondary" className="rounded-2xl">
                                {h}
                            </Badge>
                        ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        {data.links.map((l, i) => (
                            <Button
                                key={i}
                                asChild
                                variant="outline"
                                size="sm"
                                className="rounded-2xl text-zinc-800 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            >
                                <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center">
                                    <l.icon className="mr-2 h-4 w-4"/>
                                    {l.label}
                                </a>
                            </Button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.98}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.4}}
                    className="justify-self-center md:justify-self-end"
                >
                    <div
                        className="relative w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-lg ring-1 ring-zinc-200/70 dark:ring-zinc-800/70">
                        {/* Put /public/portrait.jpg */}
                        <img src={data.avatar} alt="Portrait" className="w-full h-full object-cover"/>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Section({id, title, icon, children}) {
    return (
        <section id={id} className="mx-auto max-w-5xl px-4 py-8 md:py-12">
            <div className="flex items-center gap-2 mb-5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
          {icon}
        </span>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
            </div>
            {children}
        </section>
    );
}

function Papers({items}) {
    return (
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {items.map((p, i) => (
                <Card key={i} className="rounded-2xl flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-base md:text-lg font-semibold">
                            {p.title}
                        </CardTitle>
                        {/* Authors */}
                        <div className="text-sm text-zinc-600 dark:text-zinc-400 flex flex-wrap gap-1">
                            {p.authors.map((a, idx) => (
                                <a
                                    key={idx}
                                    href={a.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`hover:underline ${a.label.includes("Bingnan Li") ? "font-bold" : ""}`}
                                >
                                    {a.label}
                                    {idx < p.authors.length - 1 && ','}
                                </a>
                            ))}
                        </div>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">{p.venue}</div>
                    </CardHeader>

                    {/* CardContent now fills remaining space */}
                    <CardContent className="flex flex-col flex-1 pt-0">
                        {/* Empty spacer to push footer to bottom */}
                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2">
                                {p.tags.map((t, j) => (
                                    <Badge key={j} variant="secondary" className="rounded-2xl">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                            <div className="mt-3 flex flex-wrap gap-3">
                                {p.links.map((l, k) => (
                                    <Button key={k} asChild variant="ghost" size="sm" className="px-2 h-8">
                                        <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center">
                                            <ArrowUpRight className="mr-1.5 h-4 w-4" /> {l.label}
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

function Research({items}) {
    if (!items || items.length === 0) {
        return <p className="text-sm text-zinc-600 dark:text-zinc-400">Add your research entries to the data object to
            show them here.</p>;
    }
    return (
        <div className="space-y-4 md:space-y-6">
            {items.map((r, i) => (
                <Card key={i} className="rounded-2xl">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-base md:text-lg font-semibold">
                                {r.role} · {r.lab}
                            </CardTitle>
                            <span className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
                                <CalendarFold className="inline-block mr-1 h-4 w-4"/> {r.date}
                            </span>
                        </div>
                        {r.mentors && r.mentors.length > 0 && (
                            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                                <span className="font-medium">Mentors:</span>{" "}
                                {r.mentors.map((m, idx) => (
                                    <span key={idx}>
                                          {m.href ? (
                                              <a
                                                  href={m.href}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  className="underline hover:opacity-80"
                                              >
                                                  {m.label}
                                              </a>
                                          ) : (
                                              m.label
                                          )}
                                        {idx < r.mentors?.length - 1 ? ", " : ""}
                                        </span>
                                ))}
                            </div>
                        )}
                    </CardHeader>
                    {/*<CardContent className="pt-0">*/}
                    {/*    <ul className="list-disc list-inside space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">*/}
                    {/*        {r.bullets.map((b, j) => (*/}
                    {/*            <li key={j}>{b}</li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</CardContent>*/}
                </Card>
            ))}
        </div>
    );
}

function News({items}) {
    if (!items || items.length === 0) {
        return <p className="text-sm text-zinc-600 dark:text-zinc-400">Add your news items to the data object to show
            them here.</p>;
    }
    return (
        <div className="space-y-3">
            {items.map((n, i) => (
                <div key={i} className="flex items-start gap-3">
          <span className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 min-w-[84px] mt-0.5">
            <GraduationCap className="inline mr-1 h-4 w-4"/>
              {n.date}
          </span>
                    <p className="text-sm md:text-base text-zinc-800 dark:text-zinc-200">{n.text}</p>
                </div>
            ))}
        </div>
    );
}

function Footer({name}) {
    return (
        <footer className="px-4 py-10 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <div className="mx-auto max-w-5xl text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                    <div>© {new Date().getFullYear()} {name}. Built with React, Tailwind, and shadcn/ui.</div>
                    <div className="flex items-center gap-4">
                        <a href="#home" className="hover:opacity-80 inline-flex items-center">
                            <LinkIcon className="mr-1 h-4 w-4"/> Top
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function BackToTop() {
    return (
        <a
            href="#home"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 inline-flex items-center justify-center h-10 w-10 rounded-2xl shadow-lg ring-1 ring-zinc-200/70 dark:ring-zinc-800/70 bg-white/80 dark:bg-zinc-900/80 backdrop-blur hover:scale-[1.03] transition"
            aria-label="Back to top"
        >
            <ArrowUpRight className="h-5 w-5"/>
        </a>
    );
}