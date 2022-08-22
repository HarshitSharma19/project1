import React from 'react'

export default function Container(props) {
    return (
        <div className='max-w-[1280px] mx-auto'>
            {props.children}
        </div>
    )
}
