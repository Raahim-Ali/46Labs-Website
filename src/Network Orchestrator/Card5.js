import React from "react";
import { Box, Divider, Typography } from "@mui/material";
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
    sx={{ padding: 0 }}
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
        padding: "80px 150px 0px 200px",
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
            <Typography sx={{ color: "white", width: "1230px" }}>
              PeerEdge® Network Orchestrators are designed to accelerate
              packet-based workloads on Managed Edge Devices, Managed Hosting,
              standard X86-based bare metal servers, public cloud hypervisors
              (AWS, GCP, Azure, etc) and private cloud hypervisors (VMware,
              Openstack, etc.). Abstracting packet acceleration outside of
              specialised hardware removes vendor lock-in and allows Fabric
              Orchestrators to be deployed deeper inside enterprise networks.
            </Typography>
          </Box>

          <Box
            sx={{
              height: "auto",
              width: "250%",
              display: "flex",
              padding: "0px 0px 30px 0px",
              justifyContent: "space-between",
              marginTop: "170px",
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
                      Packet Encapsulation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white", width: "550px" }}>
                      All PeerEdge® Fabric Facilities are interconnected using
                      highly redundant private fiber links. Each Fabric Region
                      is privately peered to 1000+ service provider networks and
                      all global public cloud providers.
                    </Typography>
                    <Typography
                      sx={{
                        width: "550px",
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
                        width: "550px",
                        color: "white",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      The Fabric is interconnected over the Internet using Voice
                      Orchestrators or Network Orchestrators. These
                      Orchestrators can be deployed inside existing enterprise
                      environments, Managed Hosting or Managed Edge Devices.
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
                      Packet Acceleration
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white", width: "550px" }}>
                      One of the key limitations for software-based routing
                      stacks is OS kernel-level packet processing. Standard
                      operating systems aren’t designed to process millions of
                      packets per second or hundreds of gigabytes of throughput.
                      This has historically been the territory of ASICs and
                      specialised hardware, generally dominated by commercial
                      network vendors. With the advent of VPP for packet
                      processing and DPDK for direct access to network devices,
                      OS-based limitations have been removed. Both VPP and DPDK
                      are heavily used inside PeerEdge® Data .
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
                      Encryption
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white", width: "550px" }}>
                      All traffic exchanged between Network Fabric Extenders and
                      The Fabric are encrypted using AES- based algorithms,
                      which is accelerated using AES-NI instruction sets. Modern
                      processor accelerate encryption workloads, without
                      requiring a hardware encryption engine. Most cloud
                      providers support AES-NI instruction sets.
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
                      Loop Prevention
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white", width: "550px" }}>
                      Routing information is exchanged using Multiprotocol BGP
                      (MP-BGP), which treats MAC Addresses as routes. This
                      loop-free architecture, eliminates spanning tree protocol
                      (STP) and ends broadcast storms (because there is no
                      broadcast). MAC flapping detection and mitigation prevents
                      unicast and multicast loops in an all-active multihomed
                      topology.
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
                      Remote Diagnostics
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white", width: "550px" }}>
                      IT Administrators collect network traces and PCAPs from
                      any Network Orchestrator connected to The Fabric.
                      Additional deeper troubleshooting Is available using
                      realtime analytics displayed inside The Fabric Portal or
                      IPFix /Netflow exported directly to a remote collection
                      tool.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
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
                      Failover and Load Balancing
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "white", width: "550px" }}>
                      PeerEdge® Network Orchestrators support edge-device
                      multihoming as well as MAC address mobility and load
                      balancing across dual-active links. When split between
                      Orchestrators, the links provide true HA failover at the
                      network edge.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Box>
            <Box sx={{ width: "45%", height: "100%" }}>
              <Box
                sx={{
                  width: "105%",
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
