function displayTeams(teams) {
  console.warn("display", teams);
  var teamsHTML = "";
  teams.forEach(function (team) {
    teamsHTML += ` <tr>
    <td>${team.promotion}</td>
    <td>${team.members}</td>
    <td>c${team.name}
      <td>
        <a href="${team.url}">claudiu</a>
        <td>x e</td>
    </td>
  </tr>`;
  });

  document.querySelector("table tbody").innerHTML = teamsHTML;
}

function loadTeams() {
  fetch("data/teams.json")
    .then(function (r) {
      // console.info(r);
      return r.json();
    })
    .then(function (teams) {
      console.warn("teams", teams);
      displayTeams(teams);
    });
}
loadTeams();
