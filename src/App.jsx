import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import SearchJobs from './pages/SearchJobs';
import PostJob from './pages/PostJob';
import JobDetails from './pages/JobDetails';
import UserAuth from './pages/Auth/UserAuth';
import AdminAuth from './pages/Auth/AdminAuth';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import { JobProvider } from './context/JobContext';

function App() {
    return (
        <ThemeProvider>
            <JobProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<SearchJobs />} />
                        <Route path="/post-job" element={<PostJob />} />
                        <Route path="/job/:id" element={<JobDetails />} />
                        <Route path="/login" element={<UserAuth />} />
                        <Route path="/admin" element={<AdminAuth />} />
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/admin/edit-job/:id" element={<PostJob />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </JobProvider>
        </ThemeProvider>
    );
}

export default App;
