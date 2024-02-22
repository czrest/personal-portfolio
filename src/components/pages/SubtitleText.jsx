import { TypeAnimation } from "react-type-animation";

export default function SubtitleText({ children }) {
  return (
    <>
    <div className="pointer-events-none absolute z-10 text-accent-1 w-screen h-screen flex flex-col justify-end items-center py-48">
      <p className="font-codecr text-lg bg-accent-4 border border-black px-3 py-px mb-2">
        <TypeAnimation
          sequence={[
            children,
          ]}
          wrapper="span"
          cursor={false}
          speed={80}
          repeat={0}
          className="text-accent-5"
        />
      </p>
    </div>
    </>
  );
}
