import LoadingScreen from "./components/LoadingScreen";
import NavigationHeader from "./components/NavigationHeader";
import NavigationMenu from "./components/NavigationMenu";
import TheatreCanvas from "./components/TheatreCanvas";

import { useState, useEffect } from "react";
import { planeLoadedAtom, worldLoadedAtom, dataThemeAtom } from "./GlobalState";
import { useAtom } from "jotai";

function App() {
  const [loading, setLoading] = useState(true);
  const [allLoaded, setAllLoaded] = useState(false);

  const [loadingprogress, setProgress] = useState("w-0");

  const [planeloaded] = useAtom(planeLoadedAtom);
  const [worldloaded] = useAtom(worldLoadedAtom);
  const [dataTheme, setDataTheme] = useAtom(dataThemeAtom);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

    const outerTransitionTimer = setTimeout(() => {
      if (planeloaded && worldloaded) {
        
        const innerTransitionTimer = setTimeout(() => {
          setProgress("w-full");
        }, 2000);

        const innerTransitionTimer2 = setTimeout(() => {
          setAllLoaded(true);
        }, 3000);

        return () => clearTimeout(innerTransitionTimer, innerTransitionTimer2);
      }else if ((planeloaded && !worldloaded) || (!planeloaded && worldloaded)){
        setProgress("w-1/2");
      } else {
        setProgress("w-1/4");
      }
    }, 2000);
  
    return () => clearTimeout(outerTransitionTimer);
  }, [planeloaded, worldloaded]);

  return (
    <>
      <LoadingScreen state={!allLoaded} finish={allLoaded? "h-fit p-2 border ease-out ":"h-px border-t ease-in"} progress={`${loading ? "w-0" : loadingprogress}`}/>

      {loading ? null : (
        <>
          {/* <NavigationHeader /> */}
          <TheatreCanvas />
        </>
      )}
    </>
  );
}

export default App;
