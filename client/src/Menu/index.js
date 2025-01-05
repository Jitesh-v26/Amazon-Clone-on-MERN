import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
    const [open, setOpen] = useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const DrawerList = (
      <Box sx={{ width: "20rem" }} role="presentation" onClick={toggleDrawer(false)}>
        <div className="text-[20px] font-bold ml-[10px] mt-[10px]">Trending</div>
        <List>
          {['Best Sellers', 'New Releases', 'Movers & Shakers'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <div className="text-[20px] font-bold ml-[10px] mt-[10px]">Digital Content and Devices</div>
        <List>
          {['Echo and Alexa ', 'Fire TV', 'Kindle E-readers & ebooks', 'Audible Audiobooks', 'Amazon Prime Video', 'Amazon Prime Music'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const menuOptions = ["MX Player", "Sell", "Best Sellers", "Mobiles", "Today's Deals", "Prime", "Customer Service", "Electronics", "Home & Kitchen", "Amazon Pay"]

  return (
    <div>
        <div className="w-[100%] bg-[#232f3e] flex justify-around">
            <div className="text-[#ffffff] p-1 flex gap-1 cursor-pointer" onClick={toggleDrawer(true)}>
                <MenuIcon />
                All
            </div>
            {menuOptions.map((item)=>{
                return(<div className="text-[#ffffff] p-1 cursor-pointer">
                    {item}
                </div>)
            })}
        </div>
        <Drawer sx={{width: '20rem'}} open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    </div>
  )
}

export default Menu