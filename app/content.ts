export const PHONE = "(425) 381-7244";
export const PHONE_HREF = "tel:+14253817244";
export const EMAIL = "busybeaverdeckco@gmail.com";

export type City = {
  name: string;
  slug: string;
  county: string;
  intro: string;
  neighborhoods: string[];
};

// Single source of truth for the 20 city landing pages, the homepage/footer
// area links, the estimate form and the LocalBusiness areaServed schema.
export const CITIES: City[] = [
  {
    name: "Snohomish",
    slug: "snohomish",
    county: "Snohomish County",
    intro:
      "Our home turf. From the historic downtown grid to the lake and river-valley lots, we know how Snohomish soil, drainage and weather treat a deck — and we build for it.",
    neighborhoods: ["Historic Downtown", "Blackman Lake", "Three Lakes", "Cathcart", "Pinehurst"],
  },
  {
    name: "Woodinville",
    slug: "woodinville",
    county: "King County",
    intro:
      "From Hollywood Hill estates to wine-country backyards, Woodinville homeowners want decks that entertain. We build covered, multi-level and outdoor-kitchen decks made for it.",
    neighborhoods: ["Hollywood Hill", "Wellington", "English Hill", "Leota", "Cottage Lake"],
  },
  {
    name: "Monroe",
    slug: "monroe",
    county: "Snohomish County",
    intro:
      "Out in the Sky Valley the rain comes hard and the lots run large. We build Monroe decks with proper framing and drainage so they hold up season after season.",
    neighborhoods: ["Fryelands", "Chain Lake", "Tjerne Place", "Woods Creek", "Downtown Monroe"],
  },
  {
    name: "Lake Stevens",
    slug: "lake-stevens",
    county: "Snohomish County",
    intro:
      "Lakefront living deserves a deck that earns the view. We build water-view and multi-tier decks around Lake Stevens engineered for sloped, waterfront lots.",
    neighborhoods: ["Frontier Village", "Soper Hill", "Hartford", "Lakeshore", "Machias"],
  },
  {
    name: "Bothell",
    slug: "bothell",
    county: "King & Snohomish County",
    intro:
      "From Canyon Park to the North Creek hillsides, Bothell's wooded, sloped lots call for serious framing. We build composite decks that shrug off the shade and damp.",
    neighborhoods: ["Canyon Park", "North Creek", "Westhill", "Queensgate", "Maywood Hill"],
  },
  {
    name: "Mill Creek",
    slug: "mill-creek",
    county: "Snohomish County",
    intro:
      "Mill Creek homeowners expect a clean, finished look — and that's our specialty. Picture-frame borders, hidden fasteners and premium composite, built dam good.",
    neighborhoods: ["Mill Creek Town Center", "Silver Firs", "The Highlands", "Mays Pond", "Seattle Hill"],
  },
  {
    name: "Kirkland",
    slug: "kirkland",
    county: "King County",
    intro:
      "Kirkland's Lake Washington waterfront and hillside lots are made for standout decks. We build multi-level, cable-rail and waterfront decks across the city.",
    neighborhoods: ["Juanita", "Rose Hill", "Houghton", "Bridle Trails", "Finn Hill", "Totem Lake"],
  },
  {
    name: "Bellevue",
    slug: "bellevue",
    county: "King County",
    intro:
      "From Somerset hillsides to West Bellevue waterfront, we build luxury composite and outdoor-living decks for Bellevue homeowners who want it done right the first time.",
    neighborhoods: ["Somerset", "West Bellevue", "Bridle Trails", "Newport", "Lake Hills", "Cougar Mountain"],
  },
  {
    name: "Redmond",
    slug: "redmond",
    county: "King County",
    intro:
      "Redmond's mix of newer builds and established neighborhoods all benefit from a low-maintenance composite deck. We design and build them to fit the home and the lot.",
    neighborhoods: ["Education Hill", "Grass Lawn", "Idylwood", "Overlake", "Union Hill"],
  },
  {
    name: "Sammamish",
    slug: "sammamish",
    county: "King County",
    intro:
      "On the Sammamish plateau, sun-and-shade swings and tall firs are hard on a deck. We build composite and PVC decks that stay beautiful with minimal upkeep.",
    neighborhoods: ["Sahalee", "Pine Lake", "Klahanie", "Trossachs", "Beaver Lake"],
  },
  {
    name: "Issaquah",
    slug: "issaquah",
    county: "King County",
    intro:
      "Issaquah's foothill lots mean slopes, trees and plenty of rain. We engineer decks for the terrain — from the Highlands down to Squak Mountain.",
    neighborhoods: ["Issaquah Highlands", "Squak Mountain", "Talus", "Gilman", "Sammamish Plateau"],
  },
  {
    name: "Mercer Island",
    slug: "mercer-island",
    county: "King County",
    intro:
      "Island living on Lake Washington calls for decks that make the most of the view. We build waterfront and view decks with cable and glass railings across the Island.",
    neighborhoods: ["North End", "East Seattle", "First Hill", "Mercerwood", "South End"],
  },
  {
    name: "Kenmore",
    slug: "kenmore",
    county: "King County",
    intro:
      "At the north end of Lake Washington, Kenmore's damp, shaded lots are prime composite-deck country. We build to keep moss, rot and slip at bay.",
    neighborhoods: ["Inglewood", "Moorlands", "Arrowhead", "Uplake", "Northshore"],
  },
  {
    name: "Lake Forest Park",
    slug: "lake-forest-park",
    county: "King County",
    intro:
      "Tucked into the trees above Lake Washington, Lake Forest Park homes need decks built for shade and moisture. That's exactly what we engineer for.",
    neighborhoods: ["Sheridan Beach", "Brookside", "Horizon View", "Lyon Creek"],
  },
  {
    name: "Maltby",
    slug: "maltby",
    county: "Snohomish County",
    intro:
      "Maltby's rural-edge acreage gives us room to build big — wraparound, multi-level and outdoor-living decks framed to last in the wet Sky Valley climate.",
    neighborhoods: ["Yew Way", "Paradise Lake", "Echo Lake", "Broadway"],
  },
  {
    name: "Mukilteo",
    slug: "mukilteo",
    county: "Snohomish County",
    intro:
      "On Mukilteo's Puget Sound bluffs, salt air and wind are tough on a deck. We build view decks with corrosion-resistant hardware and composite that holds up.",
    neighborhoods: ["Old Town", "Harbour Pointe", "Picnic Point", "Big Gulch"],
  },
  {
    name: "Everett",
    slug: "everett",
    county: "Snohomish County",
    intro:
      "From Silver Lake backyards to Sound-view bluffs, Everett homeowners trust us for clean, durable composite decks built for everyday PNW weather.",
    neighborhoods: ["Silver Lake", "Northwest Everett", "Riverside", "Eastmont", "Harborview"],
  },
  {
    name: "Edmonds",
    slug: "edmonds",
    county: "Snohomish County",
    intro:
      "Edmonds' bluff and Sound-view lots are made for a deck you live on year-round. We build covered, view and outdoor-living decks across the city.",
    neighborhoods: ["The Bowl", "Seaview", "Perrinville", "Maplewood", "Westgate"],
  },
  {
    name: "Duvall",
    slug: "duvall",
    county: "King County",
    intro:
      "Out in the Snoqualmie Valley, Duvall's larger lots and wet winters call for serious framing and drainage. We build decks that stand up to the valley climate.",
    neighborhoods: ["Big Rock", "Cherry Valley", "Coe Clemons", "Downtown Duvall"],
  },
  {
    name: "Marysville",
    slug: "marysville",
    county: "Snohomish County",
    intro:
      "Marysville families want a deck that's built to be used and easy to maintain. We deliver low-upkeep composite decks designed for real backyard living.",
    neighborhoods: ["Lakewood", "Sunnyside", "Kellogg Marsh", "Smokey Point"],
  },
];

