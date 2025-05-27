import React from 'react';
import { Crown, User, GraduationCap, Building, Mail, Phone, Star } from 'lucide-react';
import vihangi from "./teamMembers/vihangi.png";
import kalinga from "./teamMembers/kalinga.jpg";
import sithara from "./teamMembers/sithara.jpeg";
import co from "./teamMembers/co.png";
import vindya from "./teamMembers/vindya.jpg";
import ashen from "./teamMembers/ashen.jpeg";
import thusithanjana from "./teamMembers/thusithanjana.jpeg";

const Team = () => {
    const teamMembers = [
        {
            name: "Jayathilaka A.G.K.D",
            role: "Group Leader",
            level: "Undergraduate",
            institution: "Sri Lanka Institute of Information Technology",
            department: "Software Engineering",
            photo: kalinga,
            // isLeader: true,
            color: "blue",
            email: "it21252990@my.sliit.lk"
        },
        {
            name: "Rathnayake R.M.U.V",
            role: "Team Member",
            level: "Undergraduate",
            institution: "Sri Lanka Institute of Information Technology",
            department: "Software Engineering",
            photo: vihangi,
            isLeader: false,
            color: "green",
            email: "it21271182@my.sliit.lk"
        },
        {
            name: "Gunasekara W. M. A. S",
            role: "Team Member",
            level: "Undergraduate",
            institution: "Sri Lanka Institute of Information Technology",
            department: "Software Engineering",
            photo: ashen,
            isLeader: false,
            color: "purple",
            email: "it21373916@my.sliit.lk"
        },
        {
            name: "Liyanage U.S.P",
            role: "Team Member",
            level: "Undergraduate",
            institution: "Sri Lanka Institute of Information Technology",
            department: "Software Engineering",
            photo: sithara,
            isLeader: false,
            color: "orange",
            email: "it21306754@my.sliit.lk"
        }
    ];

    const supervisors = [
        {
            name: "Ms. Vindhya Kalapuge",
            role: "Project Supervisor",
            level: "Senior Lecturer",
            institution: "Sri Lanka Institute of Information Technology",
            department: "Software Engineering",
            photo: vindya,
            email: "vindhya.k@sliit.lk",
            color: "indigo"
        },
        {
            name: "Ms. Kaushalya Rajapakse",
            role: "Co-Supervisor",
            level: "Lecturer",
            institution: "Sri Lanka Institute of Information Technology",
            department: "Software Engineering",
            photo: co,
            email: "kaushalya.r@sliit.lk",
            color: "teal"
        },
        {
            name: "Mr. Thusithanjana Thilakaratne",
            role: "Past Supervisor",
            level: "Lecturer",
            institution: "Sri Lanka Institute of Information Technology",
            department: "Software Engineering",
            photo: thusithanjana,
            email: "thusithanjana.t@sliit.lk",
            color: "green"
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: {
                gradient: 'from-blue-500 to-blue-600',
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                hover: 'hover:border-blue-400',
                ring: 'ring-blue-200'
            },
            green: {
                gradient: 'from-green-500 to-green-600',
                bg: 'bg-green-50',
                border: 'border-green-200',
                hover: 'hover:border-green-400',
                ring: 'ring-green-200'
            },
            purple: {
                gradient: 'from-purple-500 to-purple-600',
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                hover: 'hover:border-purple-400',
                ring: 'ring-purple-200'
            },
            orange: {
                gradient: 'from-orange-500 to-orange-600',
                bg: 'bg-orange-50',
                border: 'border-orange-200',
                hover: 'hover:border-orange-400',
                ring: 'ring-orange-200'
            },
            indigo: {
                gradient: 'from-indigo-500 to-indigo-600',
                bg: 'bg-indigo-50',
                border: 'border-indigo-200',
                hover: 'hover:border-indigo-400',
                ring: 'ring-indigo-200'
            },
            teal: {
                gradient: 'from-teal-500 to-teal-600',
                bg: 'bg-teal-50',
                border: 'border-teal-200',
                hover: 'hover:border-teal-400',
                ring: 'ring-teal-200'
            }
        };
        return colorMap[color] || colorMap.blue;
    };

    const MemberCard = ({ member, isTeamMember = true }) => {
        const colors = getColorClasses(member.color);

        return (
            <div id='Team' className={`group bg-white rounded-2xl shadow-lg border-2 ${colors.border} ${colors.hover} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden relative`}>

                {/* Leader Crown */}
                {member.isLeader && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full border-2 border-white shadow-lg z-20 flex items-center gap-1">
                        <Crown size={14} />
                        <span className="text-xs font-bold">LEADER</span>
                    </div>
                )}

                {/* Card Header with Photo Background */}
                <div className="relative h-64 overflow-hidden">
                    {/* Photo Background */}
                    {member.photo ? (
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                            <User size={64} className="text-white/50" />
                        </div>
                    )}

                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        {/* Name */}
                        <h3 className="text-xl font-bold mb-2 drop-shadow-lg">{member.name}</h3>

                        {/* Role Badge */}
                        <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                            {member.isLeader ? <Crown size={14} /> : isTeamMember ? <User size={14} /> : <Star size={14} />}
                            <span className="text-sm font-medium">{member.role}</span>
                        </div>
                    </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                    {/* Academic Info */}
                    <div className="space-y-3 mb-3">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center`}>
                                <GraduationCap size={16} className={`${colors.gradient.includes('blue') ? 'text-blue-600' : colors.gradient.includes('green') ? 'text-green-600' : colors.gradient.includes('purple') ? 'text-purple-600' : colors.gradient.includes('orange') ? 'text-orange-600' : colors.gradient.includes('indigo') ? 'text-indigo-600' : 'text-teal-600'}`} />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">{member.level}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                                <Building size={16} className={`${colors.gradient.includes('blue') ? 'text-blue-600' : colors.gradient.includes('green') ? 'text-green-600' : colors.gradient.includes('purple') ? 'text-purple-600' : colors.gradient.includes('orange') ? 'text-orange-600' : colors.gradient.includes('indigo') ? 'text-indigo-600' : 'text-teal-600'}`} />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 leading-tight">{member.institution}</p>
                                <p className="text-xs text-gray-600 mt-1">{member.department}</p>
                            </div>
                        </div>

                        <div className="space-y-2 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail size={14} />
                                <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors truncate">
                                    {member.email}
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="text-center pt-12 pb-6">
                <div className="flex items-center justify-center gap-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-purple-400"></div>
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 drop-shadow-sm whitespace-nowrap">
                        Meet Our Team !
                    </h1>
                    <div className="flex-1 mt-4 h-px bg-gradient-to-r from-purple-400 via-blue-300 to-transparent"></div>
                </div>
                <p className="text-lg text-gray-600">Meet our dedicated project team</p>
            </div>
            <div className="max-w-7xl mx-auto p-6">
                {/* Team Members Section */}
                <div className="mb-8">

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                        {teamMembers.map((member, index) => (
                            <MemberCard key={index} member={member} isTeamMember={true} />
                        ))}
                    </div>
                </div>

                {/* Supervisors Section */}
                <div>
                    <div className="text-center mb-8">
                        <p className="text-lg text-gray-600">Academic guidance and mentorship</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {supervisors.map((supervisor, index) => (
                            <MemberCard key={index} member={supervisor} isTeamMember={false} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;