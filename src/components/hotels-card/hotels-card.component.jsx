
import { useCallback, useState } from "react";
import {FavoriteBorder, LocationOnOutlined } from "@mui/icons-material"
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

import { HOTELS_DATA, All_HOTELS_DATA } from '../../data/hotels.data'
import HotelsFeatureSection from "../hotels-feature-section/hotels-feature-section.component";
import './hotels-card.styles.scss';


const HotelsCard = ({ activeCategory }) => {
    const [isMoreItemsVisible, setMoreItemsVisible] = useState(true);
    const navigate = useNavigate();

    const toggle = useCallback(() => {
        setMoreItemsVisible(prev => !prev);
    }, []);

    return (
        <>
            <Grid container spacing={2} className="grid-container">
                {
                    !isMoreItemsVisible
                        ?

                        All_HOTELS_DATA.map((item) => (
                            <>
                                {
                                    activeCategory === item.category
                                        ?
                                        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Card className='card' onClick={() => navigate(`/hotel/${item.id}`)}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="250"
                                                        image={item.imageUrl}
                                                        alt="hotel-1"
                                                        style={{ borderRadius: '8px', position: 'relative' }}
                                                    />
                                                    <Box className='image-top-container'>
                                                        <Button className="for-rent-button" >for rent</Button>
                                                        <Box className='favorite-icon-container'>
                                                            <FavoriteBorder className="favorite-icon" />
                                                        </Box>
                                                    </Box>

                                                    <CardContent>
                                                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <LocationOnOutlined style={{ fill: '#b29a6f', fontSize: '17px' }} />
                                                            &nbsp;
                                                            <Box component={'span'} style={{ color: '#282828', fontWeight: '500', }}>{item.location2}</Box>
                                                        </Typography>
                                                        <Typography className="card-heading" gutterBottom variant="h6" component="div">
                                                            {item.location1}
                                                        </Typography>
                                                       <HotelsFeatureSection />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions style={{ display: 'flex', padding: '16px', justifyContent: 'space-between' }}>
                                                    <Typography className="price" variant="subtitle2">
                                                        ${item.price}<Box style={{ color: '#282828' }} component={'span'}>/month</Box>
                                                    </Typography>
                                                    <Button className="card-button">
                                                        Read More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                        :
                                        null
                                }
                            </>
                        ))
                        :
                        HOTELS_DATA.map((item) => (
                            <>
                                {
                                    activeCategory === item.category
                                        ?
                                        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Card className='card' onClick={() => navigate(`/hotel/${item.id}`)}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="250"
                                                        image={item.imageUrl}
                                                        alt="hotel-1"
                                                        style={{ borderRadius: '8px', position: 'relative' }}
                                                    />
                                                    <Box className='image-top-container'>
                                                        <Button className="for-rent-button" >for rent</Button>
                                                        <Box className='favorite-icon-container'>
                                                            <FavoriteBorder className="favorite-icon" />
                                                        </Box>
                                                    </Box>

                                                    <CardContent>
                                                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <LocationOnOutlined style={{ fill: '#b29a6f', fontSize: '17px' }} />
                                                            &nbsp;
                                                            <Box component={'span'} style={{ color: '#282828', fontWeight: '500', }}>{item.location2}</Box>
                                                        </Typography>
                                                        <Typography className="card-heading" gutterBottom variant="h6" component="div">
                                                            {item.location1}
                                                        </Typography>
                                                       <HotelsFeatureSection />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions style={{ display: 'flex', padding: '16px', justifyContent: 'space-between' }}>
                                                    <Typography className="price" variant="subtitle2">
                                                        ${item.price}<Box style={{ color: '#282828' }} component={'span'}>/month</Box>
                                                    </Typography>
                                                    <Button className="card-button">
                                                        Read More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                        :
                                        null
                                }
                            </>
                        ))

                }

                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={toggle} className="show-more-button">
                        Show {isMoreItemsVisible ? "More" : "Less"}
                    </Button>
                </Grid>
            </Grid>

        </>
    )

}
export default HotelsCard