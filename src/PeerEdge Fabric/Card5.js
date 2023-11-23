import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import AccordianImg from "../Assests/AccordianImg.svg";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "../Assests/Accordianarrow.svg";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: ``,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <img
        style={{ transform: "rotate(-90deg)" }}
        src={ArrowForwardIosSharpIcon}
        alt=""
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "black",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "black",
  padding: "0px 75px",
}));

function Card5() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        padding: "200px 150px 0px 200px",
        marginLeft: "50px",
        height: "auto",
      }}
    >
      <Box
        sx={{
          height: "auto",
          width: "100%",
          backgroundColor: "black",
          borderRadius: "80px",
        }}
      >
        <Box
          sx={{
            padding: "100px 0px 0px 175px",
            width: "470px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Divider
              sx={{
                backgroundColor: "red",
                width: "50px",
                height: "1px",
                marginTop: "10px",
                marginRight: "14px",
              }}
            />
            <Typography sx={{ fontWeight: "bold", color: "white" }}>
              TECHNICAL DETAILS
            </Typography>
          </Box>

          <Box sx={{ marginTop: "40px" }}>
            <Typography sx={{ color: "white" }}>
              The PeerEdge® Fabric leverages best of breed foundational
              facilities, interconnections, and infrastructure. The software
              that powers The Fabric is developed by 46 Labs’ world-class
              engineers. 46 Labs has partnered with Equinix, the largest-vendor
              neutral datacenter provider, for the datacenter environment that
              powers The Fabric. Equinix maintains the largest concentration of
              interconnection partners and institutes the same industry leading
              security, sustainability and design philosophies as 46 Labs.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              sx={{
                height: "50px",
                width: "170px",
                border: "2px solid black",
                borderRadius: "16px",
                backgroundColor: "white",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                marginRight: "40px",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <Typography
                sx={{ fontSize: "15px", fontWeight: "bold", color: "black" }}
              >
                SEE LOCATIONS
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              height: "auto",
              width: "250%",
              display: "flex",
              padding: "0px 0px 30px 0px",
              justifyContent: "space-between",
              marginTop: "70px",
            }}
          >
            <Box sx={{ width: "50%", height: "100%" }}>
              <div>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      Interconnections
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white", fontSize: "14px" }}>
                      All PeerEdge® Fabric Facilities are interconnected using
                      highly redundant private fiber links. Each Fabric Region
                      is privately peered to 1000+ service provider networks and
                      all global public cloud providers.
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      These interconnections allow The Fabric to be physically
                      extended to remote locations using Fabric Local Loops
                      without ever touching the public internet.
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      The Fabric is interconnected over the Internet using Voice
                      Orchestrators or Data Orchestrators. These Orchestrators
                      can be deployed inside existing enterprise environments,
                      Managed Hosting or Managed Edge Devices.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      Facilities
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white" }}>
                      New facilities are added into The Fabric nearly every
                      month and available to interconnect to within The Fabric
                      Portal.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      Infrastructure
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white" }}>
                      To meet sustainability targets, the physical
                      infrastructure that powers The PeerEdge® Fabric is
                      evaluated to establish the highest PUE per facility.
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      To ensure maximum computer-per-watt, dense quad-socket
                      servers, enterprise flash storage and redundant 3-phase
                      power is used globally. We deploy Hewlett Packard
                      Enterprise and Juniper Networks hardware, capitalizing on
                      their industry leading global supply chains and support
                      channels.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      Data architecture
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white", fontSize: "14px" }}>
                      The PeerEdge® Fabric leverages a combination of spine/leaf
                      physical switching with a proprietary routing and SDN
                      technology developed inside 46 Labs. Unlike traditional IP
                      Fabrics, packets are encrypted and encapsulated on
                      software Orchestrators instead of physical switches or
                      routers. Orchestrators are then deployed inside any
                      enterprise or cloud environment without special network
                      configuration or hardware. The packets flow encrypted and
                      encapsulated over The Fabric with minimal intervention, as
                      MAC addresses are treated as routes.
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      The core SDN technology utilises EVPN-VXLAN for data and
                      control planes and DPDK for packet acceleration. This
                      enables infinite loop-free software defined network
                      segmentation.
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      Each element that participates in the Fabric sends
                      real-time analytics, which are used to consistently
                      optimise the network paths over The Fabric. Protected
                      Internet Services leverage
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      The Fabric’s data service provider networks to create a
                      DDOS and Malware-protected connection to the Internet,
                      which is encapsulated and delivered over Data
                      Orchestrators to enterprise data networks or applications.
                      Deeper detail on the core technology that powers The
                      Fabric can be found inside Data Orchestrators.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      Voice architecture
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white", fontSize: "14px" }}>
                      Most enterprises treat voice payloads as simply another
                      application that rides on top of an IP network. Real-time
                      voice communications (RTC) are generally the first
                      workloads to be affected by network congestion or outages,
                      and require greater attention. The PeerEdge® Fabric
                      provide voice with the attention it requires, at all
                      layers. Starting with Voice Orchestrators. Historically,
                      enterprises rely on session border controllers (SBCs) to
                      move voice between different applications. SBCs act as
                      routers and firewalls between trusted and untrusted
                      networks and are deployed in only a few strategic
                      locations.
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      This architecture is problematic as a failure can happen
                      anywhere in the network and it’s difficult to determine
                      exactly where it’s occurring. To avoid this, we push all
                      voice processing to the edge, where it’s consumed. The
                      edge can be a cloud contact center, Microsoft Teams®, a
                      local PBX or any other voice application.
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      All Voice Orchestrators participate in concert to optimize
                      call quality between applications and send real-time
                      analytics, which are used to consistently improve voice
                      paths over The Fabric. Global Voice Services leverage The
                      Fabric’s voice service provider networks to gain access to
                      highly redundant global voice numbering and services,
                      which is encapsulated and delivered over Voice
                      Orchestrator to enterprise voice networks or applications.
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      Deeper detail on the core technology that powers The
                      Fabric can be found inside Voice Orchestrators
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Box>
            <Box sx={{ width: "45%", height: "100%" }}>
              <Box
                sx={{
                  width: "80%",
                  height: "90%",
                  border: "2px solid #3D3D3D",
                  borderRadius: "64px",
                  padding: "10px 30px",
                }}
              >
                <img src={AccordianImg} alt="" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card5;
