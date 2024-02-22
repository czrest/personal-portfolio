export default function CinematicBar({
  customClassName,
  animateCinematic = false,
  children,
}) {
  return (
    <>
      <div
        className={`fixed z-20 ${
          animateCinematic ? "custom-top" : "top-0"
        } w-6/5 h-40 border-black bg-black ${customClassName}`}
      ></div>
      <div
        className={`fixed z-20 ${
          animateCinematic ? "custom-bottom" : "bottom-0"
        } w-6/5 h-40 border-black bg-black ${customClassName}`}
      ></div>
    </>
  );
}
