import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

export const ProductCard = ({title, discription, image}) => {

    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {discription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add To Cart</Button>
            </CardActions>
        </Card>
    )

}