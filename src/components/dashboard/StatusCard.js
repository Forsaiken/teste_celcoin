import React from 'react'
import { Icon } from 'components'
import { Box, Grid, Popover, Typography } from '@mui/material'
import { Card } from 'components/Card'

export const StatusCard = React.memo(({ label, value, icon, subIcon, iconColor, gain, subInfo, ...props }) => {

    const [hover, setHover] = React.useState(false)

    return (
        <Box sx={{ position: 'relative'}} {...props}>
            <Card sx={{ zIndex: 4, position: 'relative' }} onMouseEnter={(e) => setHover(e.currentTarget)} onMouseLeave={() => setHover(null)}>
                <Grid sx={{ mb: 2 }} container justifyContent={"space-between"}>
                    <Icon iconfy type={icon} width={34} height={34} color={iconColor}></Icon>
                    {gain && <Box sx={{ backgroundColor: gain > 0 ? '#1CBF84' : '#EF0C35', borderRadius: '20px', display: 'flex', alignItems: 'center', p: (theme) => theme.spacing(0, 2) }}>
                        <Typography sx={{
                            color: 'white',
                            fontSize: 10,
                            fontWeight: 700,
                        }}>{`${gain >= 0 ? '+' : ''}${gain}%`}</Typography>
                    </Box>}
                </Grid>
                <Typography variant="highlight">{value}</Typography>
                <Typography variant="subtitle2">{label}</Typography>
            </Card>
            <Card sx={{ width: '80%', height: '100%', position: 'absolute', top: 8, right: 16 }} />
            { subInfo && <Popover
                sx={{
                    pointerEvents: 'none',
                }}
                open={Boolean(hover)}
                anchorEl={hover}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={() => setHover(null)}
                disableRestoreFocus
                PaperProps={{ style: {
                    padding: 16,
                    minWidth: 200,
                    transformOrigin: '100% 50%',
                    transform: 'translateY(-40%)'
                }}}
            >
                <Typography sx={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>{subInfo.label}</Typography>
                <Typography sx={{ fontWeight: 700, color: gain > 0 ? '#1CBF84' : '#EF0C35' }}>{subInfo.value}</Typography>
                
            </Popover> }
        </Box>
    )

})
