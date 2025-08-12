"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { MdOutlineShoppingCart } from "react-icons/md";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}>
      <SpeedDial
        ariaLabel="Cart SpeedDial"
        icon={<MdOutlineShoppingCart />}
        FabProps={{
          sx: {
            backgroundColor: "#d5e5d5",
            color: "#275140",
            fontSize: '20px',
            boxShadow:'none',
            "&:hover": {
              backgroundColor: "#275140",
              color: "#d5e5d5",
            }
          }
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
