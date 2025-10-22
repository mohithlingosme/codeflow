
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-6 h-6">{children}</div>
);

export const PlanningIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-1.125 0-2.063.938-2.063 2.063v15.375c0 1.125.938 2.063 2.063 2.063h12.75c1.125 0 2.063-.938 2.063-2.063V15.75m-15.375-9.375h15.375M15.75 2.25v4.125m-15.375 0h15.375" />
        </svg>
    </IconWrapper>
);

export const DesignIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
    </IconWrapper>
);

export const CodeIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
    </IconWrapper>
);

export const TestIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </IconWrapper>
);

export const DeployIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a17.96 17.96 0 01-12.72 0M15.59 14.37A17.96 17.96 0 0118 13.5a17.96 17.96 0 01-3.21 4.82m3.21-4.82a17.96 17.96 0 00-3.21-4.82M4 13.5a17.96 17.96 0 013.21-4.82m3.21 4.82A17.96 17.96 0 016 13.5m0 0a17.96 17.96 0 0112.72 0m-12.72 0A17.96 17.96 0 006 13.5m-3.21 4.82A17.96 17.96 0 006 13.5m0 0C4.94 12.35 3.69 10.33 3.21 8.21m9.6 6.36A17.96 17.96 0 0015.59 14.37m0 0c.35-.61.66-1.25.93-1.92m-1.23 3.84a17.96 17.96 0 00-1.23-3.84m-4.34 0a17.96 17.96 0 01-1.23 3.84m6.78-3.84a17.96 17.96 0 00-6.78 0" />
        </svg>
    </IconWrapper>
);

export const MaintainIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V3m0 18a9.008 9.008 0 00-7.062-8.583M12 3a9.008 9.008 0 017.062 8.583m0 0a9.004 9.004 0 01-3.416 6.084M12 3c-2.126 0-4.08.812-5.55 2.188" />
        </svg>
    </IconWrapper>
);
