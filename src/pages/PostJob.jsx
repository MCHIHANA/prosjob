import React from 'react';
import Navbar from '../components/Navbar';
import { Camera, Upload, CheckCircle2, Info } from 'lucide-react';

const PostJob = () => {
    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Post a New Job</h1>
                    <p className="text-slate-500">Fill out the information below to find your perfect candidate.</p>
                </div>

                <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    <div className="p-8 sm:p-12">
                        <form className="space-y-8">
                            {/* Basic Info */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm">1</span>
                                    Job Details
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium">
                                    <div className="col-span-2">
                                        <label className="block text-sm text-slate-600 mb-2">Job Title*</label>
                                        <input type="text" placeholder="e.g. Senior Software Engineer" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 mb-2">Job Category*</label>
                                        <select className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none bg-white">
                                            <option>Engineering</option>
                                            <option>Design</option>
                                            <option>Marketing</option>
                                            <option>Sales</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 mb-2">Job Type*</label>
                                        <select className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none bg-white">
                                            <option>Full-time</option>
                                            <option>Remote</option>
                                            <option>Contract</option>
                                            <option>Internship</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 mb-2">Location*</label>
                                        <input type="text" placeholder="e.g. Remote or City, Country" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 mb-2">Salary Range (Optional)</label>
                                        <input type="text" placeholder="e.g. $100k - $120k" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none" />
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
                                        <label className="block text-sm text-slate-600 mb-2">Job Description*</label>
                                        <textarea rows="6" placeholder="Describe the role, responsibilities, and team..." className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none resize-none"></textarea>
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
                                        <label className="block text-sm text-slate-600 mb-2">Company Name*</label>
                                        <input type="text" placeholder="e.g. Acme Corp" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-600 mb-2">Company Website</label>
                                        <input type="url" placeholder="https://example.com" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none" />
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
                                    Publish Job Posting
                                </button>
                                <button type="button" className="sm:w-1/3 bg-slate-100 text-slate-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                                    Save Draft
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
