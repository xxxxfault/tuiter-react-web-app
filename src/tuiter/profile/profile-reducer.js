import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Jiaqian',
    lastName: 'Xu',
    handle: '@Kiya',
    profilePicture: 'chacha.jpg',
    bannerPicture: 'banner.jpg',
    bio: 'Software Engineer',
    website: 'www.youtube.com',
    location: 'Boston, MA',
    dateOfBirth : '07/30/1998',
    dateJoined: '11/2022',
    followingCount: 340,
    followersCount: 223
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName.firstName;
            state.lastName = action.payload.lastName.lastName;
            state.bio = action.payload.bio.bio;
            state.dateOfBirth = action.payload.dateOfBirth.dateOfBirth;
            state.location = action.payload.location.location;
            state.website = action.payload.website.website;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;