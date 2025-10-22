import React from 'react';

const ComingSoonCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-brand-secondary p-6 rounded-xl border border-brand-border text-center flex flex-col items-center transform hover:-translate-y-1 transition-transform duration-300 h-full">
        <div className="flex-shrink-0 flex justify-center items-center mb-4 text-brand-accent">{icon}</div>
        <div className="flex-grow">
            <h3 className="text-lg font-semibold text-brand-text">{title}</h3>
            <p className="text-sm text-brand-subtle mt-2">{description}</p>
        </div>
        <span className="mt-4 inline-block bg-yellow-500/10 text-yellow-400 text-xs font-medium px-2.5 py-0.5 rounded-full">Coming Soon</span>
    </div>
);

export const PagePlaceholder: React.FC<{ title: string; subtitle: string; features: Array<{ title: string; description: string; icon: React.ReactNode }> }> = ({ title, subtitle, features }) => (
    <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-text">{title}</h1>
            <p className="mt-3 text-lg text-brand-subtle max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(feature => <ComingSoonCard key={feature.title} {...feature} />)}
        </div>
    </div>
);
