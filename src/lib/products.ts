import narrowMouth from "@/assets/NARROW-MOUTH-DRUMS.png";
import openMouth from "@/assets/FULL-OPEN-MOUTH-DRUMS.png";
import mouser from "@/assets/MOUSER.png";
import wideMouth from "@/assets/WIDE-MOUTH-DRUMS.png";
import rocket from "@/assets/ROCKET-DRUMS.png";
import jerryCan from "@/assets/JERRY-CAN.png";
import accessories from "@/assets/accessories.jpg";

export type ProductFAQ = {
  question: string;
  answer: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  capacity: string;
  image: string;
  tagline: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  specs: ProductSpec[];
  useCases: string[];
  faqs: ProductFAQ[];
};

export const products: Product[] = [
  {
    slug: "narrow-mouth-drums",
    name: "Narrow Mouth HDPE Drums",
    capacity: "50L",
    image: narrowMouth,
    tagline: "World-standard design with zero leakage and excellent drop strength.",
    metaTitle: "50L Narrow Mouth HDPE Drums Manufacturer Ankleshwar",
    metaDescription:
      "Precision-moulded 50L narrow mouth HDPE drums in Ankleshwar, Gujarat. Zero-leakage bung closures, UN certified, virgin HM-HDPE for chemical packaging.",
    features: [
      "Stackable with & without pallets",
      "Excellent stacking and drop strength",
      "Odourless & non-toxic — food-grade",
      "Long life & reusable, good resale value",
      "Conforms to international standards",
    ],
    overview: [
      "Maruti Blow Tech manufactures heavy-duty 50L narrow mouth HDPE drums at our Ankleshwar GIDC facility in Gujarat. Engineered for the safe containment, transit, and storage of liquid specialty chemicals, hazardous solvents, lubricants, and bulk food-grade ingredients.",
      "Each container is blow-moulded using high-molecular high-density polyethylene (HM-HDPE) featuring a double-layer design: a pigment-free, non-reactive inner liner preserving product purity and a UV-shielded outer layer protecting contents from solar radiation and outdoor weathering.",
      "With precision-threaded bung ports and auto-sealing closures, our narrow mouth barrels eliminate in-transit vapor loss and fluid leaks, maintaining structural integrity across multi-tier warehouse pallet stacking.",
    ],
    specs: [
      { label: "Nominal Capacity", value: "50 Litres" },
      { label: "Mouth / Opening Type", value: "Narrow mouth with threaded bungs / plugs" },
      { label: "Base Polymer", value: "Virgin High Molecular Weight HDPE (HM-HDPE)" },
      { label: "Construction", value: "Co-extruded multi-layer (UV outer + virgin food-grade inner)" },
      { label: "Standard Colour", value: "Industrial Blue [TODO: Confirm additional colour options]" },
      { label: "Stackability", value: "Multi-tier palletized stacking (dynamic & static load rated)" },
      { label: "Leak & Drop Standards", value: "Conforms to international drop and leak resistance tests" },
    ],
    useCases: [
      "Liquid agrochemicals, technical grade pesticides, and soil nutrients",
      "Specialty industrial chemicals, acids, bases, and neutral processing liquids",
      "Pharmaceutical liquid intermediates and excipients requiring food-contact safety",
      "Lubricants, hydraulic oils, surfactants, and specialty emulsions",
    ],
    faqs: [
      {
        question: "What closure mechanism is fitted on Maruti 50L narrow mouth drums?",
        answer:
          "Our 50L narrow mouth drums feature precision-threaded bung plugs fitted with leak-proof gaskets and tamper-evident cap seals to prevent adulteration and spillages during logistics.",
      },
      {
        question: "Are these narrow mouth drums suitable for food and pharmaceutical liquids?",
        answer:
          "Yes. Our co-extruded drums utilize a 100% virgin, pigment-free, odourless HM-HDPE inner surface that meets food-contact safety standards and prevents contamination.",
      },
      {
        question: "Can these 50L drums withstand multi-tier pallet stacking?",
        answer:
          "Yes. The structural top chime and bottom annular ring are specifically engineered with high top-load compression strength for palletized and non-palletized warehouse storage.",
      },
      {
        question: "What is the manufacturing turnaround time from Ankleshwar?",
        answer:
          "Our Ankleshwar GIDC plant operates on continuous production schedules to supply high-volume commercial dispatches across Gujarat, Maharashtra, and pan-India industrial corridors. [TODO: Specify standard dispatch lead time in business days].",
      },
    ],
  },
  {
    slug: "full-open-mouth-drums",
    name: "Full Open Mouth Drums",
    capacity: "20L – 80L",
    image: openMouth,
    tagline: "Snap-fit clamping ring, leak-proof and air-tight.",
    metaTitle: "Full Open Mouth HDPE Drums (20L–80L) | Maruti Blow Tech",
    metaDescription:
      "Buy 20L to 80L full open mouth HDPE drums with snap-fit clamping rings. Airtight, food-grade virgin polymer for powders, pastes & solid chemicals in Gujarat.",
    features: [
      "Simple snap-fit clamping ring",
      "Leak proof & air tight",
      "Excellent stacking and drop strength",
      "Suitable for packing food products",
      "Conforms to international standards",
    ],
    overview: [
      "Maruti Blow Tech manufactures full open mouth HDPE drums ranging from 20L to 80L capacity, designed specifically for viscous pastes, pigments, agrochemical granules, bulk active pharmaceutical ingredients (APIs), and solid chemicals.",
      "The wide-aperture removable lid provides complete top access for effortless filling, scooping, and thorough sanitation between cycles. Fitted with an airtight rubber gasket and a heavy-duty snap-fit clamping ring (available in metal or polymer options), each drum seals completely against atmospheric moisture and contamination.",
      "Blow-moulded with premium HM-HDPE raw material, these open-top drums exhibit superior drop resistance and circumferential rigidity, preventing deformation during handling and freight transport.",
    ],
    specs: [
      { label: "Capacity Range", value: "20 Litres, 30 Litres, 50 Litres, up to 80 Litres" },
      { label: "Mouth / Aperture", value: "Full open top with removable heavy-duty lid" },
      { label: "Locking System", value: "Galvanized / powder-coated snap-fit metal clamping ring" },
      { label: "Material Composition", value: "Virgin HM-HDPE resin with antioxidant additives" },
      { label: "Gasket Seal", value: "Continuous elastomeric sealing gasket (air-tight & leak-proof)" },
      { label: "Handling", value: "Moulded base chimes and optional side grips for mechanical tipping" },
      { label: "Standard Standard", value: "Compliant with drop test & stacking pressure standards" },
    ],
    useCases: [
      "Bulk powders, dyes, dye intermediates, and pigment pastes in Gujarat industrial zones",
      "Solid agrochemical granules, wettable powders, and technical chemicals",
      "Food ingredients, fruit pulps, pectin, and edible paste concentrates",
      "Greases, specialty adhesives, and semi-solid chemical formulations",
    ],
    faqs: [
      {
        question: "How does the full open mouth clamping ring seal work?",
        answer:
          "The removable lid contains an elastomeric gasket channel. When the galvanized metal clamp ring is snapped shut with the safety lever, it compresses the lid uniformly against the drum chime, creating an airtight and leak-proof seal.",
      },
      {
        question: "What capacities are available in the open-top drum range?",
        answer:
          "We manufacture full open mouth containers from 20 Litres up to 80 Litres capacity, tailored to different batch sizes and filling station requirements.",
      },
      {
        question: "Can these open mouth drums be customized in client brand colours?",
        answer:
          "Yes. Through our custom mould division, full open top drums can be moulded in bespoke corporate colours with screen-printed brand identity. See our Custom Mould Drums page for details.",
      },
      {
        question: "Is the material safe for certified food-contact packaging?",
        answer:
          "Yes. Maruti Blow Tech uses 100% food-grade virgin HM-HDPE without recycled plastic fillers on contact layers, ensuring odourless and non-toxic storage.",
      },
    ],
  },
  {
    slug: "wide-mouth-drums",
    name: "Wide Mouth Drums",
    capacity: "50L · 6\" mouth",
    image: wideMouth,
    tagline: "Pilfer-proof sealing with a lightweight, stackable body.",
    metaTitle: "Wide Mouth HDPE Drums (50L, 6\" Opening) | Ankleshwar",
    metaDescription:
      "Industrial 50L wide mouth HDPE drums with 6-inch threaded opening. Pilfer-proof sealing, lightweight high-tensile body for viscous chemicals and powders.",
    features: [
      "Mouth openings 6\"",
      "Pilfer-proof sealing arrangement",
      "Light weight design",
      "Specially designed for stackability",
      "Non-toxic, food contact safe",
    ],
    overview: [
      "Engineered specifically for media that require larger access than standard bung ports without the requirement of a full open-head ring, Maruti Blow Tech's 50L Wide Mouth Drums feature a 6-inch threaded neck aperture.",
      "This 6-inch wide opening allows rapid discharge of thick liquids, suspensions, slurries, and granular goods, while significantly reducing cleanout time during drum recycling or internal washing.",
      "Built with a reinforced threaded closure with integrated pilfer-proof tamper-evident arrangement, these drums guarantee product integrity from our Ankleshwar manufacturing facility all the way to domestic or international destinations.",
    ],
    specs: [
      { label: "Nominal Capacity", value: "50 Litres" },
      { label: "Aperture Diameter", value: "6-inch (approx. 152 mm) threaded wide mouth" },
      { label: "Tamper Proofing", value: "Integrated pilfer-proof seal & cap mechanism" },
      { label: "Structure", value: "Lightweight high-strength HM-HDPE body" },
      { label: "Chemical Resistance", value: "Resistant to harsh acids, alkalies, and solvents" },
      { label: "Safety Standard", value: "Food-contact compliant virgin inner surface" },
    ],
    useCases: [
      "Viscous liquid chemicals, resins, paints, and polymer emulsions",
      "Semi-solid slurries, latex additives, and chemical catalysts",
      "Bulk food pastes, syrups, and aromatic chemical extracts",
      "Granular additives requiring faster pouring and scooping than standard bungs",
    ],
    faqs: [
      {
        question: "Why choose a 6-inch wide mouth drum over a narrow mouth drum?",
        answer:
          "The 6-inch mouth opening allows faster pouring and decanting of viscous fluids, slurries, or powders that would otherwise choke or slow down through narrow 2-inch bungs.",
      },
      {
        question: "How does the pilfer-proof mechanism function on wide mouth drums?",
        answer:
          "The threaded cap incorporates a tamper-evident locking ring and security seal points that break upon initial opening, providing immediate visual verification against product tampering.",
      },
      {
        question: "Are these containers stackable in multi-layer warehouses?",
        answer:
          "Yes. The bottom profile nests securely onto the top lid chime of the drum below it, ensuring stable palletization during inter-state transport and warehouse storage.",
      },
      {
        question: "What is the tare weight and wall thickness of the 50L wide mouth drum?",
        answer:
          "The lightweight design optimizes material distribution to balance raw material efficiency with high drop impact strength. [TODO: Confirm exact tare weight in grams and average wall thickness].",
      },
    ],
  },
  {
    slug: "rocket-drums",
    name: "Rocket Drums",
    capacity: "50L",
    image: rocket,
    tagline: "UV-stabilised body with auto-sealing leak-proof mouth.",
    metaTitle: "50L Rocket HDPE Drums Manufacturer | Maruti Blow Tech",
    metaDescription:
      "Heavy-duty 50L rocket drums manufactured with specialized UV stabilizers. Auto-sealing leak-proof mouth for outdoor chemical storage in Ankleshwar, Gujarat.",
    features: [
      "Special UV stabilizer for sun exposure",
      "Auto sealing system",
      "Leak-proof mouth",
      "Long performance life",
    ],
    overview: [
      "Maruti Blow Tech 50L Rocket Drums are specialized, heavy-duty industrial blow-moulded containers engineered specifically for demanding environmental conditions, open yard storage, and aggressive chemical consignments.",
      "Compounded with high-performance UV stabilizer additives, the rocket drum polymer resists photochemical degradation, surface embrittlement, and discoloration even under intense sunlight and harsh tropical climates across Gujarat and coastal export hubs.",
      "The precision-engineered mouth geometry integrates an auto-sealing system that maintains tight sealing under temperature oscillations and expansion pressures, protecting liquid contents against environmental exposure and evaporation.",
    ],
    specs: [
      { label: "Nominal Volume", value: "50 Litres" },
      { label: "Mouth Architecture", value: "Auto-sealing leak-proof neck system" },
      { label: "UV Protection", value: "Special compounded UV stabilizer package" },
      { label: "Material Grade", value: "High Molecular High Density Polyethylene (HM-HDPE)" },
      { label: "Design Life", value: "Long performance life with excellent chemical resistance" },
      { label: "Drop Strength", value: "High drop impact resistance across broad temperature ranges" },
    ],
    useCases: [
      "Outdoor yard storage of agrochemicals, pesticides, and technical concentrates",
      "Industrial acids, caustic liquids, and chemical processing solutions",
      "Export consignments across maritime shipping routes exposed to UV radiation",
      "Wastewater treatment chemicals and coagulants stored at facility sites",
    ],
    faqs: [
      {
        question: "What is the difference between a Rocket Drum and a standard narrow mouth drum?",
        answer:
          "Rocket drums feature a proprietary fortified neck structure and a compounded UV-stabilized outer resin layer, making them specifically suitable for prolonged outdoor exposure and higher hydraulic shock resistance.",
      },
      {
        question: "Does the UV stabilization prevent the drum from becoming brittle?",
        answer:
          "Yes. The specialized UV stabilizer prevents polymer photo-oxidation, preserving elongation and drop impact resistance even after extended exposure to sunlight.",
      },
      {
        question: "How does the auto-sealing system prevent leaks during hot transit?",
        answer:
          "The mouth and closure mating surfaces are engineered to maintain uniform compression under thermal expansion, preventing seal relaxation and vapor leaks.",
      },
      {
        question: "Can rocket drums be supplied in custom branding or colors?",
        answer:
          "Yes. In addition to standard industrial finishes, we can manufacture custom color runs and apply client batch numbering. [TODO: Specify minimum order quantity for custom colour runs].",
      },
    ],
  },
  {
    slug: "jerry-cans",
    name: "Industrial Jerry Cans",
    capacity: "10L, 35L",
    image: jerryCan,
    tagline: "Used across oil, chemical, pharma and adhesive industries.",
    metaTitle: "10L & 35L HDPE Jerry Cans Manufacturer Ankleshwar Gujarat",
    metaDescription:
      "Buy durable 10L & 35L HDPE plastic jerry cans in Ankleshwar. Integrated ergonomic handles, auto-sealing leak-proof bungs for chemical, oil & pharma transport.",
    features: [
      "Integrated handle for easy handling",
      "Auto-sealing leak-proof mouth",
      "Odourless & non-toxic",
      "Stackable with and without pallets",
    ],
    overview: [
      "Maruti Blow Tech manufactures precision 10L and 35L HDPE Jerry Cans designed for industrial chemicals, lubricants, pharmaceutical formulations, and commercial adhesive packaging.",
      "Featuring an ergonomically integrated carry handle moulded directly into the container top, these jerry cans facilitate safe manual lifting, carrying, and precise decanting on plant floors and dispensing lines.",
      "The rectangular body design optimizes pallet footprints and shipping container cubing, while interlocking top-and-bottom recesses allow safe vertical inter-locking stacking with or without wooden pallets.",
    ],
    specs: [
      { label: "Available Sizes", value: "10 Litres and 35 Litres" },
      { label: "Handle Design", value: "Integral blow-moulded heavy-duty top handle" },
      { label: "Closure Mechanism", value: "Threaded auto-sealing leak-proof cap with tamper ring" },
      { label: "Resin Specification", value: "100% Virgin HM-HDPE polymer (odourless & non-toxic)" },
      { label: "Stacking Profile", value: "Interlocking foot-to-shoulder design for multi-layer stacking" },
      { label: "Resistance", value: "High resistance to environmental stress cracking (ESCR)" },
    ],
    useCases: [
      "Automotive and industrial oils, coolants, and brake fluids",
      "Pharmaceutical liquid chemicals, diagnostic reagents, and sanitizer bases",
      "Specialty adhesives, textile chemicals, and dye solutions",
      "Liquid food flavours, food colours, and edible cooking oils",
    ],
    faqs: [
      {
        question: "What capacities of jerry cans does Maruti Blow Tech supply?",
        answer:
          "We offer 10 Litre and 35 Litre standard industrial jerry cans, alongside 20L to 35L Mouser Jerry Cans for specialized high-barrier applications.",
      },
      {
        question: "Are the jerry cans stackable during transport?",
        answer:
          "Yes. Our jerry cans feature an interlocking base and handle profile that enables solid stacking, preventing slipping during road transit and warehouse racking.",
      },
      {
        question: "Is the inner plastic safe for drinking water or food liquids?",
        answer:
          "Yes. We use pure virgin, non-toxic, and odourless HM-HDPE resin compliant with food contact safety requirements.",
      },
      {
        question: "Can induction heat seal (IHS) wads be used with these caps?",
        answer:
          "Yes. Our caps are compatible with induction sealing wads and tamper-evident pull rings for guaranteed leak-proofing and security. [TODO: Confirm standard cap thread pitch and neck size].",
      },
    ],
  },
  {
    slug: "mouser-jerry-cans",
    name: "Mouser Jerry Cans",
    capacity: "20L – 35L",
    image: mouser,
    tagline: "Heavy-duty mouser cans built for chemicals, pharma and food.",
    metaTitle: "20L–35L Mouser Jerry Cans Manufacturer | Maruti Blow Tech",
    metaDescription:
      "Heavy-duty 20L to 35L Mouser jerry cans in Ankleshwar, Gujarat. Premium virgin HDPE, auto-sealing leak-proof neck for chemical, pharma & export shipping.",
    features: [
      "Premium-grade HDPE raw material",
      "Integrated handle for easy lifting",
      "Auto-sealing leak-proof mouth",
      "Stackable design",
    ],
    overview: [
      "Engineered for the most rigorous industrial standards, Maruti Blow Tech's Mouser Jerry Cans (20L to 35L) represent the premium standard in high-barrier liquid chemical and pharma transportation.",
      "The heavy-gauge Mouser architecture delivers outstanding top-load compression resistance, superior drop strength from elevated racking, and resistance to environmental stress crack cracking (ESCR) when exposed to aggressive surfactants and solvents.",
      "With precision-machined neck threading, an auto-sealing closure system, and an ergonomic full-grip handle, Mouser cans guarantee safe handling and zero leakage across domestic and export maritime routes.",
    ],
    specs: [
      { label: "Capacity Range", value: "20 Litres, 25 Litres, 30 Litres, 35 Litres [TODO: Confirm specific sizes]" },
      { label: "Neck & Closure", value: "Auto-sealing leak-proof threaded mouser neck" },
      { label: "Raw Material", value: "Premium-grade Virgin HM-HDPE" },
      { label: "Load Resistance", value: "Superior top-load compression for tall warehouse stacks" },
      { label: "Safety Rating", value: "Tested against strict drop, leak, and pressure test standards" },
      { label: "Chemical Compatibility", value: "Broad resistance to acids, alkalis, alcohols, and agrochemicals" },
    ],
    useCases: [
      "Active pharmaceutical liquid intermediates and bulk formulation transport",
      "Export packaging of hazardous and non-hazardous specialty chemicals",
      "Electronic-grade chemicals and high-purity laboratory solvents",
      "Food concentrates, edible flavorings, and pharmaceutical syrups",
    ],
    faqs: [
      {
        question: "What makes a Mouser Jerry Can different from standard jerry cans?",
        answer:
          "Mouser cans feature a reinforced wall distribution, a fortified neck collar, and higher gram weight, offering elevated drop test performance and superior stacking rigidity under hot ambient conditions.",
      },
      {
        question: "Can Mouser Jerry Cans be stacked on standard pallets?",
        answer:
          "Yes. The base dimensions are engineered to optimize international wooden and plastic pallet footprints (1200x1000mm and 1200x800mm) without overhang.",
      },
      {
        question: "Are these cans compatible with vented caps for off-gassing liquids?",
        answer:
          "Yes. We supply specialized breathable micro-porous membrane vent caps that equalize internal pressure without allowing liquid leakage.",
      },
      {
        question: "Where are these mouser cans produced?",
        answer:
          "All Maruti Mouser cans are manufactured at our continuous 24/7 blow moulding plant in Ankleshwar GIDC, Gujarat.",
      },
    ],
  },
  {
    slug: "accessories",
    name: "Lids, Caps & Accessories",
    capacity: "Standard & Custom",
    image: accessories,
    tagline: "Locking rings, vent caps, pilfer-proof seals and custom-mould drums.",
    metaTitle: "HDPE Drum Lids, Caps, Locking Rings & Accessories Gujarat",
    metaDescription:
      "Buy drum lids, clamping rings, vented bungs, pilfer-proof seals & accessories in Ankleshwar, Gujarat. Compatible with 10L to 80L drums & jerry cans.",
    features: [
      "Strong & sturdy lids with leak-proof lining",
      "Drum lids with locking ring (plastic / metal / powder coated)",
      "Vent caps and narrow-mouth jerry can caps",
      "Pilfer-proof seals",
      "Custom-mould drums in brand colours",
    ],
    overview: [
      "A superior container is only as dependable as its closure system. Maruti Blow Tech manufactures and supplies a comprehensive suite of industrial lids, caps, clamping rings, and sealing accessories engineered to complement our full range of HDPE drums and jerry cans.",
      "Our inventory includes galvanized steel and powder-coated snap-fit locking rings with heavy-duty lever fasteners, injection-moulded HDPE lids with elastomeric rubber gaskets, threaded bung plugs with tamper-evident caps, and specialized gas-permeable vent caps.",
      "Each closure component is engineered to withstand drop impacts, internal vapor pressures, and chemical aggression, guaranteeing zero leakage and zero contamination throughout the logistical chain.",
    ],
    specs: [
      { label: "Clamping Rings", value: "Galvanized steel, powder-coated metal, and high-impact plastic" },
      { label: "Gasket Linings", value: "Food-grade EPDM / nitrile / elastomeric continuous seals" },
      { label: "Bung Closures", value: "2-inch standard bungs with leak-proof rubber / PTFE washers" },
      { label: "Ventilated Options", value: "Pressure-relieving one-way breathers & porous vent caps" },
      { label: "Tamper Proofing", value: "Tear-off pilfer-proof seals and wire lock compatible tabs" },
      { label: "Compatibility", value: "Compatible with all 10L–80L Maruti drums and jerry cans" },
    ],
    useCases: [
      "Replacement lids and clamping rings for full open mouth chemical drums",
      "Breathable venting closures for off-gassing peroxides and agrochemicals",
      "Tamper-evident sealing for export pharmaceutical and food-grade barrels",
      "Custom color closure matching for brand identification programs",
    ],
    faqs: [
      {
        question: "Which drum sizes are these locking rings compatible with?",
        answer:
          "Our locking rings are engineered for full open mouth drums spanning 20L, 30L, 50L, and 80L standard mouth dimensions.",
      },
      {
        question: "Do you supply breathable vent caps for off-gassing liquids?",
        answer:
          "Yes. We offer specialized venting closures with hydrophobic ePTFE membranes that permit gas exchange to equalize pressure without permitting liquid escape.",
      },
      {
        question: "Can caps and lids be purchased separately in bulk quantities?",
        answer:
          "Yes. Maruti Blow Tech supplies closures, rings, bungs, and gasket seals as separate bulk consignments for replacement and assembly line needs.",
      },
      {
        question: "Are your rubber gaskets food-contact safe?",
        answer:
          "Yes. We offer certified food-grade gasket materials suitable for pharmaceutical, flavouring, and food packaging applications. [TODO: Confirm exact gasket elastomer certifications].",
      },
    ],
  },
];
