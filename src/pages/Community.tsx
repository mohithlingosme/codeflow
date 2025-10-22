import React from 'react';
import { UsersIcon, BookIcon, WrenchIcon } from './icons/SidebarIcons';

const Community: React.FC = () => {
  const forumPosts = [
    {
      title: "How to deploy a Node.js app to Vercel?",
      author: "Jane Doe",
      category: "Deployment",
      replies: 12,
      time: "2 hours ago",
    },
    {
      title: "Show off your latest project!",
      author: "John Smith",
      category: "Showcase",
      replies: 45,
      time: "8 hours ago",
    },
    {
      title: "Best practices for state management in React?",
      author: "Alex Ray",
      category: "Web Development",
      replies: 28,
      time: "1 day ago",
    },
     {
      title: "AI Mentor feedback on my Python script",
      author: "Sam Wilson",
      category: "AI & Machine Learning",
      replies: 8,
      time: "2 days ago",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-text">Community Hub</h1>
        <p className="mt-3 text-lg text-brand-subtle max-w-2xl mx-auto">
          Connect with other developers, ask questions, and share your work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <a href="#" className="bg-brand-secondary p-6 rounded-lg border border-brand-border hover:border-brand-accent transition-colors flex items-center space-x-4">
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.svg" alt="Discord" className="w-10 h-10"/>
          <div>
            <h3 className="font-semibold text-brand-text">Join our Discord</h3>
            <p className="text-sm text-brand-subtle">For real-time chat and collaboration.</p>
          </div>
        </a>
        <a href="#" className="bg-brand-secondary p-6 rounded-lg border border-brand-border hover:border-brand-accent transition-colors flex items-center space-x-4">
          <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack" className="w-10 h-10"/>
          <div>
            <h3 className="font-semibold text-brand-text">Connect on Slack</h3>
            <p className="text-sm text-brand-subtle">For team-based discussions and support.</p>
          </div>
        </a>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-brand-text mb-4">Latest Forum Posts</h2>
        <div className="bg-brand-secondary rounded-lg border border-brand-border">
          <ul className="divide-y divide-brand-border">
            {forumPosts.map((post, index) => (
              <li key={index} className="p-4 flex items-center justify-between hover:bg-brand-border/30">
                <div>
                  <a href="#" className="font-semibold text-brand-text hover:text-brand-accent">{post.title}</a>
                  <p className="text-sm text-brand-subtle mt-1">
                    by {post.author} in <span className="font-medium text-brand-accent/80">{post.category}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-brand-text">{post.replies} replies</p>
                  <p className="text-xs text-brand-subtle">{post.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Community;
