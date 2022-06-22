import { AppBar, Typography } from '@mui/material';
import React, { Component } from 'react';

function Header() {
    return (
        <AppBar position="sticky" sx={{ px: 5, py: 2 }}>
            <Typography variant='brand'>brandless corporate</Typography>
        </AppBar>
    );
}

export default Header;