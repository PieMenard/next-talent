import { Talent } from '@prisma/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { deleteTalent } from '@/app/actions/deleteTalent';

const ShowTalent = ({ talentData }: { talentData: Talent }) => {
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
          {/* Edit */}
          {/* Hire Button */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowTalent;
