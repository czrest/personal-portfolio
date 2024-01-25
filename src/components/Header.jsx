export default function Header({
  customClassName,
  customClassHeader,
  children,
}) {

  return (
    <header
      className={`fixed w-screen flex justify-center z-20 h-14 ${customClassHeader}`}
    >
      <ul
        className={`flex flex-row w-fit rounded-full bg-black h-full p-2 ${customClassName}`}
      >
        {children}
      </ul>
    </header>
  );
}
