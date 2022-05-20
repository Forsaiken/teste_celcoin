import React from 'react'
import { AtendimentoCard, Card, ClientList } from 'components'
import { Box, Grid, Typography } from '@mui/material'
import { cases, clients } from 'fakedata'

const PacientesPage = React.memo(() => {

    const horizontalWheel = (e) => {

        if (e) {
            e.addEventListener('wheel', (event) => {
                event.preventDefault();
                e.scrollBy({
                    left: event.deltaY < 0 ? -30 : 30,
                });
            });
        }

    }

    return (
        <Box sx={{ mt: -3 }}>
            <Typography variant="section"> Atualizações de pacientes </Typography>
            <Card>
                <Grid ref={horizontalWheel} container spacing={2} wrap="nowrap"
                    sx={{ p: 0, display: 'flex', overflowX: 'scroll', '&::-webkit-scrollbar': { width: '0 !important' } }}>
                    {cases.map((c =>
                        <Grid item>
                            <AtendimentoCard atendimento={c} sx={{ minWidth: '264px' }} />
                        </Grid>

                    ))}
                </Grid>
            </Card>


            <Typography variant="section"> Todos os pacientes </Typography>

            <ClientList clients={clients} />

        </Box>
    )

})

export default PacientesPage