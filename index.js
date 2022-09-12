function getTeamHTML(team) {
  return `
  <tr>
    <td>${team.promotion}</td>
    <td>${team.members}</td>
    <td>${team.name}</td>
    <td>
      <a href="${team.url}">open</a>
    </td>
    <td>
    <a href="#" data-id =${team.id} class="delete-btn">open</a>✖
  </td>
  </tr>`;
}

function displayTeams(teams) {
  //  transform in html
  const teamsHTML = teams.map(getTeamHTML);

  $("table tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  fetch("http://localhost:3000/teams-json")
    .then((r) => r.json())

    .then(function (teams) {
      console.warn("teams", teams);
      displayTeams(teams);
    });
}
function $(selector) {
  return document.querySelector(selector);
}
function createTeamRequest(team) {
  return fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(team),
  });
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

  createTeamRequest(team)
    .then((r) => r.json())
    .then((status) => {
      console.warn("status", status);
      if (status.success) {
        location.reload();
      }
    });
}
function initEvents() {
  var form = document.getElementById("editForm");
  form.addEventListener("submit", submitForm);
  form.querySelector("tbody").addEventListener("click", (e) => {
  console.warn("click", e.target)
  if (e.target.matches("a.delete-btn")){
    const id=e.getAttribute("data-id")
   console.warn('click pe link', id)
  }
})
loadTeams();
initEvents();
