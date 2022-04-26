import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


/**
 * 
 * @param props 
 * title
 * tags
 * nbVotes
 * nbResources
 * topic
 */

type CardProps = {
    topic: string,
    tags: string[],
    nbVotes: number,
    nbResources: number,
    description: string
}

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


const LiderbordCard = ({topic, tags, nbVotes, nbResources, description} : CardProps) => {
    return(
  <React.Fragment>
      <Card variant="outlined" sx={{
          height: 200,
          width: 900,
          borderRadius: "24px",
          p: "24px",
          mt: "16px",
          mb: "16px",
          ml: "100px"
           }}>
    <CardContent>
      <Typography sx={{mb : 2}} variant="h2" component="div">
        {topic}
      </Typography>
      <hr style={{
          
          width: "50%",
          border: "1px solid blue",
          margin: "5px"
      }}></hr>
      <Typography sx={{ display:"inline"}} color="text.secondary" >
          {tags.map((item,i) => <span key={i}> #{item} </span>)}
          {bull} {nbVotes} {bull} {nbResources}
      </Typography>
      <Typography sx={{mt: 1.5}}variant="body2">
        {description}
      </Typography>
    </CardContent>
    </Card>
  </React.Fragment>

    )
}

export default LiderbordCard;