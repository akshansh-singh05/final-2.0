import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './layouts/MainLayout';

const Dashboard = lazy(() => import('./pages/Dashboard').then((m) => ({ default: m.Dashboard })));
const Societies = lazy(() => import('./pages/Societies').then((m) => ({ default: m.Societies })));
const Events = lazy(() => import('./pages/Events').then((m) => ({ default: m.Events })));
const AI = lazy(() => import('./pages/AI').then((m) => ({ default: m.AI })));

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-neon-cyan border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/societies" element={<Societies />} />
              <Route path="/events" element={<Events />} />
              <Route path="/ai" element={<AI />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
