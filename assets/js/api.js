

async function fetchProfileDate() {
    const url = 'https://raw.githubusercontent.com/LeoSatCode/Meu-Portif-lio/refs/heads/main/data/profile.json?token=GHSAT0AAAAAAC2VKTZNBNDYVFDSI6Z77YFCZ2YNTVA'
    const fetching = await fetch(url)
    return await fetching.json()
}