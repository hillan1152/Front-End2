import React from 'react'

import NavBar from '../Navigation/NavBar';
import ProfileForm from './ProfileForm';
import ProfileList from './ProfileList';
import Footer from '../InfoPages/Footer';


function ProfilePage() {
    return (
        <div>
            <NavBar />
            <ProfileList />
            <ProfileForm/>
             <Footer />
        </div>
    )
}

export default ProfilePage
