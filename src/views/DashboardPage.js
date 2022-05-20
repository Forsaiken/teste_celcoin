import React from 'react'
import { AtendimentoCard, Button, Card, HighlightCard, StatusCard } from 'components'
import { Box, Grid, Typography } from '@mui/material'
import { boards, cases, updates } from 'fakedata'
import { UpdateCard } from 'components/dashboard/UpdateCard'

const DashboardPage = React.memo(() => {

    return (
        <Box sx={{ mt: -3}}>
            <Typography variant="section"> Informações Gerais </Typography>

            <Grid container spacing={2}>
                {boards.map(board =>
                    <Grid item md={3}>
                        <StatusCard {...board} />
                    </Grid>
                )}

            </Grid>

            <Grid container alignItems="center" sx={{ mt: 1 }}>
                <Typography variant="section"> Histórico de atendimentos </Typography>
                <Button sx={{ ml: 2}}>VER TODOS</Button>
            </Grid>

            <Grid container spacing={2} >
                <Grid item md={8}>
                    <Card>
                        <Grid container spacing={2}>
                            {cases.slice(0, 4).map((c =>
                                <Grid item md={3}>
                                    <AtendimentoCard atendimento={c} />
                                </Grid>))}
                        </Grid>
                    </Card>

                </Grid>
                <Grid item md={4}>
                    <HighlightCard avatar="autismo" />
                </Grid>
            </Grid>

            <Typography variant="section"> Atualizações Importantes </Typography>

            <Grid container spacing={2}>
                {updates.map(update =>
                    <Grid item md={4}>
                        <UpdateCard {...update} />
                    </Grid>
                )}
            </Grid>
        </Box>
    )

})

export default DashboardPage