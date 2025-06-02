import React from 'react';
import { Mail, Phone, MapPin, Calendar, ExternalLink, Github, Linkedin, Globe, Heart, Award, GraduationCap } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            {/* Main Footer Content */}
            <div className="px-6 py-16 mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
                    
                    {/* Project Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h3 className="mb-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Smart Assignment Assessment Tool
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-300">
                                An innovative AI-powered platform revolutionizing educational assessment through 
                                multimodal submission analysis, intelligent feedback generation, and automated 
                                viva question creation for enhanced learning experiences.
                            </p>
                            
                            {/* Key Features */}
                            <div className="grid gap-3 mb-6 md:grid-cols-2">
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>AI-Powered Code Analysis</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span>Video Content Processing</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Report Evaluation</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                    <span>Viva Question Generation</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="https://github.com/IT21252990/SAAT" className="flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-lg bg-white/10 hover:bg-white/20 group">
                                <Github size={20} className="transition-colors group-hover:text-blue-400" />
                            </a>
                            <a href="mailto:saat.contactme@gmail.com" className="flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-lg bg-white/10 hover:bg-white/20 group">
                                <Mail size={20} className="transition-colors group-hover:text-blue-400" />
                            </a>
                            <a href="https://www.saat.42web.io/" className="flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-lg bg-white/10 hover:bg-white/20 group">
                                <Globe size={20} className="transition-colors group-hover:text-blue-400" />
                            </a>
                        </div>
                    </div>

                    {/* Institution Info */}
                    <div>
                        <h4 className="flex items-center gap-2 mb-6 text-xl font-semibold">
                            <GraduationCap className="text-blue-400" size={24} />
                            Institution
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="mb-2 font-medium text-white">Sri Lanka Institute of Information Technology</h5>
                                <p className="text-sm text-gray-300">Faculty of Computing</p>
                                <p className="text-sm text-gray-300">Department of Software Engineering</p>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex items-start gap-2 text-sm text-gray-300">
                                    <MapPin size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span>New Kandy Road, Malabe, Sri Lanka</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <Phone size={16} className="text-blue-400" />
                                    <span>+94 117 544 801</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <Mail size={16} className="text-blue-400" />
                                    <a href="https://www.sliit.lk/">https://www.sliit.lk/</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Timeline */}
                    <div>
                        <h4 className="flex items-center gap-2 mb-6 text-xl font-semibold">
                            <Calendar className="text-purple-400" size={24} />
                            Project Timeline
                        </h4>
                        <div className="space-y-4">
                            <div className="pl-4 border-l-2 border-blue-400/30">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-sm text-gray-300">Project Started: April 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="text-sm text-gray-300">Development Phase: April 2024 - May 2025</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                        <span className="text-sm text-gray-300">Final Submission: May 2025</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        <span className="text-sm text-gray-300">Presentation: May 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Achievement Badge */}
                        <div className="p-3 mt-6 border rounded-lg bg-white/10 border-white/20">
                            <div className="flex items-center gap-2 mb-1">
                                <Award className="text-yellow-400" size={16} />
                                <span className="text-sm font-medium text-white">Academic Year</span>
                            </div>
                            <p className="text-xs text-gray-300">2024/2025 - Final Year Project</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10">
                <div className="px-6 py-6 mx-auto max-w-7xl">
                    <div className="flex flex-row items-center justify-center"> 
                        {/* Copyright */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>© {currentYear} Smart Assignment Assessment Tool.</span>
                            <span className="flex items-center gap-1">
                                Made with <Heart size={14} className="text-red-400" /> by Team SLIIT
                            </span>
                        </div>
                    </div>

                    {/* Academic Disclaimer */}
                    <div className="pt-4 mt-4 border-t border-white/5">
                        <p className="text-xs text-center text-gray-500">
                            This project is developed as part of the undergraduate curriculum at Sri Lanka Institute of Information Technology. 
                            All research and development work is conducted under academic supervision for educational purposes.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;