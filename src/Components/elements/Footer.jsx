import React from 'react';
import { Mail, Phone, MapPin, Calendar, ExternalLink, Github, Linkedin, Globe, Heart, Award, GraduationCap } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    
                    {/* Project Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Smart Assignment Assessment Tool
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                An innovative AI-powered platform revolutionizing educational assessment through 
                                multimodal submission analysis, intelligent feedback generation, and automated 
                                viva question creation for enhanced learning experiences.
                            </p>
                            
                            {/* Key Features */}
                            <div className="grid md:grid-cols-2 gap-3 mb-6">
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
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200 group">
                                <Github size={20} className="group-hover:text-blue-400 transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200 group">
                                <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200 group">
                                <Globe size={20} className="group-hover:text-blue-400 transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Institution Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <GraduationCap className="text-blue-400" size={24} />
                            Institution
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-medium text-white mb-2">Sri Lanka Institute of Information Technology</h5>
                                <p className="text-gray-300 text-sm">Faculty of Computing</p>
                                <p className="text-gray-300 text-sm">Department of Software Engineering</p>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex items-start gap-2 text-sm text-gray-300">
                                    <MapPin size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span>New Kandy Road, Malabe, Sri Lanka</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <Phone size={16} className="text-blue-400" />
                                    <span>+94 11 244 4444</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <Mail size={16} className="text-blue-400" />
                                    <span>info@sliit.lk</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Timeline */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Calendar className="text-purple-400" size={24} />
                            Project Timeline
                        </h4>
                        <div className="space-y-4">
                            <div className="border-l-2 border-blue-400/30 pl-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-sm text-gray-300">Project Started: March 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="text-sm text-gray-300">Development Phase: Jun - Oct 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                        <span className="text-sm text-gray-300">Final Submission: November 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        <span className="text-sm text-gray-300">Presentation: December 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Achievement Badge */}
                        <div className="mt-6 bg-white/10 rounded-lg p-3 border border-white/20">
                            <div className="flex items-center gap-2 mb-1">
                                <Award className="text-yellow-400" size={16} />
                                <span className="text-sm font-medium text-white">Academic Year</span>
                            </div>
                            <p className="text-xs text-gray-300">2023/2024 - Final Year Project</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        
                        {/* Copyright */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>© {currentYear} Smart Assignment Assessment Tool.</span>
                            <span className="flex items-center gap-1">
                                Made with <Heart size={14} className="text-red-400" /> by Team SLIIT
                            </span>
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                                <ExternalLink size={14} />
                                Documentation
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                                <Github size={14} />
                                Source Code
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    {/* Academic Disclaimer */}
                    <div className="mt-4 pt-4 border-t border-white/5">
                        <p className="text-xs text-gray-500 text-center">
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