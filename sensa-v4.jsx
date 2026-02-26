import { useState, useEffect, useRef } from "react";

const VIBES = [
  { id: "transformative", emoji: "🦋", label: "Transformative", desc: "Deep personal growth & new perspectives" },
  { id: "restorative", emoji: "🌿", label: "Restorative", desc: "Heal, recharge, find inner peace" },
  { id: "adventurous", emoji: "⚡", label: "Adventurous", desc: "Push limits & feel alive" },
  { id: "romantic", emoji: "🌙", label: "Romantic", desc: "Intimate connection & beauty" },
  { id: "social", emoji: "✨", label: "Social & Fun", desc: "Good vibes with your people" },
  { id: "cultural", emoji: "🎭", label: "Cultural Immersion", desc: "Live like a local, learn something real" },
  { id: "creative", emoji: "🎨", label: "Creative", desc: "Get inspired, make something" },
  { id: "spiritual", emoji: "🕊️", label: "Spiritual", desc: "Connect to something bigger" },
];

const ACTIVITIES = [
  { id: "yoga", label: "Yoga & Movement" }, { id: "nightlife", label: "Nightlife & Dancing" },
  { id: "hiking", label: "Hiking & Nature" }, { id: "food", label: "Food Experiences" },
  { id: "wellness", label: "Spa & Wellness" }, { id: "water", label: "Beach & Water Sports" },
  { id: "art", label: "Art & Museums" }, { id: "workshops", label: "Workshops & Classes" },
  { id: "meditation", label: "Meditation & Retreats" }, { id: "photography", label: "Photography Spots" },
  { id: "markets", label: "Local Markets & Shopping" }, { id: "volunteering", label: "Volunteering" },
];

const TRAVEL_STYLES = [
  { id: "solo", emoji: "🧘", label: "Solo Journey" }, { id: "couple", emoji: "💕", label: "Couple's Trip" },
  { id: "friends", emoji: "👯", label: "Friend Group" }, { id: "girls", emoji: "💅", label: "Girls Trip" },
  { id: "guys", emoji: "🤙", label: "Guys Trip" }, { id: "family", emoji: "👨‍👩‍👧", label: "Family" },
];

const BUDGETS = [
  { id: "budget", label: "Budget-Friendly", desc: "$50–100/day" },
  { id: "mid", label: "Mid-Range", desc: "$100–250/day" },
  { id: "luxury", label: "Luxury", desc: "$250+/day" },
  { id: "splurge", label: "Go All Out", desc: "No limit" },
];

const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1400&q=80&auto=format",
  hero2: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=80&auto=format",
  hero3: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80&auto=format",
  bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80&auto=format",
  srilanka: "https://images.unsplash.com/photo-1586613835341-93be82e16171?w=800&q=80&auto=format",
  tulum: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&q=80&auto=format",
  greece: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80&auto=format",
  nz: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&q=80&auto=format",
  oaxaca: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80&auto=format",
  amalfi: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&q=80&auto=format",
  lisbon: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80&auto=format",
  chiangmai: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80&auto=format",
};

