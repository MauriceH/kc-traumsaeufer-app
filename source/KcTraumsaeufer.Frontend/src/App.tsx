import * as React from 'react';
import './App.css'
import {MainLayout} from "./shell/MainLayout.tsx";
import {createTheme, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => (
    <>
        <ThemeProvider theme={darkTheme}>
            <MainLayout/>
        </ThemeProvider>
    </>
);

export default App
