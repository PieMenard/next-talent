'use client';

import { Talent } from '@prisma/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { deleteTalent } from '@/app/actions/deleteTalent';
import { useState } from 'react';

const ShowTalent = ({ talentData }: { talentData: Talent }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: talentData.name,
    email: talentData.email,
    title: talentData.title,
    skills: talentData.skills,
  });

  return (
    <div>
      <Card className="w-[300px] h-[330px]">
        <CardHeader>
          <CardTitle className="text-4xl">{talentData.name}</CardTitle>
          <CardDescription>{talentData.title}</CardDescription>
          <CardDescription>{talentData.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{talentData.skills}</p>
          {/* Delete Button */}
          <div className="flex gap-4 my-4">
            <form action={deleteTalent}>
              <input type="hidden" name="inputID" value={talentData.id} />
              <button className="bg-red-500 px-6 py-2 rounded text-white">
                Delete
              </button>
            </form>
          </div>
          {/* Dialog */}
          <Dialog open={openDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <form action="">
                  <div className="w-full gap-4 py-4">
                    <div className="flex flex-col items-center gap-4">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            name: e.target.value,
                          })
                        }
                        type="text"
                        name="name"
                        value={updatedData.name}
                        placeholder={updatedData.name}
                      />
                      <Label htmlFor="email">Email</Label>
                      <Input
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            email: e.target.value,
                          })
                        }
                        type="text"
                        name="email"
                        value={updatedData.email}
                        placeholder={updatedData.email}
                      />
                      <Label htmlFor="title">Title</Label>
                      <Input
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            title: e.target.value,
                          })
                        }
                        type="text"
                        name="title"
                        value={updatedData.title}
                        placeholder={updatedData.title}
                      />
                      <Label htmlFor="skills">Skills</Label>
                      <textarea
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            skills: e.target.value,
                          })
                        }
                        value={updatedData.skills}
                        name="skills"
                        className="w-full h-24 font-normal outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                      />
                    </div>
                  </div>
                  <Button type="submit" onClick={() => setOpenDialog(false)}>
                    Save changes
                  </Button>
                </form>
              </DialogHeader>

              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
          {/* Edit */}
          {/* Hire Button */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowTalent;
