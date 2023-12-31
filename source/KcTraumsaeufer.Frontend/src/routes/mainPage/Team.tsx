import React from "react";
import {Avatar, Card} from "@mui/material";
import Typography from "@mui/material/Typography";

export const Player = ({name}: { name: string }) => {
    return (
        <Card>
            <div className={'flex'}>
                <Avatar className={'m-5'}/>
                <div className={'flex mt-4'} style={{flexDirection: 'column', justifyContent: 'start'}}>
                    <Typography variant={'h6'} style={{textAlign: 'start'}}>
                        {name}
                    </Typography>
                    <Typography variant={'caption'}>
                        Durchschnitt: 4.5
                    </Typography>
                </div>

            </div>
        </Card>
    );
}

const players = ['Dario', 'Julien', 'Marcel', 'Maurice','Mopsi'];


export const Team = () => {
    return (
        <div>
            {players.map((player)=>{
                return <Player key={player} name={player}/>
            })}
        </div>
    );
}