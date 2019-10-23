import React from 'react'
import ProfileForm from './ProfileForm';
import ProfileList from './ProfileList';
import { Link } from "react-router-dom";

function ProfilePage() {
    return (
        <div>
            <ProfileList />
            < ProfileForm/>
             "<Link to="/trips">Trips</Link>"
        </div>
    )
}

export default ProfilePage
