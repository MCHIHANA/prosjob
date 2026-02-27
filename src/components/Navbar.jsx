import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, MapPin, Search, Menu, X, Bell, User, PlusCircle, Globe, DollarSign, Clock } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
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
                            <Link to="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
                                Companies
                            </Link>
                            <Link to="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
                                Salaries
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-slate-500 transition-colors">
                            <Bell className="w-5 h-5" />
                        </button>
                        <div className="h-6 w-px bg-slate-200 mx-2"></div>
                        <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Login</Link>
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
                <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        <Link to="/search" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/search') ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:bg-slate-50'}`}>Find Jobs</Link>
                        <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Companies</Link>
                        <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Salaries</Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-slate-200 px-4">
                        <Link to="/post-job" className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-all mb-2">
                            <PlusCircle className="w-4 h-4" />
                            Post a Job
                        </Link>
                        <button className="w-full text-center py-2 text-sm font-medium text-slate-600">Login</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
