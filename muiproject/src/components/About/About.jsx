import {  Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from "./Media/avatar.png"
import avatar1 from "./Media/avatar1.png"
import avatar3 from "./Media/avatar3.png"

export default function About() {
  return (
    <>
    <Container>
    <Box>
    <Typography sx={{color:"#242323",fontWeight:600, fontSize:"38px",textAlign:"center",paddingTop:"50px",paddingBottom:"30px"}}>
    Students say about us 
    </Typography>
    <Box sx={{display:"flex",gap:"50px"}}>
    <Box sx={{display:"inline-block",width:"500px", height:"480px",background:"#FFFFFF", border:"1px solid rgba(231, 231, 231, 0.7)",boxShadow:" 30px 30px 70px rgba(99, 98, 98, 0.06)",borderRadius:"15px" }}>
    <Box >
      <img src={avatar1} alt="s"  style={{borderRadius:"40px",width:"110px", height:"110px",margin:"30px", marginTop:"40px"}}/>
    </Box>
         <Typography variant='h6' sx={{color:"#8C8E90", fontSize:"20px",paddingBottom:"14px",margin:"30px"}}>
        The point of using Lor, heem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </Typography>
        <Typography sx={{color:"#242323",fontWeight:"600", fontSize:"25px",marginLeft:"30px"}}>
        Jeiliya mathus
        </Typography>
        <Typography sx={{color:"#636262",marginLeft:"30px"}}>
        Product Designer, Google
        </Typography>
    </Box>
    <Box sx={{}}>
    <Box sx={{width:"500px", height:"405px",background:"#FFFFFF", border:"1px solid rgba(231, 231, 231, 0.7)",boxShadow:" 30px 30px 70px rgba(99, 98, 98, 0.06)",borderRadius:"15px",marginBottom:"40px"}}>
    <Box >
      <img src={avatar3} alt="s"  style={{borderRadius:"40px",width:"80px", height:"70px",margin:"30px", marginTop:"45px"}}/>
    </Box>
        <Typography variant='h6' sx={{color:"#8C8E90", fontSize:"17px",paddingBottom:"14px",margin:"30px"}}>
        The point of using Lor, heem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </Typography>
        <Typography sx={{color:"#242323",fontWeight:"600", fontSize:"20px",marginLeft:"30px"}}>
        Adam kauthe
        </Typography>
        <Typography sx={{color:"#636262",marginLeft:"30px", fontSize:"13px"}}>
        Software Engineer,Google
        </Typography>
    </Box>
    <Box sx={{width:"500px", height:"405px",background:"#FFFFFF", border:"1px solid rgba(231, 231, 231, 0.7)",boxShadow:" 30px 30px 70px rgba(99, 98, 98, 0.06)",borderRadius:"15px",marginBottom:"40px"}}>
    <Box >
      <img src={avatar} alt="s"  style={{borderRadius:"40px",width:"80px", height:"70px",margin:"30px", marginTop:"45px"}}/>
    </Box>
        <Typography variant='h6' sx={{color:"#8C8E90", fontSize:"17px",paddingBottom:"14px",margin:"30px"}}>
        The point of using Lor, heem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </Typography>
        <Typography sx={{color:"#242323",fontWeight:"600", fontSize:"20px",marginLeft:"30px"}}>
        Maluka kamil
        </Typography>
        <Typography sx={{color:"#636262",marginLeft:"30px", fontSize:"13px"}}>
        Business Consultant, Zoom
        </Typography>
    </Box>
    </Box>
    </Box>
    </Box>
    <Box sx={{background:"#45B871", width:"1050px", height:"312px",marginTop:"50px",marginBottom:"50px"}}>
    <Typography sx={{color:"#FFFFFF", fontWeight:"700",fontSize:"30px", textAlign:"center", paddingTop:"80px"}}>
    Sign up & Enroll now,and Get <br /> Free Trial For 20Days
    </Typography>
    <Box sx={{textAlign:"center",margin:"20px"}}>
    <NavLink to="/signup">
        <Button variant="outlined" sx={{color:"#FFFFFF", margin:"20px"}}>Sign up</Button>
        </NavLink>
        <NavLink to="/freetrial" >
        <Button variant='contained' sx={{background:"#FFFFFF", color:"#000"}} >Start Free trial</Button>
      </NavLink>
    </Box>
    </Box>
    </Container>
    </>
  )
}
