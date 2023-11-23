import { Box, Typography } from "@mui/material";
import React from "react";
import group from "../Assests/GroupIcons3.svg";

function Card3() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "100px 350px",
        marginLeft: "50px",
      }}
    >
      <Box>
        <img src={group} alt="" />
      </Box>
      <Box
        sx={{
          marginLeft: "120px",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
            Certified. Easy to connect. Protected.
          </Typography>
        </Box>
        <Box sx={{ width: "90%", marginTop: "10px" }}>
          <Typography>
            PeerEdge® Voice Fabric Extenders are Microsoft Teams® certified for
            both media processing and media bypass, and have been tested with
            every major voice equipment vendor, cloud contact center, voice
            application, and cloud conferencing provider. The Fabric feeds
            real-time filtering databases to Voice Fabric Extenders, which block
            bad actors, spam traffic, and intrusion attempts at the edge.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Card3;
