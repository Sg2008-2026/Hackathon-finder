// ==================== 1. MASTER EVENT DATASET ====================
// Dates are set in the future (Sept - Dec 2026) to prevent immediate expiration.
// Links are modeled after direct registration pages (Devfolio subdomains, Unstop event slugs).
const eventsList = [
  {
    id: 201,
    title: "Smart Horizon International Hackathon",
    city: "Bengaluru",
    skills: ["Python", "AI/ML"],
    deadline: "2026-09-03",
    officialLink: "https://newhorizonindia.edu/smarthorizon/#hackathon",
    organizer: "New Horizon College of Engineering",
    description: "International hackathon hosted at New Horizon College of Engineering, Bengaluru."
  },
  {
    id: 202,
    title: "IQOO Hackathon 2026",
    city: "Online",
    skills: ["Python", "Node.js", "AI/ML"],
    deadline: "2026-10-11",
    officialLink: "https://iqoo.reskilll.com/",
    organizer: "iqoo india",
    description: "a high-octane, national-level developer competition designed to discover the next generation of mobile AI innovations"
  },
  {
    id: 203,
    title: "Smart Ration Dispenser Challenge",
    city: "Chennai",
    skills: ["Node.js", "Python"],
    deadline: "2026-09-15",
    officialLink: "https://www.srmist.edu.in/events/smart-ration-dispenser-hackathon/",
    organizer: "SRM Kattankulathur",
    description: "Hardware and software integration challenge for automated public distribution systems."
  },
  {
    id: 204,
    title: "SEMICON India Hackathon",
    city: "New Delhi",
    skills: ["AI/ML", "Python"],
    deadline: "2026-09-17",
    officialLink: "https://www.semiconindia.org/",
    organizer: "India Semiconductor Mission",
    description: "Focused on chip design innovation, EDA software, and specialized AI tools."
  },
  {
    id: 205,
    title: "HackIndia Spark-12",
    city: "Jaipur",
    skills: ["Web3", "JavaScript"],
    deadline: "2026-09-18",
    officialLink: "https://hackindia.org/2026/hackindia-spark-12-jaipur-rajasthan-north-india-region",
    organizer: "HackIndia Community",
    description: "Regional Web3 and decentralized application development sprint in Jaipur."
  },
  {
    id: 206,
    title: "E-Mobility HackFest",
    city: "Bengaluru",
    skills: ["Python", "AI/ML"],
    deadline: "2026-09-24",
    officialLink: "https://www.knowafest.com/explore/events/2026/06/0505-e-mobility-hackfest-2026-sri-ramakrishna-institute-technology-hackathon-coimbatore",
    organizer: "EV Tech India",
    description: "Dedicated to electric vehicle telemetry, battery management systems, and smart transport tech."
  },
  {
    id: 207,
    title: "Lun4R CTF",
    city: "Online",
    skills: ["Cybersecurity", "Python"],
    deadline: "2026-09-28",
    officialLink: "https://unstop.com/hackathons/lun4r-ctf-2026-rajadhani-institute-of-engineering-and-technology-1745542",
    organizer: "Lun4R Cyber Group",
    description: "Online capture-the-flag challenge testing penetration testing, reverse engineering, and cryptography."
  },
  {
    id: 208,
    title: "Prometheus September AI Challenge",
    city: "Online",
    skills: ["AI/ML", "Python"],
    deadline: "2026-09-30",
    officialLink: "https://prometheus-september-ai-2.devpost.com/",
    organizer: "Prometheus AI Lab",
    description: "A month-long virtual challenge centered on building custom AI models and neural net applications."
  },
  {
    id: 209,
    title: "Multipli Hackathon",
    city: "Online",
    skills: ["JavaScript", "React", "Node.js"],
    deadline: "2026-10-10",
    officialLink: "https://unstop.com/hackathons/multipli-hackathon-build-innovate-compete-vit-vellore-1746015",
    organizer: "Vellore Institute of Technology (VIT)",
    description: "Student-led full-stack development competition focusing on financial software and app utility."
  },
  {
    id: 210,
    title: "AI for Good Hackathon",
    city: "Online",
    skills: ["AI/ML", "React", "Python"],
    deadline: "2026-10-15",
    officialLink: "",
    organizer: "Global Social Impact Hub",
    description: "Build social impact software using AI to address healthcare, accessibility, and education needs."
  },
  {
    id: 211,
    title: "HackQuest 2.0",
    city: "Online",
    skills: ["HTML/CSS", "JavaScript", "Python"],
    deadline: "2026-10-28",
    officialLink: "https://unstop.com/hackathons/hackquest-code-for-communities-20-pantheon26-birla-institution-of-technology-mesra-mesra-1745805",
    organizer: "BIT Mesra, Ranchi",
    description: "Flagship annual hackathon hosted by BIT Mesra for innovative software prototypes."
  },
  {
    id: 212,
    title: "ForgeX AI Challenge",
    city: "Online",
    skills: ["AI/ML", "Node.js"],
    deadline: "2026-10-31",
    officialLink: "https://www.knowafest.com/explore/events/2026/08/2805-forgex-ai-erode-sengunthar-engineering-college-national-level-hackathon",
    organizer: "Erode Sengunthar Engineering College",
    description: "Ongoing 2026 state-level AI competition focusing on embedded algorithms and automated workflows."
  },
  {
    id: 213,
    title: "Great Indian Hackathon",
    city: "Online",
    skills: ["JavaScript", "HTML/CSS", "React"],
    deadline: "2026-11-01",
    officialLink: "https://unstop.com/hackathons/great-indian-hackathon-2026-great-indian-hackathon-sahrdaya-college-of-engineering-and-technology-scet-kerala-1670688",
    organizer: "CodeNation Community",
    description: "24-hour rapid coding sprint designed for web developers and algorithm developers across India."
  },
  {
    id: 214,
    title: "AI-First Startup Hackathon",
    city: "Online",
    skills: ["AI/ML", "Python", "React"],
    deadline: "2026-11-01",
    officialLink: "https://hackindia.org/2026/ai-first-startup-hackathon-build-a-startup-using-ai-only",
    organizer: "Startup India Network",
    description: "A two-month virtual incubator and hackathon for building AI-native minimum viable products (MVPs)."
  },
  {
    id: 215,
    title: "Tech Horizon 2.0",
    city: "Online",
    skills: ["React", "Node.js", "JavaScript"],
    deadline: "2026-11-11",
    officialLink: "https://unstop.com/hackathons/tech-horizon-20-national-level-hackathon-guru-nanak-institutions-technical-campus-gnitc-hyderabad-1677311",
    organizer: "National Tech Alliance",
    description: "National coding competition testing full-stack building and API architecture."
  },
  {
    id: 216,
    title: "NASA Space Apps Challenge India",
    city: "Online",
    skills: ["Python", "AI/ML"],
    deadline: "2026-11-14",
    officialLink: "https://www.spaceappschallenge.org/2026/",
    organizer: "NASA Space Apps",
    description: "Solve challenges on Earth and in space using NASA's open-source satellite data."
  },
  {
    id: 217,
    title: "Code4Nature",
    city: "Online",
    skills: ["JavaScript", "Python"],
    deadline: "2026-11-20",
    officialLink: "https://internshala.com/competitions/code4nature-challenge-2026-₹175000/",
    organizer: "GreenTech Alliance",
    description: "Green tech and environmental solutions hackathon focused on climate data visualization and tracking."
  },
  {
    id: 218,
    title: "Health-a-thon 2026",
    city: "Online",
    skills: ["AI/ML", "Python", "React"],
    deadline: "2026-11-30",
    officialLink: "https://healthathon.reskilll.com",
    organizer: "HealthTech Co-Labs",
    description: "Ongoing healthcare AI co-creation challenge focused on medical diagnosis tools and patient monitoring."
  },
  {
    id: 219,
    title: "AI for Lawyers",
    city: "Online",
    skills: ["AI/ML", "Python"],
    deadline: "2026-12-01",
    officialLink: "https://hackindia.org/2026/ai-for-lawyers-hackathon",
    organizer: "LegalTech Hub",
    description: "Legal-tech virtual hackathon applying LLMs to document automation and legal research."
  },
  {
    id: 220,
    title: "ET AI Hackathon (Agentic Edition)",
    city: "Online",
    skills: ["AI/ML", "Python"],
    deadline: "2026-12-15",
    officialLink: "https://unstop.com/hackathons/crp-et-ai-hackathon-agentic-edition-presented-by-accenture-economic-times-1744885",
    organizer: "Economic Times",
    description: "Build autonomous multi-agent systems and task automation frameworks using LLM orchestration."
  }
];

