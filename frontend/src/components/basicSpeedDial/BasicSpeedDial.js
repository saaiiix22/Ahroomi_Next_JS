"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ShareIcon from "@mui/icons-material/Share";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function BasicSpeedDial() {
  const router = useRouter();

  const actions = [
    { icon: <ShoppingCartIcon />, name: "Cart", path: "/cart" },
    { icon: <PersonIcon />, name: "Profile", path: "/profile" },
    { icon: <LocalShippingIcon />, name: "Track Order", path: "/orders" },
    { icon: <ShareIcon />, name: "Share" }, // no path → just stays action
  ];

  const handleActionClick = (action) => {
    if (action.path) {
      router.push(action.path);
    } else {
      console.log(`${action.name} clicked`);
    }
  };

  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}>
      <SpeedDial
        ariaLabel="User"
        icon={<MenuIcon />}
        FabProps={{
          sx: {
            backgroundColor: "#153a2b",
            color: "#d5e5d5",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#0b1e16",
              color: "#d5e5d5",
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleActionClick(action)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
