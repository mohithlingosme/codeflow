import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from '@/components/ui/organisms/Sidebar.tsx';
import Header from '@/components/ui/organisms/Header.tsx';
import LoginForm from '@/components/ui/organisms/LoginForm.tsx';
import Projects from './pages/Projects.tsx';
import Dashboard from '@/components/ui/organisms/Dashboard.tsx';
import Learn from './pages/Learn.tsx';
import Community from './pages/Community.tsx';
import Planning from './pages/Planning.tsx';
import Testing from './pages/Testing.tsx';
import Deployment from './pages/Deployment.tsx';
import Maintenance from './pages/Maintenance.tsx';
import { SdlcPlan } from './types.ts';
import { generateSdlcPlan } from './services/geminiService.ts';
import { useAuthStore } from './store/useAuthStore.ts';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const [sdlcPlan, setSdlcPlan] = useState<SdlcPlan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<string>('Dashboard');
  const user = useAuthStore((state) => state.user);
  const loginAction = useAuthStore((state) => state.login);
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem('auth-storage');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser).state.user;
        if (parsedUser) {
          loginAction(parsedUser);
        }
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
      }
    }
  }, [loginAction]);

  const handlePlanGeneration = useCallback(async (projectType: string, description: string) => {
    setIsLoading(true);
    setError(null);
    setSdlcPlan(null);
    try {
      const plan = await generateSdlcPlan(projectType, description);
      setSdlcPlan(plan);
    } catch (err) {
      console.error(err);
      setError('Failed to generate the SDLC plan. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = useCallback(() => {
    loginAction({ token: 'testToken', username: 'testUser', role: 'admin' });
  }, [loginAction]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex h-screen bg-gray-100 text-gray-900 font-sans p-4">
          {user ? (
            <>
              <Sidebar activeView={activeView} onNavigate={setActiveView} />
              <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-100">
                  <AnimatePresence mode="wait" initial={false}>
                    <Routes location={location} key={location.pathname}>
                      <Route path="/" element={<Dashboard onNavigate={setActiveView} />} />
                      <Route path="/projects" element={<Projects onGeneratePlan={handlePlanGeneration} plan={sdlcPlan} isLoading={isLoading} error={error} />} />
                      <Route path="/planning" element={<Planning />} />
                      <Route path="/testing" element={<Testing />} />
                      <Route path="/deployment" element={<Deployment />} />
                      <Route path="/maintenance" element={<Maintenance />} />
                      <Route path="/community" element={<Community />} />
                      <Route path="/learn" element={<Learn />} />
                    </Routes>
                  </AnimatePresence>
                </main>
              </div>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
