import { Box, Grid, Tab, Tabs } from '@mui/material'
import React from 'react'
import { NavBar } from './appbar/NavBar'
import artboard from '../content/artboard.png'
import { Icon } from './Icon'
import styled from '@emotion/styled'

import tabIndicator from '../content/tabIndicator.svg'
import logo1 from '../content/logo1.png'
import logo2 from '../content/logo2.png'
import { useNavigate } from 'react-router-dom'

const CustomTabs = styled(Tabs)({
    maxWidth: 248,
    // borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        zIndex: 1,
        backgroundImage: `url(${tabIndicator})`,
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%'
    },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    maxWidth: 248,
    height: 104,
    justifyContent: 'flex-start',
    color: 'white',
    fontSize: '16px',
    fontWeight: 500,
    zIndex: 10,
    textTransform: 'none',
    transition: 'color 500ms',
    '&:not(:first-child)': {
        marginTop: -40,
    },
    '&.Mui-selected': {
        color: 'black',
        fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-disabled': {
        color: 'rgba(255,255,255,0.5)'
    },
    '& > .MuiTab-iconWrapper': {
        marginRight: '16px'
    }
}));

export const Layout = React.memo(({ children }) => {

    const [value, setValue] = React.useState(window.location.pathname.includes('pacientes') ? 1 : 0 );

    const navigate = useNavigate()

    const handleChange = (e, newValue) => {
        if (newValue === 1) { 
            navigate('/pacientes')
        } else {
            navigate('/')
        }
        setValue(newValue);
    };

    return (
        <Box sx={{ minHeight: '100vh', overflow: 'hidden', maxHeight: '100vh', padding: `40px`, backgroundImage: `url(${artboard}), linear-gradient(140deg, rgba(16,66,221,1) 0%, rgba(37,177,169,1) 100%)`, backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
            <Grid container wrap="nowrap" alignItems="center">
                <Grid item sx={{ width: 248 }}>
                    <Grid sx={{ padding: 2, mt: 1.5 }} container justifyContent="center" alignItems="center">
                        <img src={logo1} alt='' style={{ marginRight: 16 }} />
                        <img src={logo2} alt='' />
                    </Grid>
                    <Grid container justifyContent="center">
                        <Box sx={{backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '1px', width: '85%', mt: 2 }} />
                    </Grid>
                </Grid>
                <Grid item xs>
                    <NavBar></NavBar>
                </Grid>
            </Grid>
            <Grid container wrap="nowrap">
                <Grid item sx={{ width: 248 }}>
                    <CustomTabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                    >
                        <CustomTab icon={<Icon iconfy type="ant-design:home-outlined" width={16} height={16}></Icon>} iconPosition="start" label="Dashboard"></CustomTab>
                        <CustomTab icon={<Icon iconfy type="bi:person-video2" width={16} height={16}></Icon>} iconPosition="start" label="Pacientes"></CustomTab>
                        <CustomTab disabled icon={<Icon iconfy type="bx:test-tube" width={16} height={16}></Icon>} iconPosition="start" label="Testes"></CustomTab>
                        <CustomTab disabled icon={<Icon iconfy type="ci:settings" width={16} height={16}></Icon>} iconPosition="start" label="Configuração"></CustomTab>
                    </CustomTabs>

                </Grid>
                <Grid item xs zeroMinWidth>
                    <Box sx={{
                        background: '#EFF2F9', minHeight: '83vh', maxHeight: '83vh', overflowY: 'scroll', overflowX: 'hidden', padding: 4, borderRadius: '0px 0px 24px 24px', '&::-webkit-scrollbar': {
                            width: '0 !important'
                        }
                    }}>
                        {children}
                    </Box>

                </Grid>
            </Grid>
        </Box>

    )
})