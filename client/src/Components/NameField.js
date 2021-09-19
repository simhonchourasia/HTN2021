import React from "react";
import { Paper, InputBase, IconButton, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "@emotion/react";
import Check from "@mui/icons-material/Check"

function NameField() {
    const theme = useTheme;
    return(
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', width: '50%', marginBottom: 5}}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter album name"
                inputProps={{ 'aria-label': 'album' }}
            />
            <Divider
                orientation="vertical"
                flexItem
            />
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter artist name"
                inputProps={{ 'aria-label': 'artist' }}
            />
            <IconButton
                type="submit"
                sx={{p: '10px', color: 'green'}}
            >
                <Check />
            </IconButton>

        </Paper>
    )
}

export default NameField