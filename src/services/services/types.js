// types.js
// Centralized constants, enums, and reusable definitions for Developer Super-App.

// ---------------------------------------------------------
// User Roles
// ---------------------------------------------------------
const UserRoles = Object.freeze({
  ADMIN: "admin",
  DEVELOPER: "developer",
  STUDENT: "student",
  MENTOR: "mentor",
  ENTERPRISE: "enterprise",
});

// ---------------------------------------------------------
// Project Status
// ---------------------------------------------------------
const ProjectStatus = Object.freeze({
  DRAFT: "draft",
  ACTIVE: "active",
  COMPLETED: "completed",
  ARCHIVED: "archived",
});

// ---------------------------------------------------------
// Subscription Plans
// ---------------------------------------------------------
const SubscriptionPlans = Object.freeze({
  FREE: "free",
  PRO: "pro",
  TEAM: "team",
  ENTERPRISE: "enterprise",
});

// ---------------------------------------------------------
// AI Agents Types
// ---------------------------------------------------------
const AIAgents = Object.freeze({
  MENTOR: "ai-mentor",           // teaches concepts, guides projects
  PAIR_PROGRAMMER: "ai-coder",   // helps write and review code
  QA_TESTER: "ai-tester",        // auto-generates and runs test cases
  DEVOPS_ASSISTANT: "ai-devops", // builds CI/CD, monitors deploys
  PM_HELPER: "ai-pm",            // breaks tasks, manages workflow
});

// ---------------------------------------------------------
// Task Priorities
// ---------------------------------------------------------
const TaskPriority = Object.freeze({
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  CRITICAL: "critical",
});

// ---------------------------------------------------------
// Supported Tech Stack (as constants, not runtime detection)
// ---------------------------------------------------------
const TechStack = Object.freeze({
  FRONTEND: ["React", "Next.js"],
  BACKEND: ["Node.js", "FastAPI", "PHP"],
  DATABASE: ["PostgreSQL", "MongoDB"],
  INFRA: ["Docker", "Kubernetes"],
  CLOUD: ["AWS", "GCP", "Azure"],
});

// ---------------------------------------------------------
// Export all constants
// ---------------------------------------------------------
module.exports = {
  UserRoles,
  ProjectStatus,
  SubscriptionPlans,
  AIAgents,
  TaskPriority,
  TechStack,
};
