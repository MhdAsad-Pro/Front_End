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
