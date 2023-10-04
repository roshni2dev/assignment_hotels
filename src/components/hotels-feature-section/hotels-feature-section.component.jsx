
import { Bathtub, BedRounded, BusinessRounded } from '@mui/icons-material';

import sqtIcon from '../../assets/arrow.png';
import './hotels-feature-section.styles.scss';
import { Box, Typography } from '@mui/material';

const HotelsFeatureSection = () => {

    const data = [
        {
            title: '3 Room',
            imageUrl: <BusinessRounded />,
            imageType: 'icon'
        },
        {
            title: '4 Bed',
            imageUrl: <BedRounded />,
            imageType: 'icon'
        },
        {
            title: '1 Bath',
            imageUrl: <Bathtub />,
            imageType: 'icon'
        },
        {
            title: '732 Sqt.',
            imageUrl: sqtIcon,
            imageType: 'image'
        }
    ]

    return (
        <Box className='feature-section'>
            {
                data.map((item, ind) => (
                    <Box className='feature-section-item'>
                        {
                            item.imageType === 'image'
                                ?
                                <img src={item.imageUrl} style={{ width: '25px' }} alt='feature-icon' />
                                :
                                item.imageUrl
                        }
                        <Typography className="feature-section-heading" variant="subtitle2">{item.title}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}
export default HotelsFeatureSection;