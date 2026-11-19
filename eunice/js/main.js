// ===== Menu mobile =====
var menuBtn = document.getElementById("menu-btn");
menuBtn.onclick = function () {
  document.getElementById("menu").classList.toggle("open");
};

// ===== Testemunhos (só existe na Home) =====
var testimonials = [
  { name: "Mafalda Silva", role: "Student", inst: "Polytechnic University of Viseu",
    quote: "Competing in the EUNICE Alliance Games was unforgettable. It taught me the true value of teamwork, friendship, and international sportsmanship." },
  { name: "Camille Lauren", role: "Engineering Student", inst: "Université Polytechnique Hauts-de-France",
    quote: "The EUNICE Alliance Games in Valenciennes were unforgettable, showing me the power of teamwork and intercultural exchange." },
  { name: "Prof. Eero Heikkinen", role: "Assistant Professor", inst: "University of Vaasa",
    quote: "EUNICE Volunteering Camps offer unique hands-on learning. Seeing students collaborate on real environmental challenges is deeply inspiring." },
  { name: "Eleni Papadopoulou", role: "Activities Coordinator", inst: "University of the Peloponnese",
    quote: "EUNICE brings our European university community together through unique cultural and interactive initiatives that develop practical skills and lifelong global networks." },
  { name: "Lukas Brandt", role: "PhD Candidate", inst: "University of Cantabria",
    quote: "The joint research seminars connected me with colleagues across Europe and opened collaborations I never expected." },
  { name: "Sofia Marchetti", role: "Exchange Student", inst: "University of Catania",
    quote: "My mobility semester through EUNICE changed how I see learning, teamwork and living in another culture." },
  { name: "Dr. Anna Kowalczyk", role: "Senior Lecturer", inst: "Poznań University of Technology",
    quote: "Co-teaching with partner universities has enriched my classroom and brought real international perspectives to students." },
  { name: "Jonas Virtanen", role: "Master's Student", inst: "University of Vaasa",
    quote: "The Summer School gave me practical skills and friends from a dozen countries, all in just two weeks." },
  { name: "Marie Dubois", role: "Programme Officer", inst: "Université Polytechnique Hauts-de-France",
    quote: "EUNICE makes cooperation between our campuses feel natural, with shared goals and a genuinely open community." },
  { name: "Nikos Alexiou", role: "Volunteer Coordinator", inst: "University of the Peloponnese",
    quote: "Watching volunteers from different countries work together on local projects is the best proof of what the alliance achieves." }
];

var tIndex = 0;

function showTestimonial() 
{
  var t = testimonials[tIndex];
  document.getElementById("t-quote").innerHTML = "\"" + t.quote + "\"";
  document.getElementById("t-name").innerHTML = t.name;
  document.getElementById("t-role").innerHTML = t.role;
  document.getElementById("t-inst").innerHTML = t.inst;

  var dots = "";
  for (var i = 0; i < testimonials.length; i++) 
    {
      dots += "<button class='" + (i === tIndex ? "on" : "") + "' onclick='goTestimonial(" + i + ")'></button>";
    }
  document.getElementById("t-dots").innerHTML = dots;
}

function goTestimonial(i) {
  tIndex = (i + testimonials.length) % testimonials.length;
  showTestimonial();
}

if (document.getElementById("t-quote")) {
  showTestimonial();
  document.getElementById("t-prev").onclick = function () { goTestimonial(tIndex - 1); };
  document.getElementById("t-next").onclick = function () { goTestimonial(tIndex + 1); };
  setInterval(function () { goTestimonial(tIndex + 1); }, 7000); // avança sozinho
}

// ===== Acordeão (só existe no About) =====
var buttons = document.getElementsByClassName("acc-btn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    var box = this.parentElement;
    box.classList.toggle("open");
    this.getElementsByTagName("span")[0].innerHTML = box.classList.contains("open") ? "−" : "+";
  };
}

