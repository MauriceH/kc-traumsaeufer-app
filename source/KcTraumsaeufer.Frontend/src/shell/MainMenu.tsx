import React, {useCallback} from "react";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import * as Logo from '../assets/Logo.svg'

export interface MainMenuProps {
    open: boolean;
    navigate: (path: string) => void;
}

export default function MainMenu({open, navigate}:MainMenuProps) {

    const onTeam = useCallback(()=> {
        navigate('/team');
    },[]);
    const onHome = useCallback(()=> {
        navigate('/');
    },[]);

    return (
        <Drawer
            variant={'persistent'}
            open={open}
            className={'container mt-5'}
        >
            <div className={'grid justify-items-center'}>
               <img src={Logo.default} className={'w-40 basis-2 m-5'} alt={"Logo"}/>
            </div>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={onHome}>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={'Home'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={onTeam}>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={'Team'}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
            <List>
                {['Abmelden'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );

}

