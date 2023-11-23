import { Box, Typography, Button } from "@mui/material";
import React from "react";
import macbook from "../Assests/Macbook.svg";

function DemoCard() {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          borderRadius: "30px",
          width: "60%",
        }}
      >
        <Box sx={{ padding: "25px 40px", display: "flex" }}>
          <Box width={"100%"}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box>
                <Box>
                  <Typography sx={{ color: "white", fontWeight: "bold" }}>
                    THE FABRIC PORTAL
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "80px" }}>
                  <Typography sx={{ color: "white", fontSize: "35px" }}>
                    One Platform, Total Control.
                  </Typography>
                </Box>
                <Box sx={{ width: "450px", marginTop: "20px" }}>
                  <Typography sx={{ color: "white" }}>
                    The Fabric Portal provides IT administrators visibility and
                    control over all their global connectivity, through a single
                    pane of glass
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <Button
                    sx={{
                      padding: "0px 0px",
                      height: "50px",

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
                    <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      DEMO THE PORTAL
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box>
                <img src={macbook} alt="" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DemoCard;
