export default function ContentContainer({ customClassName, shouldAnimate = false, children, ...props}) {
  return (
    <>
      <div className={`${shouldAnimate? "opacity-100 ease-in":"ease-out opacity-0"} duration-500 ${customClassName}`}{...props}>
        {children}
      </div>
    </>
  );
}
