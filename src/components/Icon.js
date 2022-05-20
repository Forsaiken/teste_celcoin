import React from 'react'
import { Icon as IIcon } from '@iconify/react'


const MaterialIcon = ({ type, ...parameters }) => {

        return <IIcon icon={type} {...parameters} />

}

export function Icon(props) {

    return (<MaterialIcon {...props}></MaterialIcon>)

}
