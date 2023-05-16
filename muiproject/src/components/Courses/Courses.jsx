import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LinearProgress from '@mui/material/LinearProgress';
import photo1 from "./Media/photo.jpg"
import photo2 from "./Media/photo2.jpg"
import photo3 from "./Media/photo3.jpg"
import photo4 from "./Media/photo4.jpg"
import card from "./Media/card.png"
import card2 from "./Media/card2.png"



export default function Courses() {
  return (
    <>
    <Box sx={{background:"#E4F5EB",width:"100%", height:"1370px"}}>
    <Container >
    <Typography sx={{color:"#242323",fontWeight: "700",fontSize:"38px",padding:"30px"}}>
    Our Popular Courses
    </Typography>
      <Box sx={{display:"flex" ,flexWrap:"wrap",padding:"30px",gap:"20px"}} >
    <Card sx={{maxWidth: 345, marginTop:"25px"}}>
      <CardActionArea>
      <Box>
      <img src={photo4} alt="s" />
    </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:"#242323",fontSize:"30px"}}>
          Modern Business|Best Online Courses
          </Typography>
          <Box sx={{display:"flex" , gap:"10px",margin:"4px",alignItems:"center"}}>
          <PlayCircleIcon sx={{fontSize:"15px", color:"#FF4848"}}/>
        <Typography sx={{paddingRight:"100px"}}>30 Lectures</Typography>
        <Typography sx={{fontSize:"small"}}>12k+Learners</Typography>
        </Box>
        <Box sx={{ width: '100%' ,padding:"10px"}}>
         <LinearProgress />
        </Box>
        <Box sx={{display:"flex", gap:'10px',margin:"4px",alignItems:"center"}}>
        <Box >
      <img src={card} alt="s"  style={{borderRadius:"40px",width:"40px"}}/>
    </Box>
        <Box sx={{fontSize:"7px",color:"#000000"}}>
        <Typography sx={{fontWeight:"700"}}>Jhon Smith</Typography>
        <NavLink style={{color:"#45B871"}}>View Profile</NavLink>
        </Box><Typography sx={{paddingLeft:"118px", color:"#4C68FF"}}>$100</Typography> 
       </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345,marginBottom:"25px" }}>
      <CardActionArea>
      <Box>
      <img src={photo3} alt="s" />
    </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Digital Marketing|How to Manage Market 
          </Typography>
          <Box sx={{display:"flex" , gap:"10px",margin:"4px",alignItems:"center"}}>
          <PlayCircleIcon sx={{fontSize:"15px", color:"#FF4848"}}/>
        <Typography sx={{paddingRight:"100px"}}>30 Lectures</Typography>
        <Typography sx={{fontSize:"small"}}>12k+Learners</Typography>
        </Box>
        <Box sx={{ width: '100%' ,padding:"10px"}}>
         <LinearProgress />
        </Box>
        <Box sx={{display:"flex", gap:'10px',margin:"4px",alignItems:"center"}}>
        <Box >
      <img src={card2} alt="s"  style={{borderRadius:"40px",width:"40px"}}/>
    </Box>
        <Box sx={{fontSize:"7px",color:"#000000"}}>
        <Typography sx={{fontWeight:"700"}}>Jhon Smith</Typography>
        <NavLink style={{color:"#45B871"}}>View Profile</NavLink>
        </Box><Typography sx={{paddingLeft:"118px", color:"#4C68FF"}}>$100</Typography> 
       </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345,marginTop:"25px" }}>
      <CardActionArea>
      <Box>
      <img src={photo2} alt="s" />
    </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Programing|Develope Your Programming Skill
          </Typography>
          <Box sx={{display:"flex" , gap:"10px",margin:"4px",alignItems:"center"}}>
          <PlayCircleIcon sx={{fontSize:"15px", color:"#FF4848"}}/>
        <Typography sx={{paddingRight:"100px"}}>30 Lectures</Typography>
        <Typography sx={{fontSize:"small"}}>12k+Learners</Typography>
        </Box>
        <Box sx={{ width: '100%' ,padding:"10px"}}>
         <LinearProgress />
        </Box>
        <Box sx={{display:"flex", gap:'10px',margin:"4px",alignItems:"center"}}>
        <Box >
      <img src={card2} alt="s"  style={{borderRadius:"40px",width:"40px"}}/>
    </Box>
        <Box sx={{fontSize:"7px",color:"#000000"}}>
        <Typography sx={{fontWeight:"700"}}>Jhon Smith</Typography>
        <NavLink style={{color:"#45B871"}}>View Profile</NavLink>
        </Box><Typography sx={{paddingLeft:"118px", color:"#4C68FF"}}>$100</Typography> 
       </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345,marginTop:"10px" }}>
      <CardActionArea>
      <Box>
      <img src={photo1} alt="s" />
    </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Graphic Design|How to be
