import { Chip } from "@material-tailwind/react";

export default function ChipsText({ ...props }) {
  return (
    <>
      <Chip variant="outlined" {...props} className="m-px font-codecl text-accent-1 border-accent-1 group-hover:bg-primary group-hover:text-accent-1 duration-500"></Chip>
    </>
  );
}
