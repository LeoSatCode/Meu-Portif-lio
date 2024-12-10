function updateProfile(profileData) {
    const photo = document.getElementById('profile-photo')
    photo.src = profileData.photo
    
}

(async () => {
        const profileData = await fetchProfileDate()
        updateProfile(profileData)
  
})()
