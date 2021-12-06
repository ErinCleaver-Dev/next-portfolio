import React from 'react'
import { Box } from '@mui/material/'
import styled from 'styled-components'
import Link from 'next/link';


const NavBar = styled(Box)`
    background-color: black;
    display: flex;
    padding-left: 60px;
    a {
        color: white;
        text-decoration: none;
        padding: 10px;
        margin: 10px;
    };
    a:hover {
        font-weight: bold;
        background-color: darkgray;
    }
`

const index = () => {
    return (
        <NavBar>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/hireme">Hire me</Link>
        </NavBar>
    )
}

export default index
