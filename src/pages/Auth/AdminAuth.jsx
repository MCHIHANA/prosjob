import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldAlert, Mail, Lock, ArrowRight, ChevronLeft } from 'lucide-react';

const AdminAuth = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Admin login logic
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            <div className="absolute top-0 left-0 p-8">
                <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold text-sm">
                    <ChevronLeft className="w-4 h-4" /> Back to Home
                </Link>
            </div>

            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-500/20">
                        <ShieldAlert className="w-8 h-8 text-primary-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Admin Portal</h1>
                    <p className="text-slate-500 font-medium">Restricted access for system administrators only.</p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-xl p-8 sm:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Admin Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-primary-500 transition-colors" />
                                <input
                                    type="email"
                                    required
                                    placeholder="admin@prosjob.com"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-700 focus:border-primary-500 outline-none transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Secret Key</label>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-primary-500 transition-colors" />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-700 focus:border-primary-500 outline-none transition-all font-medium"
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-500 transition-all shadow-xl shadow-primary-900/20 active:scale-[0.98]">
                            Verify Identity <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-xs font-medium text-slate-600">
                        Forgot credentials? Contact system supervisor.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]">
                        Secure Environment v2.0
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminAuth;
