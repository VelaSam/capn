/**
 * CAPN Prototype – Données simulées (mock backend)
 * Toutes les "requêtes" sont simulées avec setTimeout pour imiter un vrai appel HTTP.
 */

// ── Utilisateur connecté (simulé) ─────────────────────────────
const CURRENT_USER = {
  id: 'u001',
  prenom: 'Marie',
  nom: 'Tremblay',
  email: 'marie.tremblay@example.com',
  role: 'parent', // 'parent' | 'nageur_mineur' | 'admin'
  initiales: 'MT',
  enfants: [
    { id: 'n001', prenom: 'Léa', nom: 'Tremblay', age: 14, groupe: 'Développement', inscrit: true },
    { id: 'n002', prenom: 'Thomas', nom: 'Tremblay', age: 11, groupe: 'Recrues 2', inscrit: true }
  ]
};

const CURRENT_NAGEUR = {
  id: 'n001',
  prenom: 'Léa',
  nom: 'Tremblay',
  age: 14,
  groupe: 'Développement',
  role: 'nageur_mineur',
  initiales: 'LT'
};

// ── Compétitions ─────────────────────────────────────────────
const COMPETITIONS = [
  {
    id: 'comp01',
    nom: 'Compétition Régionale de Montréal',
    date_debut: '2026-04-04',
    date_fin: '2026-04-05',
    lieu: 'Complexe sportif Claude-Robillard, Montréal',
    niveau: 'Régional',
    echeance_inscription: '2026-03-28',
    cout: 45.00,
    statut: 'ouvert',
    description: 'Compétition régionale ouverte aux groupes Recrues 2, Développement et Performance. Nataion 50m et 100m toutes nages.',
    groupes_eligible: ['Recrues 2', 'Développement', 'Performance'],
    inscription_nageur: { n001: 'inscrit', n002: null }
  },
  {
    id: 'comp02',
    nom: 'Championnat Provincial FINA-Qc',
    date_debut: '2026-05-16',
    date_fin: '2026-05-17',
    lieu: 'Centre aquatique Gatineau, Gatineau',
    niveau: 'Provincial',
    echeance_inscription: '2026-05-02',
    cout: 75.00,
    statut: 'ouvert',
    description: 'Championnats provinciaux. Qualification requise via les temps standards. Groupes Développement et Performance seulement.',
    groupes_eligible: ['Développement', 'Performance'],
    inscription_nageur: { n001: null, n002: null }
  },
  {
    id: 'comp03',
    nom: 'Invitational des Piranhas – Montréal',
    date_debut: '2026-03-07',
    date_fin: '2026-03-08',
    lieu: 'Piscine Sophie-Barat, Montréal',
    niveau: 'Invitationnel',
    echeance_inscription: '2026-02-20',
    cout: 30.00,
    statut: 'fermé',
    description: 'Compétition maison organisée par le CAPN. Tous les groupes d\'âge sont bienvenus.',
    groupes_eligible: ['Recrues 1', 'Recrues 2', 'Développement', 'Performance'],
    inscription_nageur: { n001: 'inscrit', n002: 'inscrit' }
  }
];

// ── Épreuves possibles ────────────────────────────────────────
const EPREUVES = [
  { id: 'ep01', nom: '50m Libre',     categorie: 'Libre',     distance: 50,  sexe: 'F/M' },
  { id: 'ep02', nom: '100m Libre',    categorie: 'Libre',     distance: 100, sexe: 'F/M' },
  { id: 'ep03', nom: '200m Libre',    categorie: 'Libre',     distance: 200, sexe: 'F/M' },
  { id: 'ep04', nom: '50m Dos',       categorie: 'Dos',       distance: 50,  sexe: 'F/M' },
  { id: 'ep05', nom: '100m Dos',      categorie: 'Dos',       distance: 100, sexe: 'F/M' },
  { id: 'ep06', nom: '50m Brasse',    categorie: 'Brasse',    distance: 50,  sexe: 'F/M' },
  { id: 'ep07', nom: '100m Brasse',   categorie: 'Brasse',    distance: 100, sexe: 'F/M' },
  { id: 'ep08', nom: '50m Papillon',  categorie: 'Papillon',  distance: 50,  sexe: 'F/M' },
  { id: 'ep09', nom: '100m Papillon', categorie: 'Papillon',  distance: 100, sexe: 'F/M' },
  { id: 'ep10', nom: '200m QNI',      categorie: 'Quatre nages', distance: 200, sexe: 'F/M' }
];

// ── Matériel ──────────────────────────────────────────────────
const MATERIEL = [
  { id: 'm01', nom: 'Planche de natation', categorie: 'Entraînement', prix: 18.50, emoji: '🏊',  desc: 'Planche en mousse haute densité, couleur CAPN', stock: 10 },
  { id: 'm02', nom: 'Pull Buoy', categorie: 'Entraînement', prix: 16.00, emoji: '🔵', desc: 'Pull buoy ergonomique pour isoler les bras', stock: 15 },
  { id: 'm03', nom: 'Palmes courtes', categorie: 'Entraînement', prix: 42.00, emoji: '🦶', desc: 'Palmes de sprint, différentes pointures disponibles', stock: 8 },
  { id: 'm04', nom: 'Casque CAPN', categorie: 'Club', prix: 28.00, emoji: '🧢', desc: 'Casque de silicone aux couleurs du CAPN (marine et or)', stock: 20 },
  { id: 'm05', nom: 'Tuque CAPN', categorie: 'Club', prix: 22.00, emoji: '🎿', desc: 'Tuque brodée logo Piranhas', stock: 12 },
  { id: 'm06', nom: 'Hoodie CAPN', categorie: 'Club', prix: 65.00, emoji: '👕', desc: 'Chandail à capuche unisexe avec logo Piranhas', stock: 6 },
  { id: 'm07', nom: 'Lunettes de compétition', categorie: 'Entraînement', prix: 34.00, emoji: '🥽', desc: 'Lunettes Speedo Fastskin Elite, teintées', stock: 5 },
  { id: 'm08', nom: 'Sac de piscine CAPN', categorie: 'Club', prix: 48.00, emoji: '🎒', desc: 'Grand sac imperméable aux couleurs du club', stock: 4 }
];

