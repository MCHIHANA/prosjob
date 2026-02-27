import React, { createContext, useContext, useState, useEffect } from 'react';

const JobContext = createContext();

export const useJobContext = () => {
    const context = useContext(JobContext);
    if (!context) {
        throw new Error('useJobContext must be used within a JobProvider');
    }
    return context;
};

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: "Senior Product Designer",
            company: "DesignCo",
            logo: "https://api.dicebear.com/7.x/identicon/svg?seed=DesignCo",
            location: "San Francisco, CA",
            salary: "$140k - $180k",
            type: "Full-time",
            posted: "2 hours ago",
            tags: ["Product", "Figma", "UI/UX"],
            category: "Design",
            applicants: 42,
            status: "Active",
            description: "I am a Senior Product Designer with 5+ years of experience...",
            companyWebsite: "https://designco.com"
        },
        {
            id: 2,
            title: "Full Stack Engineer",
            company: "TechFlow",
            logo: "https://api.dicebear.com/7.x/identicon/svg?seed=TechFlow",
            location: "Remote",
            salary: "$120k - $160k",
            type: "Remote",
            posted: "5 hours ago",
            tags: ["React", "Node.js", "Postgres"],
            category: "Engineering",
            applicants: 128,
            status: "Active",
            description: "We are looking for a Full Stack Engineer...",
            companyWebsite: "https://techflow.com"
        },
        {
            id: 3,
            title: "Backend Developer (Go)",
            company: "Systemic",
            logo: "https://api.dicebear.com/7.x/identicon/svg?seed=Systemic",
            location: "New York, NY",
            salary: "$130k - $170k",
            type: "On-site",
            posted: "1 day ago",
            tags: ["Golang", "AWS", "Docker"],
            category: "Engineering",
            applicants: 15,
            status: "Closed",
            description: "Systemic is looking for a Backend Developer...",
            companyWebsite: "https://systemic.com"
        },
        {
            id: 4,
            title: "Marketing Manager",
            company: "GrowthLab",
            logo: "https://api.dicebear.com/7.x/identicon/svg?seed=GrowthLab",
            location: "Austin, TX",
            salary: "$90k - $120k",
            type: "Hybrid",
            posted: "3 hours ago",
            tags: ["SEO", "AdWords", "Content"],
            category: "Marketing",
            applicants: 67,
            status: "Active",
            description: "GrowthLab is looking for a Marketing Manager...",
            companyWebsite: "https://growthlab.com"
        }
    ]);

    const addJob = (job) => {
        const newJob = {
            ...job,
            id: jobs.length > 0 ? Math.max(...jobs.map(j => j.id)) + 1 : 1,
            posted: "Just now",
            applicants: 0,
            status: "Active",
            tags: job.tags || [job.category],
            logo: `https://api.dicebear.com/7.x/identicon/svg?seed=${job.company || 'default'}`
        };
        setJobs([newJob, ...jobs]);
    };

    const updateJob = (id, updatedJob) => {
        setJobs(jobs.map(job => (job.id === parseInt(id) ? { ...job, ...updatedJob } : job)));
    };

    const deleteJob = (id) => {
        setJobs(jobs.filter(job => job.id !== parseInt(id)));
    };

    return (
        <JobContext.Provider value={{ jobs, addJob, updateJob, deleteJob }}>
            {children}
        </JobContext.Provider>
    );
};
