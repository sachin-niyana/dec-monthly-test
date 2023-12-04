import React from "react";
import { cardone } from "./Hyper";
import { Col, Row } from "react-bootstrap";

const Bestnft = () => {
  return (
    <>
      <div className="bg_color_whitesmoke">
        <div className="mycontainer">
          <h3 className="fs_xxl fw_bold color_dark_black text-center ff_Josefin_Sans py-5 mb-0">
            Most Anticipated NFT'S of 2022
          </h3>
          <Row className="justify-content-center mt-4">
            {cardone.map((from) => (
              <Col lg={4} md={6} className="my-4 d-flex justify-content-center">
                <div className="Anicipated-card position-relative">
                  <div className="d-flex justify-content-center">
                    <button className="grade-btn ff_Josefin_Sans fw-semibold position-grade-btn fs_xs">
                      {from.link2}
                    </button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <img className="gost-1-img" src={from.img} alt="gost_1" />
                  </div>
                  <h4 className="text-center px-3 mb-0 ff_Josefin_Sans fw-bold pt-4 color_dark_black fs_sm">
                    {from.heading1}
                  </h4>
                  <h4 className="text-center px-3 mb-0 ff_Josefin_Sans fw-bold color_dark_black fs_sm">
                    {from.heading2}
                  </h4>
                  <p className="text-center mt-3 ff_Josefin_Sans fw-semibold color_dark_black fs_xs px-3">
                    {from.peragraph}
                  </p>
                  <div className="d-flex  justify-content-center mt-1">
                    <button className="learnmore-btn">{from.link1}</button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Bestnft;
