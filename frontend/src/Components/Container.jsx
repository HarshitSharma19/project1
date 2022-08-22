import React from 'react'

export default function Container(props) {
    return (
        <div style={{maxWidth:"1250px",margin:"auto"}}>
            {props.children}
        </div>
    )
}
