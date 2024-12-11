
function updateProfile(profileData) {
    const photo = document.getElementsByClassName('photo');
    if (photo) photo.src = profileData.photo;

    const name = document.getElementById('profile-name');
    if (name) name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    if (job) job.innerText = profileData.job;

    const location = document.getElementById('profile.location');
    if (location) location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    if (phone) {
        phone.innerText = profileData.phone;
        phone.href = `tel:${profileData.phone}`;
    }

    const email = document.getElementById('profile.email');
    if (email) {
        email.innerText = profileData.email;
        email.href = `mailto:${profileData.email}`;
    }
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile-skills-softskills');
    if (softSkills && profileData.skills && profileData.skills.softSkills) {
        softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
    }
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile-skills-hardskills');
    if (hardSkills && profileData.skills && profileData.skills.hardSkills) {
        hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}"></li>`).join('');
    }
}

function updateLenguages(profileData) {
    const lenguages = document.getElementById('profile.lenguages');
    if (lenguages && profileData.lenguages) {
        lenguages.innerHTML = profileData.lenguages.map(leng => `<li>${leng}</li>`).join('');
    }
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    if (portfolio && profileData.portfolio) {
        portfolio.innerHTML = profileData.portfolio.map(port => {
            return `
            <li>
              <h3 ${port.git ? 'class="github"' : ''}>${port.name}</h3>
              <a href="${port.url}" target="_blank">${port.url}</a>
            </li>
            `;
        }).join('');
    }
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.exp');
    if (experience && profileData.experience) {
        experience.innerHTML = profileData.experience.map(exp => {
            return `
            <li>
              <h3 class="title">${exp.name}</h3>
              <p class="period">${exp.period}</p>
              <p>${exp.description}</p>
            </li>
            `;
        }).join('');
    }
}

function updateEducation(profileData) {
    const achievs = document.getElementById('profile-education-achievs');
    if (achievs && profileData.education && profileData.education.achievs) {
        achievs.innerHTML = profileData.education.achievs.map(achiev => {
            return `<li><img src="${achiev.logo}" alt="${achiev.name}" title="${achiev.name}"></li>`;
        }).join('');
    }

    const educationMe = document.getElementById('profile-education-me');
    if (educationMe && profileData.education && profileData.education.me) {
        educationMe.innerHTML = profileData.education.me.map(item => `<li>${item}</li>`).join('');
    }
}

(async () => {
    const profileData = await fetchProfileData();
    if (profileData) {
        updateProfile(profileData);
        updateSoftSkills(profileData);
        updateHardSkills(profileData);
        updateLenguages(profileData);
        updatePortfolio(profileData);
        updateExperience(profileData);
        updateEducation(profileData);
    } else {
        console.error('Os dados do perfil não puderam ser carregados.');
    }
})();


