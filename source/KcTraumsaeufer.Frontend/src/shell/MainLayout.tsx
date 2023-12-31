import ButtonAppBar from "./AppBar.tsx";
import {makeStyles, Theme} from "@mui/material";

const styles = makeStyles((theme:Theme)=>({
    root: {
        flexGrow: 1,
    },
}));


export const MainLayout = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <ButtonAppBar />
        </div>
    );
}