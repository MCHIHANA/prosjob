import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl font-extrabold mb-8 text-primary-600 dark:text-primary-500 text-center">Contact Us</h1>
                <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12">
                    Have any questions? We'd love to hear from you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                                    <p className="font-semibold text-lg">+265 99 123 4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                                    <p className="font-semibold text-lg">hello@prosjob.mw</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                                    <p className="font-semibold text-lg">Lilongwe, Malawi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white resize-none" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-primary-600/20 active:scale-95">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
