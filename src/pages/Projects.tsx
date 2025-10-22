import React, { useState } from 'react';
import { SdlcPlan } from '../types';
import { PROJECT_TYPES } from '../constants';
import PhaseCard from './PhaseCard';
import { SparklesIcon } from './icons/SidebarIcons';

interface ProjectsProps {
  onGeneratePlan: (projectType: string, description: string) => void;
  plan: SdlcPlan | null;
  isLoading: boolean;
  error: string | null;
}

const Projects: React.FC<ProjectsProps> = ({ onGeneratePlan, plan, isLoading, error }) => {
  const [projectType, setProjectType] = useState<string>(PROJECT_TYPES[0]);
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onGeneratePlan(projectType, description);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSkeleton />;
    }
    if (error) {
      return <div className="text-center text-red-400 p-8 bg-red-500/10 rounded-lg">{error}</div>;
    }
    if (plan) {
      return (
        <div className="space-y-8">
            <div className="text-center p-6 border border-brand-border rounded-lg bg-brand-secondary">
                <h2 className="text-3xl font-bold text-brand-text">{plan.projectName}</h2>
                <p className="mt-2 text-brand-subtle max-w-3xl mx-auto">{plan.projectSummary}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
                {plan.phases.map((phase, index) => (
                    <PhaseCard key={index} phase={phase} index={index} />
                ))}
            </div>
        </div>
      );
    }
    return <InitialState />;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-brand-secondary p-6 rounded-xl border border-brand-border shadow-lg mb-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="project-type" className="block text-sm font-medium text-brand-subtle mb-2">
                Project Type
              </label>
              <select
                id="project-type"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-brand-primary border border-brand-border rounded-md px-3 py-2 text-brand-text focus:ring-2 focus:ring-brand-accent focus:outline-none transition"
              >
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="project-description" className="block text-sm font-medium text-brand-subtle mb-2">
                Describe Your Project
              </label>
              <textarea
                id="project-description"
                rows={1}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., A mobile app for tracking personal fitness goals..."
                className="w-full bg-brand-primary border border-brand-border rounded-md px-3 py-2 text-brand-text focus:ring-2 focus:ring-brand-accent focus:outline-none transition"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={isLoading || !description.trim()}
              className="flex items-center justify-center bg-brand-accent text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SparklesIcon />
              <span className="ml-2">{isLoading ? 'Generating...' : 'Generate Plan'}</span>
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8">
        {renderContent()}
      </div>
    </div>
  );
};

const InitialState: React.FC = () => (
  <div className="text-center py-16 px-6 border-2 border-dashed border-brand-border rounded-xl">
    <h2 className="text-2xl font-semibold text-brand-text">Welcome to the AI SDLC Planner</h2>
    <p className="mt-2 text-brand-subtle max-w-xl mx-auto">
      Choose a project type, describe your idea, and let our AI mentor craft a personalized development roadmap for you.
    </p>
  </div>
);

const LoadingSkeleton: React.FC = () => (
    <div className="space-y-8 animate-pulse">
        <div className="text-center p-6 border border-brand-border rounded-lg bg-brand-secondary">
            <div className="h-8 bg-brand-border rounded-md w-1/2 mx-auto"></div>
            <div className="h-4 bg-brand-border rounded-md w-3/4 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-brand-secondary p-5 rounded-xl border border-brand-border">
                    <div className="h-6 bg-brand-border rounded-md w-1/3 mb-4"></div>
                    <div className="h-4 bg-brand-border rounded-md w-full mb-2"></div>
                    <div className="h-4 bg-brand-border rounded-md w-5/6 mb-6"></div>
                    <div className="h-5 bg-brand-border rounded-md w-1/4 mb-4"></div>
                    <div className="h-10 bg-brand-border rounded-md w-full"></div>
                </div>
            ))}
        </div>
    </div>
);


export default Projects;
