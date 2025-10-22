import React from 'react';
import { BookIcon, SparklesIcon } from './icons/SidebarIcons';

const LearnCard: React.FC<{ title: string; description: string; type: string; icon: React.ReactNode }> = ({ title, description, type, icon }) => (
    <div className="bg-brand-secondary p-6 rounded-xl border border-brand-border flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-lg mb-4">
            {icon}
        </div>
        <div className="flex-grow">
            <p className="text-xs font-semibold text-brand-accent uppercase">{type}</p>
            <h3 className="text-lg font-bold text-brand-text mt-1">{title}</h3>
            <p className="text-sm text-brand-subtle mt-2">{description}</p>
        </div>
        <button className="mt-4 w-full bg-brand-border text-brand-text font-semibold py-2 rounded-md hover:bg-brand-accent hover:text-white transition-colors">
            Start Learning
        </button>
    </div>
);


const Learn: React.FC = () => {
    const courses = [
        {
            title: "Guided Project: Build a To-Do App",
            description: "A hands-on tutorial to build a full-stack application using React and Node.js within our integrated Web IDE.",
            type: "Interactive Tutorial",
            icon: <BookIcon />
        },
        {
            title: "AI Mentor: Code Refactoring",
            description: "Submit your code and get personalized feedback from our AI mentor on how to improve its structure, readability, and performance.",
            type: "AI-Powered Learning",
            icon: <SparklesIcon />
        },
        {
            title: "Course: Intro to DevOps",
            description: "Learn the fundamentals of CI/CD, Docker, and Kubernetes and practice deploying a sample project.",
            type: "Video Course",
            icon: <BookIcon />
        },
    ];

    return (
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-brand-text">Learn & Grow</h1>
                <p className="mt-3 text-lg text-brand-subtle max-w-2xl mx-auto">
                    Level up your skills with interactive tutorials, AI-powered feedback, and guided projects.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => <LearnCard key={course.title} {...course} />)}
            </div>
        </div>
    );
};

export default Learn;
