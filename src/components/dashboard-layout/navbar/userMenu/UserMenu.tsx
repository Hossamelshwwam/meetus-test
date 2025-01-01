"use client";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import image from "../../../../../../public/assets/images/omran.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faLanguage,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
const UserMenu = ({
  userImage,
  name,
  role,
}: {
  userImage?: { secure_url: string | StaticImageData | undefined };
  name?: string;
  role?: string;
}) => {
  const handlerSignOut = () => {
    signOut({ redirect: true, callbackUrl: "/" });
  };

  const [open, setOpen] = useState(false);
  return (
    <Menu
      animate={{
        mount: { y: 5, scale: 1 },
        unmount: { y: 50, scale: 0 },
      }}
      placement="bottom-start"
      handler={setOpen}
      open={open}
    >
      <MenuHandler>
        <button className="flex items-center gap-5 ">
          <div className="w-10 h-10 overflow-hidden rounded-full flex justify-center items-center border border-transparent outline outline-1 outline-n-black">
            <Image
              src={
                userImage?.secure_url ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt="user image"
              width={30}
              height={30}
              className="object-cover w-10 h-10"
            />
          </div>

          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-800 capitalize">{name}</p>
            {/* <p className="text-xs text-gray-500 capitalize">{role}</p> */}
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${open ? "rotate-180" : ""} text-n-black duration-300`}
          />
        </button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem className="capitalize flex items-center gap-5">
          <FontAwesomeIcon icon={faUser} />
          <Link href={"/dashboard/profile"}>my profile</Link>
        </MenuItem>
        <MenuItem
          className="capitalize flex items-center gap-5"
          onClick={handlerSignOut}
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
