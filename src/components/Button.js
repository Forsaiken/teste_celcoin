import styled from '@emotion/styled'
import { ButtonBase } from '@mui/material'

export const Button = styled(ButtonBase)(({ theme }) => ({
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: 10,
    lineHeight: '14px',
    color: 'white',
    height: 24,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    padding: theme.spacing(1,2),
    borderRadius: 20,
    background: 'linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%)'
}))