const trainings = [
  {
    title: "Cadastros de Motoristas",
    category: "cadastro",
    label: "Cadastro",
    description: "Aprenda o fluxo de cadastro e as informações necessárias para motoristas.",
    image: "assets/Cadastro_de_Motoristas.png",
    video: "https://raw.githubusercontent.com/apisulpowerbi-web/videosApisul/main/Cadastros%20Motoristas.mp4",
    github: "https://github.com/apisulpowerbi-web/videosApisul/blob/main/Cadastros%20Motoristas.mp4",
    duration: "Aula"
  },
  {
    title: "Cadastro de Veículo",
    category: "cadastro",
    label: "Cadastro",
    description: "Passo a passo para realizar o cadastro de veículos na operação.",
    image: "assets/Caddastro_de_Veiculo.png",
    video: "https://raw.githubusercontent.com/apisulpowerbi-web/videosApisul/main/Cadastro%20Veiculo.mp4",
    github: "https://github.com/apisulpowerbi-web/videosApisul/blob/main/Cadastro%20Veiculo.mp4",
    duration: "Aula"
  },
  {
    title: "Cadastro de Rastreador",
    category: "cadastro",
    label: "Cadastro",
    description: "Veja como registrar e configurar as informações do rastreador.",
    image: "assets/Rastreador6753944891249457.png",
    video: "https://raw.githubusercontent.com/apisulpowerbi-web/videosApisul/main/Cadastro%20Rastreador.mp4",
    github: "https://github.com/apisulpowerbi-web/videosApisul/blob/main/Cadastro%20Rastreador.mp4",
    duration: "Aula"
  },
  {
    title: "Checklist de Veículos",
    category: "operacao",
    label: "Operação",
    description: "Conheça o checklist e os pontos de atenção antes da operação.",
    image: "assets/8229288_-_Branco0369753113866641.png",
    video: "https://raw.githubusercontent.com/apisulpowerbi-web/videosApisul/main/Treinamento%20Check%20List%20Veiculos%20.mp4",
    github: "https://github.com/apisulpowerbi-web/videosApisul/blob/main/Treinamento%20Check%20List%20Veiculos%20.mp4",
    duration: "Aula"
  },
  {
    title: "SMP de Validação",
    category: "smp",
    label: "SMP",
    description: "Entenda o processo de validação e os critérios utilizados na SMP.",
    image: "assets/SMP_Valida__o12374867192702133.png",
    video: "https://github.com/apisulpowerbi-web/videosApisul/raw/refs/heads/main/SMP%20de%20Valida%C3%A7%C3%A3o.mp4",
    github: "https://github.com/apisulpowerbi-web/videosApisul/blob/main/SMP%20de%20Valida%C3%A7%C3%A3o%20.mp4",
    duration: "Aula"
  },
  {
    title: "Programação de Carga",
    category: "operacao",
    label: "Operação",
    description: "Aprenda o fluxo de programação e os principais pontos do processo.",
    image: "assets/Programa__o_de_Carga8839534906991791.png",
    video: "https://raw.githubusercontent.com/apisulpowerbi-web/videosApisul/main/Treinamento%20SMP%20-%20Programa%C3%A7%C3%A3o%20de%20Carga.mp4",
    github: "https://github.com/apisulpowerbi-web/videosApisul/blob/main/Treinamento%20SMP%20-%20Programa%C3%A7%C3%A3o%20de%20Carga.mp4",
    duration: "Aula"
  },
  {
    title: "Cadastro SMP Outbound",
    category: "smp",
    label: "SMP",
    description: "Conheça as etapas para criação e cadastro de uma SMP Outbound.",
    image: "assets/Cadastro_SMP_Outbound.png",
    video: "https://raw.githubusercontent.com/apisulpowerbi-web/videosApisul/main/Cadastro%20SMP%20Outbound.mp4",
    github: "https://github.com/apisulpowerbi-web/videosApisul/blob/main/Cadastro%20SMP%20Outbound.mp4",
    duration: "Aula"
  },
  {
    title: "Criação de SMP de Transferência",
    category: "smp",
    label: "SMP",
    description: "Veja como executar o processo de criação de SMP de transferência.",
    image: "assets/Cadastro_SMP_Transferencia.png",
    video: "https://raw.githubusercontent.com/apisulpowerbi-web/videosApisul/main/Cria%C3%A7%C3%A3o%20de%20SMP%20de%20Transferencia.mp4",
    github: "https://github.com/apisulpowerbi-web/videosApisul/blob/main/Cria%C3%A7%C3%A3o%20de%20SMP%20de%20Transferencia.mp4",
    duration: "Aula"
  }
];
const grid = document.querySelector("#trainingGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const filters = document.querySelectorAll(".filter");
let currentFilter = "todos";

function renderTrainings() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = trainings.filter(item => {
    const matchesFilter = currentFilter === "todos" || item.category === currentFilter;
    const haystack = `${item.title} ${item.description} ${item.label}`.toLowerCase();
    return matchesFilter && haystack.includes(term);
  });

  grid.innerHTML = visible.map((item, index) => `
    <article class="training-card" data-index="${trainings.indexOf(item)}" tabindex="0" aria-label="Abrir ${item.title}">
      <div class="card-image">
        <img src="${item.image}" alt="" loading="lazy">
        <div class="shade"></div>
        <div class="card-top">
          <span class="tag">${item.label}</span>
          <span class="duration">▶ vídeo</span>
        </div>
      </div>
      <div class="card-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <div class="card-footer">
        <span>Treinamento Apisul</span>
        <span class="watch">Assistir →</span>
      </div>
    </article>
  `).join("");

  emptyState.hidden = visible.length !== 0;
  grid.querySelectorAll(".training-card").forEach(card => {
    card.addEventListener("click", () => openVideo(Number(card.dataset.index)));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") openVideo(Number(card.dataset.index));
    });
  });
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderTrainings();
  });
});
searchInput.addEventListener("input", renderTrainings);

const modal = document.querySelector("#videoModal");
const video = document.querySelector("#trainingVideo");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalTags = document.querySelector("#modalTags");
const rawLink = document.querySelector("#rawLink");
const githubLink = document.querySelector("#githubLink");
const fallback = document.querySelector("#videoFallback");

function openVideo(index) {
  const item = trainings[index];
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;
  modalTags.innerHTML = `<span>${item.label}</span><span>Vídeo</span><span>Treinamento</span>`;
  rawLink.href = item.video;
  githubLink.href = item.github;
  fallback.classList.remove("show");
  video.src = item.video;
  video.load();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  video.pause();
  video.removeAttribute("src");
  video.load();
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelector("#modalClose").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});
video.addEventListener("error", () => fallback.classList.add("show"));

// Os links das avaliações foram aproveitados diretamente da página "Avaliações" do PBIX.

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

renderTrainings();
