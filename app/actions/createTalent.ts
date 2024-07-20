'use server';

import { prisma } from '@/utils/prisma';
import { revalidatePath } from 'next/cache';

export async function createTalent(formData: FormData) {
  const name = formData.get('name') as string | null;
  const email = formData.get('email') as string | null;
  const title = formData.get('title') as string | null;
  const skills = formData.get('skills') as string | null;

  if (!name || !email || !title || !skills) {
    throw new Error('All fields are required and must be strings');
  }

  await prisma.talent.create({
    data: {
      name,
      email,
      title,
      skills,
    },
  });
  revalidatePath('/');
}
