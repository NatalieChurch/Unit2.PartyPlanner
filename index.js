// Your friend is an event organizer and has asked you to build a website for them. They want to be able to keep track of all the parties they are organizing. They want to be able to see a list of all the parties, add new parties, and delete parties.


// A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.
// Next to each party in the list is a delete button. The user clicks the delete button for one of the parties. That party is then removed from the list.
// There is also a form that allows the user to enter information about a new party that they want to schedule. After filling out the form and submitting it, the user observes their party added to the list of parties.


// If you are stuck, try answering the following questions:

    // 1) Which components can be created directly in the HTML? Which components need to be created in JavaScript?
    // 2) Can you render mock data to the page?
    // 3) Can you render real data to the page?
    // 4) Are you able to fetch an array of all the parties from the API?
    // 5) Is state correctly updated to match the data from the API?
    // 6) Are you passing the correct arguments to fetch?
    // 7) Does the API return an error? If so, what is the error message?
    // 8) Is there an event listener on the form? Does it correctly add a new party to the list of parties?
    // 9) Is there an event listener attached to each delete button? Does it correctly remove a party from the list of parties?


// The URL to access a resource in the API is structured as follows:

    // The base URL is https://fsa-crud-2aa9294fe819.herokuapp.com/api.
    // The next segment is your cohort code. e.g. /2109-CPU-RM-WEB-PT
    // The last segment is based on the resource you want to access. e.g. /recipes
// For example, the URL for all recipes for the 2109 cohort would be:
    // https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/recipes



// STEPS
    // Link url
    // Add a state with an array of parties and an object of single party
    // Add HTML sections for All Parties, single party, add button, and delete button
    // Makes variables tied to each part of the HTML
// Showing All Parties
    // Fetch async function to retrieve all parties from the API 
    // Render function to show all parties with their information 
    // Call the render with state.parties or something similar 
// Showing a Single Party 
    // Fetch async function to retrieve a single party from the API 
    // Render function to show a single party with its information 
    // Call the render with state.party or something similar 
// Adding a Party 
    // async function to add a new party 
    // Input: name, date, time, location, description for party 
    // Add a click button (use document QS) to add a party 
// Deleting a Party 
    // async function to remove a party 
    // Add a click button (use document QS) to remove a party 
// Define init () and call it 



    // Link url
baseURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-FTB-ET-WEB-PT/events`;

    // Add a state with an array of parties and an object of single party
const state = {
    allParties: [],
    singleParty: {},
};

   // Makes variables tied to each part of the HTML
const all = document.querySelector('#all');
const single = document.querySelector('#single');
const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#remove');


// Showing All Parties
    // Fetch async function to retrieve all parties from the API 
const fetchAllParties = async () => {
    try {
        const res = await fetch(baseURL)
        const data = await res.json()
        console.log(data.data)

        state.allParties = data.data
        renderAllParties(state.allParties)
   
       // return (data.data.cohortId)
    } 
    catch (err) {
        console.error("Could not fetch parties...", err);
    }
};

    // Render function to show all parties with their information 
        // lines below may need to be changed based on data; may need to add # before id in button
const renderAllParties = (partyList) => {
    if(Array.isArray(partyList)){
        partyList.forEach((data) => {
            const card = document.createElement('section');
            card.classList.add('card');
            card.innerHTML = `
            <h1> ${data.name} </h1>
            <h2> ${data.date} </h2>
            <h2> ${data.time} </h2>
            <h2> ${data.location} </h2>
            <h3> ${data.description} </h3>

            <button id="remove" data-id="${data.id}"> Remove from list </button>`;
            
            all.appendChild(card);

           // console.log(document.querySelectorAll('#remove'))
            // Add a click button (use document QS) to remove a party 
        
        });
        document.querySelectorAll('#remove').forEach((button) => 
            // console.log("gothere")
             button.addEventListener('click', (e) => {
                 removeParty(e.currentTarget.getAttribute("data-id"))
             })
         );
    }
}

    // Call the render with state.parties or something similar 
        // Did this in fetchAllParties function 




// Adding a Party 
    // async function to add a new party 
            // const addParty = async () => {
            //     try {

            //     }
            //     catch (err) {
            //         console.error(`Could not add party.`, err)
            //     }
            // };

    // Input: name, date, time, location, description for party 
        // Put this inside button event or addParty function to trigger when button is clicked only?
// const partyName = prompt ("Enter the party name", 'Baja Blast')
// const partyDate = prompt ("Enter the party date and time", '2025-06-19T10:31:00.000Z')
// const partyLocation = prompt ("Enter the party location", 'Niagara Falls')
// const partyDescription = prompt ("Enter a party description", 'Having a blast!')
    

// adding a party without async function, is this fine? What does null and 2 mean (got from chatgpt)?
async function addParty() {
    try{
    const partyName = prompt ("Enter the party name", 'Baja Blast')
    const partyDate = prompt ("Enter the party date and time", '2025-06-19T10:31:00.000Z')
    const partyLocation = prompt ("Enter the party location", 'Niagara Falls')
    const partyDescription = prompt ("Enter a party description", 'Having a blast!')

    let newParty = {
        name: partyName,
        date: partyDate,
        location: partyLocation,
        description: partyDescription,
    };
    console.log(newParty)

    state.allParties.push(newParty);
    console.log(state.allParties);
    // document.getElementbyId('all').innerHTML = JSON.stringify(state.allParties, null, 2);
        const res = await fetch(baseURL, {
          method: "POST", 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newParty)
        })
        const data = await res.json()
    
      }
    
      catch(error){
        console.error(error)
      }

    }

    addButton.addEventListener('click', addParty);


    // Add a click button (use document QS) to add a party 
        // Add more to this
        // document.querySelector('.add') {
        //     button.addEventListener('click', (e) => {
        //         addParty(())
        //     })
        // };




// Deleting a Party 
   // async function to remove a party 
const removeParty = async (id) => {
    try {
        console.log(id)
       if (!id){
         return}
         await fetch(`${baseURL}/${id}`,{
             method: 'DELETE'
             })
    }
    catch (err){
        console.error(`Could not remove party.`, err)
    }
};

// function removeParty() {
//     state.allParties.pop(target);
//     console.log(allParties);
//     document.getElementbyId('all').innerHTML = JSON.stringify(state.allParties, null, 2);
// }





// Define init () and call it 
const init = async () => {
    const parties = await fetchAllParties();
    renderAllParties(parties);

    // renderNewPartyForm();
};

init ();