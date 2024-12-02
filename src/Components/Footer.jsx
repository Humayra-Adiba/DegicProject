
import React from 'react'
import { Facebook, Twitter, Instagram, Bloodtype,} from "@mui/icons-material"; 
import {Box, Container,Grid, Typography, Link, IconButton} from  "@mui/material"

function Footer() {
    const FooterData = [
        {
            Title:"Home",
            links:["Become Affiliate","Go Unlimited", "Services" ]
        },
        {
            Title:"Product",
            links:["Design Systems", "Themes & Templates","Mockups","Presentations", "Wireframes Kits","UI Kits"]
        },
        {
            Title:"Legals",
            links:["License","Refund Policy", "About Us", "Contacts"]
        },
        {
            Title:"Blog",
            links:["Business Stories", "Digital Store", "Learning","Social Media"]
        }

    ]; 

const SocialIcons = [
    { icon: <Facebook />, href: '#'},
    { icon: <Twitter />, href: '#' },
    { icon: <Instagram />, href: '#' },
]
    return (
    <Box sx={{bgcolor:"#000", color:"#fff", py:6}}>
        <Container maxWidth="lg">
            <Grid  container spacing={4}>
                
                <Grid item xs={12} md={3}>
                    <Typography>
                        <img src="/degic1.png" alt="" />
                    </Typography>
                </Grid> 

                {
                    FooterData.map((section, index)=> (
                        <Grid item xs={6} md={2} key={index}>
                            <Typography>
                                {section.Title }
                            </Typography>
                            {section.links.map((link, linkIndex)=> (
                                <Box key={linkIndex} className='text-gray-500'>
                                    <Link href="#" underline='none' color='inherit ' display="block" sx={{my:1}} >
                                        {link}
                                    </Link>
                                </Box>
                            ))}
                        </Grid> 
                    )) }
            </Grid>
            <hr className='mt-10 text-[#C4C4C4]' />

           <div className='flex flex-col md:flex-row justify-between mt-5'>
           <Box textAlign="center" className='mt-2 text-gray-500'>
                        <Typography>
                        © {new Date().getFullYear()} Degic. All rights reserved.
                        </Typography>
                    </Box>

            <Box  display="flex" justifyContent="center" >
                    {
                        SocialIcons.map((social, index)=> (
                                <IconButton key={index} href={social.href} color='inherit'>
                                    {social.icon}
                                </IconButton>  
                        ))}

                    </Box>
            </div>

        </Container>
    </Box>
    )
}

export default Footer