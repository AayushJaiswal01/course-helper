import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import { useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const [goToCourse,setGoToCourse]=React.useState(false);
  const [goToCourse1,setGoToCourse1]=React.useState(false);
  const [goToCourse2,setGoToCourse2]=React.useState(false);

  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  if(goToCourse) {
    return navigate('/addreview')
  }
  if(goToCourse1) {
    return navigate('/')
  }
  if(goToCourse2) {
    return navigate('/aboutme')
  }


  return (
    <React.Fragment>
      <AppBar sx={{ background: "rgb(30,30,42)" }}>
        <Toolbar>
         
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Course Assist
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
            <Typography sx={{ fontSize: "2rem" }}>
                Course Assist
              </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="yellow"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                 
                <Tab onClick={()=>setGoToCourse1(true)} label={<span style={{ color: '#ffd52d' }}>Home</span>} />
                <Tab onClick={()=>setGoToCourse(true)} label={<span style={{ color: '#ffd52d' }}>Add Review</span>} />
                <Tab onClick={()=>setGoToCourse2(true)}label={<span style={{ color: '#ffd52d' }}>About us</span>} />
              </Tabs>
             
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;