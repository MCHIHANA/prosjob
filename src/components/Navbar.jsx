import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, MapPin, Search, Menu, X, Bell, User, PlusCircle, Globe, DollarSign, Clock, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-200">
                                <Briefcase className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                                Prosjob
                            </span>
                        </Link>
                        <div className="hidden md:ml-10 md:flex md:space-x-8">
                            <Link
                                to="/search"
                                className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${isActive('/search') ? 'text-primary-600 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Find Jobs
                            </Link>
                            <Link to="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors">
                                Companies
                            </Link>
                            <Link to="/about" className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary-600 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}>
                                About Us
                            </Link>
                            <Link to="/contact" className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${isActive('/contact') ? 'text-primary-600 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}>
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <button onClick={toggleTheme} className="p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors">
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors">
                            <Bell className="w-5 h-5" />
                        </button>
                        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                        <Link to="/login" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors">Login</Link>
                        <Link
                            to="/post-job"
                            className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-all shadow-sm shadow-primary-200"
                        >
                            <PlusCircle className="w-4 h-4" />
                            Post a Job
                        </Link>
                    </div>
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-300">
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        <Link to="/search" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/search') ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/50' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>Find Jobs</Link>
                        <Link to="#" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900">Companies</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/50' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>About Us</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/50' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>Contact</Link>
                        <div className="px-3 py-2">
                            <button onClick={toggleTheme} className="flex flex-row items-center gap-3 text-slate-600 dark:text-slate-300 font-medium hover:text-primary-600 dark:hover:text-primary-400">
                                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 border-t border-slate-200 dark:border-slate-800 px-4">
                        <Link to="/post-job" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-all mb-2">
                            <PlusCircle className="w-4 h-4" />
                            Post a Job
                        </Link>
                        <Link to="/login" onClick={() => setIsOpen(false)} className="w-full block text-center py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">Login</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
