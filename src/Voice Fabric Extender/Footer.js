import { Typography, Box, Divider } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Box
        sx={{
          padding: "0px 350px",
        }}
      >
        <Divider sx={{ backgroundColor: "#EAEAEA" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px 350px",
        }}
      >
        <Box>
          <Typography sx={{ color: "#858585" }}>
            © 2023 - 46 Labs, LLC. All rights reserved.
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ padding: "0px 16px" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Trademark Policy
              </Typography>
            </Box>
            <Box sx={{ padding: "0px 16px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Service Terms</Typography>
            </Box>
            <Box sx={{ padding: "0px 16px" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Privacy Policy
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
