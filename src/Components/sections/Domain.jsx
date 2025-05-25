import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Target, Search, Lightbulb, Cog, Code, FileText, Video, Brain, Users, Zap, Moon, Sun } from 'lucide-react';
import googleclassroom from "./lit/googleclassroom.png";
import canvas from "./lit/canvas.png";
import codequry from "./lit/codequry.png";
import gradescope from "./lit/gradescope.jpg";
import githubclassroom from "./lit/githubclassroom.jpg";
import moodle from "./lit/moodle.png";
import { grad } from '@tensorflow/tfjs';

// Mock shared components since they're not available
const Container = ({ children, className = '' }) => (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
);

const Button = ({ children, onClick, className = '' }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded font-medium transition-colors duration-200 ${className}`}
    >
        {children}
    </button>
);

const Paragraph = ({ children, className = '' }) => (
    <p className={`text-gray-600 leading-relaxed ${className}`}>
        {children}
    </p>
);

export const Domain = () => {
    const [activeSection, setActiveSection] = useState('literature');
    const [expandedCards, setExpandedCards] = useState({});
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
    };

    const toggleCard = (cardId) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

    const sections = [
        { id: 'literature', title: 'Literature Survey', icon: BookOpen },
        { id: 'gap', title: 'Research Gap', icon: Search },
        { id: 'problem', title: 'Research Problem', icon: Target },
        { id: 'objectives', title: 'Research Objectives', icon: Lightbulb },
        { id: 'methodology', title: 'Methodology', icon: Cog },
        { id: 'technologies', title: 'Technologies Used', icon: Zap }
    ];

    const literatureData = [
        {
            title: "Assignment Management Systems",
            subtitle: "The Old Guard vs Modern Needs",
            platforms: [
                {
                    name: "Google Classroom",
                    logo: googleclassroom, // You can add logo here
                    category: "LMS Leader",
                    rating: 3.5,
                    users: "100M+",
                    year: "2014",
                    status: "widely-used",
                    strengths: ["Google Workspace integration", "Real-time collaboration", "Easy assignment distribution"],
                    weaknesses: ["No code analysis", "Basic feedback system", "Limited AI features"],
                    verdict: "Great for docs, terrible for code"
                },
                {
                    name: "Moodle",
                    logo: moodle,
                    category: "Open Source",
                    rating: 3.0,
                    users: "300M+",
                    year: "2002",
                    status: "established",
                    strengths: ["Highly customizable", "Plugin ecosystem", "Self-hosted option"],
                    weaknesses: ["Outdated interface", "Complex setup", "No modern AI"],
                    verdict: "Powerful but feels ancient"
                },
                {
                    name: "Canvas",
                    logo: canvas,
                    category: "Modern LMS",
                    rating: 4.0,
                    users: "50M+",
                    year: "2011",
                    status: "popular",
                    strengths: ["Clean interface", "Mobile app", "Rich multimedia support"],
                    weaknesses: ["Expensive licensing", "No code review", "Limited automation"],
                    verdict: "Pretty but not smart"
                }
            ]
        },
        {
            title: "Code Analysis Tools",
            subtitle: "Trying to Understand Student Code",
            platforms: [
                {
                    name: "GitHub Classroom",
                    logo: githubclassroom,
                    category: "Version Control",
                    rating: 4.0,
                    users: "10M+",
                    year: "2017",
                    status: "growing",
                    strengths: ["Git workflow", "Industry standard", "Collaboration features"],
                    weaknesses: ["Manual grading", "No auto-feedback", "Basic analytics"],
                    verdict: "Version control ≠ grading system"
                },
                {
                    name: "Gradescope",
                    logo: gradescope,
                    category: "Auto Grading",
                    rating: 3.5,
                    users: "5M+",
                    year: "2014",
                    status: "specialized",
                    strengths: ["Rubric-based grading", "Batch processing", "TA workflows"],
                    weaknesses: ["Isolated platform", "Upload friction", "Limited integration"],
                    verdict: "Good grader, bad ecosystem player"
                },
                {
                    name: "Codequiry",
                    logo: codequry,
                    category: "Plagiarism",
                    rating: 3.0,
                    users: "1M+",
                    year: "2019",
                    status: "niche",
                    strengths: ["Multi-language detection", "Detailed reports", "API access"],
                    weaknesses: ["One-trick pony", "No learning feedback", "Detection only"],
                    verdict: "Catches cheaters, ignores learners"
                }
            ]
        }
    ];

    const methodologyModules = [
        {
            title: "Code Analysis Module",
            icon: Code,
            features: ["GitHub API integration", "Line-by-line feedback", "AI-powered static analysis", "Naming convention checks"],
            tech: ["Flask", "GitHub API", "Gemini AI", "Firebase"]
        },
        {
            title: "Report Analysis Module",
            icon: FileText,
            features: ["PDF/DOC processing", "Rubric-based evaluation", "Plagiarism detection", "AI content detection"],
            tech: ["NLTK", "Longformer", "RoBERTa", "GPT-3.5"]
        },
        {
            title: "Video Analysis Module",
            icon: Video,
            features: ["Speech-to-text transcription", "Visual content analysis", "Timestamped feedback", "Semantic segmentation"],
            tech: ["Whisper", "Florence2", "ResNet-18", "FFmpeg"]
        },
        {
            title: "Viva Question Generator",
            icon: Brain,
            features: ["Context-aware questions", "Multi-level difficulty", "Content-specific generation", "Teacher customization"],
            tech: ["Gemini 1.5 Flash", "LangChain", "Firebase", "React"]
        }
    ];

    const objectives = [
        {
            title: "Code Analysis",
            description: "Analyze code submissions via repo URLs with line-by-line feedback and automated quality checks",
            icon: Code
        },
        {
            title: "Video Processing",
            description: "Process video submissions with timestamped teacher comments and content analysis",
            icon: Video
        },
        {
            title: "Report Evaluation",
            description: "Analyze reports against marking rubrics and suggest appropriate marks",
            icon: FileText
        },
        {
            title: "Viva Generation",
            description: "Generate relevant viva questions from each submission type and assignment metadata",
            icon: Brain
        }
    ];

    const technologyCategories = [
        {
            title: "Frontend",
            color: "blue",
            technologies: [
                { name: "React", desc: "User interface framework" },
                { name: "Vite", desc: "Build tool and dev server" },
                { name: "Tailwind CSS", desc: "Utility-first CSS framework" },
                { name: "Monaco Editor", desc: "Code viewing and editing" }
            ]
        },
        {
            title: "Backend",
            color: "green",
            technologies: [
                { name: "Flask", desc: "Python web framework" },
                { name: "GitHub API", desc: "Repository data fetching" },
                { name: "FFmpeg", desc: "Video/audio processing" },
                { name: "OpenCV", desc: "Computer vision tasks" }
            ]
        },
        {
            title: "AI & ML Models",
            color: "purple",
            technologies: [
                { name: "Gemini 1.5 Flash", desc: "Question generation & analysis" },
                { name: "Whisper", desc: "Speech-to-text transcription" },
                { name: "Florence2-large", desc: "Visual content analysis" },
                { name: "ResNet-18", desc: "Image classification" }
            ]
        },
        {
            title: "NLP & Detection",
            color: "orange",
            technologies: [
                { name: "NLTK", desc: "Natural language processing" },
                { name: "RoBERTa", desc: "AI content detection" },
                { name: "Longformer", desc: "Plagiarism detection" },
                { name: "LangChain", desc: "LLM application framework" }
            ]
        },
        {
            title: "Database & Storage",
            color: "red",
            technologies: [
                { name: "Firebase", desc: "Cloud database solution" },
                { name: "Firestore", desc: "NoSQL document database" },
                { name: "Firebase Storage", desc: "File storage service" },
                { name: "Firebase Auth", desc: "User authentication" }
            ]
        },
        {
            title: "Development",
            color: "gray",
            technologies: [
                { name: "GitHub", desc: "Version control & collaboration" },
                { name: "Hugging Face", desc: "Pre-trained model hub" },
                { name: "Google APIs", desc: "AI and cloud services" },
                { name: "RESTful APIs", desc: "Service communication" }
            ]
        }
    ];

    const getColorClasses = (color, variant = 'bg') => {
        const colorMap = {
            blue: {
                bg: 'bg-blue-50',
                text: 'text-blue-800 ',
                border: 'border-blue-200 dark:border-blue-700'
            },
            green: {
                bg: 'bg-green-50',
                text: 'text-green-800 ',
                border: 'border-green-200 dark:border-green-700'
            },
            purple: {
                bg: 'bg-purple-50 ',
                text: 'text-purple-800 ',
                border: 'border-purple-200 dark:border-purple-700'
            },
            orange: {
                bg: 'bg-orange-50 ',
                text: 'text-orange-800',
                border: 'border-orange-200 dark:border-orange-700'
            },
            red: {
                bg: 'bg-red-50',
                text: 'text-red-800 ',
                border: 'border-red-200 dark:border-red-700'
            },
            gray: {
                bg: 'bg-gray-50/50',
                text: 'text-gray-800 ',
                border: 'border-gray-200'
            }
        };
        return colorMap[color]?.[variant] || colorMap.gray[variant];
    };

    return (
        <div className="min-h-screen transition-colors duration-300">
            {/* Header */}
            <section className=" transition-colors duration-300">
    <Container>
        <div className="text-center pt-12 pb-6">
            <div className="flex items-center justify-center gap-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-purple-400"></div>
                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 drop-shadow-sm whitespace-nowrap">
                    Project Scope
                </h1>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-400 via-blue-300 to-transparent"></div>
            </div>
        </div>
    </Container>
</section>

            <Container className="py-8">
                {/* Navigation */}
                <div className="flex justify-between flex-wrap gap-2 mb-8 bg-white p-4 rounded-lg border border-gray-200 transition-colors duration-300">
                    {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                            <Button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 !w-auto !h-auto ${activeSection === section.id
                                        ? '!bg-blue-600 !text-white shadow-md'
                                        : '!bg-gray-100 !text-gray-700 hover:!bg-gray-200'
                                    }`}
                            >
                                <Icon size={18} />
                                {section.title}
                            </Button>
                        );
                    })}
                </div>

                {/* Literature Survey Section */}
                {activeSection === 'literature' && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-colors duration-300">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 transition-colors duration-300">
                                <BookOpen className="text-blue-600" />
                                Literature Survey
                            </h2>
                            <Paragraph className="mb-6">
                                Comprehensive analysis of existing assignment management systems and their limitations in handling multimodal submissions.
                            </Paragraph>
                        </div>

                        {literatureData.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="mb-12">


                                {/* 4-Card Flex Row */}
                                <div className="flex flex-wrap gap-6 justify-center">
                                    {section.platforms.map((platform, index) => (
                                        <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33%-18px)] min-w-[280px]">

                                            {/* Status Badge */}
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${platform.status === 'widely-used' ? 'bg-green-100 text-green-800  ' :
                                                        platform.status === 'popular' ? 'bg-blue-100 text-blue-800 ' :
                                                            platform.status === 'growing' ? 'bg-purple-100 text-purple-800 ' :
                                                                platform.status === 'declining' ? 'bg-red-100 text-red-800 ' :
                                                                    'bg-orange-100 text-orange-800 '
                                                    }`}>
                                                    {platform.status}
                                                </span>
                                            </div>

                                            {/* Card Header */}
                                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 pb-4">
                                                <div className="flex items-center gap-4 mb-4">
                                                    {/* Logo Placeholder */}
                                                    {/* <div className="w-14 h-14 bg-white rounded-xl border-2 border-gray-200 flex items-center justify-center shadow-sm"> */}
                                                        {platform.logo ? (
                                                            <img src={platform.logo} alt={platform.name} className="w-14 h-14 rounded-xl object-cover" />
                                                        ) : (
                                                            <span className="text-2xl font-bold text-gray-400">
                                                                {platform.name.charAt(0)}
                                                            </span>
                                                        )}
                                                    {/* </div> */}
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-gray-900  mb-1">{platform.name}</h3>
                                                        <p className="text-sm  ">{platform.category}</p>
                                                    </div>
                                                </div>

                                                {/* Quick Stats */}
                                                <div className="flex justify-between items-center text-sm">
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-yellow-500">★</span>
                                                        <span className="font-semibold text-gray-900 ">{platform.rating}</span>
                                                    </div>
                                                    <span className="">{platform.users} users</span>
                                                    <span className="">Since {platform.year}</span>
                                                </div>
                                            </div>

                                            {/* Card Body */}
                                            <div className="p-6 pt-4">
                                                {/* Strengths */}
                                                <div className="mb-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-green-500 text-lg">✨</span>
                                                        <h4 className="font-semibold text-green-700 ">What's Good</h4>
                                                    </div>
                                                    <ul className="space-y-1">
                                                        {platform.strengths.slice(0, 2).map((strength, i) => (
                                                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                                <span className="text-green-400 mt-1">•</span>
                                                                {strength}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Weaknesses */}
                                                <div className="mb-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-red-500 text-lg">⚠️</span>
                                                        <h4 className="font-semibold text-red-700">Pain Points</h4>
                                                    </div>
                                                    <ul className="space-y-1">
                                                        {platform.weaknesses.slice(0, 2).map((weakness, i) => (
                                                            <li key={i} className="text-sm text-gray-700  flex items-start gap-2">
                                                                <span className="text-red-400 mt-1">•</span>
                                                                {weakness}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Verdict */}
                                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50  rounded-lg p-3 border border-indigo-200 ">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-lg">💭</span>
                                                        <span className="font-semibold text-indigo-700 ">Bottom Line</span>
                                                    </div>
                                                    <p className="text-sm italic text-indigo-800">"{platform.verdict}"</p>
                                                </div>
                                            </div>

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Research Gap Section */}
                {activeSection === 'gap' && (
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-colors duration-300">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 transition-colors duration-300">
                            <Search className="text-blue-600" />
                            Research Gap
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded transition-colors duration-300">
                                    <h3 className="font-semibold text-red-800 mb-2 transition-colors duration-300">Current Limitations</h3>
                                    <ul className="text-red-700 space-y-1 text-sm transition-colors duration-300">
                                        <li>• Fragmented tools for different submission types</li>
                                        <li>• Lack of unified assessment platforms</li>
                                        <li>• Generic, non-personalized feedback</li>
                                        <li>• Limited multimodal submission support</li>
                                        <li>• Absence of AI-driven viva question generation</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-green-50 border-l-4 border-green-400 dark:border-green-500 p-4 rounded transition-colors duration-300">
                                    <h3 className="font-semibold text-green-800 mb-2 transition-colors duration-300">Identified Needs</h3>
                                    <ul className="text-green-700 space-y-1 text-sm transition-colors duration-300">
                                        <li>• Integrated platform for code, reports, and videos</li>
                                        <li>• AI-powered personalized feedback</li>
                                        <li>• Context-aware viva question generation</li>
                                        <li>• Advanced video content analysis</li>
                                        <li>• Rubric-based automated evaluation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Research Problem Section */}
                {activeSection === 'problem' && (
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-colors duration-300">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 transition-colors duration-300">
                            <Target className="text-blue-600" />
                            Research Problem
                        </h2>
                        <div className="bg-blue-50 border border-blue-200 dark:border-blue-700 rounded-lg p-6 transition-colors duration-300">
                            <Paragraph className="text-lg leading-relaxed">
                                The current landscape of educational assessment systems faces a significant limitation in their ability to
                                accommodate <span className="font-semibold text-blue-700 ">multimodal submissions</span> (code, reports, and videos)
                                while providing <span className="font-semibold text-blue-700 ">intelligent, personalized feedback mechanisms</span> and
                                <span className="font-semibold text-blue-700 "> automated viva question generation</span>.
                            </Paragraph>
                            <Paragraph className="mt-4">
                                This research aims to develop a unified system that seamlessly integrates multiple submission types,
                                provides personalized feedback for each, and generates relevant, context-aware viva questions.
                            </Paragraph>
                        </div>
                    </div>
                )}

                {/* Research Objectives Section */}
                {activeSection === 'objectives' && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-colors duration-300">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 transition-colors duration-300">
                                <Lightbulb className="text-blue-600" />
                                Research Objectives
                            </h2>
                        </div>

                        {/* Main Objective */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-xl shadow-lg p-6 text-white transition-colors duration-300">
                            <h3 className="text-xl font-semibold mb-3">Main Objective</h3>
                            <Paragraph className="text-blue-50 transition-colors duration-300">
                                Develop an intelligent assignment assessment system that supports multimodal student submissions
                                (code, reports, videos) while enabling automated feedback and viva question generation through
                                advanced AI integration.
                            </Paragraph>
                        </div>

                        {/* Sub Objectives */}
                        <div className="grid md:grid-cols-2 gap-4">
                            {objectives.map((objective, index) => {
                                const Icon = objective.icon;
                                return (
                                    <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200 border border-gray-200">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Icon className="text-blue-600 transition-colors duration-300" size={24} />
                                            <h4 className="font-semibold text-gray-900 transition-colors duration-300">{objective.title}</h4>
                                        </div>
                                        <Paragraph className="text-sm">{objective.description}</Paragraph>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-colors duration-300">
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 transition-colors duration-300">
                                <Users className="text-blue-600 transition-colors duration-300" size={20} />
                                User Experience Objective
                            </h4>
                            <Paragraph>
                                Create user-friendly interfaces for both teachers and students, ensuring intuitive navigation
                                and seamless interaction regardless of technical expertise.
                            </Paragraph>
                        </div>
                    </div>
                )}

                {/* Methodology Section */}
                {activeSection === 'methodology' && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-colors duration-300">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 transition-colors duration-300">
                                <Cog className="text-blue-600" />
                                Methodology - System Architecture
                            </h2>
                            <Paragraph className="mb-6">
                                The Smart Assignment Assessment Tool follows a modular architecture with specialized components
                                for different submission types, integrated through a unified backend system.
                            </Paragraph>
                        </div>

                        {/* System Modules - Always Expanded */}
                        <div className="grid lg:grid-cols-2 gap-6">
                            {methodologyModules.map((module, index) => {
                                const Icon = module.icon;

                                return (
                                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-colors duration-300">
                                        {/* Header - No Click Handler */}
                                        <div className="p-6 bg-gray-50">
                                            <div className="flex items-center gap-3">
                                                <Icon className="text-blue-600 transition-colors duration-300" size={24} />
                                                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300">{module.title}</h3>
                                            </div>
                                        </div>

                                        {/* Content - Always Visible */}
                                        <div className="px-6 pb-6 border-t border-gray-100 transition-colors duration-300">
                                            <div className="mt-4 space-y-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2 transition-colors duration-300">Key Features</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1 transition-colors duration-300">
                                                        {module.features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-center gap-2">
                                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full transition-colors duration-300"></div>
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2 transition-colors duration-300">Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {module.tech.map((tech, idx) => (
                                                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md transition-colors duration-300">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* User Workflow */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-colors duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300">User Workflow</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-green-50 p-4 rounded-lg transition-colors duration-300">
                                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2 transition-colors duration-300">
                                        <Users className="text-green-600 transition-colors duration-300" size={18} />
                                        Teachers
                                    </h4>
                                    <ul className="text-green-700 text-sm space-y-1 transition-colors duration-300">
                                        <li>• Create assignments with submission type definitions</li>
                                        <li>• Review automated analysis and AI feedback</li>
                                        <li>• Provide additional contextual feedback</li>
                                        <li>• Generate and customize viva questions</li>
                                        <li>• Monitor student progress and performance</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg transition-colors duration-300">
                                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2 transition-colors duration-300">
                                        <Users className="text-blue-600 transition-colors duration-300" size={18} />
                                        Students
                                    </h4>
                                    <ul className="text-blue-700 text-sm space-y-1 transition-colors duration-300">
                                        <li>• View active assignments and requirements</li>
                                        <li>• Submit code repositories, reports, or videos</li>
                                        <li>• Receive detailed automated feedback</li>
                                        <li>• Access viva preparation questions</li>
                                        <li>• Track submission status and grades</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Technologies Section */}
                {/* Technologies Section */}
{activeSection === 'technologies' && (
  <div className="space-y-8">
    {/* Exciting Header */}
    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-colors duration-300">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 transition-colors duration-300">
                                <Zap className="text-blue-600" />
                                Technologies Used
                            </h2>
                        </div>
                        </div>

    {/* Tech Categories with Modern Cards */}
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {technologyCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="group relative">
          {/* Category Card */}
          <div className={`bg-white rounded-2xl shadow-xl border-2 overflow-hidden transform group-hover:-translate-y-2 transition-all duration-300 ${
            category.color === 'blue' ? 'border-blue-200 hover:border-blue-400 hover:shadow-blue-100' :
            category.color === 'green' ? 'border-green-200 hover:border-green-400 hover:shadow-green-100' :
            category.color === 'purple' ? 'border-purple-200 hover:border-purple-400 hover:shadow-purple-100' :
            category.color === 'orange' ? 'border-orange-200 hover:border-orange-400 hover:shadow-orange-100' :
            category.color === 'red' ? 'border-red-200 hover:border-red-400 hover:shadow-red-100' :
            'border-gray-200 hover:border-gray-400 hover:shadow-gray-100'
          }`}>
            
            {/* Category Header */}
            <div className={`${
              category.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
              category.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
              category.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
              category.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
              category.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
              'bg-gradient-to-r from-gray-500 to-gray-600'
            } p-6 text-white relative overflow-hidden`}>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-white rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">
                      {category.color === 'blue' ? '🎨' :
                       category.color === 'green' ? '⚡' :
                       category.color === 'purple' ? '🤖' :
                       category.color === 'orange' ? '🔍' :
                       category.color === 'red' ? '💾' : '🛠️'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="text-white/80 text-sm">
                  {category.technologies.length} powerful tools
                </div>
              </div>
            </div>

            {/* Technologies List */}
            <div className="p-6 space-y-3">
              {category.technologies.map((tech, idx) => (
                <div key={idx} className="group/tech bg-gray-50 hover:bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-4 transition-all duration-200 hover:shadow-md cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${
                          category.color === 'blue' ? 'bg-blue-500' :
                          category.color === 'green' ? 'bg-green-500' :
                          category.color === 'purple' ? 'bg-purple-500' :
                          category.color === 'orange' ? 'bg-orange-500' :
                          category.color === 'red' ? 'bg-red-500' : 'bg-gray-500'
                        }`}></div>
                        <h4 className="font-bold text-gray-900 group-hover/tech:text-blue-600 transition-colors">
                          {tech.name}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{tech.desc}</p>
                    </div>
                    <div className="ml-2 opacity-0 group-hover/tech:opacity-100 transition-opacity">
                      <ChevronRight size={16} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Footer Stats */}
            <div className={`${getColorClasses(category.color, 'bg')} px-6 py-3 border-t border-gray-100`}>
              <div className="flex items-center justify-between text-sm">
                <span className={`font-medium ${getColorClasses(category.color, 'text')}`}>
                  Stack Category
                </span>
                <div className="flex items-center gap-1">
                  <div className={`w-1 h-1 rounded-full ${
                    category.color === 'blue' ? 'bg-blue-400' :
                    category.color === 'green' ? 'bg-green-400' :
                    category.color === 'purple' ? 'bg-purple-400' :
                    category.color === 'orange' ? 'bg-orange-400' :
                    category.color === 'red' ? 'bg-red-400' : 'bg-gray-400'
                  }`}></div>
                  <span className={`text-xs ${getColorClasses(category.color, 'text')} opacity-70`}>
                    Production Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-3 -right-3 z-20">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg ${
              category.color === 'blue' ? 'bg-blue-500' :
              category.color === 'green' ? 'bg-green-500' :
              category.color === 'purple' ? 'bg-purple-500' :
              category.color === 'orange' ? 'bg-orange-500' :
              category.color === 'red' ? 'bg-red-500' : 'bg-gray-500'
            }`}>
              {category.technologies.length}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Tech Stack Summary */}
    <div className="bg-gradient-to-r from-[#97bfff] to-[#d7d3ff] rounded-2xl p-8 border border-gray-200">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why This Tech Stack?</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
            <p className="text-sm text-gray-600">Lightning-fast processing and real-time analysis</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🔧</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Scalability</h4>
            <p className="text-sm text-gray-600">Built to handle thousands of submissions</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Intelligence</h4>
            <p className="text-sm text-gray-600">AI-powered insights and automation</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
            </Container>
        </div>
    );
};

export default Domain;
