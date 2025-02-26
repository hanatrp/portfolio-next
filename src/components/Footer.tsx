import React from "react";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

import Link from "next/link";

const Footer = () => {

  const getTime = new Date().getFullYear()
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[22] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="min-w-[200px] h-auto flex flex-row items-center justify-between">
          <Link
            href="https://www.instagram.com/hanatrp/"
            className="cursor-pointer m-9"
          >
            <RxInstagramLogo />
          </Link>
          <Link
            href="https://www.github.com/hanatrp/"
            className=" cursor-pointer m-9"
          >
            <RxGithubLogo />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hana-nur-aisyah/"
            className=" cursor-pointer m-9"
          >
            <RxLinkedinLogo />
          </Link>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Hana Nur Aisyah {getTime} Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
