export default function NavigationMenu({ customClassName, children, ...props }) {
  return (
    <li className={`${customClassName} cursor-pointer rounded-full mx-1 px-5 flex items-center justify-center ease-out duration-300`} {...props}>
      {children}
    </li>
  );
}
