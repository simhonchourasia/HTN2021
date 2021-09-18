import axios from 'axios';
import MediaControlCard from './MediaControlCard';
import React, { Component, useState, useEffect, useContext } from 'react';
import { TableRow } from '@mui/material';

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
                {tracks.map((track) => {
                    console.log("andlkasndkjsa dbfcpkjasdbasd fpkabs");
                    return <MediaControlCard track = {track.name} artist = {events.artist}></MediaControlCard>
                })}
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

