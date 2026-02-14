import { SocietyCard } from '../components/SocietyCard';

const societies = [
  {
    id: 1,
    name: 'Tech Society',
    category: 'Tech',
    members: 156,
    events: 12,
    description: 'Coding, hackathons, and tech workshops for aspiring developers.',
  },
  {
    id: 2,
    name: 'Cultural Committee',
    category: 'Cultural',
    members: 98,
    events: 8,
    description: 'Dance, music, drama and cultural fest events throughout the year.',
  },
  {
    id: 3,
    name: 'Sports Club',
    category: 'Sports',
    members: 124,
    events: 15,
    description: 'Cricket, football, basketball and indoor games.',
  },
  {
    id: 4,
    name: 'Literary Society',
    category: 'Literary',
    members: 67,
    events: 6,
    description: 'Debates, creative writing, and literary competitions.',
  },
  {
    id: 5,
    name: 'Photography Club',
    category: 'Creative',
    members: 89,
    events: 10,
    description: 'Photo walks, exhibitions, and photography workshops.',
  },
  {
    id: 6,
    name: 'Robotics Society',
    category: 'Tech',
    members: 45,
    events: 5,
    description: 'Build robots, compete in national events, and learn automation.',
  },
];

export function Societies() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">
          Societies
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Explore and join college societies. Hover cards for 3D tilt.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {societies.map((society, index) => (
          <SocietyCard
            key={society.id}
            name={society.name}
            category={society.category}
            members={society.members}
            events={society.events}
            description={society.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
