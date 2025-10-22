import React from 'react';
import { PagePlaceholder } from './ComingSoon';
import { RocketIcon, PipelineIcon, WrenchIcon } from './icons/SidebarIcons';

const Deployment: React.FC = () => {
  const features = [
    {
      title: "One-Click Deployments",
      description: "Deploy your applications to AWS, Azure, GCP, or Vercel with a single click.",
      icon: <RocketIcon />,
    },
    {
      title: "CI/CD Pipelines",
      description: "Build, test, and deploy automatically with our intuitive drag-and-drop pipeline builder.",
      icon: <PipelineIcon />,
    },
    {
      title: "Infrastructure as Code",
      description: "Manage your cloud resources with integrated Terraform and Kubernetes support.",
      icon: <WrenchIcon />,
    },
  ];

  return (
    <PagePlaceholder
      title="Deployment & CI/CD"
      subtitle="Automate your workflow from code to cloud. Ship faster and more reliably with integrated pipelines."
      features={features}
    />
  );
};

export default Deployment;
