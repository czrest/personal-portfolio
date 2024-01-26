export default function ContentContainer({ children, ...props}) {
  return (
    <>
      <div {...props}>
        {children}
      </div>
    </>
  );
}
