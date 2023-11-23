import { Box, Typography } from "@mui/material";
import React from "react";
import group from "../Assests/Map.svg";

function Card4() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "100px 350px",
        marginLeft: "10px",
      }}
    >
      <Box
        sx={{
          marginLeft: "120px",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
            High Performance. Intelligent. Regulatory Compliant.
          </Typography>
        </Box>
        <Box sx={{ width: "90%", marginTop: "10px" }}>
          <Typography>
            Designed to connect and exchange intelligence information with all
            Extenders in the Fabric and allows for voice and network analytics
            to be overlaid to optimize performance and simplify voice
            environments.
            <Typography sx={{ marginTop: "10px" }}>
              Privacy restricted data can live on Voice Fabric Extenders, and be
              strategically placed in regulatory-sensitive environments like
              Europe, China and India, while maintaining full compliance with
              local data locality rules.
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box>
        <img src={group} alt="" />
      </Box>
    </Box>
  );
}

export default Card4;
