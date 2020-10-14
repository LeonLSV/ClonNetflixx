import React from "react";
import "./styles/HomeLanding.css";

import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import HomeCenter from "../components/HomeCenter";
// import FormEmail from "../components/FormEmail";
import HomeSection from "../components/HomeSection";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import Footer from "../components/Footer";
import ListFAQ from "../components/ListFAQ";

const HomeLanding = (props) => {
  return (
    <section className="bg-black hero">
      <Navbar />
      <HomeCenter />
      <HomeSection />
      <HomeSection2 />
      <HomeSection3 />
      <ListFAQ />
      <Footer />
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(HomeLanding);
