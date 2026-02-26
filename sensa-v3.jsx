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

// Nature photos from Unsplash (free)
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

export default function SensaApp() {
  const [step, setStep] = useState(0);
  const [selectedVibes, setSelectedVibes] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [freeText, setFreeText] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [expandedRec, setExpandedRec] = useState(null);
  const [fadeIn, setFadeIn] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);

  const heroPhotos = [PHOTOS.hero, PHOTOS.hero2, PHOTOS.hero3];
  useEffect(() => {
    if (step !== 0) return;
    const i = setInterval(() => setHeroIdx((p) => (p + 1) % heroPhotos.length), 5000);
    return () => clearInterval(i);
  }, [step]);

  const transition = (n) => { setFadeIn(false); setTimeout(() => { setStep(n); setFadeIn(true); window.scrollTo({ top: 0, behavior: "smooth" }); }, 260); };
  const handleGenerate = () => { transition(6); setTimeout(() => { setRecommendations(generateRecommendations(selectedVibes, selectedActivities)); transition(7); }, 2800); };
  const toggleVibe = (id) => setSelectedVibes((p) => p.includes(id) ? p.filter((v) => v !== id) : p.length < 3 ? [...p, id] : p);
  const toggleActivity = (id) => setSelectedActivities((p) => p.includes(id) ? p.filter((a) => a !== id) : p.length < 5 ? [...p, id] : p);

  const T = {
    cream: "#FFFDF5", creamDeep: "#F4EFDF", forest: "#112401", sage: "#3A5A28",
    moss: "#5C7A3A", muted: "#8A9A72", faint: "#C4CEAB", coral: "#F55321",
    blue: "#3D97BD", leaf: "#6CA100", cardBg: "#FAFBF4",
    borderLight: "rgba(17,36,1,0.06)", borderMed: "rgba(17,36,1,0.1)",
  };

  const progress = step === 0 ? 0 : step >= 7 ? 100 : (step / 6) * 100;

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

  return (
    <div style={{ minHeight: "100vh", background: T.cream, color: T.forest, fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes gentleSpin { to { transform: rotate(360deg); } }
        @keyframes slideDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes heroPulse { 0%,100% { opacity:0; } 8% { opacity:1; } 92% { opacity:1; } 100% { opacity:0; } }
        @keyframes bounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(6px); } }
      `}</style>

      {/* Progress bar for steps */}
      {step > 0 && step < 7 && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: T.borderLight, zIndex: 50 }}>
          <div style={{ height: "100%", background: T.forest, width: `${progress}%`, transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)" }} />
        </div>
      )}

      {/* ═══════════ LANDING — FULL IMMERSIVE ═══════════ */}
      {step === 0 && (
        <div>
          {/* Hero section — full viewport with cycling photos */}
          <div style={{
            position: "relative", height: "100vh", overflow: "hidden",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
          }}>
            {/* Photo layers */}
            {heroPhotos.map((src, i) => (
              <div key={i} style={{
                position: "absolute", inset: 0,
                backgroundImage: `url(${src})`,
                backgroundSize: "cover", backgroundPosition: "center",
                opacity: heroIdx === i ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
              }} />
            ))}
            {/* Dark overlay gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(17,36,1,0.15) 0%, rgba(17,36,1,0.3) 40%, rgba(17,36,1,0.75) 80%, rgba(17,36,1,0.92) 100%)",
            }} />

            {/* Content over hero */}
            <div style={{
              position: "relative", zIndex: 2, padding: "0 32px 60px",
              maxWidth: "640px", margin: "0 auto", width: "100%", boxSizing: "border-box",
            }}>
              <h1 style={{
                fontSize: "clamp(52px, 14vw, 80px)", fontWeight: 300,
                lineHeight: 1.0, margin: "0 0 12px", letterSpacing: "-2px",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "#FFFDF5",
                animation: "fadeUp 0.8s ease 0.2s both",
              }}>
                sensa<span style={{ color: T.coral }}>.</span>
              </h1>
              <p style={{
                fontSize: "11px", letterSpacing: "5px", textTransform: "uppercase",
                color: "rgba(255,253,245,0.5)", marginBottom: "24px", fontWeight: 600,
                animation: "fadeUp 0.8s ease 0.4s both",
              }}>
                Travel by feeling
              </p>
              <p style={{
                fontSize: "20px", lineHeight: 1.7, color: "rgba(255,253,245,0.8)",
                maxWidth: "440px", margin: "0 0 40px",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                animation: "fadeUp 0.8s ease 0.6s both",
              }}>
                Forget sightseeing checklists. Tell us how you want to{" "}
                <em style={{ color: "#fff", fontWeight: 500 }}>feel</em>,
                and we'll find the experiences that change you.
              </p>
              <button
                onClick={() => transition(1)}
                style={{
                  background: "rgba(255,253,245,0.12)", backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,253,245,0.25)", color: "#FFFDF5",
                  padding: "17px 52px", fontSize: "12px", letterSpacing: "4px",
                  textTransform: "uppercase", cursor: "pointer", borderRadius: "0",
                  fontWeight: 600, fontFamily: "'Cormorant Garamond', Georgia, serif",
                  transition: "all 0.35s ease",
                  animation: "fadeUp 0.8s ease 0.8s both",
                }}
                onMouseEnter={(e) => { e.target.style.background = "rgba(255,253,245,0.22)"; e.target.style.borderColor = "rgba(255,253,245,0.5)"; }}
                onMouseLeave={(e) => { e.target.style.background = "rgba(255,253,245,0.12)"; e.target.style.borderColor = "rgba(255,253,245,0.25)"; }}
              >
                Start Your Journey
              </button>
            </div>

            {/* Scroll indicator */}
            <div style={{
              position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
              zIndex: 2, animation: "bounce 2s ease infinite",
            }}>
              <div style={{
                width: "24px", height: "38px", borderRadius: "12px",
                border: "1.5px solid rgba(255,253,245,0.25)",
                display: "flex", justifyContent: "center", paddingTop: "8px",
              }}>
                <div style={{
                  width: "3px", height: "8px", borderRadius: "2px",
                  background: "rgba(255,253,245,0.4)",
                }} />
              </div>
            </div>
          </div>

          {/* Below-fold teaser section */}
          <div style={{
            padding: "80px 32px 100px",
            maxWidth: "640px", margin: "0 auto",
            textAlign: "center",
          }}>
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
                { num: "01", title: "Tell us your vibe", desc: "How you want to feel, what draws you in" },
                { num: "02", title: "AI does the work", desc: "We search the world for your perfect match" },
                { num: "03", title: "Book & go", desc: "Curated experiences, one tap to book" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: "28px", fontWeight: 300, color: T.faint,
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    marginBottom: "10px",
                  }}>{s.num}</div>
                  <div style={{
                    fontSize: "15px", fontWeight: 600, color: T.forest, marginBottom: "6px",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                  }}>{s.title}</div>
                  <div style={{ fontSize: "12px", color: T.muted, lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => transition(1)}
              style={{
                background: T.forest, border: "none", color: T.cream,
                padding: "17px 52px", fontSize: "12px", letterSpacing: "4px",
                textTransform: "uppercase", cursor: "pointer", borderRadius: "0",
                fontWeight: 600, fontFamily: "'Cormorant Garamond', Georgia, serif",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => e.target.style.background = T.sage}
              onMouseLeave={(e) => e.target.style.background = T.forest}
            >
              Begin
            </button>
          </div>
        </div>
      )}

      {/* ═══════════ STEPS WRAPPER ═══════════ */}
      {step > 0 && step < 7 && (
        <div style={{
          maxWidth: "640px", margin: "0 auto", padding: "0 28px",
          opacity: fadeIn ? 1 : 0, transform: fadeIn ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.26s ease, transform 0.26s ease",
        }}>
          {/* STEP 1: VIBES */}
          {step === 1 && (
            <div style={{ paddingTop: "80px", paddingBottom: "120px" }}>
              <p style={stepLabelS}>Step 1 of 5</p>
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
              <div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-end" }}>
                <button onClick={() => selectedVibes.length > 0 && transition(2)} style={primaryBtn(selectedVibes.length > 0)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 2: ACTIVITIES */}
          {step === 2 && (
            <div style={{ paddingTop: "80px", paddingBottom: "120px" }}>
              <p style={stepLabelS}>Step 2 of 5</p>
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
                <button onClick={() => transition(1)} style={backBtnS}>← Back</button>
                <button onClick={() => selectedActivities.length > 0 && transition(3)} style={primaryBtn(selectedActivities.length > 0)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 3: STYLE */}
          {step === 3 && (
            <div style={{ paddingTop: "80px", paddingBottom: "120px" }}>
              <p style={stepLabelS}>Step 3 of 5</p>
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
                <button onClick={() => transition(2)} style={backBtnS}>← Back</button>
                <button onClick={() => selectedStyle && transition(4)} style={primaryBtn(!!selectedStyle)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 4: BUDGET */}
          {step === 4 && (
            <div style={{ paddingTop: "80px", paddingBottom: "120px" }}>
              <p style={stepLabelS}>Step 4 of 5</p>
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
                <button onClick={() => transition(3)} style={backBtnS}>← Back</button>
                <button onClick={() => selectedBudget && transition(5)} style={primaryBtn(!!selectedBudget)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 5: FREE TEXT */}
          {step === 5 && (
            <div style={{ paddingTop: "80px", paddingBottom: "120px" }}>
              <p style={stepLabelS}>Step 5 of 5</p>
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
                <button onClick={() => transition(4)} style={backBtnS}>← Back</button>
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
      {step === 6 && (
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
      {step === 7 && (
        <div style={{
          maxWidth: "640px", margin: "0 auto", padding: "0 28px",
          opacity: fadeIn ? 1 : 0, transform: fadeIn ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.26s ease, transform 0.26s ease",
        }}>
          <div style={{ paddingTop: "64px", paddingBottom: "80px" }}>
            <p style={stepLabelS}>Your Matches</p>
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
                    {/* Photo header */}
                    <div style={{
                      height: isExp ? "220px" : "180px",
                      backgroundImage: `url(${rec.photo})`,
                      backgroundSize: "cover", backgroundPosition: "center",
                      position: "relative",
                      transition: "height 0.4s ease",
                    }}>
                      <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(17,36,1,0.7) 80%, rgba(17,36,1,0.88) 100%)",
                      }} />
                      {/* Match badge */}
                      <div style={{
                        position: "absolute", top: "14px", right: "14px",
                        background: "rgba(255,253,245,0.15)", backdropFilter: "blur(12px)",
                        padding: "5px 14px", borderRadius: "2px",
                        fontSize: "11px", fontWeight: 700, letterSpacing: "1px", color: "#fff",
                      }}>
                        {rec.match}% match
                      </div>
                      {/* Destination info */}
                      <div style={{
                        position: "absolute", bottom: "20px", left: "22px", right: "22px", color: "#fff",
                      }}>
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

                    {/* Tagline + best for */}
                    <div style={{ padding: "16px 22px", borderBottom: isExp ? `1px solid ${T.borderLight}` : "none" }}>
                      <p style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "16px", fontStyle: "italic", color: T.moss,
                        margin: "0 0 10px", lineHeight: 1.5,
                      }}>
                        {rec.tagline}
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{
                          fontSize: "12px", color: rec.accent, fontWeight: 600,
                          fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "14px",
                        }}>
                          ✦ {rec.bestFor}
                        </div>
                        <div style={{
                          fontSize: "10px", color: T.muted, textTransform: "uppercase",
                          letterSpacing: "2px", fontWeight: 600,
                        }}>
                          {isExp ? "Collapse" : "View →"}
                        </div>
                      </div>
                    </div>

                    {/* Expanded experiences */}
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

            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <button onClick={() => {
                setSelectedVibes([]); setSelectedActivities([]); setSelectedStyle(null);
                setSelectedBudget(null); setFreeText(""); setRecommendations([]);
                setExpandedRec(null); transition(0);
              }} style={{
                background: "transparent", border: `1.5px solid ${T.borderMed}`,
                color: T.muted, padding: "13px 36px", fontSize: "11px",
                letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer",
                borderRadius: "0", fontWeight: 600, fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}>Start Over</button>
            </div>
          </div>
        </div>
      )}

      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </div>
  );
}
