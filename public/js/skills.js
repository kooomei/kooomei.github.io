var skills = [
  {icon: "fa-solid fa-leaf", desc: "Growth Mentality"},
  {icon: "fa-solid fa-mobile", desc: "Tech Savvy"},
  {icon: "fa-solid fa-file", desc: "Document Writing"},
  {icon: "fa-solid fa-bullseye", desc: "Focused"},
  {icon: "fa-solid fa-book-open", desc: "Fast Learner"},
  {icon: "fa-solid fa-globe", desc: "Social Media"},
  {icon: "fa-solid fa-person-running", desc: "Proactive"},
  {icon: "fa-solid fa-eye", desc: "Detail-Oriented"},
  {icon: "fa-solid fa-images", desc: "Presentations"},
]

window.addEventListener("load", function() {
  var skillsContainter = document.getElementById("skills-container");
  for (var skill of skills) {
    skillsContainter.insertAdjacentHTML('beforeend', `<div class="col-md-1 mb-2 text-center"><i class="${skill.icon}"></i></div><div class="col-md-3">${skill.desc}</div>`);
  }
});