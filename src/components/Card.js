import styled from '@emotion/styled'
import { Paper } from '@mui/material'

export const Card = styled(Paper)(({ theme }) => ({
    boxShadow: '0px 8px 26px rgba(71, 87, 122, 0.08)',
    padding: theme.spacing(2),
    transition: 'all 300ms',
    '&:hover': { 
        boxShadow: '0px 8px 26px rgba(71, 87, 122, 0.3);'
    }
}))