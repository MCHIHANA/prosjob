import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MapPin, Briefcase, Clock, DollarSign, Building2, Globe, Users, Calendar, ArrowLeft, Share2, Bookmark } from 'lucide-react';

const JobDetails = () => {
    const { id } = useParams();

    // Mock data for the specific job
    const job = {
        id: id,
        title: "Senior Product Designer",
        company: "DesignCo",
        logo: "https://api.dicebear.com/7.x/identicon/svg?seed=DesignCo",
        location: "San Francisco, CA",
        salary: "$140k - $180k",
        type: "Full-time",
        posted: "2 hours ago",
        description: "We are looking for a Senior Product Designer to join our rapidly growing team. You will be responsible for leading the design of our core products and helping shape the future of our design system.",
        responsibilities: [
            "Lead the design of complex features from conception to launch",
            "Collaborate with product managers and engineers to define product requirements",
            "Maintain and evolve our design system",
            "Mentor junior designers and provide constructive feedback"
        ],
        requirements: [
            "5+ years of experience in product design",
            "Strong portfolio demonstrating UI/UX excellence",
            "Proficiency in Figma and modern design tools",
            "Excellent communication and collaboration skills"
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navbar />

            <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
                <Link to="/search" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 font-medium mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Search
                </Link>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 space-y-8">
                        {/* Header Card */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8">
                                <div className="flex gap-6">
                                    <div className="w-20 h-20 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">
                                        <img src={job.logo} alt={job.company} className="w-14 h-14 object-contain rounded-xl" />
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold text-slate-900 mb-2">{job.title}</h1>
                                        <div className="flex items-center gap-4 text-slate-500 font-medium">
                                            <div className="flex items-center gap-1">
                                                <Building2 className="w-4 h-4" />
                                                {job.company}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 w-full sm:w-auto">
                                    <button className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                        <Bookmark className="w-5 h-5 text-slate-400" />
                                    </button>
                                    <button className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                        <Share2 className="w-5 h-5 text-slate-400" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-50">
                                <div className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-primary-500" /> {job.type}
                                </div>
                                <div className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100 flex items-center gap-2">
                                    <DollarSign className="w-4 h-4 text-primary-500" /> {job.salary}
                                </div>
                                <div className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary-500" /> {job.posted}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="bg-white p-8 sm:p-12 rounded-[2rem] shadow-sm border border-slate-100">
                            <div className="prose prose-slate max-w-none">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider">About the role</h3>
                                <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                                    {job.description}
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Responsibilities</h3>
                                <ul className="space-y-4 mb-10">
                                    {job.responsibilities.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Requirements</h3>
                                <ul className="space-y-4">
                                    {job.requirements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="lg:w-80">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                                <button className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 mb-4">
                                    Apply for this job
                                </button>
                                <div className="text-center">
                                    <p className="text-xs text-slate-400 font-medium">Response time: Usually within 24 hours</p>
                                </div>
                            </div>

                            <div className="bg-slate-900 p-6 rounded-[2rem] shadow-sm text-white">
                                <h3 className="font-bold mb-4">About DesignCo</h3>
                                <div className="space-y-4 text-sm font-medium text-slate-400">
                                    <div className="flex items-center gap-3">
                                        <Globe className="w-4 h-4" />
                                        <a href="#" className="hover:text-white transition-colors">designco.io</a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-4 h-4" />
                                        <span>50-100 employees</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default JobDetails;
