import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit2, Trash2, Briefcase, Users, LayoutDashboard, Search, Filter, MoreVertical, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useJobContext } from '../context/JobContext';

const AdminDashboard = () => {
    const { jobs, deleteJob } = useJobContext();
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this job posting?')) {
            deleteJob(id);
        }
    };

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                            <LayoutDashboard className="w-8 h-8 text-primary-600" />
                            Admin Dashboard
                        </h1>
                        <p className="text-slate-500 font-medium mt-1">Manage and track all job opportunities in one place.</p>
                    </div>
                    <Link
                        to="/post-job"
                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200"
                    >
                        <PlusCircle className="w-5 h-5" />
                        Post New Job
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Total Postings</p>
                        <h4 className="text-2xl font-bold text-slate-900">{jobs.length}</h4>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Total Applicants</p>
                        <h4 className="text-2xl font-bold text-slate-900">252</h4>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
                            <Filter className="w-6 h-6" />
                        </div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Active Jobs</p>
                        <h4 className="text-2xl font-bold text-slate-900">{jobs.filter(j => j.status === 'Active').length}</h4>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                            <MoreVertical className="w-6 h-6" />
                        </div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Success Rate</p>
                        <h4 className="text-2xl font-bold text-slate-900">85%</h4>
                    </div>
                </div>

                {/* Content Table */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <h2 className="text-lg font-bold text-slate-900">Recent Postings</h2>
                        <div className="relative group sm:w-64">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 transition-all font-medium text-sm"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Job Information</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Applicants</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest hidden lg:table-cell">Posted Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredJobs.map((job) => (
                                    <tr key={job.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-white transition-colors">
                                                    <Briefcase className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{job.title}</h5>
                                                    <p className="text-xs text-slate-500 font-medium">{job.company} • {job.type}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 hidden md:table-cell">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary-500 rounded-full" style={{ width: `${Math.min(job.applicants, 100)}%` }}></div>
                                                </div>
                                                <span className="text-xs font-bold text-slate-600">{job.applicants}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${job.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
                                                }`}>
                                                {job.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 hidden lg:table-cell">
                                            <span className="text-xs font-medium text-slate-500">{job.posted}</span>
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    to={`/job/${job.id}`}
                                                    target="_blank"
                                                    className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                                                    title="View Posting"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </Link>
                                                <Link
                                                    to={`/admin/edit-job/${job.id}`}
                                                    className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                                                    title="Edit Job"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(job.id)}
                                                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                                                    title="Delete Job"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {jobs.length === 0 && (
                        <div className="p-20 text-center">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-slate-300" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">No jobs found</h3>
                            <p className="text-slate-500 max-w-sm mx-auto">It looks like you haven't posted any jobs yet or they were all deleted. Click the button above to create one.</p>
                        </div>
                    )}

                    <div className="p-6 border-t border-slate-100 flex items-center justify-between">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing {filteredJobs.length} of {jobs.length} results</p>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 cursor-not-allowed opacity-50">Previous</button>
                            <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 cursor-not-allowed opacity-50">Next</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
