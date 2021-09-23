fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.overall_rating);
    const final_star_rate = document.getElementById("final-star-rate");
    const finalRate = document.getElementById("final-rate");
    finalRate.innerText = data.overall_rating;
    final_star_rate.setAttribute("style", `--rating: ${data.overall_rating};`);
    const list = document.getElementById("ratings");
    data.review_data.map((value) => {
      const starDiv = document.createElement("div");
      starDiv.className = "Stars";
      starDiv.setAttribute("style", `--rating: ${value.rating};`);
      list.appendChild(starDiv);
      list.innerHTML +=
        "<span>" +
        "<strong>" +
        value.rating +
        "</strong>" +
        ", " +
        value.review +
        "</span>" +
        "<br />";
    });
  });
