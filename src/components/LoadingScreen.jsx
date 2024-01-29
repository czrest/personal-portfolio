import { useState } from "react";

export default function LoadingScreen({ state = true, progress, finish }) {
  const [loadingFinished, setLoadingFinished] = useState(false);

  function clickListener() {
    setLoadingFinished(true);
  }

  return (
    <>
      <div
        className={`${
          !loadingFinished ? "top-0" : "custom-loadingTop"
        } ease-out duration-1000 flex flex-col justify-end fixed z-50 w-screen h-1/2 items-center p-1 bg-primary text-accent1`}
      >
        <div className={`pointer-events-none z-20 flex items-center`}>
          <p className={`font-codecl swing-in-bottom-fwd`}>
            <span className={`text-2xl px-3`}>Hi,</span>
          </p>
          <p className={`font-codecl swing-in-bottom-fwd`}>
            <span className={`text-2xl px-3`}>I'm</span>
          </p>
          <p className={`font-codecl swing-in-bottom-fwd`}>
            <span className={`text-2xl px-3`}>Sam.</span>
          </p>
        </div>
        <div className={`pointer-events-none z-20 flex`}>
          <p className={`swing-in-bottom-fwd2 font-codecl`}>
            <span className={`px-3`}>Web Developer | Designer</span>
          </p>
        </div>
      </div>

      <div
        className={`pointer-events-auto ${
          !loadingFinished ? "bottom-0 blur-none" : "custom-loadingBottom blur-xl"
        } ease-out duration-1000 flex flex-col justify-start fixed z-50 w-screen h-1/2 items-center bg-primary text-accent1`}
      >
        <div
          className={`h-full container mt-5 ease-out duration-500 delay-1000 w-60`}
        >
          <div className="progress-bar w-full h-full flex justify-center">
            <button
              className={`${finish} ${progress} duration-200 progress-bar-fill hover:bg-secondary font-codecl border-black hover:text-accent-2 hover:border-secondary overflow-hidden`}
              onClick={() => clickListener()}
              disabled={state}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