// ── Factures ──────────────────────────────────────────────────
const FACTURES = [
  {
    id: 'FAC-2026-001',
    date: '2026-03-01',
    echeance: '2026-03-31',
    nageur: 'Léa Tremblay',
    statut: 'impayée',
    type: 'Compétition',
    description: 'Inscription – Compétition Régionale de Montréal (4-5 avril 2026)',
    lignes: [
      { desc: 'Frais d\'inscription – Léa Tremblay', qte: 1, prix: 45.00 }
    ],
    total: 45.00
  },
  {
    id: 'FAC-2026-002',
    date: '2026-02-15',
    echeance: '2026-03-01',
    nageur: 'Thomas Tremblay',
    statut: 'payée',
    type: 'Matériel',
    description: 'Commande matériel – février 2026',
    lignes: [
      { desc: 'Casque CAPN', qte: 1, prix: 28.00 },
      { desc: 'Pull Buoy',   qte: 1, prix: 16.00 }
    ],
    total: 44.00
  },
  {
    id: 'FAC-2026-003',
    date: '2026-03-10',
    echeance: '2026-04-10',
    nageur: 'Léa Tremblay',
    statut: 'impayée',
    type: 'Matériel',
    description: 'Commande matériel – mars 2026',
    lignes: [
      { desc: 'Hoodie CAPN', qte: 1, prix: 65.00 },
      { desc: 'Lunettes de compétition', qte: 1, prix: 34.00 }
    ],
    total: 99.00
  }
];

// ── Épreuves choisies par nageur ──────────────────────────────
const EPREUVES_CHOISIES = {
  'n001-comp03': ['ep01', 'ep05', 'ep08'] // Léa à l'Invitational (passé)
};

// ── Panier courant ─────────────────────────────────────────────
let panier = [];

// ════════════════════════════════════════════════════════════
//  API simulée – retourne des Promises avec délai réseau fictif
// ════════════════════════════════════════════════════════════

const API = {
  delay: (ms = 600) => new Promise(r => setTimeout(r, ms)),

  async login(email, code) {
    await this.delay(800);
    if (code === 'CAPN2026' || email.includes('@')) return { success: true, user: CURRENT_USER };
    return { success: false, error: 'Code invalide ou utilisateur non trouvé.' };
  },

  async getCompetitions() {
    await this.delay(500);
    return COMPETITIONS;
  },

  async getCompetition(id) {
    await this.delay(400);
    return COMPETITIONS.find(c => c.id === id) || null;
  },

  async inscrireCompetition(compId, nageurId) {
    await this.delay(900);
    const comp = COMPETITIONS.find(c => c.id === compId);
    if (comp) comp.inscription_nageur[nageurId] = 'inscrit';
    return { success: true, confirmationId: 'CONF-' + Math.random().toString(36).slice(2, 8).toUpperCase() };
  },

  async getEpreuves(compId, nageurId) {
    await this.delay(400);
    const deja = EPREUVES_CHOISIES[nageurId + '-' + compId] || [];
    return { epreuves: EPREUVES, choisies: deja };
  },

  async soumettreEpreuves(compId, nageurId, epreuveIds) {
    await this.delay(800);
    EPREUVES_CHOISIES[nageurId + '-' + compId] = epreuveIds;
    return { success: true };
  },

  async getMateriel() {
    await this.delay(400);
    return MATERIEL;
  },

  async commander(panierItems) {
    await this.delay(1000);
    const factureId = 'FAC-2026-' + String(FACTURES.length + 1).padStart(3, '0');
    const total = panierItems.reduce((s, i) => s + i.prix * i.qte, 0);
    const f = {
      id: factureId,
      date: new Date().toISOString().slice(0, 10),
      echeance: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10),
      statut: 'impayée',
      type: 'Matériel',
      lignes: panierItems.map(i => ({ desc: i.nom, qte: i.qte, prix: i.prix })),
      total
    };
    FACTURES.push(f);
    return { success: true, facture: f };
  },

  async getFactures() {
    await this.delay(500);
    return FACTURES;
  },

  async getFacture(id) {
    await this.delay(400);
    return FACTURES.find(f => f.id === id) || null;
  },

  async payer(factureId) {
    await this.delay(1200);
    const f = FACTURES.find(f => f.id === factureId);
    if (f) f.statut = 'payée';
    return { success: true, recu: 'REC-' + Math.random().toString(36).slice(2, 8).toUpperCase() };
  }
};

// ── Utilitaires ───────────────────────────────────────────────
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });
}

function formatMoney(n) {
  return parseFloat(n).toLocaleString('fr-CA', { style: 'currency', currency: 'CAD' });
}

function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container') || (() => {
    const c = document.createElement('div');
    c.id = 'toast-container';
    c.className = 'toast-container';
    document.body.appendChild(c);
    return c;
  })();
  const t = document.createElement('div');
  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  container.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

function setLoading(btn, loading) {
  if (loading) {
    btn.dataset.origText = btn.innerHTML;
    btn.innerHTML = '<span style="animation:spin 1s linear infinite;display:inline-block">⟳</span> Chargement…';
    btn.disabled = true;
  } else {
    btn.innerHTML = btn.dataset.origText || btn.innerHTML;
    btn.disabled = false;
  }
}

// Spin animation
const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
document.head.appendChild(spinStyle);
