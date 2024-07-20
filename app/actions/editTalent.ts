'use server';

import { prisma } from '@/utils/prisma';
import { revalidatePath } from 'next/cache';

export async function editTalent(formData: FormData) {
  const newName = formData.get('name') as string | null;
  const newEmail = formData.get('email') as string | null;
  const newTitle = formData.get('title') as string | null;
  const newSkills = formData.get('skills') as string | null;
  const inputID = formData.get('inputID') as string | null;

  if (!newName || !newEmail || !newTitle || !newSkills || !inputID) {
    throw new Error('All fields are required and must be strings');
  }

  await prisma.talent.update({
    where: {
      id: inputID,
    },
    data: {
      name: newName,
      email: newEmail,
      title: newTitle,
      skills: newSkills,
    },
  });

  revalidatePath('/');
}
