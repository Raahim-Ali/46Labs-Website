import { Box, Divider, Typography, Button } from "@mui/material";
import React from "react";
import news1 from "../Assests/News1.svg";
import news2 from "../Assests/News2.svg";
import news3 from "../Assests/News3.svg";
import podcast from "../Assests/Podcast.svg";

function Card7() {
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
          <Typography sx={{ fontWeight: "bold" }}>NEWS</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Our latest share media
        </Typography>
        <Button
          sx={{
            height: "50px",
            width: "120px",
            border: "1px solid black",
            marginBottom: "25px",
            borderRadius: "16px",
            marginRight: "20px",
            backgroundColor: "white!important",
            color: "black",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            VIEW ALL
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Box sx={{ width: "33%" }}>
          <img style={{ width: "100%" }} src={news1} alt="" />
        </Box>
        <Box sx={{ width: "33%", position: "relative" }}>
          <img style={{ width: "100%" }} src={news2} alt="" />
          <img
            style={{
              width: "70%",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            src={podcast}
            alt=""
          />
        </Box>
        <Box sx={{ width: "33%" }}>
          <img style={{ width: "100%" }} src={news3} alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default Card7;
