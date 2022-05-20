import { Box, Grid,  Paper, Typography } from '@mui/material'
import React from 'react'
import atendimentoBackground from '../../content/atendimentoBackground.png'
import { tests } from 'localization'

export const AtendimentoCard = React.memo(({ atendimento, ...props }) => {
    return (
        <Paper variant="outlined" {...props}>
            <Grid container sx={{ backgroundImage: `url(${atendimentoBackground})`, height: 136, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <img alt='' src={ tests[atendimento.test].icon }></img>
            </Grid>
            <Box sx={{ p: 2,
            lineHeight: 30,
            '&:not(:last-child)': {
                mb: 2,
            } }}>
                <Typography variant='name' sx={{ fontSize: 14, display: 'block', mb: 1}}>{atendimento.name}</Typography>
                <Typography variant="subtitle1">Teste Realizado</Typography>
                <Typography variant='value'>{ tests[atendimento.test].label }</Typography>
                <Typography variant="subtitle1">Realizado em </Typography>
                <Typography variant='value'>{ atendimento.date }</Typography>
            </Box>

        </Paper>
    )
})