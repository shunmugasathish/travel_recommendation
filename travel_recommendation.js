async function search() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const response = await fetch("travel_recommendation_api.json");
    const data = await response.json();
    let results = [];
  
    if (keyword.includes("beach")) {
      results = data.beaches;
    } else if (keyword.includes("temple")) {
      results = data.temples;
    } else if (keyword.includes("country")) {
      results = data.countries;
    }
  
    displayResults(results);
  }
  
  function displayResults(results) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    if (results.length === 0) {
      resultsDiv.innerHTML = "<p>No results found.</p>";
      return;
    }
  
    results.forEach(place => {
      const card = document.createElement("div");
      card.className = "result-card";
      card.innerHTML = `
        <img src="${place.imageUrl}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
      `;
      resultsDiv.appendChild(card);
    });
  }
  
  function clearResults() {
    document.getElementById("searchInput").value = "";
    document.getElementById("results").innerHTML = "";
  }
  