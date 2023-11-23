import { Box, Button, Typography } from "@mui/material";
import STS from "../Assests/SitetoSite.svg";
import STC from "../Assests/SitetoCloud.svg";
import PIS from "../Assests/ProtectedIS.svg";
import GVSTCCC from "../Assests/GlobalVS.svg";
import GVSTeamsone from "../Assests/GVStoTeams.svg";
import GVSTeamstwo from "../Assests/GVStwo.svg";

import React, { useState } from "react";

function Card3() {
  const [highlightedId, setHighlightedId] = useState(1);
  const [selectedImage, setSelectedImage] = useState(STS);

  const toggleColour = (id) => {
    setHighlightedId(id);
    let image;
    switch (id) {
      case 1:
        image = STS;
        break;
      case 2:
        image = STC;
        break;
      case 3:
        image = PIS;
        break;
      case 4:
        image = GVSTeamstwo;
        break;
      case 5:
        image = GVSTCCC;
        break;
      case 6:
        image = GVSTeamsone;
        break;
      default:
        image = STS;
    }
    setSelectedImage(image);
  };
  const data = [
    {
      id: 1,
      category: "• Site to Site Data",
    },
    {
      id: 2,
      category: "• Site to Cloud Data",
    },
    {
      id: 3,
      category: "• Protected Internet Services to Site",
    },
    {
      id: 4,
      category: "• Global Voice Services to PBX and Microsoft Team",
    },
    {
      id: 5,
      category: "• Global Voice Services to Cloud Contact Center",
    },
    {
      id: 6,
      category: "• Site Connectivity to Microsoft Teams",
    },
  ];

  return (
    <Box
      sx={{
        padding: "200px 150px 0px 200px",
        marginLeft: "50px",
      }}
    >
      <Box sx={{ width: "380px" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Change everything without changing anything.
        </Typography>
      </Box>
      <Box sx={{ width: "450px", marginTop: "30px" }}>
        <Typography sx={{ fontSize: "16px" }}>
          The PeerEdge® Fabric is pluggable with any voice or data workload,
          allowing enterprises to unleash the power of true edge connectivity,
          without taking on a rebuild.
        </Typography>
        <Typography sx={{ marginTop: "30px" }}>
          At scale. Across the world. All at once.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Button
          sx={{
            height: "50px",
            width: "170px",
            border: "2px solid black",
            borderRadius: "16px",
            backgroundColor: "black!important",
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            marginRight: "40px",
          }}
        >
          <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
            Learn More
          </Typography>
        </Button>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Box sx={{ width: "45%" }}>
            {data.map((item) => (
              <Box key={item.id} sx={{ marginTop: "20px" }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    padding: "15px 10px",
                    backgroundColor:
                      item.id === highlightedId ? "#F4F4F4" : "#FFF",
                    borderRadius: "24px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EAEAEA",
                    },
                  }}
                  onClick={() => toggleColour(item.id)}
                >
                  {item.category}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ padding: "0px 30px 0px 0px" }}>
            <Box
              sx={{
                borderRadius: "56px",
                height: "470px",
                width: "650px",
                marginTop: "15px",
                backgroundColor: "black",
              }}
            >
              <img
                style={{ padding: "50px 80px" }}
                src={selectedImage}
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card3;
