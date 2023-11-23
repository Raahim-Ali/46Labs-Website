import { Box, Divider, Typography } from "@mui/material";
import chartcolumn from "../Assests/ChartColumn.svg";
import digitaltransformation from "../Assests/DigitalTransformation.svg";
import commandcontrol from "../Assests/CommandControl.svg";
import expertise from "../Assests/Expertise.svg";
import React from "react";

function Card2() {
  return (
    <Box
      sx={{
        padding: "150px 350px 30px 350px",
        marginLeft: "50px",
      }}
    >
      <Box sx={{ display: "flex", marginBottom: "40px" }}>
        <Divider
          sx={{
            backgroundColor: "red",
            width: "50px",
            height: "1px",
            marginTop: "10px",
            marginRight: "14px",
          }}
        />
        <Typography sx={{ fontWeight: "bold" }}>
          LETS SOLVE YOUR COLLECTIVE DISCONNECTIONS
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ borderRadius: "24px", border: "2px solid #EAEAEA" }}>
          <Box sx={{ padding: "20px 20px 24px 20px" }}>
            <Box sx={{ height: "86px", width: "200px" }}>
              <img src={chartcolumn} alt="" />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Resiliency</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderRadius: "24px", border: "2px solid #EAEAEA" }}>
          <Box sx={{ padding: "20px 20px 24px 20px" }}>
            <Box sx={{ height: "86px", width: "270px" }}>
              <img src={digitaltransformation} alt="" />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                Digital Transformation
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderRadius: "24px", border: "2px solid #EAEAEA" }}>
          <Box sx={{ padding: "20px 20px 24px 20px" }}>
            <Box sx={{ height: "86px", width: "270px" }}>
              <img src={commandcontrol} alt="" />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                Command and Control
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderRadius: "24px", border: "2px solid #EAEAEA" }}>
          <Box sx={{ padding: "20px 20px 24px 20px" }}>
            <Box sx={{ height: "86px", width: "200px" }}>
              <img src={expertise} alt="" />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Expertise</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card2;
