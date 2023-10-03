import { Box, Typography } from "@mui/material";

import './header.styles.scss';

const Header = () => {
    return (
        <Box className='header-container'>
            <Typography variant="h3" className="heading">
                Featured Listed Property
            </Typography>
            <Typography variant="subtitle1" className="text">
                Real assets can be bought, sold, lessed, or
                rented, and can be a valuable opportunity,
                The value of real estate can be...
            </Typography>

        </Box>
    )
}

export default Header