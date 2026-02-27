import React from 'react';
import { Briefcase } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                <div className="sm:flex items-center justify-between gap-8 mb-8">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-6 sm:mb-0">
                        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                            <Briefcase className="text-white w-4 h-4" />
                        </div>
                        <span className="text-xl font-bold text-slate-900">Prosjob</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-slate-500">
                        <a href="/about" className="hover:text-primary-600">About</a>
                        <a href="#" className="hover:text-primary-600">Privacy</a>
                        <a href="#" className="hover:text-primary-600">Terms</a>
                        <a href="#" className="hover:text-primary-600">GitHub</a>
                        <a href="#" className="hover:text-primary-600">Twitter</a>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
                    <p>&copy; 2026 Prosjob Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#">Security</a>
                        <a href="#">Status</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
