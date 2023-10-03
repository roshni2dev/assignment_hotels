import { Box, Button, Grid } from "@mui/material";

import './category.styles.scss';
import { useState } from "react";

const CATEGORY_ITEMS = ['new york', 'mumbai', 'paris', 'london'];

const Category = ({setActiveCategory}) => {

    const [activeCategoryId, setActiveCategoryId] = useState(0);
    return (
        <Grid container spacing={2} className="grid-container">
            <Grid item xs={8}>
                {
                    CATEGORY_ITEMS.map((item, ind) => (
                        <Button
                            style={{
                                background: activeCategoryId === ind ? "#363ae3" : '#ececfc',
                                color: activeCategoryId === ind ? "#f5f5f5" : '#282828'
                            }}
                            onClick={() => {
                                setActiveCategory(item);
                                setActiveCategoryId(ind)
                            }
                            } className="category-items">
                            {item}
                        </Button>
                    ))
                }
              
            </Grid>
            <Grid item xs={4} style={{display: 'flex',justifyContent: 'flex-end'}}>
            <Button className="view-all">
                    view all &rarr;
                </Button>
            </Grid>
        </Grid>
    )
}
export default Category