// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("About.html content loaded")

    // setTimeout(alert("Did you fall asleep?"),10000);

    getGithubReadMe().then(respo=>{
        console.log("Github readme fetched succesfully! It is now shown as part of the About-page")
        inputToHtmlElement('fromGithub',respo)
    }).catch(error =>{
        inputToHtmlElement('fromGithub','Failed to fetch Github readme :(')
    })
});


async function getGithubReadMe(){
    // fetch('https://raw.githubusercontent.com/JnsRdnp/deadlines/main/README.md')
    // .then(response => response.text())
    // .then(result => {
    //     console.log(result) // Log the fetched content
    // });  !!!This is here to remind me about the other way to do this

    try{
        const fetchedReadme = await fetch('https://raw.githubusercontent.com/JnsRdnp/deadlines/main/README.md')
        const readMeToText = await fetchedReadme.text()
        return readMeToText
    } catch(err){
        throw err
    }
}


async function inputToHtmlElement(elementid,text){ 
    const element = document.getElementById(elementid)
    element.innerHTML = text
}