a professional Designer
          </Typography>
          <Box sx={{display:"flex" , gap:"10px",margin:"4px",alignItems:"center"}}>
          <PlayCircleIcon sx={{fontSize:"15px", color:"#FF4848"}}/>
        <Typography sx={{paddingRight:"100px"}}>30 Lectures</Typography>
        <Typography sx={{fontSize:"small"}}>12k+Learners</Typography>
        </Box>
        <Box sx={{ width: '100%' ,padding:"10px"}}>
         <LinearProgress />
        </Box>
        <Box sx={{display:"flex", gap:'10px',margin:"4px",alignItems:"center"}}>
        <Box >
      <img src={card2} alt="s"  style={{borderRadius:"40px",width:"40px"}}/>
    </Box>
        <Box sx={{fontSize:"7px",color:"#000000"}}>
        <Typography sx={{fontWeight:"700"}}>Jhon Smith</Typography>
        <NavLink style={{color:"#45B871"}}>View Profile</NavLink>
        </Box><Typography sx={{paddingLeft:"118px", color:"#4C68FF"}}>$100</Typography> 
       </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345,marginBottom:"20px" }}>
      <CardActionArea>
      <Box>
      <img src={photo3} alt="s" />
    </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            LifeStyle|Easy to Capture all moments
          </Typography>
          <Box sx={{display:"flex" , gap:"10px",margin:"4px",alignItems:"center"}}>
          <PlayCircleIcon sx={{fontSize:"15px", color:"#FF4848"}}/>
        <Typography sx={{paddingRight:"100px"}}>30 Lectures</Typography>
        <Typography sx={{fontSize:"small"}}>12k+Learners</Typography>
        </Box>
        <Box sx={{ width: '100%' ,padding:"10px"}}>
         <LinearProgress />
        </Box>
        <Box sx={{display:"flex", gap:'10px',margin:"4px",alignItems:"center"}}>
        <Box >
      <img src={card2} alt="s"  style={{borderRadius:"40px",width:"40px"}}/>
    </Box>
        <Box sx={{fontSize:"7px",color:"#000000"}}>
        <Typography sx={{fontWeight:"700"}}>Jhon Smith</Typography>
        <NavLink style={{color:"#45B871"}}>View Profile</NavLink>
        </Box><Typography sx={{paddingLeft:"118px", color:"#4C68FF"}}>$100</Typography> 
       </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345, marginTop:"10px" }}>
      <CardActionArea>
      <Box>
      <img src={photo1} alt="s" />
    </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Graphic Design|How to be
a professional Designer
          </Typography>
          <Box sx={{display:"flex" , gap:"10px",margin:"4px",alignItems:"center"}}>
          <PlayCircleIcon sx={{fontSize:"15px", color:"#FF4848"}}/>
        <Typography sx={{paddingRight:"100px"}}>30 Lectures</Typography>
        <Typography sx={{fontSize:"small"}}>12k+Learners</Typography>
        </Box>
        <Box sx={{ width: '100%' ,padding:"10px"}}>
         <LinearProgress />
        </Box>
        <Box sx={{display:"flex", gap:'10px',margin:"4px",alignItems:"center"}}>
        <Box >
      <img src={card2} alt="s"  style={{borderRadius:"40px",width:"40px"}}/>
    </Box>
        <Box sx={{fontSize:"7px",color:"#000000"}}>
        <Typography sx={{fontWeight:"700"}}>Jhon Smith</Typography>
        <NavLink style={{color:"#45B871"}}>View Profile</NavLink>
        </Box><Typography sx={{paddingLeft:"118px", color:"#4C68FF"}}>$100</Typography> 
       </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    <Button variant='contained'  sx={{display: { sx: 'none', sm: 'block' }, fontSize:"small",padding:"15px",background:"#45B871", marginLeft:"500px"}}>All Courses</Button>
    </Container>
  </Box>
    </>
  );
}
