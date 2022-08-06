function getTeamHTML(team) {
  return `
  <tr>
  <td>${team.promotion}</td>
  <td>${team.members}</td>
  <td>c${team.name}
    <td>
      <a href="${team.url}">openS</a>
      <td>x e</td>
  </td>
</tr>`;
}

function displayTeams(teams) {
  //  transform in html
  var teamsHTML = teams.map(getTeamHTML);

  document.querySelector("table tbody").innerHTML = teamsHTML.join("");
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
