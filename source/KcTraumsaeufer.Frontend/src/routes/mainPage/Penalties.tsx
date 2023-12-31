import React from "react";
import {Avatar, Card} from "@mui/material";
import Typography from "@mui/material/Typography";

export const Player = ({name}: { name: string }) => {
    return (
        <Card style={{flexBasis:'180px'}}>
            <div className={'flex'} style={{alignItems: 'center'}}>
                <Avatar className={'m-5'}/>
                <Typography variant={'h6'} style={{textAlign: 'start'}}>
                    {name}
                </Typography>
            </div>
        </Card>
    );
}

const players = ['Dario', 'Julien', 'Marcel', 'Maurice','Mopsi','Dan'];


export const Penalties = () => {
    return (
        <div style={{display: 'flex 1 1 auto', flexDirection: 'row', flexWrap:"wrap", gap:'5px' }}>
            {players.map((player)=>{
                return <Player key={player} name={player}/>
            })}
        </div>
    );
}