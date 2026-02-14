import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import clsx from 'clsx';

type EventStatus = 'upcoming' | 'live' | 'completed';

interface EventCardProps {
  title: string;
  society: string;
  date: string;
  venue: string;
  capacity: number;
  registered: number;
  status: EventStatus;
  index?: number;
}

const statusConfig: Record<
  EventStatus,
  { label: string; className: string; pulse?: boolean }
> = {
  upcoming: {
    label: 'Upcoming',
    className: 'bg-neon-cyan/20 text-neon-cyan dark:bg-neon-cyan/30',
    pulse: false,
  },
  live: {
    label: 'Live',
    className: 'bg-emerald-500/20 text-emerald-500',
    pulse: true,
  },
  completed: {
    label: 'Completed',
    className: 'bg-slate-500/20 text-slate-500 dark:bg-slate-400/20',
    pulse: false,
  },
};

export function EventCard({
  title,
  society,
  date,
  venue,
  capacity,
  registered,
  status,
  index = 0,
}: EventCardProps) {
  const percent = capacity > 0 ? Math.min((registered / capacity) * 100, 100) : 0;
  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={clsx(
        'rounded-3xl backdrop-blur-xl border border-white/20 dark:border-white/10',
        'bg-white/10 dark:bg-black/10',
        'shadow-soft hover:shadow-glow hover:border-neon-purple/30',
        'p-6 cursor-pointer overflow-hidden'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 truncate">
            {title}
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {society}
          </p>
        </div>
        <span
          className={clsx(
            'shrink-0 rounded-full px-3 py-1 text-xs font-medium',
            config.className,
            config.pulse && 'animate-pulse'
          )}
        >
          {config.label}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4 shrink-0" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="h-4 w-4 shrink-0" />
          {venue}
        </span>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
          <span>Capacity</span>
          <span>
            {registered} / {capacity}
          </span>
        </div>
        <div className="h-2 rounded-full overflow-hidden bg-white/10 dark:bg-black/20">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
