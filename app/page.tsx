import AddTalent from '@/components/AddTalent';
import { prisma } from '@/utils/prisma';

export default async function Home() {
  const talentData = await prisma.talent.findMany();

  return (
    <main className="flex min-h-screen flex-col w-10/12 items-center mx-auto p-24">
      <h1 className="text-6xl font-bold text-center">💼 Next Talent</h1>
      <p>Hire the best around!</p>
      <AddTalent />
      {talentData.length > 0 &&
        talentData.map((talent) => <div key={talent.id}>{talent.name}</div>)}
    </main>
  );
}
