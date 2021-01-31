import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grow from '@material-ui/core/Grow';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  root: { maxWidth: 5365 },
  media: {
    height: 0,
    paddingTop: "56.25%",

    hover:{ 
        backgroundColor:'red'
    }
  },
  
}));

export default function CardPreview(props) {
  const classes = useStyles();
  const checked = true;

  return (
      <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
        <Link component={RouterLink} to={props.itemUrl}>
            <CardActionArea>
                <Card className={classes.root}>
                
                <CardMedia
                    className={classes.media}
                    image={props.url}
                    title={props.alt}
                />

            </Card>

            </CardActionArea>
        </Link>
        </Grow>
  );
}