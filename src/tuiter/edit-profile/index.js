import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../profile/profile-reducer";

const EditProfileComponent = () => {
    const profile = useSelector( state => state.profile );
    const [firstName, setFirstName] = useState({firstName: profile.firstName});
    const [lastName, setLastName] = useState({lastName: profile.lastName});
    const [bio, setBio] = useState({bio: profile.bio});
    const [location, setLocation] = useState({location: profile.location});
    const [website, setWebsite] = useState({website: profile.website});
    const [dateOfBirth, setDateOfBirth] = useState({dateOfBirth: profile.dateOfBirth});
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const profileUpdateHandler = (firstName, lastName, bio, location, website, dateOfBirth) => {
        const newProfile = {
            firstName: firstName,
            lastName:lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth,
        }
        dispatch(updateProfile(newProfile));
        navigate('/tuiter/profile');
    }

    return (
        <>
            <div className="position-relative">
                <div className="row  mb-2">
                    <a className="col col-2 mt-2" href="/tuiter/profile"><i className="bi bi-x-lg fs-4 fw-bold"></i></a>
                    <div className="col col-8 mt-2"><span className="fs-4 fw-bold">Edit Profile</span></div>
                    <button className="col col-2 btn btn-dark float-end fw-bold rounded-pill"
                            onClick={() => profileUpdateHandler(firstName, lastName, bio, location, website, dateOfBirth)}>
                        Save</button>
                </div>
                <img src={profile.bannerPicture} width="100%" height={150}  />

                    <div className="col col-8">
                        <img className="position-absolute float-start rounded-circle bottom-0 start-0 ms-4"
                             height="100px" src={profile.profilePicture} alt="profile picture"/>
                    <div className="col col-4 mb-6"><br/></div>
                </div>
            </div>
            <div className="mt-3 form-group">
                <label htmlFor="firstname">First Name</label><br/>
                <input type="text" id="firstname" className="form-control"
                       onChange={(e)=>{setFirstName({firstName: e.target.value})}}
                       value={firstName.firstName}/><br/>

                <label htmlFor="lastname">Last Name</label><br/>
                <input type="text" id="lastname" className="form-control"
                       onChange={(e)=>{setLastName({lastName: e.target.value})}}
                       value={lastName.lastName}/><br/>

                <label htmlFor="inputBio">Bio</label><br/>
                <input type="text" className="form-control"
                          onChange={(e)=>{setBio({bio: e.target.value})}}
                          value={bio.bio} id="inputBio"/><br/>

                <label htmlFor="inputLocation">Location</label><br/>
                <input type="text" id="inputLocation" className="form-control"
                       onChange={(e)=>{setLocation({location: e.target.value})}}
                       value={location.location}/><br/>

                <label htmlFor="inputWebsite">Website</label><br/>
                <input type="text" id="inputWebsite" className="form-control"
                       onChange={(e)=>{setWebsite({website: e.target.value})}}
                       value={website.website}/><br/>

                <label htmlFor="inputDOB">Date of Birth</label><br/>
                <input type="date" id="inputDOB" className="form-control"
                       onChange={(e)=>{setDateOfBirth({dateOfBirth: e.target.value})}}
                       value={dateOfBirth.dateOfBirth}/>
            </div>
        </>
    )
}

export default EditProfileComponent;