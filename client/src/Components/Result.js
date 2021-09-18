import axios from 'axios';
import MediaControlCard from './MediaControlCard';
import CardContent from '@mui/material/CardContent';
import React, { Component, useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function Results() {

    const [events, setEvents] = useState({});
    const [tracks, setTracks] = useState([]);
    const [loading, isAPILoading] = useState(true);

    console.log(tracks);
    console.log(events.artist);
    useEffect(() => {
        axios.get('http://localhost:5000/results')
            .then(function (response) {
                setEvents(response.data);
                setTracks(response.data.tracks);
                isAPILoading(false);
                console.log(response);

            }).catch(function (error) { console.log(error) })
    }, [])

    if (!loading) {
        return (
            <div>
                <CardMedia
                    component="img"
                    sx={ { width: 151 } }
                    image="/static/images/cards/live-from-space.jpg"
                    alt="Live from space album cover"
                />
                { tracks.map((track) => {
                    console.log("andlkasndkjsa dbfcpkjasdbasd fpkabs");
                    return <br><MediaControlCard track={ track.name } artist={ events.artist }></MediaControlCard></br>
                }) }
            </div>
        );
    }
    else {
        return (
            <div>
                Loading!
            </div>
        );
    }
};

export default Results;