const generateRecommendations = (vibes, activities) => {
  const recs = [];
  const hasVibe = (v) => vibes.includes(v);
  const hasActivity = (a) => activities.includes(a);

  if (hasVibe("restorative") || hasVibe("spiritual") || hasVibe("transformative")) {
    if (hasActivity("yoga") || hasActivity("meditation") || hasActivity("wellness")) {
      recs.push({
        id: 1, destination: "Uluwatu, Bali", country: "Indonesia",
        tagline: "Sunrise yoga above ancient temples, sound healing at sunset",
        match: 97, duration: "7–14 days", bestFor: "Deep restoration & spiritual reset",
        photo: PHOTOS.bali, accent: "#2D6B3F", accentLight: "#e8f2ea",
        highlights: [
          { name: "The Practice Bali", type: "Yoga & Movement Studio", price: "$$", rating: 4.9, desc: "Cliffside shala with world-class teachers. Their somatic release classes are life-changing." },
          { name: "Bambu Farmhouse Retreat", type: "Eco Retreat Center", price: "$$$", rating: 4.8, desc: "7-day silent meditation retreats with plant-based meals grown on-site." },
          { name: "Sundays Beach Club", type: "Beach & Wellness", price: "$$$", rating: 4.7, desc: "Hidden beach accessible by cliff elevator. Yoga mornings, ocean swims afternoon." },
        ],
        vibe: "🌿",
      });
    }
    recs.push({
      id: 2, destination: "Mirissa, Sri Lanka", country: "Sri Lanka",
      tagline: "Ancient wisdom meets turquoise waters — heal where the world slows down",
      match: 94, duration: "10–21 days", bestFor: "Somatic healing & tropical restoration",
      photo: PHOTOS.srilanka, accent: "#1A7A8A", accentLight: "#e4f4f6",
      highlights: [
        { name: "Talalla Retreat", type: "Yoga & Surf Retreat", price: "$$", rating: 4.9, desc: "Beachfront somatic yoga, breathwork, and Ayurvedic treatments. Life-altering." },
        { name: "Weligama Surf Sessions", type: "Surf Experience", price: "$", rating: 4.7, desc: "Gentle beginner waves and sunset surf sessions with local instructors." },
        { name: "Handunugoda Tea Estate", type: "Cultural Experience", price: "$", rating: 4.6, desc: "Walk through lush tea fields and learn the art of Ceylon tea making." },
      ],
      vibe: "🦋",
    });
  }

  if (hasVibe("social") || (hasActivity("nightlife") && hasActivity("yoga"))) {
    recs.push({
      id: 3, destination: "Tulum, Mexico", country: "Mexico",
      tagline: "Jungle raves meet cenote ceremonies — where the party has a purpose",
      match: 95, duration: "5–10 days", bestFor: "Girls trip with soul",
      photo: PHOTOS.tulum, accent: "#E84D1A", accentLight: "#fef0eb",
      highlights: [
        { name: "Holistika Tulum", type: "Wellness Center", price: "$$", rating: 4.8, desc: "Morning yoga and cacao ceremonies before beach day. The temazcal is a must." },
        { name: "Vagalume", type: "Beach Club & Nightlife", price: "$$$", rating: 4.6, desc: "Barefoot dancing under the stars. Their full moon parties are legendary." },
        { name: "Casa Cenote", type: "Nature Experience", price: "$", rating: 4.7, desc: "Crystal-clear cenote surrounded by mangroves. Snorkel with turtles." },
      ],
      vibe: "✨",
    });
    recs.push({
      id: 4, destination: "Mykonos & Ios, Greece", country: "Greece",
      tagline: "Sun-soaked days, electric nights, and that golden hour that never ends",
      match: 91, duration: "7–10 days", bestFor: "The ultimate friend group trip",
      photo: PHOTOS.greece, accent: "#2968B0", accentLight: "#eaf1fa",
      highlights: [
        { name: "Scorpios Mykonos", type: "Beach Club", price: "$$$", rating: 4.7, desc: "Sunset rituals, live DJ sets, and the most beautiful crowd in the Aegean." },
        { name: "Ios Yoga Shala", type: "Yoga Studio", price: "$", rating: 4.5, desc: "Hilltop morning flow with views of the caldera. Perfect pre-beach reset." },
        { name: "Old Town Food Walk", type: "Food Experience", price: "$$", rating: 4.8, desc: "Wind through whitewashed alleys tasting gyros, honey pastries & local wine." },
      ],
      vibe: "☀️",
    });
  }

  if (hasVibe("adventurous")) {
    recs.push({
      id: 5, destination: "Queenstown, New Zealand", country: "New Zealand",
      tagline: "Where every view is a screensaver and every day is an adrenaline rush",
      match: 93, duration: "7–14 days", bestFor: "Adventure that changes your perspective",
      photo: PHOTOS.nz, accent: "#1B6B42", accentLight: "#e6f3ec",
      highlights: [
        { name: "Milford Sound Kayaking", type: "Adventure", price: "$$", rating: 4.9, desc: "Paddle through fjords under waterfalls. You'll feel impossibly small in the best way." },
        { name: "Onsen Hot Pools", type: "Wellness", price: "$$", rating: 4.8, desc: "Private cedar hot tubs overlooking the canyon. Best après-adventure recovery." },
        { name: "Nēvis Bungy", type: "Extreme Adventure", price: "$$", rating: 4.7, desc: "134m free fall above a river gorge. The scream-then-laugh moment you'll never forget." },
      ],
      vibe: "⚡",
    });
  }

  if (hasVibe("cultural") || hasVibe("creative")) {
    recs.push({
      id: 6, destination: "Oaxaca, Mexico", country: "Mexico",
      tagline: "Color, mezcal, and ancient traditions alive in every street corner",
      match: 92, duration: "5–10 days", bestFor: "Creative souls & culture lovers",
      photo: PHOTOS.oaxaca, accent: "#C44418", accentLight: "#fceee8",
      highlights: [
        { name: "Mezcal Tasting Trail", type: "Food & Drink", price: "$", rating: 4.8, desc: "Visit family-run palenques in the valley and taste small-batch mezcal at the source." },
        { name: "Textile Workshop", type: "Creative Experience", price: "$", rating: 4.9, desc: "Learn natural dyeing with cochineal and weaving from Zapotec artisans." },
        { name: "Hierve el Agua", type: "Nature", price: "$", rating: 4.6, desc: "Petrified waterfalls with infinity pools overlooking misty valleys." },
      ],
      vibe: "🎨",
    });
  }

  if (hasVibe("romantic")) {
    recs.push({
      id: 7, destination: "Amalfi Coast, Italy", country: "Italy",
      tagline: "Limoncello sunsets, cliffside dinners, and la dolce vita for two",
      match: 96, duration: "5–7 days", bestFor: "Romantic escape with beauty everywhere",
      photo: PHOTOS.amalfi, accent: "#C47A2C", accentLight: "#fdf3e8",
      highlights: [
        { name: "Path of the Gods Hike", type: "Nature & Adventure", price: "Free", rating: 4.9, desc: "A coastal trail above the clouds. Pack prosecco for the summit." },
        { name: "Cooking Class in Ravello", type: "Food Experience", price: "$$", rating: 4.8, desc: "Make fresh pasta with a nonna in her garden overlooking the sea." },
        { name: "Lo Scoglio", type: "Restaurant", price: "$$$", rating: 4.8, desc: "Family-run seaside restaurant. The seafood pasta will ruin you for all other pasta." },
      ],
      vibe: "🌙",
    });
  }

  if (recs.length < 2) {
    recs.push({
      id: 8, destination: "Lisbon, Portugal", country: "Portugal",
      tagline: "Pastel tiles, rooftop sunsets, and a city that moves to its own rhythm",
      match: 89, duration: "4–7 days", bestFor: "A little bit of everything",
      photo: PHOTOS.lisbon, accent: "#B87840", accentLight: "#f8f0e6",
      highlights: [
        { name: "LX Factory", type: "Creative Hub", price: "$", rating: 4.6, desc: "Converted warehouse district with indie shops, brunch spots, and live music." },
        { name: "Sintra Day Trip", type: "Cultural", price: "$", rating: 4.8, desc: "Fairytale palaces hidden in misty forests 30 min from the city." },
        { name: "Time Out Market", type: "Food Hall", price: "$$", rating: 4.5, desc: "All the best Lisbon chefs under one roof. The pastéis de nata are non-negotiable." },
      ],
      vibe: "🎭",
    });
    recs.push({
      id: 9, destination: "Chiang Mai, Thailand", country: "Thailand",
      tagline: "Temple bells, night markets, and the art of slowing way down",
      match: 87, duration: "7–14 days", bestFor: "Budget-friendly depth & discovery",
      photo: PHOTOS.chiangmai, accent: "#B8860B", accentLight: "#f8f2e2",
      highlights: [
        { name: "Monk Chat at Wat Chedi Luang", type: "Spiritual", price: "Free", rating: 4.9, desc: "Casual conversations with Buddhist monks. Perspective-shifting in the gentlest way." },
        { name: "Thai Cooking Farm", type: "Food Experience", price: "$", rating: 4.8, desc: "Harvest ingredients from an organic farm and cook a full Thai meal." },
        { name: "Doi Inthanon", type: "Nature", price: "$", rating: 4.7, desc: "Thailand's highest peak with cloud forests, waterfalls, and hill tribe villages." },
      ],
      vibe: "🕊️",
    });
  }
  return recs.sort((a, b) => b.match - a.match).slice(0, 4);
};

const LoadingDots = () => {
  const [d, setD] = useState("");
  useEffect(() => { const i = setInterval(() => setD((p) => p.length >= 3 ? "" : p + "."), 400); return () => clearInterval(i); }, []);
  return <span style={{ display: "inline-block", width: "20px", fontFamily: "monospace" }}>{d}</span>;
};

// ─── Theme ───
const T = {
  cream: "#FFFDF5", creamDeep: "#F4EFDF", forest: "#112401", sage: "#3A5A28",
  moss: "#5C7A3A", muted: "#8A9A72", faint: "#C4CEAB", coral: "#F55321",
  blue: "#3D97BD", leaf: "#6CA100", cardBg: "#FAFBF4",
  borderLight: "rgba(17,36,1,0.06)", borderMed: "rgba(17,36,1,0.1)",
  error: "#C0392B",
};

