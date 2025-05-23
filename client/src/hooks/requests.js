const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
  console.log("inside get planets")
  const response = await fetch(`${API_URL}/planets`);
  return response.json(); 
  // TODO: Once API is ready.
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launch`);
  const fetchedLaunches = await response.json();
  console.log(fetchedLaunches);
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${API_URL}/launch`,{
      method : "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch)

    });
  }catch(err){
    return {
      ok: false
    }
  }
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  try {
    console.log("inside delete")
    return fetch(`${API_URL}/launch/${id}`, {
      method: "delete"
    })
  } catch (error) {
    return {
      ok: false
    }
  }
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};