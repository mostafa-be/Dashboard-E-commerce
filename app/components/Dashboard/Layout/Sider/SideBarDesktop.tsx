"use client";
import React from "react";
import { SideBar, SideBarItem } from "./SideBar";
import {
  Bell,
  Box,
  ChartPie,
  LayoutDashboard,
  Newspaper,
  PackageOpen,
  Settings,
  UsersRound,
} from "lucide-react";

const SideBarDesktop = () => {
  const [expanded, setExpanded] = React.useState<boolean>(true);
  const url = `en/dashboard`;
  return (
    <SideBar expanded={expanded} setExpanded={setExpanded}>
      <SideBarItem
        icon={<LayoutDashboard size={25} />}
        text="Dashboard"
        active={true}
        links={false}
        url={`${url}`}
        alert={false}
      />
      <SideBarItem
        icon={<PackageOpen size={25} />}
        text="Orders"
        active={false}
        links={false}
        url={`${url}/orders`}
        alert={false}
      />
      <SideBarItem
        icon={<Box size={25} />}
        text="Products"
        active={false}
        links={true}
        alert={false}
        groupLinks={[
          {
            text: "Products List",
            url: `${url}/products`,
            active: false,
          },
          {
            text: "Collections List",
            url: `${url}/collections`,
            active: false,
          },
          {
            text: "Categories List",
            url: `${url}/categories`,
            active: false,
          },
          {
            text: "Colors List",
            url: `${url}/colors`,
            active: false,
          },
          {
            text: "Sizes List",
            url: `${url}/Sizes`,
            active: false,
          },
          {
            text: "Tags List",
            url: `${url}/tags`,
            active: false,
          },
        ]}
      />
      <SideBarItem
        icon={<Bell size={25} />}
        text="Notification"
        active={false}
        links={false}
        url={`${url}/notifications`}
        alert={false}
      />
      <SideBarItem
        icon={<UsersRound size={25} />}
        text="Customers"
        active={false}
        links={false}
        url={`${url}/users`}
        alert={false}
      />
      <SideBarItem
        icon={<ChartPie size={25} />}
        text="Analytics"
        active={false}
        links={false}
        url={`${url}/analytics`}
        alert={false}
      />
      <SideBarItem
        icon={<Newspaper size={25} />}
        text="News"
        active={false}
        links={false}
        url={`${url}/News`}
        alert={false}
      />
      <SideBarItem
        icon={<Settings size={25} />}
        text="Settings"
        active={false}
        links={false}
        url={`${url}/settings`}
        alert={false}
      />
    </SideBar>
  );
};

export default SideBarDesktop;
