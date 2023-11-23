import { Box, Typography } from "@mui/material";
import React from "react";

function Card3() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "100px 220px",
      }}
    >
      <Box
        sx={{
          marginLeft: "50px",
          width: "900px",
          marginRight: "100px",
        }}
      >
        <Box sx={{}}>
          <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
            The Future-proof solution for legacy networks.
          </Typography>
        </Box>
        <Box sx={{ width: "90%", marginTop: "10px" }}>
          <Typography>
            Network Orchestrators are transport and environment neutral for
            unmatched flexibility.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "800px", height: "450px" }}>
        <Box
          sx={{
            width: "100%",
            height: "225px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "225px",
              background:
                "linear-gradient(196deg, #F1F1F1 14.75%, #FFF 60.08%), #FFF",
              borderRadius: "24px",
              marginRight: "10px",
            }}
          >
            <Box sx={{ padding: "25px 25px" }}>
              <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                Where they live:
              </Typography>
              <Box sx={{ padding: "20px 10px" }}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    padding: "3px 0px",
                  }}
                >
                  • Private Clouds
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    padding: "3px 0px",
                  }}
                >
                  • Bare Metal Hardware
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    padding: "3px 0px",
                  }}
                >
                  • Public Clouds
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    padding: "3px 0px",
                  }}
                >
                  • 46 Labs Managed Hosting
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    padding: "3px 0px",
                  }}
                >
                  • 46 Labs Edge Devices
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              background:
                "linear-gradient(196deg, #F1F1F1 14.75%, #FFF 60.08%), #FFF",
              height: "225px",
              borderRadius: "24px",
            }}
          >
            <Box sx={{ padding: "25px 25px" }}>
              <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                Connectivity to the Fabric:
              </Typography>
              <Box sx={{ padding: "20px 10px" }}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    padding: "3px 0px",
                  }}
                >
                  • Existing WAN
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    padding: "3px 0px",
                  }}
                >
                  • Fabric Local loops
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            width: "100%",
            background:
              "linear-gradient(196deg, #F1F1F1 14.75%, #FFF 60.08%), #FFF",
            height: "225px",
            borderRadius: "24px",
          }}
        >
          <Box sx={{ padding: "25px 25px" }}>
            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
              Where they participate:
            </Typography>
            <Box sx={{ padding: "20px 10px" }}>
              <Typography
                sx={{
                  fontSize: "15px",
                  padding: "3px 0px",
                }}
              >
                • Natively inside existing MPLS
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  padding: "3px 0px",
                }}
              >
                • Parallel to SD-WAN/SASE deployments
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  padding: "3px 0px",
                }}
              >
                • Inside public clouds
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  padding: "3px 0px",
                }}
              >
                • Attached to edge workloads
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card3;
