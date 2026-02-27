import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Mail, Lock, User, Building2, ArrowRight, Github, Chrome, CheckCircle2, Globe, Users } from 'lucide-react';
import Navbar from '../../components/Navbar';

const UserAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [role, setRole] = useState('candidate'); // 'candidate' or 'company'
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for login/register would go here
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
                <div className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden flex flex-col lg:flex-row border border-slate-100">

                    {/* Left Side: Illustration/Text */}
                    <div className="lg:w-1/2 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] -ml-32 -mb-32"></div>

                        <div className="relative z-10">
                            <Link to="/" className="flex items-center gap-2 mb-12">
                                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                                    <Briefcase className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold tracking-tight">Prosjob</span>
                            </Link>

                            <h2 className="text-4xl font-extrabold leading-tight mb-6">
                                {isLogin ? "Welcome back to the future of work." : "Start your journey with us today."}
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                {isLogin
                                    ? "Login to access your personalized dashboard and discover new opportunities."
                                    : "Join thousands of professionals and companies building the next generation of greatness."}
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Access to premium job listings",
                                    "Direct messaging with employers",
                                    "Advanced profile analytics",
                                    "One-click applications"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-primary-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 pt-12 mt-12 border-t border-white/10">
                            <p className="text-sm font-medium text-slate-500 italic">
                                "Prosjob changed how I hire. The quality of candidates is unmatched."
                            </p>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10"></div>
                                <div>
                                    <p className="text-sm font-bold">Sarah Jenkins</p>
                                    <p className="text-xs text-slate-500">CTO at TechFlow</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="flex-1 p-8 sm:p-16">
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center justify-between mb-10">
                                <h1 className="text-3xl font-bold text-slate-900">{isLogin ? "Sign In" : "Create Account"}</h1>
                            </div>

                            {/* Role Toggle */}
                            {!isLogin && (
                                <div className="flex p-1 bg-slate-100 rounded-2xl mb-8">
                                    <button
                                        onClick={() => setRole('candidate')}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${role === 'candidate' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        <User className="w-4 h-4" /> Candidate
                                    </button>
                                    <button
                                        onClick={() => setRole('company')}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${role === 'company' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        <Building2 className="w-4 h-4" /> Company
                                    </button>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {!isLogin && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                                {role === 'candidate' ? 'Full Name' : 'Company Name'}
                                            </label>
                                            <div className="relative group">
                                                {role === 'candidate' ? (
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                                ) : (
                                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                                )}
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder={role === 'candidate' ? "John Doe" : "Acme Corp"}
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all font-medium"
                                                />
                                            </div>
                                        </div>

                                        {role === 'company' && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-2">Industry</label>
                                                    <div className="relative group">
                                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                                        <select className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all font-medium bg-white appearance-none">
                                                            <option>Technology</option>
                                                            <option>Finance</option>
                                                            <option>Healthcare</option>
                                                            <option>Education</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Size</label>
                                                    <div className="relative group">
                                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                                        <select className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all font-medium bg-white appearance-none">
                                                            <option>1-10</option>
                                                            <option>11-50</option>
                                                            <option>51-200</option>
                                                            <option>201-500</option>
                                                            <option>500+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Website</label>
                                                    <div className="relative group">
                                                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                                        <input
                                                            type="url"
                                                            placeholder="https://example.com"
                                                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all font-medium"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                        <input
                                            type="email"
                                            required
                                            placeholder="name@company.com"
                                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="text-sm font-bold text-slate-700">Password</label>
                                        {isLogin && (
                                            <a href="#" className="text-xs font-bold text-primary-600 hover:underline">Forgot Password?</a>
                                        )}
                                    </div>
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 active:scale-[0.98]">
                                    {isLogin ? "Sign In" : "Get Started"} <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>

                            <div className="mt-8 relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-100"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase font-bold text-slate-400 bg-white px-4">
                                    Or continue with
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-slate-200 font-bold text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                    <Chrome className="w-5 h-5" /> Google
                                </button>
                                <button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-slate-200 font-bold text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                    <Github className="w-5 h-5" /> GitHub
                                </button>
                            </div>

                            <p className="mt-10 text-center text-sm font-medium text-slate-500">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="text-primary-600 font-bold hover:underline"
                                >
                                    {isLogin ? "Create account" : "Sign in"}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAuth;
