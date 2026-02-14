import { motion } from 'framer-motion';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import clsx from 'clsx';

interface NavbarProps {
  sidebarCollapsed: boolean;
  onMenuClick?: () => void;
}

export function Navbar({ sidebarCollapsed, onMenuClick }: NavbarProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        'sticky top-0 z-20 flex h-16 items-center gap-4 px-4 md:px-6',
        'backdrop-blur-xl border-b border-white/20 dark:border-white/10',
        'bg-white/10 dark:bg-black/10',
        sidebarCollapsed ? 'md:ml-[72px]' : 'md:ml-[260px]'
      )}
    >
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Toggle menu"
        className="rounded-3xl p-2 hover:bg-white/10 dark:hover:bg-white/5 md:hidden"
      >
        <Menu className="h-6 w-6 text-slate-600 dark:text-slate-400" />
      </button>

      <div className="flex-1" />

      <div
        className={clsx(
          'flex items-center gap-2 rounded-3xl border px-4 py-2 transition-all duration-300',
          'backdrop-blur-sm bg-white/5 dark:bg-black/5',
          'border-white/20 dark:border-white/10',
          searchFocused && 'ring-2 ring-neon-cyan/50'
        )}
      >
        <Search className="h-4 w-4 shrink-0 text-slate-500 dark:text-slate-400" />
        <input
          type="search"
          placeholder="Search societies, events..."
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          className="w-32 bg-transparent text-sm outline-none placeholder:text-slate-500 dark:placeholder:text-slate-400 sm:w-48 md:w-64"
        />
      </div>

      <div className="relative flex items-center gap-2">
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-3xl p-2 hover:bg-white/10 dark:hover:bg-white/5"
        >
          <Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
        </button>

        <ThemeToggle />

        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((o) => !o)}
            className="flex items-center gap-2 rounded-3xl px-3 py-2 hover:bg-white/10 dark:hover:bg-white/5"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white text-sm font-bold">
              U
            </div>
            <span className="hidden text-sm font-medium text-slate-700 dark:text-slate-300 sm:inline">
              User
            </span>
            <ChevronDown
              className={clsx(
                'h-4 w-4 text-slate-500 transition-transform',
                profileOpen && 'rotate-180'
              )}
            />
          </button>
          {profileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute right-0 top-full mt-2 w-48 rounded-3xl backdrop-blur-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/10 py-2 shadow-soft-lg"
            >
              <button
                type="button"
                className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-white/10 dark:hover:bg-white/5"
              >
                Profile
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-white/10 dark:hover:bg-white/5"
              >
                Settings
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-white/10 dark:hover:bg-white/5"
              >
                Sign out
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
