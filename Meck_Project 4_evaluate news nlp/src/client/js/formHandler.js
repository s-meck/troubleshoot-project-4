async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userURL = document.getElementById('name').value
    Client.checkForName(userURL)

    console.log("::: Form Submitted :::")

    postData('/toPost', userURL)
    // .then (updateUI(res));
}

// Function to send post request to server with submitted URL from users
const postData = async (url = '', newURL)=>{
    // console.log(urlTwo);
        const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(newURL), 
    });

        try {
            const newInfo = await response.json();
            const newInfoText = newInfo.text;
            console.log("So it returns" + newInfo);
        // const newData = await response.json();
        // console.log(newData);
        // return newData;
        }
        catch(error) {
        console.log("error", error);
        };
    };

// async function updateUI(input){
//     console.log(input);
// }

export { handleSubmit }


// fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })