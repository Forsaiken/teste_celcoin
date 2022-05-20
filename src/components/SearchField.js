import React from 'react'
import { Icon } from 'components'
import styled from '@emotion/styled'

const InputWrapper = styled('div')(({ theme }) => ({
    width: 400,
    display: 'flex',
    color: 'black',
    alignItems: 'center',
    padding: '10px 12.5px',
    borderRadius: 4,
    background: '#F5F5F5',
    '& > svg': {
        marginRight: theme.spacing(1)
    },
}))

const Input = styled('input')((theme) => ({
    fontFamily: 'Open Sans',
    fontSize: '14px',
    fontWeight: 600,
    width: 400,
    border: 'none',
    background: 'transparent',
    outline: 0,
    '&:focus': {
        background: 'transparent',
        color: 'black',
        border: 0,
        outline: 0
    },
}))

export const SearchField = React.memo(({ placeholder, ...parameters }) => {

    return (
        <InputWrapper {...parameters}>
            <Icon iconfy type="ant-design:search-outlined" color="#787686" width={16} height={16} />
            {/* <Typography>{`Buscar`}</Typography> */}
            <Input placeholder={placeholder || "Buscar..."}></Input>
        </InputWrapper>
    )

})