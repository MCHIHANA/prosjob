import React from 'react';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import { Search, MapPin, Briefcase, TrendingUp, Users, Zap, Building2, Terminal, Code2, Database } from 'lucide-react';

const mockJobs = [
    {
        id: 1,
        title: "Senior Product Designer",
        company: "DesignCo",
        logo: "https://api.dicebear.com/7.x/identicon/svg?seed=DesignCo",
        location: "San Francisco, CA",
        salary: "$140k - $180k",
        type: "Full-time",
        posted: "2 hours ago",
        tags: ["Product", "Figma", "UI/UX"]
    },
    {
        id: 2,
        title: "Full Stack Engineer",
        company: "TechFlow",
        logo: "https://api.dicebear.com/7.x/identicon/svg?seed=TechFlow",
        location: "Remote",
        salary: "$120k - $160k",
        type: "Remote",
        posted: "5 hours ago",
        tags: ["React", "Node.js", "Postgres"]
    },
    {
        id: 3,
        title: "Backend Developer (Go)",
        company: "Systemic",
        logo: "https://api.dicebear.com/7.x/identicon/svg?seed=Systemic",
        location: "New York, NY",
        salary: "$130k - $170k",
        type: "On-site",
        posted: "1 day ago",
        tags: ["Golang", "AWS", "Docker"]
    },
    {
        id: 4,
        title: "Marketing Manager",
        company: "GrowthLab",
        logo: "https://api.dicebear.com/7.x/identicon/svg?seed=GrowthLab",
        location: "Austin, TX",
        salary: "$90k - $120k",
        type: "Hybrid",
        posted: "3 hours ago",
        tags: ["SEO", "AdWords", "Content"]
    }
];

const categories = [
    { icon: Code2, name: "Engineering", count: "1,240 Jobs", color: "blue" },
    { icon: Palette, name: "Design", count: "850 Jobs", color: "indigo" },
    { icon: TrendingUp, name: "Marketing", count: "640 Jobs", color: "emerald" },
    { icon: Users, name: "HR & People", count: "320 Jobs", color: "rose" },
    { icon: Zap, name: "Sales", count: "510 Jobs", color: "amber" },
    { icon: Database, name: "Data Science", count: "290 Jobs", color: "cyan" }
];

import { Palette } from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-200 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-6 animate-fade-in">
                            <Zap className="w-4 h-4 fill-primary-600" />
                            Join the future of work
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
                            Connecting <span className="text-primary-600">Greatness</span> <br />
                            With <span className="text-indigo-600 italic">Opportunity</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Skip the noise. Get direct access to high-quality jobs from the world's most innovative companies.
                            Built for people who care about their craft.
                        </p>

                        {/* Global Search Bar */}
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 flex flex-col sm:flex-row gap-2">
                                <div className="flex-1 flex items-center px-6 py-3 border-b sm:border-b-0 sm:border-r border-slate-100 group">
                                    <Search className="w-5 h-5 text-slate-400 mr-3 group-focus-within:text-primary-600 transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search titles, skills, or companies..."
                                        className="w-full focus:outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                                    />
                                </div>
                                <div className="flex-1 flex items-center px-6 py-3 group">
                                    <MapPin className="w-5 h-5 text-slate-400 mr-3 group-focus-within:text-primary-600 transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Preferred location..."
                                        className="w-full focus:outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                                    />
                                </div>
                                <button className="bg-primary-600 text-white px-10 py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 active:scale-95">
                                    Find Vacancies
                                </button>
                            </div>
                            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-medium text-slate-500">
                                <span>Popular:</span>
                                <a href="#" className="text-slate-900 hover:text-primary-600 transition-colors underline decoration-primary-200 underline-offset-4">Software Developer</a>
                                <a href="#" className="text-slate-900 hover:text-primary-600 transition-colors underline decoration-primary-200 underline-offset-4">UI Designer</a>
                                <a href="#" className="text-slate-900 hover:text-primary-600 transition-colors underline decoration-primary-200 underline-offset-4">Project Manager</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore by Category</h2>
                            <p className="text-slate-500">Browse through thousands of jobs in your preferred field</p>
                        </div>
                        <button className="hidden sm:block text-primary-600 font-bold hover:underline">View All Categories &rarr;</button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((cat, i) => (
                            <div key={i} className="group p-6 rounded-3xl border border-slate-100 hover:border-primary-100 hover:bg-primary-50/30 transition-all bg-white cursor-pointer text-center">
                                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-600 group-hover:bg-white group-hover:text-primary-600 transition-all border border-transparent group-hover:border-primary-100`}>
                                    <cat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">{cat.name}</h3>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{cat.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Jobs */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Jobs</h2>
                            <p className="text-slate-500">Hand-picked opportunities just for you</p>
                        </div>
                        <button className="text-primary-600 font-bold hover:underline">Explore All &rarr;</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {mockJobs.map(job => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-8 sm:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    <div className="relative z-10 lg:flex items-center justify-between gap-12">
                        <div className="max-w-xl mb-10 lg:mb-0 text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                                Don't miss the next big thing. <br />
                                <span className="text-primary-400">Join our weekly newsletter.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-0 italic">
                                Only the best jobs, once a week. No spam, ever.
                            </p>
                        </div>
                        <div className="flex-1 max-w-md mx-auto lg:mr-0">
                            <div className="flex p-1.5 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-md">
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="flex-1 bg-transparent border-none focus:outline-none px-6 text-white placeholder:text-slate-500"
                                />
                                <button className="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-400 transition-colors shadow-lg shadow-primary-500/20">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                            <a href="#" className="hover:text-primary-600">About</a>
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
        </div>
    );
};

export default Home;
