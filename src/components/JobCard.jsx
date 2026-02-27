import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, DollarSign, ChevronRight } from 'lucide-react';

const JobCard = ({ job }) => {
    return (
        <Link
            to={`/job/${job.id}`}
            className="group block bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all cursor-pointer relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-[100px] -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>

            <div className="flex items-start justify-between relative z-10">
                <div className="flex gap-4">
                    <div className="w-14 h-14 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center group-hover:bg-white transition-colors">
                        <img src={job.logo} alt={job.company} className="w-10 h-10 object-contain rounded-lg" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{job.title}</h3>
                        <p className="text-slate-500 font-medium text-sm">{job.company}</p>
                    </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {job.type}
                </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-slate-500 text-sm font-medium relative z-10">
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100/50 text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {job.location}
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100/50 text-slate-600">
                    <DollarSign className="w-4 h-4 text-slate-400" />
                    {job.salary}
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100/50 text-slate-600">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {job.posted}
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                    {job.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold text-slate-400 bg-slate-50 uppercase tracking-widest px-2 py-1 rounded-md border border-slate-100">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-1 text-primary-600 font-bold text-sm group-hover:translate-x-1 transition-transform">
                    Apply Now <ChevronRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
};

export default JobCard;
