import React from 'react';
import Header from "@/components/Header/header";
import Nav from "@/components/Nav/nav";

const LeftSide = () => {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <Header />
      <Nav />
    </div>
  )
}

export default LeftSide