// ==================== 2. APP INITIALIZATION & STATE ====================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  const userProfile = getProfile();
  if (userProfile && userProfile.name) {
    showDashboard(userProfile);
  } else {
    showOnboarding();
  }
}

function getProfile() {
  return JSON.parse(localStorage.getItem('userProfile')) || null;
}

function getTrackedEventIds() {
  return JSON.parse(localStorage.getItem('trackedEvents')) || [];
}

// ==================== 3. ONBOARDING & PROFILE MANAGEMENT ====================
document.getElementById('onboarding-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('student-name').value.trim();
  const location = document.getElementById('student-location').value;
  const selectedSkills = Array.from(
    document.querySelectorAll('.skills-grid input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  if (selectedSkills.length === 0) {
    alert("Please select at least one skill to personalize your dashboard.");
    return;
  }

  const userProfile = { name, location, skills: selectedSkills };
  localStorage.setItem('userProfile', JSON.stringify(userProfile));

  showDashboard(userProfile);
});

function showOnboarding() {
  document.getElementById('onboarding-screen').style.display = 'flex';
  document.getElementById('dashboard-screen').style.display = 'none';
}

function showDashboard(profile) {
  document.getElementById('onboarding-screen').style.display = 'none';
  document.getElementById('dashboard-screen').style.display = 'block';

  document.getElementById('user-greeting').innerHTML = 
    `👋 Hello, <strong>${profile.name}</strong>! Displaying events for <strong>${profile.location}</strong> based on: <em>${profile.skills.join(', ')}</em>`;

  renderDashboard();
}

