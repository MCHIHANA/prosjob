import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl font-extrabold mb-8 text-primary-600 dark:text-primary-500">About Us</h1>
                <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    <p className="mb-6">
                        Welcome to Prosjob, your number one source for all things career opportunities. We're dedicated to giving you the very best of job listings, with a focus on quality, reliability, and user-friendly experience.
                    </p>
                    <p className="mb-6">
                        Founded in 2026, Prosjob has come a long way from its beginnings. When we first started out, our passion for helping people find meaningful work drove us to start our own platform. Now we serve customers all over the world, and are thrilled that we're able to turn our passion into our own website.
                    </p>
                    <p>
                        We hope you enjoy our platform as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
