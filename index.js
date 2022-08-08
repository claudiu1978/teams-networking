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
  var teamsHTML = teams.map(getTeamHTML);

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
  var promotion = $("input[name=promotion]").value;
  var members = $("input[name=members]").value;
  var name = $("input[name=name]").value;
  var url = $("input[name=url]").value;
  var team = {
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
