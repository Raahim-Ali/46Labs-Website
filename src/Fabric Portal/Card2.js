import { Box, Typography } from "@mui/material";
import React from "react";
import group from "../Assests/FPCard2.svg";

function Card2() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "100px 300px",
        marginLeft: "0px",
      }}
    >
      <Box>
        <Box>
          <Typography
            sx={{ fontSize: "35px", fontWeight: "bold", width: "600px" }}
          >
            Orchestrate Global Connectivity From Anywhere
          </Typography>
        </Box>
        <Box sx={{ width: "90%", marginTop: "10px" }}>
          <Typography>
            Complex voice and data connectivity, Numbering, and Emergency
            Services + E911 management lives in The Fabric Portal, providing
            advanced reporting and diagnostics on demand, any time, any
            location.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "120px",
        }}
      >
        <img src={group} alt="" />
      </Box>
    </Box>
  );
}

export default Card2;
