import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

import { Button, Card } from 'components'
import { tests } from 'localization'

import bg from '../../content/highlightBackground.png'


export const HighlightCard = React.memo(({ avatar, ...props }) => {
    return (
        <Card {...props} sx={{ height: '100%', backgroundImage: `url(${bg})`, backgroundSize: '100%'}}>
            <Grid container direction={"column"} sx={{ height: '100%' }}>
                <Box sx={{ flex: 1}}>
                    <Grid sx={{ height: '100%'}} container alignItems="center" justifyContent="center">
                        <img alt='' src={tests[avatar].avatar}></img>
                    </Grid>
                </Box>
                <Box sx={{ flex: 1}} >
                    <Box>
                        <Typography variant="h1" >Autismo</Typography>
                        <Typography variant="subtitle1" sx={{ mb: 3, mt: 2 }}>Licenças Disponíveis</Typography>
                        <Grid container alignItems="center">
                            <Typography variant="h1">13</Typography>
                            <Button sx={{ ml: 2 }}>Comprar mais</Button>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Card>
    )
})