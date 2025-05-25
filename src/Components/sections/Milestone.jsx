import React from 'react';
import { FileText, Presentation, BookOpen, Monitor, Globe, NotebookPen, Award, Users } from 'lucide-react';

const Milestone = () => {
    const milestones = [
        {
            month: "August 2024",
            title: "Project Proposal",
            description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
            marks: 6,
            percentage: 6,
            icon: FileText,
            status: 'Completed',
            color: 'blue'
        },
        {
            month: "December 2024",
            title: "Progress Presentation I",
            description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
            marks: 6,
            percentage: 6,
            icon: Presentation,
            status: 'Completed',
            color: 'green'
        },
        {
            month: "April 2025",
            title: "Research Paper",
            description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge",
            marks: 10,
            percentage: 10,
            icon: BookOpen,
            status: 'Completed',
            color: 'purple'
        },
        {
            month: "March 2025",
            title: "Progress Presentation II",
            description: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
            marks: 18,
            percentage: 18,
            icon: Monitor,
            status: 'Completed',
            color: 'indigo'
        },
        {
            month: "April 2025",
            title: "Final Report",
            description: "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
            marks: 19,
            percentage: 19,
            icon: Award,
            status: 'Completed',
            color: 'red'
        },
        {
            month: "May 2025",
            title: "Website Assessment",
            description: "The Website helps to promote our research project and reveals all details related to the project.",
            marks: 2,
            percentage: 2,
            icon: Globe,
            status: 'Upcoming',
            color: 'cyan'
        },
        {
            month: "May 2025",
            title: "Final Presentation & Viva",
            description: "Viva is held individually to assess each member's contribution to the project.",
            marks: 20,
            percentage: 20,
            icon: Users,
            status: 'Upcoming',
            color: 'pink'
        }
    ];

    const getStatusColors = (status) => {
        switch (status) {
            case 'completed':
                return {
                    bg: 'bg-green-100',
                    border: 'border-green-300',
                    icon: 'bg-green-500',
                    text: 'text-green-700'
                };
            case 'current':
                return {
                    bg: 'bg-blue-100',
                    border: 'border-blue-300',
                    icon: 'bg-blue-500',
                    text: 'text-blue-700'
                };
            case 'upcoming':
                return {
                    bg: 'bg-gray-100',
                    border: 'border-gray-300',
                    icon: 'bg-gray-400',
                    text: 'text-gray-600'
                };
            default:
                return {
                    bg: 'bg-gray-100',
                    border: 'border-gray-300',
                    icon: 'bg-gray-400',
                    text: 'text-gray-600'
                };
        }
    };

    return (
        <div id='Milestone'>
            {/* Header */}
            <div className="text-center pt-12 pb-6">
                <div className="flex items-center justify-center gap-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-purple-400"></div>
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 drop-shadow-sm whitespace-nowrap">
                        Project Scope
                    </h1>
                    <div className="flex-1 mt-4 h-px bg-gradient-to-r from-purple-400 via-blue-300 to-transparent"></div>
                </div>
                <p className="text-lg text-gray-600">Track your academic journey through key deliverables</p>
            </div>

            <div className="max-w-4xl mx-auto p-6">

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-300 rounded-full"></div>

                    {milestones.map((milestone, index) => {
                        const Icon = milestone.icon;
                        const colors = getStatusColors(milestone.status);

                        return (
                            <div key={index} className="relative flex items-start mb-12 group">
                                {/* Timeline dot */}
                                <div className={`absolute left-4 w-8 h-8 ${colors.icon} rounded-full flex items-center justify-center ring-4 ring-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-200`}>
                                    <Icon size={16} className="text-white" />
                                </div>

                                {/* Content card */}
                                <div className="ml-20 w-full">
                                    <div className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>

                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-sm font-medium rounded-full border ${colors.border}`}>
                                                        {milestone.month}
                                                    </span>
                                                    {milestone.status === 'completed' && (
                                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-300">
                                                            ✓ COMPLETED
                                                        </span>
                                                    )}
                                                    {milestone.status === 'current' && (
                                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-300 animate-pulse">
                                                            ⚡ IN PROGRESS
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                                <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                                            </div>

                                            {/* Marks display */}
                                            <div className="ml-4 text-right flex-shrink-0">
                                                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                                        {milestone.marks}
                                                    </div>
                                                    <div className="text-sm text-gray-600 font-medium">
                                                        {milestone.percentage}% Weight
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Progress bar */}
                                        <div className="mt-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-gray-700">Contribution to Final Grade</span>
                                                <span className="text-sm font-bold text-gray-900">{milestone.percentage}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${milestone.percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Milestone;