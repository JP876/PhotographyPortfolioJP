import React from 'react';
import useStyles from '../styles/wishlistImagesStyles';
import { v4 as uuidv4 } from 'uuid';
import { GridList, GridListTile, useMediaQuery, useTheme } from '@material-ui/core';

const ListImages = props => {
    const { wishlistImgs, animate, setCurrentImage, setVariantID, setAnimate } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={classes.listImagesContainer}>
            <GridList classes={{ root: classes.gridList }} cols={matches ? 3.6 : 1}>
                {wishlistImgs.map(el => (
                    <GridListTile key={uuidv4()}>
                        <div
                            style={{
                                backgroundImage: `url(${el.media.source})`,
                            }}
                            className={classes.gridImage}
                            onClick={() => {
                                setCurrentImage(el);
                                setVariantID(el.variants[0].id);
                                setAnimate(!animate);
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default ListImages;
