import { Badge, Box, Grid, IconButton } from '@mui/material'
import React from 'react'
import { SearchField } from 'components/SearchField'
import { Icon } from 'components'
import avatar1 from '../../content/avatar1.png'
import { ProfileChip } from './ProfileChip'

export const NavBar = React.memo((props) => {

    return (
        <Box sx={{ background: 'white', height: '88px', p: (theme) => theme.spacing(2, 4), borderRadius: '24px 24px 0px 0px' }}>
            <Grid sx={{ height: '100%' }} container alignItems={"center"} justifyContent="space-between">
                <SearchField></SearchField>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton>
                        <Icon iconfy  width={20} height={20}  type={"ci:settings-filled"} color="#2C2E3D"></Icon>
                    </IconButton>
                    <IconButton>
                        <Badge color="error" variant="dot">
                            <Icon width={20} height={20} iconfy type={"ic:baseline-notifications"} color="#2C2E3D"></Icon>
                        </Badge>
                    </IconButton>
                    <ProfileChip avatar ={avatar1} />
                    <IconButton>
                        <Icon iconfy  width={32} height={32}  type={"fe:app-menu"} color="#2C2E3D"></Icon>
                    </IconButton>
                </Box>
            </Grid>

        </Box>
    )
})
