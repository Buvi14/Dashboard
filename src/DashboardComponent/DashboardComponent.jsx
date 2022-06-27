import React, { useState, useEffect } from 'react'
import ShowPhotosComponent from './ShowPhotosComponent';
import axios from 'axios';
import UserComponent from './UserComponent';
import './DashboardComponent.css';

export default function DashboardComponent({ username }) {
    const [user, setUser] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [view, setView] = useState(0);
    // With the help of Async and Await to hsndle API calls
    useEffect(() => {
        const fetchData = async () => {
            try {
                let userData = await axios.get(`https://jsonplaceholder.typicode.com/users`)
                let photoData = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
                setUser(userData.data);
                setPhotos(photoData.data.slice(0, 1000));
            }
            catch (error) {
                console.log(error);
            }

        }
        fetchData();
    }, [])
    const renderView = (val) => {
        setView(val);
    }
    return (
        <div className='container-fluid dashboard-view'>
            <h1 className='text-center'>Welcome {username}</h1>
            <div className="row">
                <div className="col-md-2 border d-flex flex-column gap-2">
                    <button className="btn btn-primary col-12" type="button" onClick={e => renderView(2)}>Users</button>
                    <button className="btn btn-primary col-12" type="button" onClick={e => renderView(1)}>Photos</button>
                </div>
                <div className="col-md-10 border">
                    {view === 1 ? <ShowPhotosComponent photos={photos} count={10} /> : ''}
                    {view === 2 ? <UserComponent user={user} /> : ''}
                </div>
            </div>
        </div>
    )
}
