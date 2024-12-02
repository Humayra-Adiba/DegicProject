
import React, { useState } from 'react';
import {AppBar, Toolbar, Typography,IconButton, Button, Drawer,List, ListItem, ListItemText, useMediaQuery } from "@mui/material"; 
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from '@mui/material/styles';

function Navbar() {
const  [open, setOpen] = useState(false); 
const Theme  = useTheme(); 
const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"))
const menuItems = ["About", "Services","Projects", "Contacts" ];
    return (
    <>
        <AppBar elevation={0} className='Navbar' position='static' sx={{backgroundColor:"white", color:"black", borderBottom:"2px solid #fafafa"}}>
            <Toolbar>
                {IsMobile ? (
                    <div>
                        <IconButton color='inherit' onClick={()=> setOpen(true) } >
                            <div className='flex justify-between gap-48 '>
                            <div><MenuIcon /></div>
                            <div><img src="/degic.png" alt="" /></div>
                            </div>
                        </IconButton>
                    </div>
                ) : (
                    <>
                        <Typography sx={{flexGrow:1}}>
                            <img src="/degic.png" className = {{position: "fixed"}} alt="" />
                        </Typography>

                        {menuItems.map((item) => (
                            <Button color='inherit' key={item}  className='font-bold' >{item}</Button>
                        ))}
                        <Button variant='outlined'
                        sx={{
                            color:"#2AB691",
                            backgroundColor: "white",
                            borderRadius:"10px",
                            "&:hover": {
                                backgroundColor:"#2AB666",
                                color:"white"
                            }}}>

                            Sign Up
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>

        <Drawer anchor='left' open={open} onClose={()=> setOpen(false) }>
            <List>
                {menuItems.map((item)=>(
                    <ListItem button key={item} onClick={()=> setOpen(false)}>
                        <ListItemText>{item}</ListItemText>
                    </ListItem>
                ) )}

                <ListItem><Button className='bg-pink-600 text-white rounded-md'>Sign up</Button></ListItem>
            </List>        
            
        </Drawer>
    </>
    )
}

export default Navbar