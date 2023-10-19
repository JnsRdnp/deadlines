



// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("About.html content loaded")

    getGithubReadMe().then(respo=>{
        console.log("Github readme fetched succesfully! It is now shown as part of the About-page")
        inputToHtmlElement('fromGithub',respo)
    }).catch(error =>{
        inputToHtmlElement('fromGithub','Failed to fetch Github readme :(')
    })

    //10 minute timer to fill the timer requirement
    alerttimer()
});


async function getGithubReadMe(){
    // fetch('https://raw.githubusercontent.com/JnsRdnp/deadlines/main/README.md')
    // .then(response => response.text())
    // .then(result => {
    //     console.log(result) // Log the fetched content
    // });  
    //!!!This is here to remind me about the other way to do this

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


//10 minute timer to fill the timer requirement
const timeoutTime = 60000; // 1 minute
let timerTimeout

function alerttimer() {
    clearTimeout(timerTimeout)
    timerTimeout = setTimeout(doOnTimeout, timeoutTime)
}
function doOnTimeout(){
    alert("1 minute has passed since you opened the about page!")
}