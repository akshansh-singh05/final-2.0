import { EventCard } from '../components/EventCard';

const events = [
  {
    id: 1,
    title: 'Hackathon 2025 Kickoff',
    society: 'Tech Society',
    date: 'Feb 15, 10:00 AM',
    venue: 'Main Auditorium',
    capacity: 200,
    registered: 156,
    status: 'upcoming' as const,
  },
  {
    id: 2,
    title: 'Dance Workshop',
    society: 'Cultural Committee',
    date: 'Feb 16, 4:00 PM',
    venue: 'Dance Studio',
    capacity: 50,
    registered: 50,
    status: 'upcoming' as const,
  },
  {
    id: 3,
    title: 'Cricket League Finals',
    society: 'Sports Club',
    date: 'Feb 14, 9:00 AM',
    venue: 'Cricket Ground',
    capacity: 500,
    registered: 320,
    status: 'live' as const,
  },
  {
    id: 4,
    title: 'Poetry Slam',
    society: 'Literary Society',
    date: 'Feb 12, 6:00 PM',
    venue: 'Amphitheatre',
    capacity: 100,
    registered: 100,
    status: 'completed' as const,
  },
  {
    id: 5,
    title: 'Photo Walk - Campus',
    society: 'Photography Club',
    date: 'Feb 18, 7:00 AM',
    venue: 'Campus',
    capacity: 30,
    registered: 18,
    status: 'upcoming' as const,
  },
  {
    id: 6,
    title: 'Robotics Demo Day',
    society: 'Robotics Society',
    date: 'Feb 20, 2:00 PM',
    venue: 'Tech Lab',
    capacity: 80,
    registered: 45,
    status: 'upcoming' as const,
  },
];

export function Events() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">
          Events
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Upcoming, live, and past events. Capacity bars show registration status.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard
            key={event.id}
            title={event.title}
            society={event.society}
            date={event.date}
            venue={event.venue}
            capacity={event.capacity}
            registered={event.registered}
            status={event.status}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
