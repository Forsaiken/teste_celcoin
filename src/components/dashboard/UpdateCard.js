import React from 'react'
import { Card } from 'components'
import { Box, Grid, Typography } from '@mui/material'
import { tests } from 'localization'

export const UpdateCard = React.memo(({ name, test, avatar, date }) => {

    const colors = {
        cancel: '#EF0C35',
        complete: '#1EAC79'
    }

    return (
        <Card sx={{ cursor: 'pointer'}}>
            <Grid container spacing={2}>
                <Grid item>
                <img src={avatar} alt='' width={96} height={96} />
                </Grid>
                <Grid item>
                <Box>
                    <Typography variant="subtitle1">Paciente</Typography>
                    <Typography variant='name'>{ name }</Typography>
                    <Grid container sx={{ color: colors[test.status], mb: 1, textTransform: 'uppercase' }}>
                        <Typography sx={{mr: 0.5, fontSize: '12px', lineHeight: '16px', fontFamily: 'Open Sans'}}>{ test.status === 'complete' ? 'COMPLETOU O TESTE:' : 'CANCELOU O TESTE:'}</Typography>
                        <Typography sx={{ fontSize: '12px', lineHeight: '16px', fontFamily: 'Open Sans', fontWeight: 700}}>{ tests[test.type].label }</Typography>
                    </Grid>
                    <Typography variant="subtitle1">{`Realizado em: ${date}`}</Typography>
                </Box>
                </Grid>
                
            </Grid>
        </Card>
    )
})