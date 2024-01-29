export default function Header({
  customClassName,
  customClassHeader,
  children,
}) {

  return (
    <header
      className={`pointer-events-none fixed w-screen flex justify-center z-20 h-14 ${customClassHeader}`}
    >
      <ul
        className={`pointer-events-auto flex flex-row w-fit rounded-full bg-secondary h-full p-2 ${customClassName}`}
      >
        {children}
      </ul>
    </header>
  );
}
