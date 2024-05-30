import { Fragment } from "react";
import TopHeader from "./TopHeader";
import CenterHeader from "./CenterHeader";
import BottomHeader from "./BottomHeader";

const Header = () => {
  return (
    <Fragment>
      <TopHeader />
      <CenterHeader />
      <BottomHeader />
    </Fragment>
  );
};

export default Header;
