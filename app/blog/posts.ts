import type { StaticImageData } from "next/image";

import lakeLounge from "@/public/64D34DC9-6785-4148-9C85-8D1B3540570E.webp";
import multiLevel from "@/public/IMG_0208.webp";
import nightDeck from "@/public/IMG_0209.webp";
import skylineDeck from "@/public/IMG_0210.webp";
import homeExterior from "@/public/IMG_0212.webp";
import estateHotTub from "@/public/2DD40DB3-1C04-4CDB-9404-3B935B9A5CF2.webp";
import twoStoryDeck from "@/public/9D76AC30-8348-4294-865C-685295ED983C.webp";
import coveredFireplace from "@/public/85C2E439-104E-4849-8BE0-98AE2F1B5F6B.webp";
import elevatedStair from "@/public/1DBED28B-0543-48A3-8979-989BA24E308E.webp";
import cedarCovered from "@/public/2396DCDA-D409-4FB0-ACC5-E4EA1F324CCB.webp";
import lightComposite from "@/public/322881BB-39E2-4B22-A258-98E865E205AC.webp";
import duskLights from "@/public/IMG_0394.webp";

export type Faq = { q: string; a: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  date: string; // ISO published date
  updated?: string; // ISO last-modified date
  readMin: number;
  image: StaticImageData;
  imageAlt: string;
  faqs: Faq[];
};

/**
 * Blog registry — the single source of truth for the index, sitemap,
 * per-post metadata and JSON-LD. Post bodies live in /content/blog/<slug>.mdx.
 * Newest first.
 */
