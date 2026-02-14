import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/societies', icon: Users, label: 'Societies' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/ai', icon: Sparkles, label: 'AI Recommendations' },
];

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <motion.aside
      className={clsx(
        'fixed left-0 top-0 z-30 hidden h-screen flex-col',
        'backdrop-blur-xl border-r border-white/20 dark:border-white/10',
        'bg-white/10 dark:bg-black/10',
        'md:flex'
      )}
      initial={false}
      animate={{ width: collapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-white/10 dark:border-white/5">
        <AnimatePresence mode="wait">
          {!collapsed ? (
            <motion.span
              key="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
            >
              SocietyHub
            </motion.span>
          ) : (
            <motion.span
              key="logo-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-2xl"
            >
              🎓
            </motion.span>
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={onToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="rounded-3xl p-2 hover:bg-white/10 dark:hover:bg-white/5 hidden md:block"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          )}
        </button>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-neon-cyan/20 text-neon-cyan dark:bg-neon-cyan/30'
                  : 'text-slate-600 hover:bg-white/10 dark:text-slate-400 dark:hover:bg-white/5'
              )
            }
          >
            <item.icon className="h-5 w-5 shrink-0" strokeWidth={2} />
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  );
}
