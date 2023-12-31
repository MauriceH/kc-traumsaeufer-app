import React from "react";
import Box from "@mui/material/Box";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer
} from "@mui/material";
import * as Logo from '../assets/Logo.svg'


export default function MainMenu({open}:{open:boolean}) {

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
                {['Kegeltag','Strafenkatalog','Team'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
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

