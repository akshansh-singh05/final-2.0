import { motion, useMotionValue } from 'framer-motion';
import { Users } from 'lucide-react';
import clsx from 'clsx';

interface SocietyCardProps {
  name: string;
  category: string;
  members: number;
  events: number;
  description: string;
  index?: number;
}

export function SocietyCard({
  name,
  category,
  members,
  events,
  description,
  index = 0,
}: SocietyCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const tiltStrength = 8;
    rotateX.set((mouseY / (rect.height / 2)) * -tiltStrength);
    rotateY.set((mouseX / (rect.width / 2)) * tiltStrength);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className={clsx(
        'rounded-3xl backdrop-blur-xl border border-white/20 dark:border-white/10',
        'bg-white/10 dark:bg-black/10',
        'shadow-soft hover:shadow-glow hover:border-neon-cyan/30',
        'p-6 cursor-pointer transition-shadow duration-300',
        'flex flex-col'
      )}
    >
      <div className="flex items-start justify-between" style={{ transform: 'translateZ(20px)' }}>
        <div
          className={clsx(
            'rounded-3xl p-3',
            'bg-neon-cyan/20 text-neon-cyan dark:bg-neon-cyan/30'
          )}
        >
          <Users className="h-6 w-6" strokeWidth={2} />
        </div>
        <span
          className="rounded-full px-3 py-1 text-xs font-medium bg-neon-purple/20 text-neon-purple dark:bg-neon-purple/30"
          style={{ transform: 'translateZ(20px)' }}
        >
          {category}
        </span>
      </div>
      <h3
        className="mt-4 text-lg font-semibold text-slate-800 dark:text-slate-100"
        style={{ transform: 'translateZ(15px)' }}
      >
        {name}
      </h3>
      <p
        className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400"
        style={{ transform: 'translateZ(10px)' }}
      >
        {description}
      </p>
      <div
        className="mt-4 flex gap-4 text-sm text-slate-500 dark:text-slate-400"
        style={{ transform: 'translateZ(15px)' }}
      >
        <span>{members} members</span>
        <span>{events} events</span>
      </div>
    </motion.div>
  );
}
