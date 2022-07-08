import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

export const ProductCard = ({product, selected}) => {
    const {title, discription, image, price, id} = product;

    return (
        <Card className="product-card" sx={{ maxWidth: 345 }} onClick={() => selected(id)}>
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
                <Typography variant="body2" color="text.secondary">
                    Price {price}
                </Typography>
            </CardContent>
            <CardActions>
                Price: ${price}
            </CardActions>
        </Card>
    )

}