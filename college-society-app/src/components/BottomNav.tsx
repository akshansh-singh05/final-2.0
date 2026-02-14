import { LayoutDashboard, Users, Calendar, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/societies', icon: Users, label: 'Societies' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/ai', icon: Sparkles, label: 'AI' },
];

export function BottomNav() {
  return (
    <nav
      className={clsx(
        'fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around',
        'backdrop-blur-xl border-t border-white/20 dark:border-white/10',
        'bg-white/10 dark:bg-black/10',
        'py-2 md:hidden'
      )}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            clsx(
              'flex flex-col items-center gap-1 rounded-3xl px-4 py-2 text-xs font-medium transition-colors',
              isActive
                ? 'text-neon-cyan'
                : 'text-slate-600 dark:text-slate-400'
            )
          }
        >
          <item.icon className="h-5 w-5" strokeWidth={2} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
