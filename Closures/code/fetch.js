function fetchUrl(url) {
    //URL available in this function due to closure
    fetch(url).then(() => {
        console.log(url)
    })
}

fetchUrl('someapi.com')