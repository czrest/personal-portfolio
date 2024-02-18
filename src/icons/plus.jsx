import { THEME } from "../data";
import { useAtom } from "jotai";
import { dataThemeAtom } from "../GlobalState";

export default function Plus({...props}) {

    const [dataTheme] = useAtom(dataThemeAtom);

  return (
    <svg className="text-accent-3 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4.2a1 1 0 1 0-2 0V11H7.8a1 1 0 1 0 0 2H11v3.2a1 1 0 1 0 2 0V13h3.2a1 1 0 1 0 0-2H13V7.8Z" clip-rule="evenodd"/>
    </svg>
  );
}
