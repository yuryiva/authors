import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import photo from '../../assets/photo2.jpg';

export default function Banner() {
    return (
        <BannerContainer>
            <motion.h1 
                initial={{ 
                    opacity: 0, 
                    color: '#fff', 
                    fontSize: '3rem',
                    padding: '25px 15px',                    
                }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
            >
                Authors
            </motion.h1>

            <motion.h2
                initial={{ 
                    opacity: 0, 
                    color: '#fff', 
                    fontSize: '1.2rem',
                    padding: '25px 15px',
                    alignSelf: 'center'
                }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 3.5 }}
            >
                Join the movement and team up with authors of today
            </motion.h2>
        </BannerContainer>
    )
}

const BannerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    /* top: -100px;     */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${photo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

`

// const BannerImage = img