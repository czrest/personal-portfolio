export default function HoverText({ customClassName, children }) {
  return (
    <>
      <div className={`${customClassName} relative group w-fit px-2 whitespace-pre-line font-codech text-3xl hover:rotate-6 group-hover:transition-all`}>
        <span className="group-hover:text-black ease-in duration-100 group-hover:transition-all">{children}</span>
        <span className="absolute left-0 -bottom-px w-full h-0 bg-lime-400 -z-10 group-hover:h-full group-hover:transition-all"></span>
      </div>
    </>
  );
}
