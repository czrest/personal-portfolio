export default function ContentContainer({ customClassName, shouldAnimate = false, children, ...props}) {
  return (
    <>
      <div className={`${shouldAnimate? "opacity-100":" opacity-0"} ease-in-out duration-500 ${customClassName}`}{...props}>
        {children}
      </div>
    </>
  );
}
