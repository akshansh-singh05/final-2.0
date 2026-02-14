import { motion } from 'framer-motion';
import { Sparkles, MessageCircle } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { useState } from 'react';
import clsx from 'clsx';

const recommendations = [
  'Based on your interest in coding, join Tech Society and attend Hackathon 2025.',
  'You might enjoy the Dance Workshop by Cultural Committee this weekend.',
  'Robotics Society has a Demo Day coming up — great for hands-on learning.',
];

export function AI() {
  const [, setExpanded] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">
          AI Recommendations
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Personalized society and event suggestions powered by AI.
        </p>
      </div>

      <GlassCard className="relative overflow-hidden p-8">
        {/* Sparkle animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-neon-cyan/60"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute w-2 h-2 rounded-full bg-neon-purple/60"
              style={{
                right: `${10 + i * 20}%`,
                bottom: `${15 + (i % 2) * 30}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 0.5 + i * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative flex items-start gap-4">
          <div className="rounded-3xl bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 p-3">
            <Sparkles className="h-8 w-8 text-neon-cyan" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Your personalized recommendations
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Our AI has analyzed your interests and activity to suggest societies and events.
            </p>
            <ul className="mt-6 space-y-3">
              {recommendations.map((rec, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-3 rounded-3xl bg-white/5 dark:bg-black/5 px-4 py-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="text-neon-cyan shrink-0">•</span>
                  {rec}
                </motion.li>
              ))}
            </ul>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 rounded-3xl bg-gradient-to-r from-neon-cyan to-neon-purple px-6 py-3 text-sm font-medium text-white shadow-soft hover:shadow-glow transition-shadow"
            >
              Get more recommendations
            </motion.button>
          </div>
        </div>
      </GlassCard>

      {/* Floating chatbot button */}
      <motion.button
        type="button"
        aria-label="Open AI chat"
        onClick={() => setExpanded((e) => !e)}
        className={clsx(
          'fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full',
          'backdrop-blur-xl border-2 border-white/20 dark:border-white/10',
          'bg-white/10 dark:bg-black/10',
          'shadow-soft hover:shadow-glow',
          'md:bottom-8'
        )}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-neon-cyan/20 opacity-75" />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-neon-cyan/40"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        <MessageCircle className="relative h-6 w-6 text-neon-cyan" strokeWidth={2} />
      </motion.button>
    </div>
  );
}
