/**
 * API Application Programming Interface
 * Allow Applications to communicate with each other
 * Client --{API}--Server
 * API end points link to different set of data on the server
 * fetch method is async and part of the browser, not JS
 * starts the process of retreiving a resource.
 * fetch returns a promise for the data you requested. When the promise is fulfulled
 * the return is changed to the resource you requested.
 * a promise can be PENDING, FULFILLED, REJECTED.
 */
const apiURL = 'https://api.spacexdata.com/v3';


const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);


function fetchSpace(event){
    event.preventDefault()
    fetch(`${apiURL}/rockets`)
        .then(response => response.json())
        .then(json => displayRockets(json))
    }

function displayRockets(data) {
    console.log('DisplayRockets Function', data)
    data.forEach(rocket => {
        let rocketName = document.createElement('li');
        rocketName.innerHTML = rocket.rocket_name;
        spaceShips.appendChild(rocketName);

        let rocketDetails = document.createElement('ul');
        rocketDetails.setAttribute('id', 'details')
        // rocketName.innerHTML = rocketDetails;
        let rocketLaunchData = document.createElement('li');
        let rocketMassData = document.createElement('li');
        let rocketImage = document.createElement('img')
        let firstLaunch = 'First Launched on '+ rocket.first_flight;
        let mass = 'This rocket weighs '+ rocket.mass.kg + 'kg';
        let image = rocket.flickr_images[1]
        rocketLaunchData.innerHTML = firstLaunch;
        rocketMassData.innerHTML = mass
        rocketImage.src = image
        rocketDetails.appendChild(rocketLaunchData)
        rocketDetails.appendChild(rocketMassData)
        rocketDetails.appendChild(rocketImage)
        rocketName.appendChild(rocketDetails);
    });
}

