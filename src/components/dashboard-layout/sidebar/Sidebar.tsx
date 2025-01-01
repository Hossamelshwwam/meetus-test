import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faCalendar,
  faCodeBranch,
  faComments,
  faCreditCard,
  faHandHoldingDollar,
  faHistory,
  faImage,
  faLayerGroup,
  faNewspaper,
  faPaintBrush,
  faPhoneAlt,
  faProjectDiagram,
  faQuestion,
  faQuoteLeft,
  faRectangleList,
  faReply,
  faSheetPlastic,
  faTags,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import useWindowWidth from "@/utils/windowWidth";
import Image from "next/image";
import logo from "@/../public/assests/images/logo.png";
import styles from "./Sidebar.module.css";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Sidebar = ({ open, setOpen }: Props) => {
  const width = useWindowWidth();
  const navigation: {
    title: string;
    link?: string;
    role: string[];
    subItems?: {
      title: string;
      link: string;
      role?: string[];
      icon?: React.JSX.Element;
    }[];
  }[] = [
    {
      title: "user setting",
      role: [],
      subItems: [
        {
          title: "my profile",
          link: "/dashboard/my-profile",
          role: [],
          icon: (
            <FontAwesomeIcon
              icon={faUser}
              className="w-5 h-5 text-n-black transition duration-300 group-hover:text-main group-focus:text-main"
            />
          ),
        },
      ],
    },
  ];

  return (
    <>
      <aside
        style={{ height: width > 992 ? "100%" : "calc(100% - 78px)" }}
        className={`${
          styles.sidebar
        } fixed left-0 w-64 lg:top-0 top-[78px] transition-transform duration-300 overflow-hidden ${
          !open ? "-translate-x-full" : "translate-x-0 border-r border-n-black"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            }}
            className="w-full sticky top-0 bg-main px-3 min-h-[78px] flex justify-center items-center z-20"
          >
            <Image src={logo} alt={"logo "} width={150} height={50} />
          </div>
          <div className="overflow-y-auto lg:h-[calc(100vh-78px)] h-[calc(100vh-156px)] bg-white">
            <List>
              {navigation.map(({ subItems, title, link, role }, index) => (
                // role.includes(userRole) &&
                <div key={index} className="mb-3">
                  <div className="px-1 pt-4">
                    <h1 className="capitalize text-xs text-n-black mb-3">
                      {title}
                    </h1>
                  </div>
                  {subItems?.map(({ link, title, icon, role }, index) => (
                    <Link
                      href={`${link}`}
                      key={index}
                      className={`inline-block w-full hover:bg-black/10 duration-200 rounded  ${
                        index === subItems.length - 1 ? "" : "mb-3"
                      }`}
                    >
                      <ListItem
                        key={index}
                        className={`${styles.listItem} text-base focus:text-main px-1 py-0 text-n-black hover:!bg-transparent !bg-transparent hover:text-main min-h-[40px] capitalize duration-300 group`}
                      >
                        <ListItemPrefix className={`mr-5`}>
                          {icon}
                        </ListItemPrefix>
                        {title}
                      </ListItem>
                    </Link>
                  ))}
                </div>
              ))}
            </List>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
