import React from 'react';
import DashboardWidget from './DashboardWidget.tsx';
import DashboardList from './DashboardList.tsx';
import { projects, learning, communityActivity } from './DashboardConfig.tsx';
import { FolderIcon, BookIcon, UsersIcon, SparklesIcon } from './icons/SidebarIcons.js';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Button } from "./ui/button.tsx"

interface DashboardProps {
  onNavigate: (view: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {

  const renderProjectItem = (project: any) => (
    <li className="flex justify-between items-center p-3 bg-brand-primary rounded-md border border-brand-border/50">
      <div>
        <p className="font-medium text-text">{project.name}</p>
        <p className="text-xs text-brand-subtle">{project.type}</p>
      </div>
      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${project.status === "In Progress" ? 'bg-blue-500/10 text-blue-400' : project.status === 'Planning' ? 'bg-purple-500/10 text-purple-400' : 'bg-green-500/10 text-green-400'}`}>
        {project.status}
      </span>
    </li>
  );

  const renderLearningItem = (learning: any) => (
    <li key={learning.title}>
      <p className="text-sm font-medium text-text mb-1">{learning.title}</p>
      <div className="w-full bg-brand-primary rounded-full h-2.5 border border-brand-border">
        <div className="bg-brand-accent h-2.5 rounded-full" style={{ width: `${learning.progress}%` }}></div>
      </div>
    </li>
  );

  const renderCommunityActivityItem = (activity: any) => (
    <li className="text-sm text-brand-subtle p-2 bg-brand-primary rounded-md">
      <span className="font-semibold text-brand-text">{activity.user}</span> {activity.activity} in <span className="text-brand-accent/80">{activity.channel}</span>
    </li>
  );

  const layout = [
    { i: 'projects', x: 0, y: 0, w: 3, h: 2 },
    { i: 'quickstart', x: 3, y: 0, w: 3, h: 2 },
    { i: 'learning', x: 0, y: 2, w: 3, h: 2 },
    { i: 'community', x: 3, y: 2, w: 3, h: 2 },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text">Welcome back!</h1>
        <p className="text-text/60 mt-1">Here's a snapshot of your developer workspace.</p>
      </div>

      <GridLayout className="layout" layout={layout} rowHeight={100} width={1200} breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 6, md: 4, sm: 2, xs: 1, xxs: 1 }}>
        <div key="projects">
          <DashboardWidget title="My Projects">
            <div className="flex justify-between items-center mb-4">
              <Button variant="link" onClick={() => onNavigate('Projects')}>View All</Button>
            </div>
            <DashboardList items={projects} renderItem={renderProjectItem} />
          </DashboardWidget>
        </div>

        <div key="quickstart">
          <DashboardWidget title="Quick Start">
            <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mb-3">
              <SparklesIcon />
            </div>
            <p className="text-sm text-text/60 mt-1 mb-4">Let our AI mentor generate a complete SDLC plan for your next big idea.</p>
            <Button onClick={() => onNavigate('Projects')} className="w-full bg-brand-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">
              Generate Plan
            </Button>
          </DashboardWidget>
        </div>

        <div key="learning">
          <DashboardWidget title="Learning Path">
            <div className="flex justify-between items-center mb-4">
              <Button variant="link" onClick={() => onNavigate('Learn')}>See Courses</Button>
            </div>
            <DashboardList items={learning} renderItem={renderLearningItem} />
          </DashboardWidget>
        </div>

        <div key="community">
          <DashboardWidget title="Community Activity">
            <div className="flex justify-between items-center mb-4">
              <Button variant="link" onClick={() => onNavigate('Community')}>Visit Hub</Button>
            </div>
            <DashboardList items={communityActivity} renderItem={renderCommunityActivityItem} />
          </DashboardWidget>
        </div>
      </GridLayout>
    </div>
  );
};

export default Dashboard;