// Service list for the city landing pages, per the SEO plan.
export const DECK_SERVICES = [
  { name: "Composite Decking", blurb: "Trex, TimberTech/AZEK & Fiberon — engineered to shrug off PNW rain." },
  { name: "Trex Decking", blurb: "Certified Trex installs with hidden fasteners and crisp picture-frame borders." },
  { name: "TimberTech / AZEK Decking", blurb: "Capped polymer boards — the most moisture- and stain-resistant option." },
  { name: "Fiberon Decking", blurb: "Premium capped composite with rich, natural color and long warranties." },
  { name: "Deckorators Decking", blurb: "Mineral-based composite with standout strength and slip resistance." },
  { name: "Wood Decking", blurb: "Cedar and hardwood decks, built right with proper drainage and detailing." },
  { name: "PVC Decking", blurb: "Fully synthetic, ultra-low-maintenance boards for the wettest lots." },
  { name: "Custom Deck Design", blurb: "Real drawings and a design shaped around your home and how you live outside." },
  { name: "Custom Decks", blurb: "Multi-level, waterfront, covered and outdoor-living builds, one of a kind." },
  { name: "Patio Decks", blurb: "Low-profile, ground-level and patio-style decks that extend your living space." },
  { name: "Deck Replacement", blurb: "Tear-outs, resurfacing and rebuilds that bring tired decks back to life." },
  { name: "Deck Repair", blurb: "Board, railing and structural repairs to keep your deck safe and solid." },
];

