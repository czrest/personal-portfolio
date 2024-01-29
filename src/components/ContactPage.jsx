import { useEffect, useRef, useState } from "react";

import ContentContainer from "./ContentContainer";
import GithubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";
import MessengerIcon from "../icons/messenger";
import Links from "./Links";
import EmailIcon from "../icons/email";
import { Tooltip, Button } from "@material-tailwind/react";

import { currentSceneAtom } from "../GlobalState";
import { useAtom } from "jotai";
import PaperPlaneLogo from "../icons/paperplanelogo";

export default function ContactPage() {
  const [currentScene] = useAtom(currentSceneAtom);
  const shouldAnimateContact = currentScene >= 16;

  function copyToClipboard() {
    navigator.clipboard.writeText("sam_torreda@yahoo.com");
    handleButtonClick();
  }

  const [tooltipContent, setTooltipContent] = useState("Copy to clipboard");
  const [tooltipColor, setTooltipColor] = useState("bg-accent-1");

  const handleButtonClick = () => {
    // Change tooltip content when button is clicked
    setTooltipContent("Saved to clipboard");
    setTooltipColor("bg-accent-3 text-accent-1");
  };

  const handleTooltipHover = () => {
    // Reset tooltip content when hovered again
    setTooltipContent("Copy to clipboard");
    setTooltipColor("bg-accent-1 text-accent-2");
  };
  return (
    <>
      <ContentContainer
        customClassName="pointer-events-none absolute z-10 text-accent-1 w-screen h-screen flex flex-col justify-center items-center"
        shouldAnimate={shouldAnimateContact}
      >
        <div className="absolute bottom-10 left-10">
          <h2 className="font-codech text-xl">© 2024 Samuel Torreda</h2>
        </div>

        <div>
          <h1 className="font-codech text-8xl">CONTACT</h1>
        </div>

        <Tooltip
          content={tooltipContent}
          className={`${tooltipColor} p-1 rounded-md`}
          placement="right"
          animate={{
            mount: { scale: 1, x: 0 },
            unmount: { scale: 0, x: -50 },
          }}
        >
          <Button
            onClick={() => copyToClipboard()}
            onMouseEnter={() => handleTooltipHover()}
            variant="outlined"
            className={`flex items-center group mt-10 ${
              shouldAnimateContact
                ? "pointer-events-auto"
                : "pointer-events-none"
            } group lowercase font-codecl border-black rounded-none p-3 text-accent-1 hover:text-accent-2 hover:bg-secondary hover:border-secondary`}
          >
            <EmailIcon
              height={"25px"}
              width={"25px"}
              className={`fill-accent-1 mr-3 group-hover:fill-primary`}
            />
            sam_torreda@yahoo.com
          </Button>
        </Tooltip>

        <div className="grid grid-flow-col gap-8 mt-3">
          <a
            className={`flex items-center group ${
              shouldAnimateContact
                ? "pointer-events-auto"
                : "pointer-events-none"
            } cursor-pointer`}
            target="_blank" 
            href="https://www.m.me/sam.torreda/"
          >
            <MessengerIcon
              height={"40px"}
              width={"40px"}
              className={`fill-accent-1 mr-3 group-hover:fill-secondary p-1 rounded-xl duration-500`}
            />
            <Links
              customClassName={`text-lg font-codecl`}
            >
              Messenger
            </Links>
          </a>
          <a
            className={`flex items-center group ${
              shouldAnimateContact
                ? "pointer-events-auto"
                : "pointer-events-none"
            } cursor-pointer`}
            target="_blank" 
            href="https://www.linkedin.com/in/samuel-torreda-74159310b"
          >
            <LinkedinIcon
              height={"40px"}
              width={"40px"}
              className={`fill-accent-1 mr-3 group-hover:fill-secondary p-1 rounded-xl duration-500`}
            />
            <Links
              customClassName={`text-lg font-codecl`}
            >
              LinkedIn
            </Links>
          </a>
          <a
            className={`flex items-center group ${
              shouldAnimateContact
                ? "pointer-events-auto"
                : "pointer-events-none"
            } cursor-pointer`}
            target="_blank" 
            href="https://github.com/czrest"
          >
            <GithubIcon
              height={"40px"}
              width={"40px"}
              className={`fill-accent-1 mr-3 group-hover:fill-secondary p-1 rounded-xl duration-500`}
            />
            <Links
              customClassName={`text-lg font-codecl`}
            >
              Github
            </Links>
          </a>
        </div>
      </ContentContainer>
    </>
  );
}
