import React from 'react'
import { Card } from 'components'
import { Box, Divider, Grid, IconButton, List, ListItem, Typography } from '@mui/material'
import { Button, Icon, SearchField } from 'components'
import { tests } from 'localization'

const ClientItem = React.memo(({ avatar, name, situation, pending, cancel, confirmed }) => {

    const fields = [
        {
            value: confirmed,
            label: 'Testes realizados',
            color: '#1EAC79'
        },
        {
            value: cancel,
            label: 'Testes cancelados',
            color: '#EF0C35'
        },
        {
            value: pending,
            label: 'Testes pendentes',
            color: '#FF6B00'
        },

    ]

    return (
        <ListItem sx={{ border: '1px solid #EFF2F9', borderRadius: '6px', mb: 1 }}>
            <img alt='' src={avatar} />
            <Box sx={{ ml: 2, width: '30%' }}>
                <Typography variant="name">{name}</Typography>
                <Typography variant="subtitle1">Diagnóstico</Typography>
                <Typography sx={{ color: '#1EAC79', fontWeight: 600, fontSize: 12 }}>{situation.map(s => tests[s].label).join(', ')}</Typography>
            </Box>
            <Divider flexItem orientation='vertical' />
            {fields.map(field =>
                <>
                    <Box sx={{ color: field.color, p: (theme) => theme.spacing(0, 2) }}>
                        <Typography variant="highlight" sx={{ color: field.color }}>{field.value}</Typography>
                        <Typography variant="subtitle2" sx={{ color: field.color, fontSize: '14px', lineHeight: '21px' }}>{field.label}</Typography>
                    </Box>
                    <Divider flexItem orientation='vertical' />
                </>
            )}
            <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
                <IconButton sx={{ mr: 2, border: '1px solid #EFF2F9' }}>
                    <Icon iconfy type="ant-design:edit-filled" color={'#145AD2'} width={15} height={15} />
                </IconButton>
                <Button sx={{ mr: 2 }} style={{ background: 'linear-gradient(93.05deg, #FF00C7 0%, #FF005C 100%)', height: 32 }}>Enviar novo teste</Button>
                <Button style={{ height: 32 }}>Alterar cadastro</Button>
            </Box>


        </ListItem>
    )

})

export const ClientList = React.memo(({ clients, ...props }) => {

    return (
        <Card {...props}>
            <Grid container justifyContent="space-between" sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{
                        color: 'rgba(86, 84, 104, 0.6)',
                        display: 'block',
                        mr: 2,
                        ml: 0.5,
                        fontWeight: 700,
                        fontSize: 16,
                        lineHeight: '24px'
                    }}>{`Lista de Pacientes (${clients.length})`}</Typography>
                    <SearchField placeholder="Buscar paciente..."></SearchField>
                </Box>
                <IconButton>
                    <Icon iconfy type="akar-icons:more-horizontal" />
                </IconButton>
            </Grid>
            <Box>
                <List>
                    {clients.map(c => <ClientItem {...c}></ClientItem>)}
                </List>
            </Box>
        </Card>
    )
})