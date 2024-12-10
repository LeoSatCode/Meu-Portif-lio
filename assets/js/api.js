

async function fetchProfileDate() {
    const url = 'https://raw.githubusercontent.com/LeoSatCode/Meu-Portif-lio/refs/heads/main/data/profile.json?token=GHSAT0AAAAAAC2VKTZNFNI5IWGZ2USTSKYAZ2YOK3A'
    const fetching = await fetch(url)
    return await fetching.json()
}