// ===== Carrossel social (só existe no About) =====
// Cada rede é um array de objetos. LinkedIn/Facebook apontam para a página da rede.
var posts = {
  Instagram: [
    { title: "Alliance Games 2026", img: "social/instagram-1.jpg", url: "https://www.instagram.com/eunice_uni_/p/DezA1RpjBrS/" },
    { title: "World Food Day 2026", img: "social/instagram-2.jpg", url: "https://www.instagram.com/eunice_uni_/p/DejBLfujB5Y/" },
    { title: "EUNICE Odyssey", img: "social/instagram-3.jpg", url: "https://www.instagram.com/eunice_uni_/p/DYM0QwFDC-s/" },
    { title: "Celebration of Earth Day", img: "social/instagram-4.jpg", url: "https://www.instagram.com/eunice_uni_/p/DXbXajajK4J/" },
    { title: "International Women's Day", img: "social/instagram-5.jpg", url: "https://www.instagram.com/eunice_uni_/p/DVYI8hNDMqx/" }
  ],
  YouTube: [
    { title: "EUNICE Weeks 2023 EUNICE Days", img: "social/youtube-1.jpg", url: "https://youtu.be/rG3g1iB0xY0" },
    { title: "EUNICE Weeks 2023 - Alliance Games", img: "social/youtube-2.jpg", url: "https://youtu.be/aG76siR2bFA" },
    { title: "EUNICE Alliance Games 2024", img: "social/youtube-3.jpg", url: "https://youtu.be/S9frsWwYtaM" },
    { title: "EUNICE Day of Languages 2025", img: "social/youtube-4.jpg", url: "https://youtu.be/1GMLYGSnWb4" },
    { title: "EUNICE Odyssey 2026", img: "social/youtube-5.jpg", url: "https://youtu.be/Knk8X_TeTRw" }
  ],
  LinkedIn: [
    { title: "International Women's Day", img: "social/linkedin-1.jpg", url: "https://www.linkedin.com/company/eunice-european-university/" },
    { title: "Celebration of Earth Day", img: "social/linkedin-2.jpg", url: "https://www.linkedin.com/company/eunice-european-university/" },
    { title: "EUNICE Odyssey", img: "social/linkedin-3.jpg", url: "https://www.linkedin.com/company/eunice-european-university/" },
    { title: "Alliance Games 2025", img: "social/linkedin-4.jpg", url: "https://www.linkedin.com/company/eunice-european-university/" },
    { title: "Day of Languages", img: "social/linkedin-5.jpg", url: "https://www.linkedin.com/company/eunice-european-university/" }
  ],
  Facebook: [
    { title: "World Food Day 2026", img: "social/facebook-1.jpg", url: "https://www.facebook.com/euniceuniversity/" },
    { title: "EUNICE Playlist", img: "social/facebook-2.jpg", url: "https://www.facebook.com/euniceuniversity/" },
    { title: "EUNICE Odyssey", img: "social/facebook-3.jpg", url: "https://www.facebook.com/euniceuniversity/" },
    { title: "Celebration of Earth Day", img: "social/facebook-4.jpg", url: "https://www.facebook.com/euniceuniversity/" },
    { title: "International Women's Day", img: "social/facebook-5.jpg", url: "https://www.facebook.com/euniceuniversity/" }
  ]
};

var network = "Instagram";
var current = 1;

function postCard(p, offset) {
  var cls = offset === 0 ? "post active" : "post side";
  var html = "<article class='" + cls + "' onclick='movePost(" + offset + ")'>";
  html += "<img src='" + p.img + "' alt='" + p.title + "'>";
  html += "<div><h3>" + p.title + "</h3>";
  if (offset === 0) {
    html += "<a href='" + p.url + "' target='_blank'>View original post &gt;</a>";
  }
  return html + "</div></article>";
}

function showPosts() {
  var list = posts[network];
  var n = list.length;
  var html = "";
  for (var offset = -1; offset <= 1; offset++) {
    html += postCard(list[(current + offset + n) % n], offset);
  }
  document.getElementById("posts").innerHTML = html;

  var nets = "";
  for (var name in posts) {
    nets += "<button class='" + (name === network ? "sel" : "") + "' onclick='selectNetwork(\"" + name + "\")'>" + name + "</button>";
  }
  document.getElementById("nets").innerHTML = nets;
}

function movePost(step) {
  var n = posts[network].length;
  current = (current + step + n) % n;
  showPosts();
}

function selectNetwork(name) {
  network = name;
  current = 1;
  showPosts();
}

if (document.getElementById("posts")) {
  showPosts();
  document.getElementById("p-prev").onclick = function () { movePost(-1); };
  document.getElementById("p-next").onclick = function () { movePost(1); };
}