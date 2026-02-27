import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import { Search, MapPin, Filter, X, ChevronDown } from 'lucide-react';
import { useJobContext } from '../context/JobContext';

const SearchJobs = () => {
    const { jobs } = useJobContext();
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search Header */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex items-center px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 group focus-within:border-primary-300 transition-colors">
                            <Search className="w-5 h-5 text-slate-400 mr-2" />
                            <input type="text" placeholder="Job title, keywords..." className="bg-transparent w-full focus:outline-none text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400" />
                        </div>
                        <div className="flex-1 flex items-center px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 group focus-within:border-primary-300 transition-colors">
                            <MapPin className="w-5 h-5 text-slate-400 mr-2" />
                            <input type="text" placeholder="Location..." className="bg-transparent w-full focus:outline-none text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400" />
                        </div>
                        <button className="bg-primary-600 text-white px-8 py-2 rounded-xl font-bold hover:bg-primary-700 transition-all">
                            Search
                        </button>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="md:hidden flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-600 font-medium"
                        >
                            <Filter className="w-4 h-4" /> Filters
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className={`lg:w-64 space-y-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center justify-between">
                                Job Type
                                <ChevronDown className="w-4 h-4 text-slate-400 lg:hidden" />
                            </h3>
                            <div className="space-y-3 font-medium text-slate-600">
                                {['Full-time', 'Part-time', 'Remote', 'Contract', 'Internship'].map(type => (
                                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                                        <span className="text-sm group-hover:text-primary-600 transition-colors">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>


                    </aside>

                    {/* Results Area */}
                    <main className="flex-1">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-slate-900">1,240 Jobs found</h2>
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                                Sort by:
                                <select className="bg-transparent text-slate-900 font-bold focus:outline-none cursor-pointer">
                                    <option>Newest</option>
                                    <option>Relevance</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {jobs.map(job => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SearchJobs;
