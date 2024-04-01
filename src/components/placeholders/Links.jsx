export default function Links({ customClassName, children }) {
  return (
    <>
      <div
        className={`${customClassName} group text-accent-1 transition duration-300`}
      >
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-tertiary"></span>
      </div>
    </>
  );
}