export const SERVICES = [
  {
    title: "Composite Decks",
    blurb:
      "Trex, TimberTech/AZEK & Fiberon — engineered to shrug off PNW rain for decades.",
    tag: "Most requested",
  },
  {
    title: "Deck Replacement & Remodels",
    blurb:
      "Tear-outs, resurfacing & rebuilds that bring tired decks back to life — done right.",
  },
  {
    title: "Custom Outdoor Living",
    blurb:
      "Outdoor kitchens, fireplaces, fire tables, lounges — full backyard environments.",
  },
  {
    title: "Covered Decks",
    blurb:
      "Roof structures, louvered covers & dry-below systems so you live outside year-round.",
  },
  {
    title: "Multi-Level & Waterfront",
    blurb:
      "Hillside, lakefront & multi-tier builds with structurally superior framing with structures engineered to withstand our PNW environment.",
  },
  {
    title: "Railings & Deck Lighting",
    blurb:
      "Cable, glass & aluminum railings paired with low-voltage architectural lighting.",
  },
];

export const MATERIALS = [
  "Trex",
  "TimberTech / AZEK",
  "Fiberon",
  "FastenMaster",
  "Simpson Strong-Tie",
  "Dunn Lumber",
];

export const PROCESS = [
  {
    no: "01",
    title: "Sit-Down & Design",
    body: "You meet Josh. We walk through the space, talk through the scope of work, and shape a design with real drawings and an honest, itemized estimate.",
  },
  {
    no: "02",
    title: "Engineering & Permits",
    body: "We handle structural details, site plans, and the engineering process, and work closely with architects to keep everything moving smoothly.",
  },
  {
    no: "03",
    title: "Craftsmanship & Build",
    body: "A tight, respectful crew, a clean site, and daily communication. Premium composite, hidden fasteners, crisp picture-frame borders — every joint intentional.",
  },
  {
    no: "04",
    title: "The Reveal",
    body: "We walk through the finished deck project together, talking over key details and reflecting on the vision from day one — making sure we accomplished exactly what you wanted throughout the entire process, and leave you with an outdoor space built to be enjoyed for generations.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Owner was communicative and friendly. Was honest about extra work that needed to be done and didn't try to overcharge. They finished our large deck in 5 days and most importantly, it looks great.",
    name: "Bryan M.",
    detail: "Verified Google review",
  },
  {
    quote:
      "Josh built us a beautiful deck and front porch that perfectly matched my vision. He is reliable, professional and friendly and a pleasure to work with.",
    name: "Maia B.",
    detail: "Verified Google review",
  },
  {
    quote:
      "Josh and his team are master craftsmen! The finished project exceeded our expectations. You won't regret using them for your deck restoration or a new custom deck.",
    name: "Ray E.",
    detail: "Verified Google review",
  },
];
