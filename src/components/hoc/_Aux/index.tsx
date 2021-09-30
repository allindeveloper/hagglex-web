import React from 'react'
import { ReactNode } from 'react';
import { FC } from 'react';

interface AuxProps {
    children?: ReactNode,
}
const Aux: FC<AuxProps> = ({ children}:AuxProps) => {
     return (
        <div>
            {children}
        </div>
    )
}
export default Aux;