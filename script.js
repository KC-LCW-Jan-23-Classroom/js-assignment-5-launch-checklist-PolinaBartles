// Write your JavaScript code here!

//const{ myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
    const form = document.querySelector("#launchForm form");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    
    //const submitButton = document.getElementById("formSubmit");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const pilot = document.querySelector("#pilotName").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let randomPlanet = pickPlanet(listedPlanets);
      console.log(randomPlanet);
      addDestinationInfo(
        document,
        randomPlanet.name,
        randomPlanet.diameter,
        randomPlanet.star,
        randomPlanet.distance,
        randomPlanet.moons,
        randomPlanet.image
      );
    });
});
