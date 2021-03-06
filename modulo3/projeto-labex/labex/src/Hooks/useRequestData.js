import axios from "axios";
import { useEffect, useState } from "react";

export function useRequestData() {
    const [allTrips, setAllTrips] = useState([])
    const token = localStorage.getItem('token')
    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/christopher-silva-carver/trips', {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setAllTrips(res.data.trips)
            })
            .catch((err) => {
            })
    };
    useEffect(() => {
        getTrips()
    }, [])
    return allTrips;
}