import React from 'react'

type Props = {
    children: React.ReactNode
}

const HText = ({ children }: Props) => {
    return (
        <h1 className="text-4xl font-bold ">
            {children}
        </h1>
    )
}

export default HText