"use client";
import styles from "./eachReviewStarWise.module.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import CustomerReviewCard from "../customerReviewCard/CustomerReviewCard";

export default function EachReviewStarWise() {
  const [value, setValue] = useState("5");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            {/* 👇 Only one centralised class here */}
            <TabList
              onChange={handleChange}
              aria-label="review tabs"
              className={styles.tabList}
            >
              <Tab label="5 Star Reviews" value="5" />
              <Tab label="4 Star Reviews" value="4" />
              <Tab label="3 Star Reviews" value="3" />
              <Tab label="2 Star Reviews" value="2" />
              <Tab label="1 Star Reviews" value="1" />
            </TabList>
          </Box>

          <TabPanel value="1"></TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Four</TabPanel>
          <TabPanel value="5" sx={{
            paddingX:'0px'
          }}>
            <div className="">
                <CustomerReviewCard />
                <CustomerReviewCard />
              {/* <div className="col-span-6">
                <CustomerReviewCard />
              </div>
              <div className="col-span-6">
                <CustomerReviewCard />
              </div>
              <div className="col-span-6">
                <CustomerReviewCard />
              </div>
              <div className="col-span-6">
                <CustomerReviewCard />
              </div> */}
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
