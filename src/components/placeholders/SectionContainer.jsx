import { forwardRef } from "react";

const SectionContainer = forwardRef(function SectionContainer({
  customClassName,
  shouldAnimate = false,
  children,
  ...props
}, ref) {
  return (
    <>
      <section ref={ref} className={`${shouldAnimate ? "opacity-100 ease-in" : "ease-out opacity-0"} ${customClassName}`}
        {...props}
      >
        {children}
      </section>
    </>
  );
})

export default SectionContainer;
