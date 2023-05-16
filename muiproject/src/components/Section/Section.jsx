import { Avatar, Box, Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Courses from '../Courses/Courses';
import { Image } from '@mui/icons-material';
import About from '../About/About';
import { ImageListItem } from '@mui/material';
// import Avatar from '@mui/material';
import salom from "./Media/salom.png"
import by from "./Media/by.png";
import fiver from "./Media/fiver.png"
import mc from "./Media/mc.png";
import ud from "./Media/ud.png"
import steps from "./Media/steps.png"

export default function Section() {
  return (
    <>
    <Box sx={{background:"#E4F5EB", height:"620px"}}>
     <Container>
     <Box sx={{display:"flex"}}>
    <Box>
      <Box>
    <Typography sx={{width:"332px",paddingTop:"185px" ,color:"#242323",fontWeight:"700",fontSize:"33.4539px"}}>
    Anytime,anywhere Develop your skill by Online
    </Typography>
    <Typography sx={{width: "509.61px",fontSize:"15px",paddingTop:"20px"}}>
    Online education is a form of education where students use their home computers through the internet. For many nontraditional students, among them all those who want to continue.
    </Typography>
    </Box>
    <Box sx={{display:"flex", alignItems:"center", gap:"15px",paddingTop:"35px"}}>
      <Button variant='contained'  sx={{display: { sx: 'none', sm: 'block' }, fontSize:"small",background:"#45B871"}}>All courses</Button> 
     <IconButton sx={{display:"flex", alignItems:"center", gap:"5px"}}>
     <PlayCircleIcon sx={{fontSize:"45px", color:"#fff"}}/>
     <Typography sx={{fontSize:"10px", fontWeight:"bold"}}>PLay Video</Typography>
     </IconButton>
    </Box>
    </Box>
         
    <Box >
      <img src={salom} style={{width:"700px",height:"500px",marginTop:"70px"}}/>
    </Box>
  </Box>
  </Container>
    </Box>
    <Container>
  <Box sx={{height:"120px",alignItems:"center" , display:"flex",justifyContent:"center", gap:"80px"}}>
    <Typography sx={{width:"166.11px", fontWeight:"700",color:"#575859"}}>
    Trusted by 30,000+ satisfied students
    </Typography>
    <Box sx={{display:"flex", gap:"80px",height:"50px"}}>
      <img src={ud}  /> 
      <img src={fiver}  /> 
      <img src={by}  /> 
      <img src={mc}  /> 
    </Box>
  </Box>
  <Box sx={{display:"flex"}}>
    <Box>
      <img src={steps} alt="s" />
    </Box>
    <Box>
    <Typography sx={{color:"#242323",fontWeight:"700",fontSize:"48px",paddingTop:"60px"}}>
    Get Started in 4 Easy Steps
    </Typography>
    <Typography sx={{color:"#8C8E90",fontWeight:"300",fontSize:"18px",paddingTop:"20px"}}>
    Proper and good education is very important for all of us. It facilitates quality learning all through the life among people of any age group, cast, creed, religion and region.
    <br />
It is the process of achieving knowledge, values, skills, beliefs, and moral habits.Education is the process of facilitating learning, or the acquisiof knowledge, skills, values.
    </Typography>
    <IconButton sx={{display:"flex", alignItems:"center", gap:"5px",paddingTop:"20px"}}>
     <PlayCircleIcon sx={{fontSize:"55px", color:"#4C68FF"}}/>
     <Typography sx={{fontSize:"18px", fontWeight:"bold"}}>See How it Works</Typography>
     </IconButton>
    </Box>
  </Box>
  </Container>
    <Courses/>
    <About/>
    </>
  )
}
