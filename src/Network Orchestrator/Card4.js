import { Box, Typography } from "@mui/material";
import React from "react";
import SP from "../Assests/NOSP.svg";
import VN from "../Assests/NOVN.svg";
import TN from "../Assests/NOTN.svg";
import PN from "../Assests/NOPN.svg";
import NF from "../Assests/NONF.svg";
import CM from "../Assests/NOCM.svg";

function Card4() {
  return (
    <Box
      sx={{
        justifyContent: "space-between",
        padding: "100px 220px",
      }}
    >
      <Box
        sx={{
          marginLeft: "50px",
          width: "650px",
          marginRight: "100px",
        }}
      >
        <Box>
          <Typography
            sx={{ width: "350px", fontSize: "35px", fontWeight: "bold" }}
          >
            Turn spaghetti into lasagna.
          </Typography>
        </Box>
        <Box sx={{ width: "90%", marginTop: "10px" }}>
          <Typography>
            Enterprise network diagrams tend to resemble spaghetti, with lines
            going in all directions and workloads siloed. Orchestrators allow IT
            Administrators to replace the "spaghetti" with ordered layers, like
            lasagna. Each network exists independently and can be brought up
            across all Orchestrators, with all routing logic happening inside
            the Fabric
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "100px 370px",
          marginLeft: "60px",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", padding: "20px 0px" }}>
            <Box>
              <img src={SP} alt="" />
            </Box>
            <Box sx={{ width: "680px", marginLeft: "15px" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                Scalable Privacy
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                The PeerEdge® Fabric enables thousands of Network Orchestrators
                to be deployed around the world privately, all with automated
                command and control from the Fabric Portal.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", padding: "20px 0px" }}>
            <Box>
              <img src={VN} alt="" />
            </Box>
            <Box sx={{ width: "650px", marginLeft: "15px" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                Vendor Neutral
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                Plug into and run on any IP-based network. VM living on a public
                network or private cloud, customer managed servers or 46 Labs
                Digital Infrastructure services.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", padding: "20px 0px" }}>
            <Box>
              <img src={TN} alt="" />
            </Box>
            <Box sx={{ width: "650px", marginLeft: "15px" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                Transport Neutral
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                Connect to the PeerEdge® Fabric using any transport method,
                including Fabric Local Loops, exiting Public internet, or
                datacenter cross-connects.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginLeft: "20px" }}>
          <Box sx={{ display: "flex", padding: "20px 0px" }}>
            <Box>
              <img src={PN} alt="" />
            </Box>
            <Box sx={{ width: "650px", marginLeft: "15px" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                Network Federation
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                Carry any IP protocol across up to 16 million logical networks,
                including layer-2 ethernet frames with VLAN's, Q-in-Q, MPLS,
                GRE, IPIP, FCoE, PPoE, etc.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", padding: "20px 0px" }}>
            <Box>
              <img src={NF} alt="" />
            </Box>
            <Box sx={{ width: "650px", marginLeft: "15px" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                Cloud Management
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                Managed entirely through the Fabric Portal, network analytics
                and uptime data is used to automatically optimize performance
                across the entire connected enterprise, from anywhere in the
                world.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", padding: "20px 0px" }}>
            <Box>
              <img src={CM} alt="" />
            </Box>
            <Box sx={{ width: "650px", marginLeft: "15px" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                Call Debugging + Global Live Call View
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                Administrators have the ability to perform deep analysis at any
                time with centralized CDR management, and diagnostic PCAPs on
                all voice calls.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card4;
