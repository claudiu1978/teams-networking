function getTeamHTML(team) {
  return `
  <tr>
    <td>${team.promotion}</td>
    <td>${team.members}</td>
    <td>${team.name}</td>
    <td>
      <a href="${team.url}">open</a>
    </td>
    <td>x e</td>
  </td>
  </tr>`;
}

function displayTeams(teams) {
  //  transform in html
  const teamsHTML = teams.map(getTeamHTML);

  $("table tbody").innerHTML = teamsHTML.join("");
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
function $(selector) {
  return $(selector);
}
function submitForm(e) {
  e.preventDefault();
  const promotion = $("input[name=promotion]").value;
  const members = $("input[name=members]").value;
  const name = $("input[name=name]").value;
  const url = $("input[name=url]").value;
  const team = {
    promotion: promotion,
    members: members,
    name: name,
    url: url,
  };

  console.warn("submit", JSON.stringify(team));
}
function initEvents() {
  var form = document.getElementById("editForm");
  form.addEventListener("submit", submitForm);
}
loadTeams();
initEvents();