// ─── Reusable input component ───
const InputField = ({ label, type = "text", value, onChange, placeholder, error, autoFocus }) => (
  <div style={{ marginBottom: "20px" }}>
    <label style={{
      display: "block", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase",
      color: T.muted, marginBottom: "8px", fontWeight: 600,
      fontFamily: "'Cormorant Garamond', Georgia, serif",
    }}>{label}</label>
    <input
      type={type} value={value} onChange={onChange} placeholder={placeholder} autoFocus={autoFocus}
      style={{
        width: "100%", padding: "14px 18px", background: T.cardBg,
        border: `1.5px solid ${error ? T.error + "60" : T.borderLight}`,
        borderRadius: "4px", fontSize: "15px", color: T.forest,
        fontFamily: "'DM Sans', sans-serif", outline: "none", boxSizing: "border-box",
        transition: "border-color 0.25s ease",
      }}
      onFocus={(e) => e.target.style.borderColor = error ? T.error : T.sage}
      onBlur={(e) => e.target.style.borderColor = error ? T.error + "60" : T.borderLight}
    />
    {error && <p style={{ fontSize: "12px", color: T.error, marginTop: "6px", marginBottom: 0 }}>{error}</p>}
  </div>
);

export default function SensaApp() {
  // ─── Auth state ───
  const [user, setUser] = useState(null); // { name, email }
  const [authMode, setAuthMode] = useState("login"); // "login" | "signup"
  const [authFields, setAuthFields] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [authErrors, setAuthErrors] = useState({});
  const [showAuthModal, setShowAuthModal] = useState(false);

  // ─── Trip project state ───
  const [trips, setTrips] = useState([]); // saved trips
  const [currentTrip, setCurrentTrip] = useState(null); // { name, id, created }
  const [tripName, setTripName] = useState("");

  // ─── Existing quiz state ───
  const [step, setStep] = useState(0);
  const [selectedVibes, setSelectedVibes] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [freeText, setFreeText] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [expandedRec, setExpandedRec] = useState(null);
  const [fadeIn, setFadeIn] = useState(true);
  const [heroIdx, setHeroIdx] = useState(0);

  const heroPhotos = [PHOTOS.hero, PHOTOS.hero2, PHOTOS.hero3];
  useEffect(() => {
    if (step !== 0) return;
    const i = setInterval(() => setHeroIdx((p) => (p + 1) % heroPhotos.length), 5000);
    return () => clearInterval(i);
  }, [step]);

  const transition = (n) => {
    setFadeIn(false);
    setTimeout(() => { setStep(n); setFadeIn(true); window.scrollTo({ top: 0, behavior: "smooth" }); }, 260);
  };

  const handleGenerate = () => {
    transition(8);
    setTimeout(() => {
      const recs = generateRecommendations(selectedVibes, selectedActivities);
      setRecommendations(recs);
      // Save the trip
      if (currentTrip) {
        const savedTrip = {
          ...currentTrip,
          vibes: selectedVibes,
          activities: selectedActivities,
          style: selectedStyle,
          budget: selectedBudget,
          freeText,
          recommendations: recs,
          completedAt: new Date().toISOString(),
        };
        setTrips((prev) => prev.map((t) => t.id === savedTrip.id ? savedTrip : t));
      }
      transition(9);
    }, 2800);
  };

  const toggleVibe = (id) => setSelectedVibes((p) => p.includes(id) ? p.filter((v) => v !== id) : p.length < 3 ? [...p, id] : p);
  const toggleActivity = (id) => setSelectedActivities((p) => p.includes(id) ? p.filter((a) => a !== id) : p.length < 5 ? [...p, id] : p);

  // ─── Auth logic ───
  const validateAuth = () => {
    const errs = {};
    if (authMode === "signup" && !authFields.name.trim()) errs.name = "Name is required";
    if (!authFields.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(authFields.email)) errs.email = "Enter a valid email";
    if (!authFields.password) errs.password = "Password is required";
    else if (authFields.password.length < 6) errs.password = "At least 6 characters";
    if (authMode === "signup" && authFields.password !== authFields.confirmPassword) errs.confirmPassword = "Passwords don't match";
    setAuthErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (!validateAuth()) return;
    const newUser = {
      name: authMode === "signup" ? authFields.name : authFields.email.split("@")[0],
      email: authFields.email,
    };
    setUser(newUser);
    setShowAuthModal(false);
    setAuthFields({ name: "", email: "", password: "", confirmPassword: "" });
    setAuthErrors({});
    // If coming from hero CTA, go to dashboard
    if (step === 0) transition("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentTrip(null);
    setTrips([]);
    setSelectedVibes([]); setSelectedActivities([]); setSelectedStyle(null);
    setSelectedBudget(null); setFreeText(""); setRecommendations([]);
    setExpandedRec(null);
    transition(0);
  };

  const startNewTrip = () => {
    if (!tripName.trim()) return;
    const trip = {
      id: Date.now(),
      name: tripName.trim(),
      created: new Date().toISOString(),
    };
    setCurrentTrip(trip);
    setTrips((prev) => [...prev, trip]);
    setTripName("");
    setSelectedVibes([]); setSelectedActivities([]); setSelectedStyle(null);
    setSelectedBudget(null); setFreeText(""); setRecommendations([]);
    setExpandedRec(null);
    transition(3);
  };

  const openSavedTrip = (trip) => {
    setCurrentTrip(trip);
    if (trip.recommendations) {
      setSelectedVibes(trip.vibes || []);
      setSelectedActivities(trip.activities || []);
      setSelectedStyle(trip.style || null);
      setSelectedBudget(trip.budget || null);
      setFreeText(trip.freeText || "");
      setRecommendations(trip.recommendations);
      transition(9);
    } else {
      transition(3);
    }
  };

  const handleHeroCTA = () => {
    if (user) {
      transition("dashboard");
    } else {
      setAuthMode("signup");
      setShowAuthModal(true);
    }
  };

  // ─── Step mapping ───
  // 0: Landing, "dashboard": Trip dashboard, "newtrip": Name trip
  // 3–7: Quiz steps (vibes, activities, style, budget, freetext)
  // 8: Loading, 9: Results

  const quizStepNumber = { 3: 1, 4: 2, 5: 3, 6: 4, 7: 5 };
  const totalQuizSteps = 5;
  const progress = typeof step === "number" && step >= 3 && step <= 7 ? (quizStepNumber[step] / totalQuizSteps) * 100 : step === 9 ? 100 : 0;

  const primaryBtn = (en) => ({
    background: en ? T.forest : "rgba(17,36,1,0.04)", border: "none",
    color: en ? T.cream : T.muted, padding: "15px 42px", fontSize: "12px",
    letterSpacing: "3px", textTransform: "uppercase", cursor: en ? "pointer" : "default",
    borderRadius: "0", transition: "all 0.3s ease", fontWeight: 600,
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  });

  const backBtnS = {
    background: "transparent", border: "none", color: T.muted, fontSize: "12px",
    letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", padding: "14px 0",
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600,
  };

  const stepLabelS = {
    fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase",
    color: T.muted, marginBottom: "16px", fontWeight: 600,
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  };

  const headingS = {
    fontSize: "34px", fontWeight: 300, marginBottom: "8px",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    color: T.forest, letterSpacing: "-0.3px", lineHeight: 1.15,
  };

  const subtextS = { color: T.moss, fontSize: "14px", marginBottom: "40px", lineHeight: 1.6 };

  // Format date
  const fmtDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div style={{ minHeight: "100vh", background: T.cream, color: T.forest, fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes gentleSpin { to { transform: rotate(360deg); } }
        @keyframes slideDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes heroPulse { 0%,100% { opacity:0; } 8% { opacity:1; } 92% { opacity:1; } 100% { opacity:0; } }
        @keyframes bounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(6px); } }
        @keyframes modalIn { from { opacity:0; transform:scale(0.97) translateY(8px); } to { opacity:1; transform:scale(1) translateY(0); } }
        @keyframes overlayIn { from { opacity:0; } to { opacity:1; } }
      `}</style>

      {/* ═══════════ AUTH MODAL ═══════════ */}
      {showAuthModal && (
        <div
          onClick={() => setShowAuthModal(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(17,36,1,0.5)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px", animation: "overlayIn 0.3s ease both",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: T.cream, width: "100%", maxWidth: "420px",
              padding: "48px 40px 40px", position: "relative",
              border: `1px solid ${T.borderLight}`,
              animation: "modalIn 0.35s ease both",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setShowAuthModal(false)}
              style={{
                position: "absolute", top: "16px", right: "20px",
                background: "none", border: "none", fontSize: "20px",
                color: T.muted, cursor: "pointer", fontFamily: "inherit",
              }}
            >×</button>

            {/* Logo */}
            <div style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "28px", fontWeight: 300, color: T.forest, marginBottom: "6px",
            }}>
              sensa<span style={{ color: T.coral }}>.</span>
            </div>
            <p style={{
              fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase",
              color: T.muted, marginBottom: "36px", fontWeight: 600,
            }}>
              {authMode === "login" ? "Welcome back" : "Create your account"}
            </p>

            <div>
              {authMode === "signup" && (
                <InputField
                  label="Your Name" value={authFields.name} autoFocus
                  onChange={(e) => setAuthFields({ ...authFields, name: e.target.value })}
                  placeholder="What should we call you?" error={authErrors.name}
                />
              )}
              <InputField
                label="Email" type="email" value={authFields.email}
                autoFocus={authMode === "login"}
                onChange={(e) => setAuthFields({ ...authFields, email: e.target.value })}
                placeholder="your@email.com" error={authErrors.email}
              />
              <InputField
                label="Password" type="password" value={authFields.password}
                onChange={(e) => setAuthFields({ ...authFields, password: e.target.value })}
                placeholder="••••••••" error={authErrors.password}
              />
              {authMode === "signup" && (
                <InputField
                  label="Confirm Password" type="password" value={authFields.confirmPassword}
                  onChange={(e) => setAuthFields({ ...authFields, confirmPassword: e.target.value })}
                  placeholder="••••••••" error={authErrors.confirmPassword}
                />
              )}

              <button onClick={handleAuth} style={{
                width: "100%", background: T.forest, border: "none", color: T.cream,
                padding: "15px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
                cursor: "pointer", fontWeight: 600, marginTop: "8px",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                transition: "background 0.3s ease",
              }}
                onMouseEnter={(e) => e.target.style.background = T.sage}
                onMouseLeave={(e) => e.target.style.background = T.forest}
              >
                {authMode === "login" ? "Sign In" : "Create Account"}
              </button>

              {/* Divider */}
              <div style={{
                display: "flex", alignItems: "center", gap: "16px",
                margin: "24px 0",
              }}>
                <div style={{ flex: 1, height: "1px", background: T.borderMed }} />
                <span style={{ fontSize: "10px", color: T.muted, letterSpacing: "2px", textTransform: "uppercase" }}>or</span>
                <div style={{ flex: 1, height: "1px", background: T.borderMed }} />
              </div>

              {/* Google button */}
              <button style={{
                width: "100%", background: "#fff", border: `1.5px solid ${T.borderMed}`,
                padding: "13px", fontSize: "13px", color: T.forest,
                cursor: "pointer", fontFamily: "inherit", display: "flex",
                alignItems: "center", justifyContent: "center", gap: "10px",
                transition: "border-color 0.25s ease",
              }}
                onMouseEnter={(e) => e.target.style.borderColor = T.sage}
                onMouseLeave={(e) => e.target.style.borderColor = T.borderMed}
                onClick={handleAuth}
              >
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continue with Google
              </button>

              {/* Toggle */}
              <p style={{ textAlign: "center", fontSize: "13px", color: T.muted, marginTop: "24px" }}>
                {authMode === "login" ? "New to Sensa? " : "Already have an account? "}
                <span
                  onClick={() => { setAuthMode(authMode === "login" ? "signup" : "login"); setAuthErrors({}); }}
                  style={{ color: T.sage, cursor: "pointer", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  {authMode === "login" ? "Create an account" : "Sign in"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════ TOP NAV (when logged in) ═══════════ */}
      {user && step !== 0 && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
          background: "rgba(255,253,245,0.92)", backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${T.borderLight}`,
          animation: "slideDown 0.4s ease both",
        }}>
          <div style={{
            maxWidth: "640px", margin: "0 auto", padding: "14px 28px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div
              onClick={() => transition("dashboard")}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "20px", fontWeight: 300, color: T.forest, cursor: "pointer",
              }}
            >
              sensa<span style={{ color: T.coral }}>.</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {currentTrip && (typeof step === "number" && step >= 3) && (
                <span style={{
                  fontSize: "11px", color: T.muted, letterSpacing: "1px",
                  maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>
                  {currentTrip.name}
                </span>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "30px", height: "30px", borderRadius: "50%",
                  background: T.forest, color: T.cream, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "12px", fontWeight: 700,
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <button onClick={handleLogout} style={{
                  background: "none", border: "none", fontSize: "11px",
                  color: T.muted, cursor: "pointer", letterSpacing: "1px",
                  textTransform: "uppercase", fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 600,
                }}>Sign Out</button>
              </div>
            </div>
          </div>
          {/* Progress bar for quiz steps */}
          {typeof step === "number" && step >= 3 && step <= 7 && (
            <div style={{ height: "2px", background: T.borderLight }}>
              <div style={{ height: "100%", background: T.forest, width: `${progress}%`, transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)" }} />
            </div>
          )}
        </div>
      )}

      {/* ═══════════ LANDING ═══════════ */}
      {step === 0 && (
        <div>
          {/* Hero section */}
          <div style={{
            position: "relative", height: "100vh", overflow: "hidden",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
          }}>
            {heroPhotos.map((src, i) => (
              <div key={i} style={{
                position: "absolute", inset: 0,
                backgroundImage: `url(${src})`,
                backgroundSize: "cover", backgroundPosition: "center",
                opacity: heroIdx === i ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
              }} />
            ))}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(17,36,1,0.15) 0%, rgba(17,36,1,0.3) 40%, rgba(17,36,1,0.75) 80%, rgba(17,36,1,0.92) 100%)",
            }} />

            {/* Top right auth buttons */}
            <div style={{
              position: "absolute", top: "24px", right: "28px", zIndex: 10,
              display: "flex", gap: "12px", animation: "fadeUp 0.8s ease 0.3s both",
            }}>
              {user ? (
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "rgba(255,253,245,0.7)", fontSize: "13px" }}>Hi, {user.name}</span>
                  <button onClick={() => transition("dashboard")} style={{
                    background: "rgba(255,253,245,0.15)", backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,253,245,0.25)", color: "#FFFDF5",
                    padding: "9px 22px", fontSize: "11px", letterSpacing: "2px",
                    textTransform: "uppercase", cursor: "pointer", fontWeight: 600,
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                  }}>My Trips</button>
                </div>
              ) : (
                <>
                  <button onClick={() => { setAuthMode("login"); setShowAuthModal(true); }} style={{
                    background: "transparent", border: "1px solid rgba(255,253,245,0.3)",
                    color: "rgba(255,253,245,0.8)", padding: "9px 22px", fontSize: "11px",
                    letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer",
                    fontWeight: 600, fontFamily: "'Cormorant Garamond', Georgia, serif",
                    transition: "all 0.3s ease",
                  }}
                    onMouseEnter={(e) => { e.target.style.background = "rgba(255,253,245,0.1)"; e.target.style.borderColor = "rgba(255,253,245,0.5)"; }}
                    onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(255,253,245,0.3)"; }}
                  >Sign In</button>
                  <button onClick={() => { setAuthMode("signup"); setShowAuthModal(true); }} style={{
                    background: "rgba(255,253,245,0.15)", backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,253,245,0.25)", color: "#FFFDF5",
                    padding: "9px 22px", fontSize: "11px", letterSpacing: "2px",
                    textTransform: "uppercase", cursor: "pointer", fontWeight: 600,
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    transition: "all 0.3s ease",
                  }}
                    onMouseEnter={(e) => e.target.style.background = "rgba(255,253,245,0.25)"}
                    onMouseLeave={(e) => e.target.style.background = "rgba(255,253,245,0.15)"}
                  >Sign Up</button>
                </>
              )}
            </div>

            <div style={{
              position: "relative", zIndex: 2, padding: "0 32px 60px",
              maxWidth: "640px", margin: "0 auto", width: "100%", boxSizing: "border-box",
            }}>
              <h1 style={{
                fontSize: "clamp(52px, 14vw, 80px)", fontWeight: 300,
                lineHeight: 1.0, margin: "0 0 12px", letterSpacing: "-2px",
                fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#FFFDF5",
                animation: "fadeUp 0.8s ease 0.2s both",
              }}>
                sensa<span style={{ color: T.coral }}>.</span>
              </h1>
              <p style={{
                fontSize: "11px", letterSpacing: "5px", textTransform: "uppercase",
                color: "rgba(255,253,245,0.5)", marginBottom: "24px", fontWeight: 600,
                animation: "fadeUp 0.8s ease 0.4s both",
              }}>Travel by feeling</p>
              <p style={{
                fontSize: "20px", lineHeight: 1.7, color: "rgba(255,253,245,0.8)",
                maxWidth: "440px", margin: "0 0 40px",
                fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300,
                animation: "fadeUp 0.8s ease 0.6s both",
              }}>
                Forget sightseeing checklists. Tell us how you want to{" "}
                <em style={{ color: "#fff", fontWeight: 500 }}>feel</em>,
                and we'll find the experiences that change you.
              </p>
              <button
                onClick={handleHeroCTA}
                style={{
                  background: "rgba(255,253,245,0.12)", backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,253,245,0.25)", color: "#FFFDF5",
                  padding: "17px 52px", fontSize: "12px", letterSpacing: "4px",
                  textTransform: "uppercase", cursor: "pointer", borderRadius: "0",
                  fontWeight: 600, fontFamily: "'Cormorant Garamond', Georgia, serif",
                  transition: "all 0.35s ease", animation: "fadeUp 0.8s ease 0.8s both",
                }}
                onMouseEnter={(e) => { e.target.style.background = "rgba(255,253,245,0.22)"; e.target.style.borderColor = "rgba(255,253,245,0.5)"; }}
                onMouseLeave={(e) => { e.target.style.background = "rgba(255,253,245,0.12)"; e.target.style.borderColor = "rgba(255,253,245,0.25)"; }}
              >
                Start Your Journey
              </button>
            </div>

            <div style={{
              position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
              zIndex: 2, animation: "bounce 2s ease infinite",
            }}>
              <div style={{
                width: "24px", height: "38px", borderRadius: "12px",
                border: "1.5px solid rgba(255,253,245,0.25)",
                display: "flex", justifyContent: "center", paddingTop: "8px",
              }}>
                <div style={{ width: "3px", height: "8px", borderRadius: "2px", background: "rgba(255,253,245,0.4)" }} />
              </div>
            </div>
          </div>

          {/* Below-fold section */}
          <div style={{ padding: "80px 32px 100px", maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <p style={{
              fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase",
              color: T.muted, marginBottom: "20px", fontWeight: 700,
            }}>How it works</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "32px", fontWeight: 300, color: T.forest, marginBottom: "48px",
              lineHeight: 1.25, letterSpacing: "-0.3px",
            }}>
              We match your energy to the world's most<br />
              <em style={{ fontWeight: 500 }}>transformative experiences</em>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginBottom: "56px" }}>
              {[
                { num: "01", title: "Create an account", desc: "Save trips, revisit ideas, build your travel identity" },
                { num: "02", title: "Tell us your vibe", desc: "How you want to feel, what draws you in" },
                { num: "03", title: "Get matched", desc: "Curated experiences, one tap to book" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: "28px", fontWeight: 300, color: T.faint,
                    fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: "10px",
                  }}>{s.num}</div>
                  <div style={{
                    fontSize: "15px", fontWeight: 600, color: T.forest, marginBottom: "6px",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                  }}>{s.title}</div>
                  <div style={{ fontSize: "12px", color: T.muted, lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            <button onClick={handleHeroCTA} style={{
              background: T.forest, border: "none", color: T.cream,
              padding: "17px 52px", fontSize: "12px", letterSpacing: "4px",
              textTransform: "uppercase", cursor: "pointer", borderRadius: "0",
              fontWeight: 600, fontFamily: "'Cormorant Garamond', Georgia, serif",
              transition: "all 0.35s ease",
            }}
              onMouseEnter={(e) => e.target.style.background = T.sage}
              onMouseLeave={(e) => e.target.style.background = T.forest}
            >
              {user ? "Go to My Trips" : "Get Started Free"}
            </button>
          </div>
        </div>
      )}

      {/* ═══════════ DASHBOARD — TRIP HUB ═══════════ */}
      {step === "dashboard" && user && (
        <div style={{
          maxWidth: "640px", margin: "0 auto", padding: "0 28px",
          opacity: fadeIn ? 1 : 0, transform: fadeIn ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.26s ease, transform 0.26s ease",
        }}>
          <div style={{ paddingTop: "90px", paddingBottom: "80px" }}>
            <p style={{
              fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase",
              color: T.muted, marginBottom: "12px", fontWeight: 600,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              animation: "fadeUp 0.5s ease both",
            }}>Welcome back, {user.name}</p>
            <h2 style={{
              ...headingS, fontSize: "38px", marginBottom: "40px",
              animation: "fadeUp 0.5s ease 0.1s both",
            }}>
              Your Trips<span style={{ color: T.coral }}>.</span>
            </h2>

            {/* New Trip Card */}
            <div
              onClick={() => transition("newtrip")}
              style={{
                border: `2px dashed ${T.borderMed}`, padding: "36px 28px",
                cursor: "pointer", textAlign: "center",
                transition: "all 0.3s ease", marginBottom: "20px",
                animation: "fadeUp 0.5s ease 0.15s both",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.sage; e.currentTarget.style.background = "rgba(58,90,40,0.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.borderMed; e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                background: T.forest, color: T.cream, display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "24px", margin: "0 auto 16px", fontWeight: 300,
              }}>+</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "18px", fontWeight: 600, color: T.forest, marginBottom: "4px",
              }}>Plan a New Trip</div>
              <div style={{ fontSize: "12px", color: T.muted }}>Start with a vibe, end with a destination</div>
            </div>

            {/* Saved Trips */}
            {trips.length > 0 && (
              <div>
                <p style={{
                  fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase",
                  color: T.muted, marginBottom: "14px", marginTop: "36px", fontWeight: 700,
                }}>Saved Trips</p>
                <div style={{ display: "grid", gap: "10px" }}>
                  {trips.map((trip, i) => (
                    <div
                      key={trip.id}
                      onClick={() => openSavedTrip(trip)}
                      style={{
                        background: "#fff", border: `1.5px solid ${T.borderLight}`,
                        borderRadius: "4px", padding: "20px 22px",
                        cursor: "pointer", transition: "all 0.25s ease",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        animation: `fadeUp 0.5s ease ${0.2 + i * 0.08}s both`,
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.sage + "40"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.04)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.borderLight; e.currentTarget.style.boxShadow = "none"; }}
                    >
                      <div>
                        <div style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "17px", fontWeight: 600, color: T.forest, marginBottom: "4px",
                        }}>{trip.name}</div>
                        <div style={{ fontSize: "11px", color: T.muted }}>
                          {fmtDate(trip.created)}
                          {trip.recommendations ? ` · ${trip.recommendations.length} matches` : " · In progress"}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        {trip.recommendations && (
                          <div style={{ display: "flex", gap: "2px" }}>
                            {trip.vibes?.slice(0, 3).map((v) => {
                              const vibe = VIBES.find((vb) => vb.id === v);
                              return <span key={v} style={{ fontSize: "16px" }}>{vibe?.emoji}</span>;
                            })}
                          </div>
                        )}
                        <span style={{
                          fontSize: "10px", color: T.muted, letterSpacing: "2px",
                          textTransform: "uppercase", fontWeight: 600,
                        }}>View →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {trips.length === 0 && (
              <div style={{
                textAlign: "center", padding: "40px 20px", color: T.muted,
                animation: "fadeUp 0.5s ease 0.25s both",
              }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "16px", fontStyle: "italic" }}>
                  No trips yet — your first adventure is waiting
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════ NEW TRIP — NAME IT ═══════════ */}
      {step === "newtrip" && user && (
        <div style={{
          maxWidth: "640px", margin: "0 auto", padding: "0 28px",
          opacity: fadeIn ? 1 : 0, transform: fadeIn ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.26s ease, transform 0.26s ease",
        }}>
          <div style={{ paddingTop: "90px", paddingBottom: "120px" }}>
            <p style={stepLabelS}>New Trip</p>
            <h2 style={headingS}>Name your trip<span style={{ color: T.coral }}>.</span></h2>
            <p style={subtextS}>Give it a name you'll remember — you can always change it later</p>

            <input
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && startNewTrip()}
              placeholder="e.g. Bali Soul Reset, Summer with the Girls, Solo Discovery..."
              autoFocus
              style={{
                width: "100%", padding: "18px 22px",
                background: T.cardBg, border: `1.5px solid ${T.borderLight}`,
                borderRadius: "4px", fontSize: "17px", color: T.forest,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400, outline: "none", boxSizing: "border-box",
                transition: "border-color 0.25s ease",
                fontStyle: tripName ? "normal" : "italic",
              }}
              onFocus={(e) => e.target.style.borderColor = T.sage}
              onBlur={(e) => e.target.style.borderColor = T.borderLight}
            />

            {/* Quick suggestions */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
              {["Summer Escape", "Birthday Trip", "Anniversary Getaway", "Solo Adventure", "Wellness Retreat"].map((s) => (
                <button key={s} onClick={() => setTripName(s)} style={{
                  background: "transparent", border: `1px solid ${T.borderMed}`,
                  color: T.muted, padding: "6px 14px", fontSize: "11px",
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "all 0.2s ease", letterSpacing: "0.5px",
                }}
                  onMouseEnter={(e) => { e.target.style.borderColor = T.sage; e.target.style.color = T.sage; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = T.borderMed; e.target.style.color = T.muted; }}
                >{s}</button>
              ))}
            </div>

            <div style={{ marginTop: "48px", display: "flex", justifyContent: "space-between" }}>
              <button onClick={() => transition("dashboard")} style={backBtnS}>← Back</button>
              <button
                onClick={startNewTrip}
                style={primaryBtn(tripName.trim().length > 0)}
                onMouseEnter={(e) => tripName.trim() && (e.target.style.background = T.sage)}
                onMouseLeave={(e) => tripName.trim() && (e.target.style.background = T.forest)}
              >Begin ✦</button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════ QUIZ STEPS ═══════════ */}
      {typeof step === "number" && step >= 3 && step <= 7 && (
        <div style={{
          maxWidth: "640px", margin: "0 auto", padding: "0 28px",
          opacity: fadeIn ? 1 : 0, transform: fadeIn ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.26s ease, transform 0.26s ease",
        }}>
          {/* STEP 3: VIBES */}
          {step === 3 && (
            <div style={{ paddingTop: "90px", paddingBottom: "120px" }}>
              <p style={stepLabelS}>Step 1 of 5 · {currentTrip?.name}</p>
              <h2 style={headingS}>How do you want to <em>feel</em>?</h2>
              <p style={subtextS}>Choose up to 3 vibes for your trip</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {VIBES.map((vibe) => {
                  const sel = selectedVibes.includes(vibe.id);
                  return (
                    <button key={vibe.id} onClick={() => toggleVibe(vibe.id)} style={{
                      background: sel ? T.forest : T.cardBg,
                      border: `1.5px solid ${sel ? T.forest : T.borderLight}`,
                      borderRadius: "4px", padding: "20px 16px", textAlign: "left",
                      cursor: "pointer", transition: "all 0.25s ease",
                      color: sel ? T.cream : T.forest, fontFamily: "inherit",
                    }}>
                      <div style={{ fontSize: "22px", marginBottom: "8px" }}>{vibe.emoji}</div>
                      <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "16px", fontWeight: 600, marginBottom: "3px" }}>{vibe.label}</div>
                      <div style={{ fontSize: "11.5px", color: sel ? "rgba(255,253,245,0.6)" : T.muted, lineHeight: 1.45 }}>{vibe.desc}</div>
                    </button>
                  );
                })}
              </div>
              <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => transition("newtrip")} style={backBtnS}>← Back</button>
                <button onClick={() => selectedVibes.length > 0 && transition(4)} style={primaryBtn(selectedVibes.length > 0)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 4: ACTIVITIES */}
          {step === 4 && (
            <div style={{ paddingTop: "90px", paddingBottom: "120px" }}>
              <p style={stepLabelS}>Step 2 of 5 · {currentTrip?.name}</p>
              <h2 style={headingS}>What draws you in?</h2>
              <p style={subtextS}>Pick up to 5 activities you'd love</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {ACTIVITIES.map((a) => {
                  const sel = selectedActivities.includes(a.id);
                  return (
                    <button key={a.id} onClick={() => toggleActivity(a.id)} style={{
                      background: sel ? T.forest : "transparent",
                      border: `1.5px solid ${sel ? T.forest : T.borderMed}`,
                      color: sel ? T.cream : T.sage, padding: "9px 20px",
                      fontSize: "13px", cursor: "pointer", borderRadius: "0",
                      transition: "all 0.2s ease", fontWeight: sel ? 600 : 400, fontFamily: "inherit",
                    }}>{a.label}</button>
                  );
                })}
              </div>
              <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => transition(3)} style={backBtnS}>← Back</button>
                <button onClick={() => selectedActivities.length > 0 && transition(5)} style={primaryBtn(selectedActivities.length > 0)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 5: STYLE */}
          {step === 5 && (
            <div style={{ paddingTop: "90px", paddingBottom: "120px" }}>
              <p style={stepLabelS}>Step 3 of 5 · {currentTrip?.name}</p>
              <h2 style={headingS}>Who's coming along?</h2>
              <p style={subtextS}>This helps us tailor the experience</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                {TRAVEL_STYLES.map((s) => {
                  const sel = selectedStyle === s.id;
                  return (
                    <button key={s.id} onClick={() => setSelectedStyle(s.id)} style={{
                      background: sel ? T.forest : T.cardBg,
                      border: `1.5px solid ${sel ? T.forest : T.borderLight}`,
                      borderRadius: "4px", padding: "24px 8px", textAlign: "center",
                      cursor: "pointer", transition: "all 0.25s ease",
                      color: sel ? T.cream : T.forest, fontFamily: "inherit",
                    }}>
                      <div style={{ fontSize: "26px", marginBottom: "8px" }}>{s.emoji}</div>
                      <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "14px", fontWeight: 600 }}>{s.label}</div>
                    </button>
                  );
                })}
              </div>
              <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => transition(4)} style={backBtnS}>← Back</button>
                <button onClick={() => selectedStyle && transition(6)} style={primaryBtn(!!selectedStyle)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 6: BUDGET */}
          {step === 6 && (
            <div style={{ paddingTop: "90px", paddingBottom: "120px" }}>
              <p style={stepLabelS}>Step 4 of 5 · {currentTrip?.name}</p>
              <h2 style={headingS}>What's your budget?</h2>
              <p style={subtextS}>No judgment — just helps us match you right</p>
              <div style={{ display: "grid", gap: "8px" }}>
                {BUDGETS.map((b) => {
                  const sel = selectedBudget === b.id;
                  return (
                    <button key={b.id} onClick={() => setSelectedBudget(b.id)} style={{
                      background: sel ? T.forest : T.cardBg,
                      border: `1.5px solid ${sel ? T.forest : T.borderLight}`,
                      borderRadius: "4px", padding: "18px 22px", textAlign: "left",
                      cursor: "pointer", transition: "all 0.25s ease",
                      color: sel ? T.cream : T.forest,
                      display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "inherit",
                    }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "16px", fontWeight: 600 }}>{b.label}</span>
                      <span style={{ fontSize: "12px", color: sel ? "rgba(255,253,245,0.6)" : T.muted }}>{b.desc}</span>
                    </button>
                  );
                })}
              </div>
              <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => transition(5)} style={backBtnS}>← Back</button>
                <button onClick={() => selectedBudget && transition(7)} style={primaryBtn(!!selectedBudget)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 7: FREE TEXT */}
          {step === 7 && (
            <div style={{ paddingTop: "90px", paddingBottom: "120px" }}>
              <p style={stepLabelS}>Step 5 of 5 · {currentTrip?.name}</p>
              <h2 style={headingS}>Anything else we should know?</h2>
              <p style={subtextS}>Dream out loud — the more detail, the better your match</p>
              <textarea value={freeText} onChange={(e) => setFreeText(e.target.value)}
                placeholder="e.g. My friends and I want a girls trip with tropical vibes, fun nightlife but also yoga time..."
                style={{
                  width: "100%", minHeight: "150px", background: T.cardBg,
                  border: `1.5px solid ${T.borderLight}`, borderRadius: "4px", padding: "20px",
                  color: T.forest, fontSize: "14px", lineHeight: 1.75, resize: "vertical",
                  fontFamily: "inherit", outline: "none", boxSizing: "border-box",
                  transition: "border-color 0.25s ease",
                }}
                onFocus={(e) => e.target.style.borderColor = T.sage}
                onBlur={(e) => e.target.style.borderColor = T.borderLight}
              />
              <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => transition(6)} style={backBtnS}>← Back</button>
                <button onClick={handleGenerate} style={primaryBtn(true)}
                  onMouseEnter={(e) => e.target.style.background = T.sage}
                  onMouseLeave={(e) => e.target.style.background = T.forest}
                >Find My Trip ✦</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══════════ LOADING ═══════════ */}
      {step === 8 && (
        <div style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center", textAlign: "center",
          opacity: fadeIn ? 1 : 0, transition: "opacity 0.26s ease",
        }}>
          <div style={{
            width: "32px", height: "32px", border: `1.5px solid ${T.borderLight}`,
            borderTop: `2px solid ${T.forest}`, borderRadius: "50%",
            animation: "gentleSpin 1s linear infinite", marginBottom: "28px",
          }} />
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", color: T.forest, fontWeight: 400, fontStyle: "italic" }}>
            Searching the world for you<LoadingDots />
          </p>
          <p style={{ fontSize: "12px", color: T.muted, marginTop: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>
            Matching vibes, activities & hidden gems
          </p>
        </div>
      )}

      {/* ═══════════ RESULTS ═══════════ */}
      {step === 9 && (
        <div style={{
          maxWidth: "640px", margin: "0 auto", padding: "0 28px",
          opacity: fadeIn ? 1 : 0, transform: fadeIn ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.26s ease, transform 0.26s ease",
        }}>
          <div style={{ paddingTop: "90px", paddingBottom: "80px" }}>
            <p style={stepLabelS}>{currentTrip?.name || "Your Matches"}</p>
            <h2 style={headingS}>We found your trips<span style={{ color: T.coral }}>.</span></h2>
            <p style={subtextS}>Curated based on everything you told us</p>

            <div style={{ display: "grid", gap: "20px" }}>
              {recommendations.map((rec, i) => {
                const isExp = expandedRec === rec.id;
                return (
                  <div key={rec.id} onClick={() => setExpandedRec(isExp ? null : rec.id)} style={{
                    background: "#fff", border: `1.5px solid ${isExp ? rec.accent + "30" : T.borderLight}`,
                    borderRadius: "6px", overflow: "hidden", cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: isExp ? `0 12px 40px ${rec.accent}15` : `0 2px 8px rgba(0,0,0,0.04)`,
                    animation: `fadeUp 0.5s ease ${i * 0.12}s both`,
                  }}>
                    <div style={{
                      height: isExp ? "220px" : "180px",
                      backgroundImage: `url(${rec.photo})`,
                      backgroundSize: "cover", backgroundPosition: "center",
                      position: "relative", transition: "height 0.4s ease",
                    }}>
                      <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(17,36,1,0.7) 80%, rgba(17,36,1,0.88) 100%)",
                      }} />
                      <div style={{
                        position: "absolute", top: "14px", right: "14px",
                        background: "rgba(255,253,245,0.15)", backdropFilter: "blur(12px)",
                        padding: "5px 14px", borderRadius: "2px",
                        fontSize: "11px", fontWeight: 700, letterSpacing: "1px", color: "#fff",
                      }}>{rec.match}% match</div>
                      <div style={{ position: "absolute", bottom: "20px", left: "22px", right: "22px", color: "#fff" }}>
                        <div style={{ fontSize: "22px", marginBottom: "4px" }}>{rec.vibe}</div>
                        <h3 style={{
                          fontSize: "26px", fontWeight: 400, margin: "0 0 4px",
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                        }}>{rec.destination}</h3>
                        <div style={{ fontSize: "11px", opacity: 0.6, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                          {rec.country} · {rec.duration}
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: "16px 22px", borderBottom: isExp ? `1px solid ${T.borderLight}` : "none" }}>
                      <p style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "16px", fontStyle: "italic", color: T.moss,
                        margin: "0 0 10px", lineHeight: 1.5,
                      }}>{rec.tagline}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{
                          fontSize: "14px", color: rec.accent, fontWeight: 600,
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                        }}>✦ {rec.bestFor}</div>
                        <div style={{
                          fontSize: "10px", color: T.muted, textTransform: "uppercase",
                          letterSpacing: "2px", fontWeight: 600,
                        }}>{isExp ? "Collapse" : "View →"}</div>
                      </div>
                    </div>

                    {isExp && (
                      <div style={{ padding: "6px 22px 24px" }}>
                        <div style={{
                          fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase",
                          color: T.muted, marginBottom: "14px", marginTop: "8px", fontWeight: 700,
                        }}>Recommended Experiences</div>
                        {rec.highlights.map((h, j) => (
                          <div key={j} style={{
                            padding: "18px 0",
                            borderBottom: j < rec.highlights.length - 1 ? `1px solid ${T.borderLight}` : "none",
                          }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                              <div>
                                <div style={{
                                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                                  fontSize: "17px", fontWeight: 600, color: T.forest, marginBottom: "3px",
                                }}>{h.name}</div>
                                <div style={{ fontSize: "11px", color: T.muted }}>{h.type} · {h.price} · ⭐ {h.rating}</div>
                              </div>
                              <button onClick={(e) => e.stopPropagation()} style={{
                                background: rec.accent, border: "none", color: "#fff",
                                padding: "7px 20px", fontSize: "10px", letterSpacing: "1.5px",
                                textTransform: "uppercase", cursor: "pointer", borderRadius: "0",
                                fontWeight: 700, fontFamily: "inherit", transition: "all 0.2s ease",
                              }}
                                onMouseEnter={(e) => e.target.style.opacity = "0.85"}
                                onMouseLeave={(e) => e.target.style.opacity = "1"}
                              >Book →</button>
                            </div>
                            <p style={{ fontSize: "13px", color: T.moss, lineHeight: 1.65, margin: 0 }}>{h.desc}</p>
                          </div>
                        ))}
                        <div style={{
                          marginTop: "20px", padding: "14px 18px",
                          background: rec.accentLight, border: `1px solid ${rec.accent}18`,
                          borderRadius: "3px", fontSize: "12px", color: rec.accent,
                          textAlign: "center", fontWeight: 600,
                        }}>
                          Full itinerary & booking via Viator, GetYourGuide & Beli
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: "center", marginTop: "48px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <button onClick={() => transition("dashboard")} style={{
                background: T.forest, border: "none", color: T.cream,
                padding: "13px 36px", fontSize: "11px", letterSpacing: "3px",
                textTransform: "uppercase", cursor: "pointer", borderRadius: "0",
                fontWeight: 600, fontFamily: "'Cormorant Garamond', Georgia, serif",
                transition: "background 0.3s ease",
              }}
                onMouseEnter={(e) => e.target.style.background = T.sage}
                onMouseLeave={(e) => e.target.style.background = T.forest}
              >My Trips</button>
              <button onClick={() => {
                setCurrentTrip(null); setSelectedVibes([]); setSelectedActivities([]);
                setSelectedStyle(null); setSelectedBudget(null); setFreeText("");
                setRecommendations([]); setExpandedRec(null); transition("newtrip");
              }} style={{
                background: "transparent", border: `1.5px solid ${T.borderMed}`,
                color: T.muted, padding: "13px 36px", fontSize: "11px",
                letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer",
                borderRadius: "0", fontWeight: 600, fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}>New Trip</button>
            </div>
          </div>
        </div>
      )}

      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </div>
  );
}
