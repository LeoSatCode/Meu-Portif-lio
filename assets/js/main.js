
function updateProfile(profileData) {
    const photo = document.getElementsByClassName('photo')
    photo.src = profileData.photo

    const name = document.getElementById('profile-name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.phone}`


}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile-skills-softskills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile-skills-hardskills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}"></li>`).join('')
}

function updateLenguages(profileData) {
    const lenguages = document.getElementById('profile.lenguages')
    lenguages.innerHTML = profileData.lenguages.map(leng => `<li>${leng}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(port => {
        return `
        <li>
          <h3 ${port.git ? 'class="github"' : ''}>${port.name}</h3>
          <a href="${port.url}" target="_blank">${port.url}</a>
        </li>
        `
    }).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.exp')

    experience.innerHTML = profileData.experience.map(exp => {
        return `
        
          <li>
              <h3 class="title">${exp.name}</h3>
                  <p class="period">${exp.period}</p>
                  <p>
                     ${exp.description}
                    </p>
                </li>
                
                        `
    }).join('')


}

(async () => {
    const profileData = await fetchProfileData()
    updateProfile(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLenguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)

})()
