import { motion } from 'framer-motion';
import { Users, Calendar, TrendingUp, Activity } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { StatCard } from '../components/StatCard';
import { GlassCard } from '../components/GlassCard';

const lineData = [
  { name: 'Mon', events: 12, members: 45 },
  { name: 'Tue', events: 19, members: 52 },
  { name: 'Wed', events: 15, members: 58 },
  { name: 'Thu', events: 22, members: 65 },
  { name: 'Fri', events: 28, members: 72 },
  { name: 'Sat', events: 18, members: 68 },
  { name: 'Sun', events: 14, members: 70 },
];

const pieData = [
  { name: 'Tech', value: 35, color: '#00f5ff' },
  { name: 'Cultural', value: 28, color: '#a855f7' },
  { name: 'Sports', value: 22, color: '#22c55e' },
  { name: 'Literary', value: 15, color: '#f59e0b' },
];

const recentActivity = [
  { id: 1, text: 'New member joined Tech Society', time: '2m ago' },
  { id: 2, text: 'Event "Hackathon 2025" created', time: '15m ago' },
  { id: 3, text: 'Cultural Fest registration opened', time: '1h ago' },
  { id: 4, text: 'Sports Society meeting scheduled', time: '2h ago' },
];

const upcomingEvents = [
  { id: 1, title: 'Hackathon Kickoff', society: 'Tech Society', date: 'Tomorrow, 10:00 AM' },
  { id: 2, title: 'Dance Workshop', society: 'Cultural', date: 'Feb 16, 4:00 PM' },
  { id: 3, title: 'Cricket Match', society: 'Sports', date: 'Feb 17, 9:00 AM' },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Welcome back! Here&apos;s your society overview.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Societies"
          value={24}
          icon={Users}
          trend={{ value: 3, label: '+3 this month' }}
          accent="cyan"
          delay={0}
        />
        <StatCard
          title="Upcoming Events"
          value={18}
          icon={Calendar}
          trend={{ value: 5, label: 'This week' }}
          accent="purple"
          delay={0.05}
        />
        <StatCard
          title="Active Members"
          value={1247}
          icon={TrendingUp}
          trend={{ value: 12, label: '% growth' }}
          accent="cyan"
          delay={0.1}
        />
        <StatCard
          title="Activities Today"
          value={42}
          icon={Activity}
          accent="purple"
          delay={0.15}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-6">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Activity Overview
          </h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-white/10" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="events"
                  stroke="#00f5ff"
                  strokeWidth={2}
                  dot={{ fill: '#00f5ff' }}
                  name="Events"
                />
                <Line
                  type="monotone"
                  dataKey="members"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={{ fill: '#a855f7' }}
                  name="Members"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Society Distribution
          </h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-6">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Recent Activity
          </h2>
          <ul className="mt-4 space-y-3">
            {recentActivity.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="flex items-center justify-between rounded-3xl px-4 py-3 bg-white/5 dark:bg-black/5"
              >
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {item.text}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {item.time}
                </span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="p-6">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Upcoming Events
          </h2>
          <ul className="mt-4 space-y-3">
            {upcomingEvents.map((event, i) => (
              <motion.li
                key={event.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="rounded-3xl border border-white/20 dark:border-white/10 bg-white/5 dark:bg-black/5 px-4 py-3"
              >
                <p className="font-medium text-slate-800 dark:text-slate-100">
                  {event.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {event.society} · {event.date}
                </p>
              </motion.li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}
