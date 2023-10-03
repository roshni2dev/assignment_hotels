import { Fragment } from "react"
import HotelsCard from "../../../components/hotels-card/hotels-card.component"
import { Tooltip } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const Hotels = ({activeCategory}) => {
    const navigate = useNavigate();
    return(
        <Fragment>
            <Tooltip title='Bak to home page'>
                <ArrowBack onClick={() => navigate('/')} style={{fill:'#282828',fontSize: '30px'}} />
            </Tooltip>
        <HotelsCard activeCategory={activeCategory} />

        </Fragment>
        
    )
}

export default Hotels