// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("About.html content loaded")
    getGithubReadMe()
});


async function getGithubReadMe(){
    // fetch('https://raw.githubusercontent.com/JnsRdnp/deadlines/main/README.md')
    // .then(response => response.text())
    // .then(result => {
    //     console.log(result) // Log the fetched content
    // });  
    try{
        const fetchedReadme = await fetch('https://raw.githubusercontent.com/JnsRdnp/deadlines/main/README.md')
        const readMeToText = await fetchedReadme.text()
        console.log(readMeToText)
    } catch(err){
        console.log(err)
    }


}