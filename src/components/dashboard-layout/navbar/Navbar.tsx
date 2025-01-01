import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import menu from "@/../public/assests/images/menu.png";
import UserMenu from "./userMenu/UserMenu";

interface Props {
  setOpen: (value: boolean) => void;
  open: boolean;
  user: {
    name: string | undefined;
  };
}

const Navbar = ({ setOpen, open, user }: Props) => {
  return (
    <div
      className={`${styles.navbarShadow} bg-main backdrop-blur-lg text-n-white py-4 min-h-[78px] sm:px-10 px-4 static`}
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div
            className="p-2 rounded-lg bg-black/5 hover:bg-black/10 duration-200 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <Image src={menu} alt="menu image" width={20} />
          </div>
        </div>

        {!user.name ? (
          <div className="flex items-center gap-5">
            <div className="h-10 w-10 bg-gray-300 animate-pulse"></div>
            <div className="flex items-start justify-start flex-col gap-4">
              <div className="h-3 w-32 bg-gray-300 animate-pulse"></div>
              <div className="h-3 w-10 bg-gray-300 animate-pulse"></div>
            </div>
          </div>
        ) : (
          <UserMenu name={user.name} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
