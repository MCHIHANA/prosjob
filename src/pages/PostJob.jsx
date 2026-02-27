import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Info, Upload, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useJobContext } from '../context/JobContext';

const PostJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { jobs, addJob, updateJob } = useJobContext();
    const isEdit = !!id;

    const [jobData, setJobData] = useState({
        title: "",
        category: "Engineering",
        type: "Full-time",
        location: "",
        salary: "",
        description: "",
        company: "",
        companyWebsite: ""
    });

    useEffect(() => {
        if (isEdit) {
            const job = jobs.find(j => j.id === parseInt(id));
            if (job) {
                setJobData({
                    title: job.title,
                    category: job.category,
                    type: job.type,
                    location: job.location,
                    salary: job.salary,
                    description: job.description,
                    company: job.company,
                    companyWebsite: job.companyWebsite
                });
            }
        }
    }, [id, isEdit, jobs]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            updateJob(id, jobData);
        } else {
            addJob(jobData);
        }
        alert(isEdit ? 'Job updated successfully!' : 'Job posted successfully!');
        navigate('/admin/dashboard');
    };

    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        {isEdit ? 'Edit Job Posting' : 'Post a New Job'}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400">
                        {isEdit ? `Update the details for "${jobData.title}"` : 'Fill out the information below to find your perfect candidate.'}
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
                    <div className="p-8 sm:p-12">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Basic Info */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm">1</span>
                                    Job Details
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium">
                                    <div className="col-span-2">
                                        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Job Title*</label>
                                        <input
                                            type="text"
                                            required
                                            value={jobData.title}
                                            onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
                                            placeholder="e.g. Senior Software Engineer"
                                            className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 dark:focus:ring-primary-900/20 transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Job Category*</label>
                                        <select
                                            value={jobData.category}
                                            onChange={(e) => setJobData({ ...jobData, category: e.target.value })}
                                            className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 dark:focus:ring-primary-900/20 transition-all outline-none"
                                        >
                                            <option>Engineering</option>
                                            <option>Design</option>
                                            <option>Marketing</option>
                                            <option>Sales</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Job Type*</label>
                                        <select
                                            value={jobData.type}
                                            onChange={(e) => setJobData({ ...jobData, type: e.target.value })}
                                            className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 dark:focus:ring-primary-900/20 transition-all outline-none"
                                        >
                                            <option>Full-time</option>
                                            <option>Remote</option>
                                            <option>Contract</option>
                                            <option>Internship</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Location*</label>
                                        <input
                                            type="text"
                                            required
                                            value={jobData.location}
                                            onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
                                            placeholder="e.g. Remote or City, Country"
                                            className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 dark:focus:ring-primary-900/20 transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Salary Range (Optional)</label>
                                        <input
                                            type="text"
                                            value={jobData.salary}
                                            onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
                                            placeholder="e.g. $100k - $120k"
                                            className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 dark:focus:ring-primary-900/20 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Description */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm">2</span>
                                    Description & Requirements
                                </h2>
                                <div className="space-y-6 font-medium">
                                    <div>
                                        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Job Description*</label>
                                        <textarea
                                            rows="6"
                                            required
                                            value={jobData.description}
                                            onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
                                            placeholder="Describe the role, responsibilities, and team..."
                                            className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 dark:focus:ring-primary-900/20 transition-all outline-none resize-none"
                                        ></textarea>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-sm text-blue-700">
                                        <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <p>Pro tip: Clear and concise job descriptions attract 30% more high-quality applicants.</p>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Company Info */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm">3</span>
                                    Company Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium">
                                    <div className="col-span-2">
                                        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Company Name*</label>
                                        <input
                                            type="text"
                                            required
                                            value={jobData.company}
                                            onChange={(e) => setJobData({ ...jobData, company: e.target.value })}
                                            placeholder="e.g. Acme Corp"
                                            className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 dark:focus:ring-primary-900/20 transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Company Website</label>
                                        <input
                                            type="url"
                                            value={jobData.companyWebsite}
                                            onChange={(e) => setJobData({ ...jobData, companyWebsite: e.target.value })}
                                            placeholder="https://example.com"
                                            className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 dark:focus:ring-primary-900/20 transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 mb-2">Company Logo</label>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-50 transition-all">
                                                <Upload className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs text-slate-400">PNG or JPG, max 5MB</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="pt-6 flex flex-col sm:flex-row gap-4">
                                <button type="submit" className="flex-1 bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">
                                    {isEdit ? 'Update Job Posting' : 'Publish Job Posting'}
                                </button>
                                <button type="button"
                                    onClick={() => navigate(isEdit ? '/admin/dashboard' : '/')}
                                    className="sm:w-1/3 bg-slate-100 text-slate-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-8 text-sm font-medium text-slate-400">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Verified Employers
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Instant Activation
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Secure Payment
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PostJob;
