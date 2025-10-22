import React from 'react';
import { PagePlaceholder } from './ComingSoon';
import { HeartbeatIcon, BugIcon, WrenchIcon } from './icons/SidebarIcons';

const Maintenance: React.FC = () => {
  const features = [
    {
      title: "Error Tracking",
      description: "Integrate Sentry-like dashboards to catch and debug errors in real-time.",
      icon: <BugIcon />,
    },
    {
      title: "Performance Metrics",
      description: "Monitor CPU, RAM, and response times with beautiful, easy-to-read graphs.",
      icon: <HeartbeatIcon />,
    },
    {
      title: "Automated Documentation",
      description: "Keep your project's documentation up-to-date automatically from your code and commits.",
      icon: <WrenchIcon />,
    },
  ];

  return (
    <PagePlaceholder
      title="Maintenance & Monitoring"
      subtitle="Keep your applications healthy and performant with integrated monitoring and error tracking."
      features={features}
    />
  );
};

export default Maintenance;
