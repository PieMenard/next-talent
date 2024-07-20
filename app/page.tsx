import AddTalent from '@/components/AddTalent';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-10/12 items-center mx-auto p-24">
      <h1 className="text-6xl font-bold text-center">💼 Next Talent</h1>
      <p>Hire the best around!</p>
      <AddTalent />
    </main>
  );
}
