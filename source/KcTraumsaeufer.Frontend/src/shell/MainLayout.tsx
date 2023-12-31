import * as React from 'react';
import TopBar from "./AppBar.tsx";
import MainMenu from "./MainMenu.tsx";
import {useCallback} from "react";

export const MainLayout = () => {

    const [open, setOpen] = React.useState(false);
    const onToggleMenu = useCallback(() => {
        setOpen((open) => !open);
    }, [setOpen]);

    return (
        <div className={'container'}>
            <TopBar onToggleMenu={onToggleMenu}/>
            <MainMenu open={open} />

        </div>
    );
}