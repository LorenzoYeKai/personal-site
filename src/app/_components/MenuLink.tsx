import React from "react";
import Link from "next/link";

type Props = {
  link: string;
  text: string;
};

const MenuLink = async (props: Props) => {
  const { link, text } = props;

  return (
    <Link href={link} className="group relative">
      <p className="font-sans text-[7rem] leading-none transition-all hover:scale-125">
        {text}
      </p>
      <div className="absolute left-0 right-0 top-0 -z-10 hidden group-hover:block">
        <div className="animate-jelly absolute left-0 right-0 top-0 h-full w-full opacity-80 transition-all delay-[.08s] duration-[.45s]">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 108.1 47"
            enable-background="new 0 0 108.1 47"
          >
            <polygon
              fill="rgba(255,255,255)"
              points="29.5, 8.5 150.7, 0 108.1, 32.7 3.1, 47"
            />
          </svg>
        </div>

        <div className="animate-reverse-jelly  absolute left-0 right-0 top-0 -z-20 h-full w-full mix-blend-screen transition-all delay-[.05s] duration-[.4s]">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 108.1 47"
            enable-background="new 0 0 108.1 47"
          >
            <polygon
              fill="#00FFFF"
              points="0.3,17 125.1,0 68.8,45.6 24.3,39 "
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default MenuLink;
