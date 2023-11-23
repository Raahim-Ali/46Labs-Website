import { Box, Typography, Button } from "@mui/material";
import React from "react";
import download from "../Assests/Download.svg";
import dots from "../Assests/Dots.svg";

function WhitePaper() {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          backgroundColor: "#353535",
          borderRadius: "30px",
          width: "60%",
        }}
      >
        <Box sx={{ padding: "64px 40px", display: "flex" }}>
          <Box width={"100%"}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex" }}>
                <img src={download} alt="" />
                <Box sx={{ width: "50%", marginLeft: "10px" }}>
                  <Typography sx={{ color: "white" }}>
                    PeerEdge® Voice Fabric Extenders include all features
                    available in PeerEdge® Data Fabric Extenders.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ height: "10px" }}>
                <img src={dots} alt="" />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{ color: "White", fontSize: "40px", marginTop: "130px" }}
              >
                Download Whitepaper
              </Typography>
              <Button
                sx={{
                  padding: "0px 0px",
                  height: "50px",
                  marginTop: "150px",
                  width: "180px",
                  border: "2px solid black",
                  borderRadius: "16px",
                  backgroundColor: "white!important",
                  color: "black",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  marginRight: "40px",
                }}
              >
                <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                  DOWNLOAD
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WhitePaper;