export const POSTS: Post[] = [
  {
    slug: "trex-vs-timbertech-washington-rain",
    title: "Trex vs. TimberTech in Washington Rain: Which Holds Up?",
    description:
      "An honest, builder's comparison of Trex and TimberTech/AZEK composite decking in the wet Pacific Northwest climate — capping, moisture, heat, color and warranty.",
    excerpt:
      "Both are excellent. But they're built differently, and that difference matters when your deck spends nine months a year wet. Here's how we choose between them on the Eastside.",
    category: "Materials",
    date: "2026-05-18",
    readMin: 9,
    image: multiLevel,
    imageAlt: "Multi-level composite deck in Sammamish, Washington",
    faqs: [
      {
        q: "Is Trex or TimberTech better for the Pacific Northwest?",
        a: "Both perform extremely well in our wet climate. TimberTech AZEK (a capped polymer board) is fully synthetic and the most moisture- and stain-resistant option, while Trex (a capped composite) offers outstanding value and a slightly more natural look. For shaded, damp, tree-covered lots we often lean AZEK; for sunny Eastside yards on a budget, Trex Transcend is hard to beat.",
      },
      {
        q: "Do composite decks get slippery in the rain?",
        a: "Quality capped composite and PVC boards have a textured, embossed surface that grips well when wet — typically better than smooth, algae-prone wood. Keeping the surface rinsed of pollen and organic film each spring keeps traction high.",
      },
      {
        q: "Will a composite deck fade in Washington?",
        a: "Modern capped boards from both brands carry 25–50 year fade-and-stain warranties. Our diffuse PNW light is gentle on them; you'll see far less fading here than in a high-UV desert climate.",
      },
    ],
  },
  {
    slug: "how-to-choose-decking-material-pacific-northwest",
    title: "How to Choose the Best Decking Material for a PNW Home",
    description:
      "Composite, PVC, cedar or pressure-treated? A practical guide to choosing decking material for the Pacific Northwest's rain, shade and freeze-thaw cycles.",
    excerpt:
      "The right board for a sunny Snohomish backyard isn't the right board for a shaded lakefront in Bellevue. Here's how we match material to site, budget and how you actually live outside.",
    category: "Materials",
    date: "2026-05-04",
    readMin: 8,
    image: lakeLounge,
    imageAlt: "Lake-view deck lounge with a fire table in Bellevue, Washington",
    faqs: [
      {
        q: "What is the best low-maintenance decking material for the PNW?",
        a: "Capped composite (Trex, Fiberon) and capped polymer/PVC (TimberTech AZEK) are the lowest-maintenance options for our climate — no staining or sealing, just an occasional rinse. They resist the moss, mildew and rot that plague wood here.",
      },
      {
        q: "Is cedar a good choice for a deck in Washington?",
        a: "Cedar is beautiful and naturally rot-resistant, but in our climate it needs re-sealing every 1–2 years and will still weather faster than composite. It's a great choice if you love real wood and accept the upkeep; for most clients we recommend composite for long-term value.",
      },
      {
        q: "Should I avoid pressure-treated decking?",
        a: "Pressure-treated lumber is fine for the structure underneath, but as a walking surface it cups, cracks and checks quickly in our wet-dry cycles. We use it for framing and recommend composite or PVC for the boards you actually touch.",
      },
    ],
  },
  {
    slug: "cost-to-build-a-deck-snohomish-county",
    title: "How Much Does It Cost to Build a Deck in Snohomish County? (2026)",
    description:
      "A transparent 2026 breakdown of deck-building costs in Snohomish County and the Eastside — by material, size, structure, railings and site conditions.",
    excerpt:
      "Real numbers, no bait pricing. Here's what actually drives the cost of a custom deck in our area in 2026 — and where the money quietly goes on the cheap builds you should avoid.",
    category: "Cost & Value",
    date: "2026-04-20",
    readMin: 9,
    image: estateHotTub,
    imageAlt: "Large multi-level composite deck with a hot tub and fire pit on a Snohomish County home",
    faqs: [
      {
        q: "How much does a composite deck cost in Snohomish County in 2026?",
        a: "Most custom composite decks in our area land between roughly $45 and $80 per square foot installed, depending on board line, height, railings and site access. A well-appointed mid-size composite deck commonly runs $25,000–$55,000. The honest answer depends on your specific site — which is what a free estimate is for.",
      },
      {
        q: "Why are composite decks more expensive than wood up front?",
        a: "Composite boards cost more than lumber, but the lifetime cost is usually lower: no annual staining, sealing or board replacement. Over 15–20 years a composite deck typically costs less to own than a wood deck that needs constant upkeep.",
      },
      {
        q: "What adds the most to a deck's price?",
        a: "Height (anything requiring tall posts, stairs or guard railings), premium railing systems (cable, glass), curves and picture-frame detailing, structural work for hillside or waterfront lots, and add-ons like lighting, pergolas or outdoor kitchens.",
      },
    ],
  },
  {
    slug: "how-long-do-composite-decks-last-washington",
    title: "How Long Do Composite Decks Last in Washington's Climate?",
    description:
      "How long composite decking really lasts in the Pacific Northwest, what the 25–50 year warranties cover, and how PNW rain and shade affect lifespan.",
    excerpt:
      "Manufacturers promise decades. Our wet, shaded climate is the real test. Here's what we see hold up — and what actually shortens a composite deck's life here.",
    category: "Maintenance & Care",
    date: "2026-04-06",
    readMin: 7,
    image: nightDeck,
    imageAlt: "Composite deck lit for evening outdoor living in Woodinville, Washington",
    faqs: [
      {
        q: "How long does a composite deck last in the Pacific Northwest?",
        a: "A properly built capped composite deck commonly lasts 25–30+ years here, and the boards often outlive that. The structure underneath — when over-built with treated lumber and Simpson Strong-Tie hardware and proper drainage — is what determines true longevity.",
      },
      {
        q: "Do composite decks rot or grow mold in Washington?",
        a: "Capped composite and PVC boards don't rot and strongly resist mold because the protective cap blocks moisture. Surface mildew or pollen film can appear in shade, but it rinses off — it isn't decay like you'd get with wood.",
      },
      {
        q: "What shortens the life of a composite deck here?",
        a: "Almost always the frame, not the boards: undersized joists, no flashing at the ledger, poor drainage and trapped debris. Build the structure right and the deck lasts as long as the surface warranty promises.",
      },
    ],
  },
  {
    slug: "deck-permits-snohomish-county-eastside",
    title: "Do You Need a Deck Permit in Snohomish County & the Eastside?",
    description:
      "When deck building permits are required in Snohomish County, Bellevue, Kirkland and Eastside cities — height triggers, inspections and why permits protect you.",
    excerpt:
      "Most real decks need a permit here, and skipping it can haunt a future home sale. Here's how permitting actually works across Snohomish County and the Eastside — and why we handle it for you.",
    category: "Permits & Process",
    date: "2026-03-23",
    readMin: 7,
    image: twoStoryDeck,
    imageAlt: "Permitted multi-level deck on a two-story Pacific Northwest home",
    faqs: [
      {
        q: "Do I need a permit to build a deck in Washington?",
        a: "Usually, yes. Across Snohomish County and most Eastside cities, a permit is required once a deck is attached to the house or rises above a low threshold (commonly around 30 inches above grade). Even some lower decks need one depending on the jurisdiction. We confirm the rule for your exact address before we build.",
      },
      {
        q: "What happens if a deck was built without a permit?",
        a: "Unpermitted work can stall a home sale, fail an inspection, void insurance claims and require costly retroactive permitting or removal. A permitted, inspected deck is a documented asset — that paperwork matters at resale.",
      },
      {
        q: "Do you handle the permit for me?",
        a: "Yes. We manage structural details, permit applications and inspections as part of the build, so you don't have to navigate the county or city process yourself.",
      },
    ],
  },
  {
    slug: "does-a-deck-add-value-to-your-home",
    title: "Does a Deck Add Value to Your Home? A PNW ROI Breakdown",
    description:
      "How much value a deck adds to a Pacific Northwest home, composite vs. wood resale ROI, and why outdoor living is a strong investment on the Eastside.",
    excerpt:
      "In a region where buyers crave usable outdoor space, a well-built deck is one of the more reliable returns in remodeling. Here's what the numbers — and our local market — actually say.",
    category: "Cost & Value",
    date: "2026-03-09",
    readMin: 7,
    image: skylineDeck,
    imageAlt: "Rooftop composite deck with a city skyline view in Kirkland, Washington",
    faqs: [
      {
        q: "Does a deck add resale value to a home?",
        a: "Yes. Nationally, deck additions consistently recoup a large share of their cost at resale, and in outdoor-loving Pacific Northwest markets they also help homes sell faster. A quality composite deck reads as a finished, low-maintenance feature buyers will pay for.",
      },
      {
        q: "Does composite or wood add more value?",
        a: "Composite tends to protect value better because buyers see no looming maintenance — no staining, no rot, no board replacement. A weathered, high-upkeep wood deck can even read as a liability, while a clean composite deck reads as move-in ready.",
      },
      {
        q: "What deck features add the most value?",
        a: "Usable, connected outdoor living: a deck sized to the home, quality railings, integrated lighting, and weather protection like a covered section that extends the usable season. Those turn a deck from a platform into a room buyers can picture using.",
      },
    ],
  },
  {
    slug: "covered-deck-ideas-seattle-weather",
    title: "Covered Deck Ideas for Year-Round Living in Seattle Weather",
    description:
      "Covered deck, pavilion and louvered-roof ideas that make outdoor living work all year in Seattle's rainy climate — dry-below systems, heat, lighting and more.",
    excerpt:
      "The secret to using your deck nine more months a year isn't a bigger deck — it's a roof over part of it. Here are the covered-deck ideas we build most for PNW weather.",
    category: "Outdoor Living",
    date: "2026-02-23",
    readMin: 8,
    image: coveredFireplace,
    imageAlt: "Covered deck with a stone fireplace and string lights at dusk",
    faqs: [
      {
        q: "Can I really use a covered deck year-round in Seattle?",
        a: "Yes — a covered deck with a solid or louvered roof, plus radiant or overhead heating and good lighting, is comfortable through most of our fall, winter and spring. Add a dry-below system on a two-story deck and you gain a sheltered patio underneath as well.",
      },
      {
        q: "What's the difference between a covered deck and a pergola?",
        a: "A pergola is an open framework that defines space and filters sun but doesn't keep rain off. A covered deck has a true waterproof roof (solid or adjustable louvered) so you stay dry — the better choice for year-round PNW use.",
      },
      {
        q: "What is a dry-below or under-deck system?",
        a: "It's a drainage system installed under an elevated deck that channels water away, creating a dry, usable space beneath — perfect for a covered patio, storage or an outdoor lounge on a sloped Eastside lot.",
      },
    ],
  },
  {
    slug: "best-railing-systems-modern-pnw-decks",
    title: "Best Railing Systems for Modern Pacific Northwest Decks",
    description:
      "Cable, glass, aluminum and composite deck railing systems compared for modern PNW homes — views, durability, maintenance, code and cost.",
    excerpt:
      "Railing is where a deck looks custom or looks builder-grade. Here's how cable, glass and aluminum systems compare for our views, our weather and our building codes.",
    category: "Materials",
    date: "2026-02-09",
    readMin: 7,
    image: elevatedStair,
    imageAlt: "Elevated cable-rail composite deck and staircase on a Pacific Northwest home",
    faqs: [
      {
        q: "What is the best deck railing for a view?",
        a: "Cable railing and glass railing both preserve sightlines. Cable (thin stainless lines in a metal or composite frame) gives a clean, modern look and is popular for lake and territorial views; glass panels offer a nearly invisible, wind-blocking barrier ideal for exposed waterfront decks.",
      },
      {
        q: "Does cable railing need a lot of maintenance?",
        a: "Very little. Stainless cable in our climate just needs an occasional wipe-down; the main task is keeping cables properly tensioned, which a quality install handles from the start. Glass needs periodic cleaning to stay clear.",
      },
      {
        q: "Are these railings up to code in Washington?",
        a: "Yes, when built correctly. Guardrail height and infill spacing are code-driven (no gap a 4-inch sphere can pass, typical 36–42 inch height). We engineer cable tension and post spacing to meet code so the look never compromises safety.",
      },
    ],
  },
  {
    slug: "hardwood-vs-softwood-decking-pacific-northwest",
    title: "Hardwood vs. Softwood Decking in the Pacific Northwest Climate",
    description:
      "Hardwood vs. softwood decking for the PNW — cedar, pressure-treated, ipe and more compared for rain, rot resistance, maintenance and cost.",
    excerpt:
      "If you want real wood underfoot, the species you pick decides how much of your summer you'll spend maintaining it. Here's how hardwoods and softwoods hold up in our rain.",
    category: "Materials",
    date: "2026-01-26",
    readMin: 7,
    image: cedarCovered,
    imageAlt: "Cedar-roofed covered deck with warm wood beams in the Pacific Northwest",
    faqs: [
      {
        q: "Is hardwood or softwood better for a Pacific Northwest deck?",
        a: "Tropical hardwoods like ipe are extremely dense, rot-resistant and long-lasting but expensive and heavy to work with. Softwoods like cedar are more affordable and naturally rot-resistant but softer and higher-maintenance. Both need regular sealing here; many homeowners ultimately choose composite to skip the upkeep entirely.",
      },
      {
        q: "How often do I need to seal a wood deck in Washington?",
        a: "Plan on cleaning and re-sealing every 1–2 years in our climate to fight moisture, graying and mildew. Skip it and even rot-resistant species will weather, cup and check far faster.",
      },
      {
        q: "Why do so many PNW homeowners switch from wood to composite?",
        a: "Our long wet season punishes wood — staining, mildew and annual maintenance add up. Capped composite delivers a similar warm look with none of the sealing, which is why most of our remodels replace tired wood with composite.",
      },
    ],
  },
  {
    slug: "pvc-vs-composite-vs-wood-decking",
    title: "PVC vs. Composite vs. Wood Decking: An Honest Comparison",
    description:
      "PVC, capped composite and wood decking compared honestly — cost, durability, heat, looks and maintenance for Pacific Northwest homes.",
    excerpt:
      "Three very different boards, three very different ownership experiences. Here's a straight comparison of PVC, composite and wood — and who each one is actually right for.",
    category: "Materials",
    date: "2026-01-12",
    readMin: 8,
    image: lightComposite,
    imageAlt: "Light-toned composite deck with wide, lit steps and a sunroom",
    faqs: [
      {
        q: "What's the difference between PVC and composite decking?",
        a: "Composite boards have a wood-fiber core wrapped in a protective polymer cap; PVC (like TimberTech AZEK) is all polymer with no wood at all. PVC is the lightest, most moisture- and stain-proof option and runs slightly cooler-feeling lines; capped composite offers a more natural look and strong value. Both are low-maintenance.",
      },
      {
        q: "Which decking material is the most durable?",
        a: "Capped PVC is generally the most impervious to moisture and stains since there's no wood to absorb water, making it excellent for our wet climate. Capped composite is close behind. Both far outlast untreated or softwood lumber here.",
      },
      {
        q: "Is wood decking ever the right choice?",
        a: "If you love the look and smell of real wood and accept regular sealing, cedar or a tropical hardwood can be beautiful. For most clients who want to enjoy the deck rather than maintain it, we recommend composite or PVC.",
      },
    ],
  },
  {
    slug: "signs-your-old-deck-is-damaging-your-home",
    title: "Signs Your Aging Deck Is Quietly Damaging Your Home",
    description:
      "Warning signs an old or rotting deck is damaging your house — ledger rot, loose flashing, wobble and decay — and when to repair vs. replace in the PNW.",
    excerpt:
      "A failing deck doesn't just get ugly — it can rot the wall it's bolted to and become a genuine safety hazard. Here are the warning signs PNW homeowners should never ignore.",
    category: "Maintenance & Care",
    date: "2025-12-15",
    readMin: 7,
    image: homeExterior,
    imageAlt: "Deck attached to a Pacific Northwest home where ledger rot can begin",
    faqs: [
      {
        q: "How do I know if my deck is unsafe?",
        a: "Watch for wobble or sway when you walk, soft or spongy boards, rusted or pulling fasteners, a ledger board separating from the house, and any rot where the deck meets the wall. Any of these means it's time for a professional inspection — guard and railing failures are how deck accidents happen.",
      },
      {
        q: "Can a rotting deck damage my house?",
        a: "Yes. The most serious damage happens at the ledger — where the deck attaches to the home. Missing or failed flashing lets water wick into the rim joist and wall framing, causing hidden rot and expensive structural repairs well beyond the deck itself.",
      },
      {
        q: "Should I repair or replace an old deck?",
        a: "If the structure and ledger are sound and only surface boards are worn, resurfacing may be enough. If there's framing rot, ledger or flashing failure, or the deck doesn't meet current code, a full rebuild is safer and usually a better long-term value.",
      },
    ],
  },
  {
    slug: "get-the-most-out-of-deck-season-pnw",
    title: "How to Get the Most Out of Deck Season in the PNW",
    description:
      "Make the most of Pacific Northwest deck season — heating, lighting, cover, layout and materials that extend your outdoor living well beyond summer.",
    excerpt:
      "Our real outdoor season is longer than people think — if your deck is built for it. Here's how to stretch deck season at both ends with smart design, not just good weather.",
    category: "Outdoor Living",
    date: "2025-11-17",
    readMin: 6,
    image: duskLights,
    imageAlt: "Deck lit with low-voltage stair and landscape lighting at dusk",
    faqs: [
      {
        q: "How can I use my deck more of the year in the Pacific Northwest?",
        a: "Three moves do the most: cover part of the deck so rain isn't a dealbreaker, add heat (a fire table, overhead radiant heaters or an outdoor fireplace), and add warm lighting for the long dark evenings. Together they can roughly double how many days a year the space gets used.",
      },
      {
        q: "What's the best heat source for a PNW deck?",
        a: "It depends on the space. Fire tables and outdoor fireplaces create a gathering spot and ambiance; mounted overhead radiant heaters warm a covered area efficiently without taking floor space. Many of our outdoor living builds combine both.",
      },
      {
        q: "Does deck lighting really make a difference?",
        a: "Hugely. Low-voltage stair, rail and accent lighting makes the deck safe and usable after dark — which, for half the PNW year, is most of the evening. It's one of the highest-impact upgrades per dollar.",
      },
    ],
  },
];

export function getAllPosts(): Post[] {
  return POSTS;
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): Post[] {
  const current = getPost(slug);
  if (!current) return POSTS.slice(0, count);
  const sameCategory = POSTS.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = POSTS.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
