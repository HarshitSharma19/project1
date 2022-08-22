import React from 'react'

export default function Container(props) {
    return (
        <div style={{maxWidth:"1600px",margin:"auto"}}>
            {props.children}
        </div>
    )
}
