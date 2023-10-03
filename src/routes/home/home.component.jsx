import { Box, Typography } from "@mui/material";

import './home.styles.scss';
import { Fragment, useContext, useState } from "react";
import Category from "../../components/category/category.component";
import Header from "../../components/header/header.component";
import HotelsCard from "../../components/hotels-card/hotels-card.component";


const Home = ({setActiveCategory,activeCategory}) => {
   
 

    return (
        <Box className='home-container'>
            <Header />
            <Category setActiveCategory={setActiveCategory} />
            <HotelsCard activeCategory={activeCategory} />
        </Box>
    )
}
export default Home;