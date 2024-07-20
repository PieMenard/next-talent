import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const AddTalent = () => {
  return (
    <div className="w-full mt-8">
      <form action="" className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name"></Input>
        <Label htmlFor="email">Email</Label>
        <Input type="text" name="email"></Input>
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title"></Input>
        <Label htmlFor="skills">Skills</Label>
        <textarea
          name="skills"
          className="w-full h-24 font-normal outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
        ></textarea>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default AddTalent;
