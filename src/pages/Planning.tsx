import React from 'react';
import { PagePlaceholder } from './ComingSoon';
import { UsersIcon, LightbulbIcon, KanbanIcon, DiagramIcon } from './icons/SidebarIcons';

const Planning: React.FC = () => {
  const features = [
    {
      title: "Collaborative Docs",
      description: "Notion/Confluence-style real-time documentation for requirements gathering.",
      icon: <UsersIcon />,
    },
    {
      title: "AI Requirement Analysis",
      description: "Convert plain text into user stories, acceptance criteria, and UML diagrams.",
      icon: <LightbulbIcon />,
    },
    {
      title: "Integrated Task Boards",
      description: "Manage your workflow with built-in Kanban and Scrum boards.",
      icon: <KanbanIcon />,
    },
     {
      title: "Visual Design Tools",
      description: "Create wireframes, mockups, and database schemas directly within the platform.",
      icon: <DiagramIcon />,
    },
  ];

  return (
    <PagePlaceholder
      title="Planning & Design"
      subtitle="Where great projects begin. Collaborate on requirements, design architecture, and plan your sprints."
      features={features}
    />
  );
};

export default Planning;
