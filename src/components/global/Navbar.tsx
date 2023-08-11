import React from "react";
import Button1 from "./Button1";
import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between ml-10 items-center lg:h-16">
      <Link href={"/"}>Coding Vets</Link>
      <div className="lg:flex gap-24 mr-10 hidden lg:items-center">
        <Link href={"/Apply"}>Apply</Link>
        <Link href={"/Course-Info"}>Course Info</Link>
        <Link href={"/Our-Story"}>Our Story</Link>
        <Link href={"/Rules"}>Rules</Link>
        <Link href={"/Contact"}>Contact</Link>
        <Link href={"/Donate"}>
          <Button1 buttonText="Donate" padding="p-2" />
        </Link>
      </div>
      <div className=" lg:hidden ml-6 p-4">
        <Menu isLazy id="navbar-menu">
          <MenuButton
            as={IconButton}
            color={"white"}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
            borderColor={"green.400"}
          />
          <MenuList bgColor={"black"}>
            <Link href={"/Apply"}>
              <MenuItem bgColor={"black"}>Apply</MenuItem>
            </Link>
            <Link href={"/Course-Info"}>
              <MenuItem bgColor={"black"}>Course Info</MenuItem>
            </Link>
            <Link href={"/Our-Story"}>
              <MenuItem bgColor={"black"}>Our Story</MenuItem>
            </Link>
            <Link href={"/Rules"}>
              <MenuItem bgColor={"black"}>Rules</MenuItem>
            </Link>
            <Link href={"/Contact"}>
              <MenuItem bgColor={"black"}>Contact</MenuItem>
            </Link>
            <Link href={"/Donate"}>
              <MenuItem bgColor={"black"} textColor={"green.300"}>
                Donate
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
