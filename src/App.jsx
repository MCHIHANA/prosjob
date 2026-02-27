import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchJobs from './pages/SearchJobs';
import PostJob from './pages/PostJob';
import JobDetails from './pages/JobDetails';
import UserAuth from './pages/Auth/UserAuth';
import AdminAuth from './pages/Auth/AdminAuth';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchJobs />} />
                <Route path="/post-job" element={<PostJob />} />
                <Route path="/job/:id" element={<JobDetails />} />
                <Route path="/login" element={<UserAuth />} />
                <Route path="/admin" element={<AdminAuth />} />
            </Routes>
        </Router>
    );
}

export default App;
