import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Menu = () => {
    const [open, setOpen] = useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const DrawerList = (
      <Box sx={{ width: "20rem" }} role="presentation" onClick={toggleDrawer(false)}>
        <div className="text-[22px] font-bold mb-[10px] p-[10px] bg-[#232f3e] text-[#ffffff] w-[100%] flex items-center">
          <AccountCircleIcon sx={{fontSize:'25px'}}></AccountCircleIcon>&nbsp;&nbsp;Hello, Sign in</div>
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
        <div className="w-[100%] min-w-[1100px] bg-[#232f3e] flex justify-around">
            <div className="text-[#ffffff] p-1 m-[1px] flex gap-1 cursor-pointer hover:border-solid hover:border-[1px] hover:border-[#ffffff] hover:m-0 focus:border-solid focus:border-[1px] focus:border-[#ffffff] focus:m-0" onClick={toggleDrawer(true)}>
                <MenuIcon />
                All
            </div>
            {menuOptions.map((item)=>{
                return(<button className="text-[#ffffff] p-1 m-[1px] grow-1 cursor-pointer hover:border-solid hover:border-[1px] hover:border-[#ffffff] hover:m-0 focus:border-solid focus:border-[1px] focus:border-[#ffffff] focus:m-0">
                    {item}
                </button>)
            })}
        </div>
        <Drawer sx={{width: '20rem'}} open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    </div>
  )
}

export default Menu