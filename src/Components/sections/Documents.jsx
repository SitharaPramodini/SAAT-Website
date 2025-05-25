import React from 'react';
import { FileText, Award, Presentation, CheckSquare, BookOpen, Trophy, Image, Download } from 'lucide-react';

const Documents = () => {
    const documents = [
        {
            title: "Topic Assessment",
            icon: CheckSquare,
            color: "blue",
            date: "Feb 15, 2024",
            status: "Individual",
            driveLink: "#"
        },
        {
            title: "Project Charter",
            icon: Award,
            color: "purple",
            date: "Mar 10, 2024",
            status: "Group",
            driveLink: "#"
        },
        {
            title: "Project Proposal",
            icon: Presentation,
            color: "green",
            date: "August 2024",
            status: "Individual",
            driveLink: "#"
        },
        {
            title: "Status Documents I",
            icon: FileText,
            color: "orange",
            date: "Jun 18, 2024",
            status: "Group",
            driveLink: "#"
        },
        {
            title: "Status Documents II",
            icon: FileText,
            color: "cyan",
            date: "Aug 25, 2024",
            status: "Group",
            driveLink: "#"
        },
        {
            title: "Research Paper",
            icon: BookOpen,
            color: "indigo",
            date: "Sep 30, 2024",
            status: "Individual",
            driveLink: "#"
        },
        {
            title: "Final Report",
            icon: Trophy,
            color: "red",
            date: "Nov 12, 2024",
            status: "Group",
            driveLink: "#"
        },
        {
            title: "Poster",
            icon: Image,
            color: "pink",
            date: "Nov 15, 2024",
            status: "Group",
            driveLink: "#"
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', hover: 'hover:border-blue-400' },
            purple: { gradient: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', hover: 'hover:border-purple-400' },
            green: { gradient: 'from-green-500 to-green-600', bg: 'bg-green-50', border: 'border-green-200', hover: 'hover:border-green-400' },
            orange: { gradient: 'from-orange-500 to-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', hover: 'hover:border-orange-400' },
            cyan: { gradient: 'from-cyan-500 to-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200', hover: 'hover:border-cyan-400' },
            indigo: { gradient: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200', hover: 'hover:border-indigo-400' },
            red: { gradient: 'from-red-500 to-red-600', bg: 'bg-red-50', border: 'border-red-200', hover: 'hover:border-red-400' },
            pink: { gradient: 'from-pink-500 to-pink-600', bg: 'bg-pink-50', border: 'border-pink-200', hover: 'hover:border-pink-400' }
        };
        return colorMap[color] || colorMap.blue;
    };

    const handleDownload = (driveLink) => {
        window.open(driveLink, '_blank');
    };

    return (
        <div>
            <div className="text-center pt-12 pb-6">
                <div className="flex items-center justify-center gap-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-purple-400"></div>
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 drop-shadow-sm whitespace-nowrap">
                        Project Documents
                    </h1>
                    <div className="flex-1 mt-4 h-px bg-gradient-to-r from-purple-400 via-blue-300 to-transparent"></div>
                </div>
                <p className="text-lg text-gray-600">Access all project documentation</p>
            </div>
            <div className="max-w-7xl mx-auto p-6">

                {/* 8 Document Cards */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {documents.map((doc, index) => {
                        const Icon = doc.icon;
                        const colors = getColorClasses(doc.color);

                        return (
                            <div
                                key={index}
                                className={`group bg-white rounded-2xl shadow-lg border-2 ${colors.border} ${colors.hover} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden`}
                            >
                                {/* Card Header */}
                                <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white relative overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-white rounded-full"></div>
                                    </div>

                                    <div className="relative z-10 text-center">
                                        {/* <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Icon size={32} className="text-white" />
                                    </div> */}
                                        <h3 className="text-xl font-bold">{doc.title}</h3>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6 text-center">
                                    <div className='flex items-center justify-between'>
                                        {/* Date */}
                                        <div className="mb-4">
                                            <p className="text-gray-600 text-sm font-medium">{doc.date}</p>
                                        </div>

                                        {/* Status Badge */}
                                        <div className="mb-6">
                                            <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${doc.status === 'Individual'
                                                    ? 'bg-blue-100 text-blue-700 border border-blue-300'
                                                    : 'bg-green-100 text-green-700 border border-green-300'
                                                }`}>
                                                {doc.status === 'Individual' ? '👤 Individual' : '👥 Group'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Download Button */}
                                    <button
                                        onClick={() => handleDownload(doc.driveLink)}
                                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-blue-100 group-hover:text-blue-700"
                                    >
                                        <Download size={18} />
                                        Download
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Documents;