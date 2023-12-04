import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Text } from "./Hyper";

const MyAccordion = () => {
  const [activeKey, setActiveKey] = useState("0");
  const handleAccordionToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };
  return (
    <>
      <div className="bg_color_whitesmoke">
        <div className="py-5 mycontainer">
          <div className="d-flex justify-content-center">
            <h3 className="ff_lato fw_700 fs_48px color-brown-2">
              FAQ
              <span className="ff_lato fw_700 fs_48px color-white">’s</span>
            </h3>
          </div>
          <Accordion
            activeKey={activeKey}
            onSelect={handleAccordionToggle}
            className="pt-1 bg_color_whitesmoke"
          >
            {Text.map((faq, index) => (
              <Accordion.Item
                key={index}
                eventKey={index.toString()}
                className="mt-4 accordion_border bg_color_whitesmoke mx-auto"
              >
                <Accordion.Header className=" ff_Josefin_Sans fw_medium">
                  {faq.heading}
                </Accordion.Header>
                <Accordion.Body className="bg_color_whitesmoke mb-1 mx-1 color_dark_slaty ff_Josefin_Sans fs_xs fw_normal ">
                  {faq.peragraph}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default MyAccordion;
