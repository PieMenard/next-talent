'use server';

import { prisma } from '@/utils/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteTalent(formData: FormData) {
  const inputID = formData.get('inputID') as string | null;

  if (!inputID) {
    throw new Error('Invalid ID');
  }

  await prisma.talent.delete({
    where: {
      id: inputID,
    },
  });

  revalidatePath('/');
}
