import { Chip } from "@material-tailwind/react";

export default function ChipsText({ ...props }) {
  return (
    <>
      <Chip variant="outlined" {...props} className="m-px font-codecl rounded-full text-accent-5 border-accent-5 duration-500"></Chip>
    </>
  );
}
