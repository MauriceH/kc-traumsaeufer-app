import * as React from 'react';
import './App.css'
import {MainLayout} from "./shell/MainLayout.tsx";
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => (
    <>
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <MainLayout/>
            </BrowserRouter>
        </ThemeProvider>
    </>
);

export default App
