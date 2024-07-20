'use client';

import { createTalent } from '@/app/actions/createTalent';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useRef } from 'react';

const AddTalent = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      try {
        await createTalent(formData);
        formRef.current.reset();
      } catch (error) {
        console.error('Error creating talent:', error);
      }
    }
  }

  return (
    <div className="w-full mt-8">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-2"
      >
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name" />
        <Label htmlFor="email">Email</Label>
        <Input type="text" name="email" />
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" />
        <Label htmlFor="skills">Skills</Label>
        <textarea
          name="skills"
          className="w-full h-24 font-normal outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddTalent;
