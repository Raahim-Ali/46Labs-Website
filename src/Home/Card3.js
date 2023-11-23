import { Box, Divider, Typography } from "@mui/material";
import clients from "../Assests/Clients.svg";
import React from "react";

function Card3() {
  return (
    <Box
      sx={{
        padding: "150px 350px 30px 350px",
        marginLeft: "50px",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", marginBottom: "40px" }}>
          <Divider
            sx={{
              backgroundColor: "red",
              width: "50px",
              height: "0.5px",
              marginTop: "10px",
              marginRight: "14px",
            }}
          />
          <Typography sx={{ fontWeight: "bold" }}>46 Labs</Typography>
        </Box>
      </Box>
      <Box sx={{ width: "350px" }}>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          The experts that keep the conversations going and the data flowing
        </Typography>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <iframe
          borderRadius="64px"
          width="1150"
          height="600px"
          src="https://www.youtube.com/embed/9QgbaU29lIw?si=MuZiq13Hc3_MHjyp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <img src={clients} alt="" />
      </Box>
    </Box>
  );
}

export default Card3;
