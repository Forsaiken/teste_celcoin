import React from 'react'
import { Avatar, Box, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material'
import styled from "@emotion/styled"
import { Icon } from 'components/Icon'

const Chip = styled(Box)(({ theme }) => ({
    background: 'rgba(47, 68, 134, 0.05)',
    borderRadius: 50,
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(0, 1)
}))

const Option = styled(MenuItem)(({ theme }) => ({
    minWidth: '150px',
    fontWeight: 700,
    fontSize: 12,
    padding: theme.spacing(1.5, 2)

}))

export const ProfileChip = React.memo(({ avatar, ...props }) => {

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClose = () => setAnchorEl(null)

    return (
        <>
            <Chip onClick={(e) => setAnchorEl(e.currentTarget)}>
                <Typography sx={{ marginRight: '10px', fontFamily: 'Open Sans', fontSize: '14px', padding: 0.5 }}>Olá, <Box component={'span'} sx={{ fontWeight: 700 }}>Vitor</Box></Typography>
                <Avatar src={avatar}></Avatar>
            </Chip>
            <Menu
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{ minWidth: '150px', padding: 0 }}
                PaperProps={{
                    sx: { boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.1)' }
                }}
                MenuListProps={{
                    sx: { padding: 0 }
                }}
            >
                <Option onClick={handleClose}>Minha conta</Option>
                <Divider style={{ margin: 0 }} />
                <Option onClick={handleClose}>Configurações</Option>
                <Divider style={{ margin: 0 }}  />
                <Option onClick={handleClose}>
                    <ListItemIcon>
                        <Icon iconfy type="gridicons:sign-out" width={14} height={14} color={"#EF0C35"} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ sx: { fontWeight: 700, fontSize: 12, } }}>Sair</ListItemText>
                </Option>
            </Menu>
        </>
    )
})