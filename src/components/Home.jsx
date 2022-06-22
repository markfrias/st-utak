import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Header from './Header';

function Home() {
    return (
        <div>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: 5, mt: 4 }}>
                <Typography variant='h1'>Menu items</Typography>
                <Button variant='contained' color='secondary'>Create item</Button>
            </Box>
        </div>

    );
}

export default Home;