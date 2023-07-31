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
      <div>Coding Vets</div>
      <div className="lg:flex gap-24 mr-10 hidden lg:items-center">
        <div>Home</div>
        <div>Course Info</div>
        <div>Our Story</div>
        <div>Rules</div>
        <div>Contact</div>
        <div>
          <Button1 buttonText="Donate" padding="p-2" />
        </div>
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
            <Link href="/">
              <MenuItem bgColor={"black"}>Home</MenuItem>
              <MenuItem bgColor={"black"}>Course Info</MenuItem>
              <MenuItem bgColor={"black"}>Our Story</MenuItem>
              <MenuItem bgColor={"black"}>Rules</MenuItem>
              <MenuItem bgColor={"black"}>Contact</MenuItem>
              <MenuItem bgColor={"black"} borderColor="green" borderWidth={1}>
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
