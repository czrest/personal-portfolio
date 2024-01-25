export default function CinematicBar({ customClassName, animateCinematic = false, children }) {
  return (
    <>
      <div
        className={`absolute z-10 ${animateCinematic? "custom-top" : "top-0"} pt-2 w-full h-40 border-2 border-black bg-black ${customClassName}`}
      ></div>
      <div
        className={`absolute z-10 ${animateCinematic? "custom-bottom" : "bottom-0"} w-full h-40 border-2 border-black bg-black ${customClassName}`}
      ></div>
    </>
  );
}
