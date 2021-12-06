import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import { Box } from '@mui/material/'
import styled from 'styled-components'
import Head from 'next/head';
import Router from 'next/router';

const Body = styled(Box) `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const index = ({children, title}) => {
    return (
        <>
            <head>
                <title>{title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <Navbar/>
            <Body>
                <h1>{title}</h1>
                {children}
                <Footer/>
            </Body>
            <style jsx>{`
             * {
                padding: 0px;
                margin: 0px;
                margin-block-start: 0px;
                margin-block-end: 0px;
            }
            `}</style>
        </>
    )
}

export default index
