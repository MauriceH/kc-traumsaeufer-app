import * as React from 'react';
import TopBar from "./AppBar.tsx";
import MainMenu from "./MainMenu.tsx";
import {useCallback} from "react";
import {BrowserRouter, Route, Routes, useNavigate, useNavigation} from "react-router-dom";
import {MainPage} from "../routes/mainPage/MainPage.tsx";
import {Team} from "../routes/mainPage/Team.tsx";
import {Penalties} from "../routes/mainPage/Penalties.tsx";

export const MainLayout = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const onToggleMenu = useCallback(() => {
        setOpen((open) => !open);
    }, [setOpen]);

    const onNavigate = useCallback((path: string) => {
        navigate(path);
        setOpen(false);
    },[]);

    return (
        <div className={'container'} style={{backgroundColor: 'black', minHeight: '100vh'}}>
            <TopBar onToggleMenu={onToggleMenu}/>
            <MainMenu open={open} navigate={onNavigate}/>

            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/team'} element={<Team/>}/>
                <Route path={'/penalties'} element={<Penalties/>}/>
            </Routes>
        </div>
    );
}