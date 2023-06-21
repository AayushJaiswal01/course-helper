import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate} from 'react-router-dom';

import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate=useNavigate();
  const [goToCourse,setGoToCourse]=React.useState(false);
  const [goToCourse1,setGoToCourse1]=React.useState(false);
  const [goToCourse2,setGoToCourse2]=React.useState(false);
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
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
        
          
            <ListItemButton key={0}>
              <ListItemIcon>
                <ListItemText onClick={()=>setGoToCourse1(true)}  >Home</ListItemText>
                            </ListItemIcon>
            </ListItemButton>
            <ListItemButton key={1}>
              <ListItemIcon>
                <ListItemText onClick={()=>setGoToCourse(true)}  >Add review</ListItemText>
                            </ListItemIcon>
            </ListItemButton>
            <ListItemButton key={2}>
              <ListItemIcon>
                <ListItemText onClick={()=>setGoToCourse2(true)}  >About me</ListItemText>
                            </ListItemIcon>
            </ListItemButton>
          
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto",backgroundColor: "#3b3640"}}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;