function resetProfile() {
  if (confirm("Are you sure you want to edit your profile preferences?")) {
    localStorage.removeItem('userProfile');
    showOnboarding();
  }
}

// ==================== 4. RECOMMENDATION ALGORITHM ====================
function getProcessedEvents() {
  const profile = getProfile();
  if (!profile) return [];

  const userSkills = profile.skills || [];
  const userLoc = profile.location || "Bengaluru";

  return eventsList
    .map(event => {
      const daysLeft = calculateDaysLeft(event.deadline);
      const matchedSkills = event.skills.filter(s => userSkills.includes(s));
      const matchScore = Math.round((matchedSkills.length / event.skills.length) * 100);

      return {
        ...event,
        daysLeft,
        matchedSkills,
        matchScore
      };
    })
    .filter(event => {
      // 🚨 CRITICAL FIX: Automatically hide events where the deadline has passed
      if (event.daysLeft < 0) return false; 
      
      // Filter by location
      if (userLoc === "All") return true;
      if (userLoc === "Bengaluru") return event.city === "Bengaluru" || event.city === "Online";
      if (userLoc === "Online") return event.city === "Online";
      return true;
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}

// ==================== 5. RENDER DASHBOARD & CARDS ====================
function renderDashboard() {
  const processedEvents = getProcessedEvents();
  const trackedIds = getTrackedEventIds();

  const recommendedContainer = document.getElementById('recommended-grid');
  const allContainer = document.getElementById('all-events-grid');

  const topMatches = processedEvents.filter(e => e.matchScore > 0);
  const otherEvents = processedEvents.filter(e => e.matchScore === 0);

  // Render Recommended
  if (topMatches.length === 0) {
    recommendedContainer.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1;">No direct skill matches found for your current profile skills.</p>`;
  } else {
    recommendedContainer.innerHTML = topMatches.map(e => createCardHTML(e, true, trackedIds.includes(e.id))).join('');
  }

  // Render All / Others
  const displayAllList = otherEvents.length > 0 ? otherEvents : processedEvents;
  allContainer.innerHTML = displayAllList.map(e => createCardHTML(e, false, trackedIds.includes(e.id))).join('');
}

function createCardHTML(event, isRecommended, isTracked) {
  const badgeInfo = getUrgencyBadge(event.daysLeft);

  return `
    <div class="event-card ${isRecommended ? 'recommended' : ''}">
      <div>
        <div class="card-header">
          <h3>${event.title}</h3>
          ${isRecommended ? `<span class="badge-match">${event.matchScore}% Match</span>` : ''}
        </div>
        <div class="event-meta">
          📍 ${event.city} | 🗓️ ${event.deadline}
        </div>
        <div style="margin-bottom: 12px;">
          <span class="badge-status ${badgeInfo.class}">${badgeInfo.text}</span>
        </div>
        <div class="skill-tags">
          ${event.skills.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
      </div>
      <div>
        <button class="btn-primary" onclick="openModal(${event.id})">View Details & Apply</button>
      </div>
    </div>
  `;
}

// ==================== 6. DEADLINE CALCULATOR & TRACKING ====================
function calculateDaysLeft(deadlineStr) {
  const today = new Date();
  const deadline = new Date(deadlineStr);
  const timeDiff = deadline.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

function getUrgencyBadge(daysLeft) {
  if (daysLeft < 0) {
    return { text: "Closed", class: "badge-urgent" };
  } else if (daysLeft <= 3) {
    return { text: `🔴 Closes in ${daysLeft} Day${daysLeft === 1 ? '' : 's'}!`, class: "badge-urgent" };
  } else if (daysLeft <= 7) {
    return { text: `🟡 ${daysLeft} Days Left`, class: "badge-warning" };
  } else {
    return { text: `🟢 ${daysLeft} Days Left`, class: "badge-success" };
  }
}

function toggleTrackEvent(eventId) {
  let tracked = getTrackedEventIds();
  if (tracked.includes(eventId)) {
    tracked = tracked.filter(id => id !== eventId);
  } else {
    tracked.push(eventId);
  }
  localStorage.setItem('trackedEvents', JSON.stringify(tracked));
  
  renderDashboard();
  renderDeadlinesView();

  const modal = document.getElementById('event-modal');
  if (modal.style.display === 'flex') {
    openModal(eventId);
  }
}

function renderDeadlinesView() {
  const container = document.getElementById('deadlines-list-container');
  const trackedIds = getTrackedEventIds();
  
  // Also filter tracked events so past deadlines drop off this list too
  const trackedEvents = eventsList
    .filter(e => trackedIds.includes(e.id))
    .map(e => ({ ...e, daysLeft: calculateDaysLeft(e.deadline) }))
    .filter(e => e.daysLeft >= 0);

  if (trackedEvents.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; background: white; border-radius: 8px; border: 1px solid var(--border);">
        <p style="color: var(--text-muted); font-size: 15px;">No active hackathons saved yet. Click <strong>"View Details & Apply"</strong> on any upcoming event to track its deadline!</p>
      </div>
    `;
    return;
  }

  trackedEvents.sort((a, b) => a.daysLeft - b.daysLeft);

  container.innerHTML = trackedEvents.map(event => {
    const badgeInfo = getUrgencyBadge(event.daysLeft);

    return `
      <div class="deadline-row">
        <div class="deadline-info">
          <h3>${event.title}</h3>
          <p class="event-meta" style="margin-bottom:0;">📍 ${event.city} | Required: ${event.skills.join(', ')}</p>
        </div>
        <div style="text-align: center;">
          <div style="font-weight: 600; font-size: 14px;">🗓️ ${event.deadline}</div>
          <span class="badge-status ${badgeInfo.class}" style="margin-top: 4px;">${badgeInfo.text}</span>
        </div>
        <div class="deadline-actions">
          <a href="${event.officialLink}" target="_blank" class="btn-primary" style="text-decoration: none; padding: 8px 14px; font-size: 13px;">Apply ↗</a>
          <button class="btn-outline" onclick="toggleTrackEvent(${event.id})" style="padding: 8px 12px; font-size: 13px; cursor: pointer; border-radius:6px;">Remove</button>
        </div>
      </div>
    `;
  }).join('');
}

// ==================== 7. MODAL POPUP SYSTEM ====================
function openModal(eventId) {
  const event = eventsList.find(e => e.id === eventId);
  if (!event) return;

  const trackedIds = getTrackedEventIds();
  const isTracked = trackedIds.includes(event.id);
  const daysLeft = calculateDaysLeft(event.deadline);
  const badgeInfo = getUrgencyBadge(daysLeft);

  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = `
    <h2 style="margin-bottom: 8px;">${event.title}</h2>
    <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 12px;">Organized by: <strong>${event.organizer}</strong></p>
    
    <div style="margin-bottom: 16px;">
      <span class="badge-status ${badgeInfo.class}">${badgeInfo.text}</span>
      <span style="font-size: 13px; color: var(--text-muted); margin-left: 8px;">📍 ${event.city}</span>
    </div>

    <p style="margin-bottom: 16px; font-size: 14px; line-height: 1.6; color: #334155;">${event.description}</p>

    <div style="margin-bottom: 20px;">
      <strong style="font-size: 13px; display: block; margin-bottom: 6px;">Required Skills:</strong>
      <div class="skill-tags">
        ${event.skills.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 10px;">
      <a href="${event.officialLink}" target="_blank" class="btn-primary" style="text-decoration: none; text-align: center; flex: 2;">
        Apply on Official Platform ↗
      </a>
      <button onclick="toggleTrackEvent(${event.id})" class="btn-outline" style="flex: 1; font-weight: 600; cursor: pointer;">
        ${isTracked ? '⭐ Tracked' : '+ Track Event'}
      </button>
    </div>
  `;

  document.getElementById('event-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('event-modal').style.display = 'none';
}

// Close modal when clicking background overlay
document.getElementById('event-modal').addEventListener('click', (e) => {
  if (e.target.id === 'event-modal') {
    closeModal();
  }
});

// ==================== 8. TAB NAVIGATION ====================
function switchTab(tabName) {
  const exploreView = document.getElementById('explore-view');
  const deadlinesView = document.getElementById('deadlines-view');
  const navExplore = document.getElementById('nav-explore');
  const navDeadlines = document.getElementById('nav-deadlines');

  if (tabName === 'explore') {
    exploreView.style.display = 'block';
    deadlinesView.style.display = 'none';
    navExplore.classList.add('active');
    navDeadlines.classList.remove('active');
    renderDashboard();
  } else if (tabName === 'deadlines') {
    exploreView.style.display = 'none';
    deadlinesView.style.display = 'block';
    navExplore.classList.remove('active');
    navDeadlines.classList.add('active');
    renderDeadlinesView();
  }
}