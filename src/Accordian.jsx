import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage() {
    return (
        <div>


            <Accordion className="boxShadow-custom-light" style={{ marginBottom: "25px" , boxShadow: "0 0 15px 5px rgba(212, 212, 212, 0.5)"}} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{ minHeight: "80px" }}
                >
                    <b className="hover:text-[#4883d1] cursor-pointer ">
                        <span className="text-[#654a81] text-lg">
                            1.</span>
                        Will it not be followed by a was for but a bed urn two?
                    </b>
                </AccordionSummary>

                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>


            <Accordion style={{ marginBottom: "25px", boxShadow: "0 0 15px 5px rgba(212, 212, 212, 0.5)"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    style={{ minHeight: "80px" }}
                >
                    <b className="hover:text-[#4883d1] cursor-pointer ">
                        <span className="text-[#654a81] text-lg">
                            2.</span>
                        Does the chocolate burn for the disease now in the mouths of the children?
                    </b>
                </AccordionSummary>

                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>


            

            <Accordion style={{ marginBottom: "25px" , boxShadow: "0 0 15px 5px rgba(212, 212, 212, 0.5)"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    style={{ minHeight: "80px" }}
                >
                    <b className="hover:text-[#4883d1] cursor-pointer ">
                        <span className="text-[#654a81] text-lg">
                            3.</span>
                        Is it painful to pursue a coaching program for kids?
                    </b>
                </AccordionSummary>

                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>


            <Accordion style={{ marginBottom: "25px" , boxShadow: "0 0 15px 5px rgba(212, 212, 212, 0.5)"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    style={{ minHeight: "80px" }}
                >
                    <b className="hover:text-[#4883d1] cursor-pointer ">
                        <span className="text-[#654a81] text-lg">
                            4.</span>
                        And I hate the time of clinical trials. Are some of my teenagers in the middle of nowhere?
                    </b>
                </AccordionSummary>

                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>


            <Accordion style={{ marginBottom: "25px" , boxShadow: "0 0 15px 5px rgba(212, 212, 212, 0.5)"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    style={{ minHeight: "80px" }}
                >
                    <b className="hover:text-[#4883d1] cursor-pointer">
                        <span className="text-[#654a81] text-lg">
                            5.</span>
                        Time for the kids to have some salad and a salad?
                    </b>
                </AccordionSummary>

                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
