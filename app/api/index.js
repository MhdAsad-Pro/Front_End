async function fetchEmployeeReviews(id, onSuccess, onError) {
  try {
    const response = await fetch(
      `https://my-json-server.typicode.com/H-del/dummy-database/users/${id}/kpi_reviews`,
    );

    const jsonResponse = await response.json();
    onSuccess(jsonResponse);
  } catch (err) {
    // if some error occurs
    console.log('some error');
  }
}

export { fetchEmployeeReviews };

// HR-Dashboard summary


async function fetchHRDasboard(onSuccess, onError) {
  try {
    const response = await fetch(
      `https://my-json-server.typicode.com/H-del/dummy-database/HR-Summary`,
    );

    const jsonResponse = await response.json();
    onSuccess(jsonResponse);
  } catch (err) {
    // if some error occurs
    console.log('some error');
  }
}

export { fetchHRDasboard };


//HR-TEAM summary


async function fetchHRTeam(id, onSuccess, onError) {
  try {
    const response = await fetch(
      `https://my-json-server.typicode.com/H-del/dummy-database/Team/${id}`,
    );
    const jsonResponse = await response.json();
    onSuccess(jsonResponse);
  } catch (err) {
    // if some error occurs
    console.log('some error',err);
  }
}
export { fetchHRTeam };


//HR-depart Summary
async function fetchDepart(id, onSuccess, onError) {
  try {
    const response = await fetch(
      `https://my-json-server.typicode.com/H-del/dummy-database/Depart/${id}`,
    );
    const jsonResponse = await response.json();
    onSuccess(jsonResponse);
  } catch (err) {
    // if some error occurs
    console.log('some error');
  }
}

export { fetchDepart};

// Add employee post API
async function fetchAddEmployee(onSuccess,onError){
  try{
    const response= await fetch (
      `https://jsonplaceholder.typicode.com/users/`
    );
    const jsonResponse = await response.json();
    onSuccess(jsonResponse);
  } 
  catch(err){
    console.log('some error')
  }
}
export {fetchAddEmployee};








