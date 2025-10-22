import React from 'react';
import { PagePlaceholder } from './ComingSoon';
import { TestTubeIcon, BugIcon, PipelineIcon } from './icons/SidebarIcons';

const Testing: React.FC = () => {
  const features = [
    {
      title: "Automated Test Generation",
      description: "Let our AI create unit and integration tests based on your code and requirements.",
      icon: <TestTubeIcon />,
    },
    {
      title: "Integrated Debugger",
      description: "A built-in, VS Code-like debugger to find and fix issues without leaving the app.",
      icon: <BugIcon />,
    },
    {
      title: "CI-Driven Testing",
      description: "Automatically run your test suites on every push or merge request with our CI pipelines.",
      icon: <PipelineIcon />,
    },
  ];

  return (
    <PagePlaceholder
      title="Testing & Quality Assurance"
      subtitle="Ensure your code is bug-free and reliable with our integrated suite of testing tools."
      features={features}
    />
  );
};

export default Testing;
