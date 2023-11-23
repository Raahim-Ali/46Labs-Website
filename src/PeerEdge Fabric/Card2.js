import { Box, Typography } from "@mui/material";
import React from "react";
import PFChart from "../Assests/PFChart.svg";
import PFClient from "../Assests/PFClients.svg";

function Card2() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "100px 300px",
          marginLeft: "50px",
        }}
      >
        <Box>
          <img src={PFChart} alt="" />
        </Box>
        <Box
          sx={{
            marginLeft: "150px",
          }}
        >
          <Box sx={{ width: "450px" }}>
            <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
              Get Connected. Privately and Securely.
            </Typography>
          </Box>
          <Box sx={{ width: "95%", marginTop: "10px" }}>
            <Typography sx={{ fontSize: "14px" }}>
              The Fabric contains highly redundant private connections to global
              service providers. Once connected to PeerEdge® Fabric Extenders,
              data and voice are exchanged freely and securely across the globe.
            </Typography>
          </Box>
          <Box sx={{ width: "500px", padding: "60px 0px 0px 0px" }}>
            <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
              Those in the business trust us to run their business.
            </Typography>
          </Box>
          <Box sx={{ width: "95%", marginTop: "10px" }}>
            <Typography sx={{ fontSize: "14px" }}>
              The PeerEdge® fabric is relied on by hundreds of services
              providers to power their connectivity everyday.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "0px 450px" }}>
        <img src={PFClient} alt="" />
      </Box>
    </>
  );
}

export default Card2;
