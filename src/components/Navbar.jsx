"use client";
import { Navbar, Image } from "keep-react";
import { CaretDown } from "phosphor-react";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="!py-5">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <Image
            src="/images/keep.svg"
            alt="keep"
            width="100"
            height="40"
            className="w-auto h-auto" // Add responsive styling
          />
        </Navbar.Brand>
        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2"
        >
          {/* ... Your sidebar content ... */}
        </Navbar.Collapse>
        <Navbar.Container className="flex gap-1">
          <Navbar.Toggle className="block" />
          Menu
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}
