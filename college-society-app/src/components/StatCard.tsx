import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { GlassCard } from './GlassCard';
import clsx from 'clsx';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: { value: number; label: string };
  accent?: 'cyan' | 'purple';
  delay?: number;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  accent = 'cyan',
  delay = 0,
}: StatCardProps) {
  const count = useCountUp(value, 1200);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <GlassCard className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {title}
            </p>
            <p
              className={clsx(
                'mt-2 text-3xl font-bold',
                accent === 'cyan' && 'text-neon-cyan',
                accent === 'purple' && 'text-neon-purple'
              )}
            >
              {count}
            </p>
            {trend && (
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {trend.label}
              </p>
            )}
          </div>
          <div
            className={clsx(
              'rounded-3xl p-3',
              accent === 'cyan' && 'bg-neon-cyan/20 text-neon-cyan',
              accent === 'purple' && 'bg-neon-purple/20 text-neon-purple'
            )}
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
