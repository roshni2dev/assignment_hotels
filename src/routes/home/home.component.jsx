import { Box } from "@mui/material";

import Category from "../../components/category/category.component";
import Header from "../../components/header/header.component";
import HotelsCard from "../../components/hotels-card/hotels-card.component";
import './home.styles.scss';


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