/* Tulsi Group - single-file build (config + CSS + markup + logic). Search "REPLACE" in the CONFIG section. */
/* ======================= CONFIG ======================= */
/* ==========================================================================
 * TULSI GROUP - SITE CONFIG
 * Everything you need to edit lives in this one file.
 * Search for "REPLACE" to find placeholders.
 * ========================================================================== */
window.TULSI_CONFIG = {

  /* ---------- Brand ---------- */
  brand: {
    name: "Tulsi Group",
    pageTitle: "Tulsi Group",
    logo: "images/pin/logo.png",                       // REPLACE (dark logo, UI brightens it on dark panels)
    aboutHeading: "Driven by Purpose. Powered by People. Built on Trust.",   // REPLACE
    aboutText: "Trusted by families across Surat, we make property buying smooth, transparent and absolutely stress-free." // REPLACE
  },

  /* ---------- Contact / About Us popup ---------- */
  contact: {
    address: "REPLACE - Tulsi Group office address, Surat, Gujarat",
    mapsLink: "https://maps.google.com",           // REPLACE ("Open in Google" button)
    phoneDisplay: "+91 00000 00000",               // REPLACE
    whatsapp: "910000000000",                      // REPLACE (country code + number, digits only)
    whatsappAboutMessage: "Hello Tulsi Group, I'm interested in knowing more about your properties. Please share details.",
    whatsappEnquireMessage: "Hello \uD83D\uDC4B\nI am interested in your property.\nPlease share more information about available properties.\nThank you!"
  },
  social: {                                        // leave "" to hide an icon
    website:   "https://example.com",              // REPLACE
    instagram: "https://www.instagram.com/",       // REPLACE
    facebook:  "https://www.facebook.com/"         // REPLACE
  },

  /* ---------- Share button (floating controls) ---------- */
  share: {
    title: "Virtual Tour",
    text: "Check out impressive 360 virtual tour \uD83D\uDC47",
    url: ""                                        // REPLACE with the live tour link ("" = current page URL)
  },

  /* ---------- Google Maps ---------- */
  maps: {
    apiKey: "AIzaSyADj8Ydma7BpqC7-wbggzXRTP1ZZ0j7osA",    // REPLACE
    mapId: "DEMO_MAP_ID",                          // REPLACE with your cloud Map ID (needed for Advanced Markers)
    center: { lat: 20.82, lng: 72.88 },
    zoom: 10,
    minZoom: 9
  },

  /* ---------- Floating controls ----------
   * VR / Music / Autoplay need the 3DVista tour (window.blazeIT). They are shown automatically when the
   * tour is present; set alwaysShow:true to show them on the standalone page too. */
  controls: { alwaysShow: false },

  /* ---------- Tour integration ----------
   * "blazeIT" (3DVista) is auto-detected: if window.blazeIT exists, clicking a project calls
   * blazeIT.openMediaByName(<project name>) exactly like the Pramukh build.
   * Otherwise, if a project has `tourUrl`, it opens in a new tab. */

  /* ---------- Projects ----------
   * id        : "proj-<n>" (n must match property_id in filterData)
   * name      : must match the media/panorama name in the tour AND the filterData row name
   * subTitle  : shown under the name on the gallery card
   * thumbnail : gallery card image   (images/Thumbnail/...)  REPLACE
   * pin       : map pin image        (images/pin/...)        REPLACE (white card, ~248x171 PNG)
   * polygon   : optional boundary [{lat,lng},...]; floorplan + bounds{sw,ne} optional map overlay
   */
  projects: [
    { id: "proj-1", name: "Tulsi Kalash", subTitle: "Residential", areaText: "Sachin, Surat",
      thumbnail: "images/Thumbnail/Tulsi Kalash.jpg", pin: "images/pin/Tulsi Kalash.png",
      lat: 21.0939583, lng: 72.8728708, polygon: [],
      tourUrl: "https://360eye.in/gallery/realestate/tulsikalash/index.html" },
    { id: "proj-2", name: "Sarthak", subTitle: "Residential", areaText: "Athwa, Surat",
      thumbnail: "images/Thumbnail/Sarthak.jpg", pin: "images/pin/Sarthak.png",
      lat: 21.1705203, lng: 72.7906155, polygon: [],
      tourUrl: "https://360eye.in/gallery/realestate/sarthak/index.html" },
    { id: "proj-3", name: "Sonorium Trade Centre", subTitle: "Commercial", areaText: "Salvav, Vapi",
      thumbnail: "images/Thumbnail/Sonorium Trade Centre.jpg", pin: "images/pin/Sonorium Trade Centre.png",
      lat: 20.4052867, lng: 72.9160727, polygon: [],
      tourUrl: "https://360eye.in/gallery/realestate/sonoriumtradecentre/index.html" },
    { id: "proj-4", name: "Sonorous The Business Gateway", subTitle: "Commercial", areaText: "Vapi",
      thumbnail: "images/Thumbnail/Sonorous The Business Gateway.jpg", pin: "images/pin/Sonorous The Business Gateway.png",
      lat: 20.3734021, lng: 72.914107, polygon: [],
      tourUrl: "https://360eye.in/gallery/realestate/sonorousthebusinessgateway/index.html" },
    { id: "proj-5", name: "Tulsi Industrial Park", subTitle: "Industrial", areaText: "Sachin, Surat",
      thumbnail: "images/Thumbnail/Tulsi Industrial Park.jpg", pin: "images/pin/Tulsi Industrial Park.png",
      lat: 21.0627392, lng: 72.9036479, polygon: [],
      tourUrl: "https://360eye.in/gallery/realestate/tulsiindustrialpark/index.html" }
  ],

  /* ---------- Other Tulsi projects (map pins only, not clickable, not in gallery) ----------
   * lat/lng come from Google Places - verify each one. lat: null = coordinates not found yet (pin hidden). */
  otherProjects: [
    { name: "Tulsi Darshan Apartment", pin: "images/pin/Tulsi Darshan Apartment.png", lat: 21.2286104, lng: 72.78261 }, // Jahangirabad - check
    { name: "Tulsi Veer Apartment", pin: "images/pin/Tulsi Veer Apartment.png", lat: null, lng: null }, // not found
    { name: "Tulsi Vatika", pin: "images/pin/Tulsi Vatika.png", lat: null, lng: null }, // not found
    { name: "Tulsi Vihar", pin: "images/pin/Tulsi Vihar.png", lat: 21.1938954, lng: 72.7992939 }, // Adajan - check
    { name: "Tulsi Mani Apartment", pin: "images/pin/Tulsi Mani Apartment.png", lat: null, lng: null }, // not found
    { name: "Ratnamani", pin: "images/pin/Ratnamani.png", lat: 21.1661773, lng: 72.7971125 }, // Ratnamani Apartment, Athwa - check
    { name: "Madhav Gems", pin: "images/pin/Madhav Gems.png", lat: 21.2113841, lng: 72.849517 }, // Varachha - low confidence
    { name: "Lake View Residency", pin: "images/pin/Lake View Residency.png", lat: 21.2543439, lng: 72.8587106 }, // Kosad - check
    { name: "Pearl Avenue", pin: "images/pin/Pearl Avenue.png", lat: 20.3270104, lng: 72.9570089 }, // Pearl Avenue Vapi - check
    { name: "Tulsi Bunglow", pin: "images/pin/Tulsi Bunglow.png", lat: 20.3937007, lng: 72.9254322 }, // Salvav, Vapi (near Sonorium) - check
    { name: "Tulsi Residency", pin: "images/pin/Tulsi Residency.png", lat: 21.2383284, lng: 72.8173239 }, // Dabholi - several Tulsi Residency exist, check
    { name: "Tulsi Kunj", pin: "images/pin/Tulsi Kunj.png", lat: null, lng: null }, // not found
    { name: "Tulsi Shivam", pin: "images/pin/Tulsi Shivam.png", lat: null, lng: null }, // not found
    { name: "Tulsi Shyam", pin: "images/pin/Tulsi Shyam.png", lat: 21.1592019, lng: 72.8073366 } // Althan - check
  ],

  /* ---------- Property Filter panel ----------
   * One row per project (same format as the Pramukh Google-Sheet "Filter Data" tab).
   * Every column NOT listed in filterIgnore becomes a button group; empty cells are skipped.
   * Comma-separated cells ("Open Plot, Constructed") create multi-value matches.
   * Optional: set sheetUrl to a Google Apps Script URL returning {"Filter Data":[...], "Landmark":[...]}
   * and the sheet will override filterData / landmarks live. */
  sheetUrl: "",
  filterData: [
    { property_id: 1, name: "Tulsi Kalash", possession_status: "Completed", category: "Residential", area: "Sachin" },
    { property_id: 2, name: "Sarthak", possession_status: "On-going", category: "Residential", area: "Athwa" },
    { property_id: 3, name: "Sonorium Trade Centre", possession_status: "On-going", category: "Commercial", area: "Salvav" },
    { property_id: 4, name: "Sonorous The Business Gateway", possession_status: "Completed", category: "Commercial", area: "Vapi" },
    { property_id: 5, name: "Tulsi Industrial Park", possession_status: "Completed", category: "Industrial", area: "Sachin" }
  ],
  filterIgnore: ["property_id", "name", "all_title", "dependency", "question",
                 "other_area", "other_possession_timing", "other_property_size"],

  /* ---------- Landmark Filter (map toggles) ----------
   * fname must be one of: BRTS, Railway, Metro, Circle, Bridge, Roads, School, College,
   * Hospital, Grocery, Garden, Lake, Aquarium, Multiplex.  Icons: images/landmarks/<fname>.webp
   * These are sample Surat landmarks - REPLACE with the ones around Tulsi projects. */
  landmarks: [
    { lat: 21.231992, lng: 72.779363, name: "Vasu Pujya Apartment BRTS", fname: "BRTS" },
    { lat: 21.227069, lng: 72.784322, name: "Samdrasti Park BRTS", fname: "BRTS" },
    { lat: 21.262117, lng: 72.845839, name: "Global Residency BRTS", fname: "BRTS" },
    { lat: 21.258978, lng: 72.84645499999999, name: "Kosad Depot BRTS BRTS", fname: "BRTS" },
    { lat: 21.2335791, lng: 72.8552098, name: "Utran Railway Station", fname: "Railway" },
    { lat: 21.2610368, lng: 72.8674173, name: "Kosad Railway Station", fname: "Railway" },
    { lat: 21.2374398, lng: 72.8774951, name: "Sudama Chowk", fname: "Circle" },
    { lat: 21.2316093, lng: 72.866295, name: "VIP Circle", fname: "Circle" },
    { lat: 21.2693243, lng: 72.8467258, name: "Vedant Circle", fname: "Circle" },
    { lat: 21.2299894, lng: 72.779117, name: "The Radiant Circle", fname: "Circle" },
    { lat: 21.2368372, lng: 72.884537, name: "Mahadev Chowk", fname: "Circle" },
    { lat: 21.2387781, lng: 72.8889536, name: "Lajamni Chowk", fname: "Circle" },
    { lat: 21.2559244, lng: 72.8213459, name: "Sahid Bhagat Singh Bridge", fname: "Bridge" },
    { lat: 21.2354993, lng: 72.8445968, name: "Amroli Bridg", fname: "Bridge" },
    { lat: 21.2285145, lng: 72.8512286, name: "Tapi River Railway Bridge", fname: "Bridge" },
    { lat: 21.2326524, lng: 72.7967747, name: "Dabholi-Jahaangirpura Bridge", fname: "Bridge" },
    { lat: 21.2244576, lng: 72.8662178, name: "Kapodra utran Bridge", fname: "Bridge" },
    { lat: 21.2274965, lng: 72.8796449, name: "Chikuvadi - Mota varachha Bridge", fname: "Bridge" },
    { lat: 21.2349958, lng: 72.8912529, name: "Savaji Korat Bridge", fname: "Bridge" },
    { lat: 21.2633797, lng: 72.8511327, name: "Harikrushn International School", fname: "School" },
    { lat: 21.2631696, lng: 72.8561397, name: "Madhuvan International School", fname: "School" },
    { lat: 21.2338617, lng: 72.8668826, name: "Ashadeep School 4", fname: "School" },
    { lat: 21.2379179, lng: 72.86904229999999, name: "Vidyadhish International School", fname: "School" },
    { lat: 21.2338867, lng: 72.8723, name: "Gajera International School", fname: "School" },
    { lat: 21.2417641, lng: 72.8484582, name: "Podar International School Amroli", fname: "School" },
    { lat: 21.2409115, lng: 72.7582833, name: "Gyanmudra Innovative School", fname: "School" },
    { lat: 21.2191518, lng: 72.7830251, name: "Madhav Saraswati Shishumandir", fname: "School" },
    { lat: 21.2234121, lng: 72.77963559999999, name: "The Radiant International School", fname: "School" },
    { lat: 21.2324294, lng: 72.7767598, name: "Podar International School Surat (Jahangirabad) CBSE", fname: "School" },
    { lat: 21.2359579, lng: 72.8523081, name: "J. Z. Shah Arts & H. P. Desai Commerce College", fname: "College" },
    { lat: 21.2636613, lng: 72.83064279999999, name: "Varniraj hospital", fname: "Hospital" },
    { lat: 21.2332952, lng: 72.863855, name: "Silver Multispeciality Hospital", fname: "Hospital" },
    { lat: 21.2221882, lng: 72.7903803, name: "Pahal Hospital & Pahal Bliss IVF", fname: "Hospital" },
    { lat: 21.2183604, lng: 72.791158, name: "LifeLine Multispeciality Hospital", fname: "Hospital" },
    { lat: 21.221697, lng: 72.7759573, name: "SHAISHAV CHILDREN CLINIC & VACCINATION", fname: "Hospital" },
    { lat: 21.2309324, lng: 72.7766394, name: "Ugat Urban Health Center", fname: "Hospital" },
    { lat: 21.2594996, lng: 72.8534243, name: "D-Mart", fname: "Grocery" },
    { lat: 21.2603446, lng: 72.850673, name: "Yogi Arcade", fname: "Grocery" },
    { lat: 21.2632389, lng: 72.8500664, name: "Kailashbaa Naturals", fname: "Grocery" },
    { lat: 21.260054, lng: 72.8519048, name: "SWASTIK MASALA", fname: "Grocery" },
    { lat: 21.2407851, lng: 72.8716556, name: "D Mart", fname: "Grocery" },
    { lat: 21.2358858, lng: 72.8617965, name: "Emporis Galaxy", fname: "Grocery" },
    { lat: 21.2340958, lng: 72.8657595, name: "Sitaram Provision Store", fname: "Grocery" },
    { lat: 21.2339448, lng: 72.8632969, name: "VIVEK SUPER STORE", fname: "Grocery" },
    { lat: 21.2372593, lng: 72.8854233, name: "Dhara Arcade", fname: "Grocery" },
    { lat: 21.2416554, lng: 72.8875478, name: "Raghuvir Shoppers", fname: "Grocery" },
    { lat: 21.2303165, lng: 72.7782048, name: "D Mart", fname: "Grocery" },
    { lat: 21.2299462, lng: 72.7798446, name: "Nirvana shopping mall", fname: "Grocery" },
    { lat: 21.2292713, lng: 72.7786986, name: "Times Galaxy", fname: "Grocery" },
    { lat: 21.2422831, lng: 72.8822279, name: "Mota Varachha Lake Garden", fname: "Garden" },
    { lat: 21.2222744, lng: 72.784053, name: "Sneh Rashmi Botanical Garden", fname: "Garden" },
    { lat: 21.2169293, lng: 72.75714510000002, name: "Bhesan Lake Garden", fname: "Garden" },
    { lat: 21.2324167, lng: 72.8686518, name: "Moon Garden", fname: "Garden" },
    { lat: 21.254244, lng: 72.8591847, name: "Kosad Lake Garden", fname: "Garden" },
    { lat: 21.2323332, lng: 72.8987899, name: "Sarthana Nature Park", fname: "Garden" },
    { lat: 21.2423851, lng: 72.872014, name: "Cinezza Multiplex", fname: "Multiplex" },
    { lat: 21.2352203, lng: 72.8733021, name: "Rajhans Multiplex - AR Mall", fname: "Multiplex" },
    { lat: 21.2299045, lng: 72.7786271, name: "Cinezza Multiplex", fname: "Multiplex" }
  ],

  /* Optional road polylines: [{ name, fname: "Roads", latlng: [{lat,lng},...] }] */
  roads: []
};

/* ======================= ICONS ======================= */
/* Control-panel icons (copied from the Pramukh build) */
window.TULSI_ICONS = {
 "musicOn": "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#ffffff\" d=\"M4,11v10h5l10,6V5L9,11H4z M17,8.532v14.935L9.554,19H6v-6h3.554L17,8.532z M21.657,21.657 l-1.414-1.414c2.339-2.34,2.339-6.146,0-8.486l1.414-1.414C24.775,13.462,24.775,18.538,21.657,21.657z M24.485,24.485l-1.414-1.414 c3.899-3.899,3.899-10.243,0-14.143l1.414-1.414C29.164,12.193,29.164,19.807,24.485,24.485z\"/></svg>",
 "musicOff": "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#ffffff\" d=\"M1.5 5h2.79l3.86-3.83.85.35v13l-.85.33L4.29 11H1.5l-.5-.5v-5l.5-.5zm3.35 5.17L8 13.31V2.73L4.85 5.85 4.5 6H2v4h2.5l.35.17zm9.381-4.108l.707.707L13.207 8.5l1.731 1.732-.707.707L12.5 9.207l-1.732 1.732-.707-.707L11.793 8.5 10.06 6.77l.707-.707 1.733 1.73 1.731-1.731z\"/></svg>",
 "fsOn": "<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"6\"><polyline points=\"52 40 40 40 40 52\"/><line x1=\"40\" y1=\"40\" x2=\"56\" y2=\"56\"/><polyline points=\"24 52 24 40 12 40\"/><line x1=\"24\" y1=\"40\" x2=\"8\" y2=\"56\"/><polyline points=\"12 24 24 24 24 12\"/><line x1=\"24\" y1=\"24\" x2=\"8\" y2=\"8\"/><polyline points=\"40 12 40 24 52 24\"/><line x1=\"40\" y1=\"24\" x2=\"56\" y2=\"8\"/></svg>",
 "fsOff": "<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"6\"><polyline points=\"20 8 8 8 8 20\"/><line x1=\"8\" y1=\"8\" x2=\"24\" y2=\"24\"/><polyline points=\"56 20 56 8 44 8\"/><line x1=\"56\" y1=\"8\" x2=\"40\" y2=\"24\"/><polyline points=\"44 56 56 56 56 44\"/><line x1=\"56\" y1=\"56\" x2=\"40\" y2=\"40\"/><polyline points=\"8 44 8 56 20 56\"/><line x1=\"8\" y1=\"56\" x2=\"24\" y2=\"40\"/></svg>",
 "share": "<svg viewBox=\"0 0 26 26\" fill=\"none\" stroke=\"#f0f0f0\" stroke-width=\"2\"><circle cx=\"18\" cy=\"5\" r=\"3\" fill=\"#f0f0f0\"/><circle cx=\"6\" cy=\"12\" r=\"3\" fill=\"#f0f0f0\"/><circle cx=\"18\" cy=\"19\" r=\"3\" fill=\"#f0f0f0\"/><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"/><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"/></svg>",
 "vr": "<svg viewBox=\"0 0 32 32\"  style=\"transform:scale(1.2);\"><path fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M3,11v10c0,1.1,0.9,2,2,2h6.2c0.5,0,1-0.2,1.4-0.6l2-2c0.8-0.8,2-0.8,2.8,0l2,2c0.4,0.4,0.9,0.6,1.4,0.6H27c1.1,0,2-0.9,2-2V11c0-1.1-0.9-2-2-2H5C3.9,9,3,9.9,3,11z\"/><circle fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" cx=\"9\" cy=\"16\" r=\"3\"/><circle fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" cx=\"23\" cy=\"16\" r=\"3\"/></svg>",
 "enquire": "<svg viewBox=\"-2 -2 24 24\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMinYMin\"><defs><linearGradient id=\"neonGreen\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#39ff14\"/><stop offset=\"50%\" stop-color=\"#00ff99\"/><stop offset=\"100%\" stop-color=\"#00cc66\"/></linearGradient><filter id=\"neonGlow\"><feGaussianBlur stdDeviation=\"0.5\" result=\"blur\"/><feMerge><feMergeNode in=\"blur\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#neonGlow)\" fill=\"url(#neonGreen)\"><path d=\"M9.516.012C4.206.262.017 4.652.033 9.929a9.798 9.798 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a9.981 9.981 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.784 7.784 0 0 1-5.52 2.27 7.77 7.77 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.62 7.62 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.672 7.672 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z\"/><path d=\"M14.842 12.045l-1.931-.55a.723.723 0 0 0-.713.186l-.472.478a.707.707 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.694.694 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072z\"/></g></svg>",
 "autoplay": "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"512\" height=\"400\" viewBox=\"0 0 512 400\">\n<path d=\"M0 0 C5.81296637 2.62454275 11.26432244 5.87731694 16.72509766 9.15771484 C18.05845244 9.93595477 19.39302444 10.7121143 20.72900391 11.48583984 C23.4485462 13.06858832 26.15562097 14.67070494 28.85791016 16.28271484 C34.87515416 19.85680971 40.95799556 23.31617618 47.03759766 26.78271484 C48.24503875 27.47159314 49.45247688 28.16047664 50.65991211 28.84936523 C53.11936648 30.25225111 55.57911551 31.65461874 58.0390625 33.05664062 C63.9778115 36.44145536 69.91447273 39.82992506 75.85009766 43.22021484 C76.42683228 43.54962067 77.00356689 43.87902649 77.59777832 44.21841431 C87.25662488 49.73633184 96.90587679 55.27093117 106.52978516 60.84960938 C111.43061718 63.69000197 116.338596 66.51052451 121.29150391 69.25927734 C141.54069512 80.55986608 141.54069512 80.55986608 144.72509766 90.15771484 C145.2310947 96.53327755 144.6409417 100.58886075 140.45507812 105.7121582 C135.1132777 111.43335264 128.71271056 114.92091452 121.91259766 118.65771484 C120.66252437 119.35629005 119.41318783 120.05618509 118.16455078 120.75732422 C115.60159444 122.19575444 113.03605095 123.62939883 110.46875 125.06005859 C104.852212 128.19789006 99.29046635 131.43028968 93.72509766 134.65771484 C81.27059544 141.85615385 68.78197439 148.99429035 56.28808594 156.12402344 C50.87975663 159.21059427 45.47354935 162.30087837 40.06713867 165.39080811 C38.30547603 166.39749837 36.54363586 167.40387723 34.78173828 168.41015625 C29.35507438 171.50989506 23.93013303 174.6125321 18.51025391 177.72412109 C17.54982178 178.27487305 16.58938965 178.825625 15.59985352 179.39306641 C13.83035375 180.4079797 12.06157674 181.42415469 10.29370117 182.44189453 C8.11095611 183.69302666 5.91940034 184.92701486 3.72509766 186.15771484 C2.70029297 186.74810547 1.67548828 187.33849609 0.61962891 187.94677734 C-5.10701675 190.34254003 -11.20807079 189.96486146 -17.27490234 189.15771484 C-22.44017915 186.81213021 -24.47274009 183.20753604 -26.62684643 178.07789123 C-27.63762695 175.08296927 -27.65617026 172.29065516 -27.6625824 169.14369202 C-27.66796794 168.47365298 -27.67335347 167.80361395 -27.67890221 167.1132707 C-27.69311284 164.88708989 -27.68609561 162.66150952 -27.67895508 160.43530273 C-27.68466228 158.83150254 -27.69162789 157.2277064 -27.69975281 155.62391663 C-27.7176606 151.28089846 -27.71652035 146.93808261 -27.71081042 142.59503865 C-27.70771517 138.96436218 -27.71381476 135.33372438 -27.71984917 131.70305341 C-27.73388493 123.13558022 -27.73234097 114.56820676 -27.72094727 106.00073242 C-27.70946631 97.17276431 -27.72354345 88.3451 -27.75034374 79.51717192 C-27.77252015 71.92713793 -27.77913376 64.33719918 -27.77326733 56.7471351 C-27.76990127 52.21859264 -27.77228946 47.69024492 -27.78951836 43.16172981 C-27.80501647 38.90245076 -27.8010004 34.64362085 -27.78221321 30.38435936 C-27.77853526 28.82514658 -27.78161261 27.2659003 -27.792099 25.70671844 C-27.85383804 15.76465158 -27.18596111 9.23152081 -20.96240234 1.15771484 C-15.06814856 -3.07969646 -6.52207901 -2.4148071 0 0 Z \" fill=\"#FFFFFF\" transform=\"translate(197.27490234375,31.84228515625)\"/>\n<path d=\"M0 0 C3.72204581 2.19469984 6.24761638 4.72421908 8.4375 8.4375 C9.76317236 14.47667407 9.1132571 18.66456388 6.31542969 24.0402832 C4.13284743 27.29187707 1.2662072 28.98309133 -2.0625 30.9375 C-3.41288706 31.78603412 -4.76052631 32.63895595 -6.10546875 33.49609375 C-7.09812744 34.12427002 -7.09812744 34.12427002 -8.11083984 34.76513672 C-21.72159273 43.66190437 -33.56165927 56.04596439 -38 72 C-39.33285866 84.37454044 -36.97580288 94.0079325 -29.5 103.9375 C-26.82251768 107.14245207 -24.06043624 110.15308257 -21 113 C-20.37351563 113.63164062 -19.74703125 114.26328125 -19.1015625 114.9140625 C20.07310659 152.75171217 92.99672011 169 146 169 C145.58113525 168.59160889 145.16227051 168.18321777 144.73071289 167.76245117 C142.83608224 165.90939136 140.94925088 164.0485808 139.0625 162.1875 C138.40314453 161.54490234 137.74378906 160.90230469 137.06445312 160.24023438 C136.43603516 159.61826172 135.80761719 158.99628906 135.16015625 158.35546875 C134.57886963 157.78465576 133.99758301 157.21384277 133.39868164 156.62573242 C130.22273765 152.9342311 130.66353533 148.3388837 130.73046875 143.7265625 C131.12172336 139.76865354 132.23017476 137.83907087 135 135 C139.78915552 131.45407898 143.85781718 130.55185929 149.7265625 131.25 C157.03413287 133.66074487 162.21022883 139.91976367 167.484375 145.21875 C168.38117981 146.11364136 169.27798462 147.00853271 170.20196533 147.93054199 C172.09044007 149.81765922 173.97677899 151.70665097 175.85986328 153.59912109 C178.26951031 156.02019454 180.68807072 158.43213309 183.1094017 160.84151459 C185.42675987 163.14990057 187.73647681 165.46590115 190.046875 167.78125 C190.91455505 168.64488159 191.78223511 169.50851318 192.6762085 170.39831543 C193.87820892 171.60977234 193.87820892 171.60977234 195.10449219 172.84570312 C195.81031433 173.55311646 196.51613647 174.26052979 197.24334717 174.98937988 C200.47963243 178.69354961 201.29218134 181.5542487 201.3125 186.4375 C201.32925781 187.36433594 201.34601563 188.29117188 201.36328125 189.24609375 C200.67383618 194.47253218 197.39317718 197.85788716 193.77563477 201.4831543 C192.92787979 202.33721359 192.08012482 203.19127289 191.2066803 204.07121277 C189.83786964 205.43395073 189.83786964 205.43395073 188.44140625 206.82421875 C187.49091355 207.77606013 186.5407178 208.72819812 185.59080505 209.68061829 C183.60437895 211.66998462 181.61440178 213.65570971 179.62182617 215.63891602 C177.07181901 218.17751375 174.53091728 220.72500628 171.99260044 223.27528667 C170.03422562 225.24089657 168.07110229 227.20170819 166.1065197 229.16111183 C164.71240254 230.55325223 163.32230165 231.94941085 161.93226624 233.34562683 C160.65590553 234.61253105 160.65590553 234.61253105 159.35375977 235.9050293 C158.60780045 236.64939743 157.86184113 237.39376556 157.09327698 238.16069031 C152.72631293 241.9978315 149.14314076 242.43278473 143.47265625 242.32421875 C138.71340705 241.70017818 134.99860722 238.62989295 132 235 C131.00592062 232.01776186 130.76959022 229.81124878 130.6875 226.6875 C130.63142578 225.30111328 130.63142578 225.30111328 130.57421875 223.88671875 C131.55511656 217.23641157 137.1326798 212.61039677 141.75 208.125 C142.35199219 207.53203125 142.95398438 206.9390625 143.57421875 206.328125 C145.04491945 204.88076876 146.5218267 203.4397237 148 202 C146.70304199 201.84966309 145.40608398 201.69932617 144.06982422 201.54443359 C83.93189282 194.52432858 16.99552141 184.91958945 -32 146 C-32.55623047 145.56187988 -33.11246094 145.12375977 -33.68554688 144.67236328 C-50.94358754 130.94797069 -66.0851199 113.4226804 -70 91 C-71.94432945 68.42131335 -67.08653502 49.25529642 -52.375 31.59472656 C-42.8815793 20.58424645 -32.24505415 11.80362773 -20 4 C-19.02675781 3.37609375 -18.05351563 2.7521875 -17.05078125 2.109375 C-11.3483131 -1.14917823 -6.34327566 -2.11442522 0 0 Z \" fill=\"#FFFFFF\" transform=\"translate(70,127)\"/>\n<path d=\"M0 0 C1.60891917 1.49490127 3.21337513 2.99462617 4.8125 4.5 C5.48925781 5.10070312 6.16601562 5.70140625 6.86328125 6.3203125 C18.85846405 17.42607292 28.79710688 34.40634351 29.98950195 50.95678711 C30.61357955 77.1357234 23.2352304 96.26467511 5.25 115.5 C-34.35064049 153.26432047 -92.67133999 169.19792845 -145.3125 177.375 C-146.07473877 177.49520508 -146.83697754 177.61541016 -147.62231445 177.73925781 C-163.61958416 180.03498951 -163.61958416 180.03498951 -170.1875 175.5 C-174.61082017 170.59848306 -175.55986971 167.58429149 -175.45703125 161.10546875 C-175.0387549 157.06213068 -173.85600075 154.52827225 -171.1875 151.5 C-164.28466004 147.01662279 -156.77828228 146.1985436 -148.79943848 145.03521729 C-106.48228615 138.80541686 -52.77046853 127.32417502 -21.41015625 95.69921875 C-19.1875 93.5 -19.1875 93.5 -17.1875 93.5 C-16.77757812 92.6028125 -16.77757812 92.6028125 -16.359375 91.6875 C-15.22589524 89.57167111 -14.09576864 88.21176118 -12.4375 86.5 C-4.72897397 77.78766099 -1.67330835 67.80992781 -1.921875 56.41796875 C-2.80056774 43.45725077 -10.95732651 33.05526088 -20.09375 24.28515625 C-23.49364976 21.38636112 -27.05579833 18.69358995 -30.65722656 16.05029297 C-34.83715719 12.94459705 -37.53181854 10.46704437 -39.1875 5.5 C-39.72975459 0.83305478 -39.6573456 -2.57771048 -37.5 -6.8125 C-34.62596772 -10.15259157 -32.09184121 -12.75942286 -27.9375 -14.375 C-16.14516458 -14.91101525 -8.38094719 -7.41688118 0 0 Z \" fill=\"#FFFFFF\" transform=\"translate(482.1875,146.5)\"/>\n</svg>",
 "settings": "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\">\n<g id=\"style=fill\">\n<g id=\"setting\">\n<path id=\"Subtract\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.8946 3.00654C10.2226 1.87704 8.75191 1.45656 7.59248 2.14193L5.86749 3.12906C4.59518 3.85639 4.16378 5.48726 4.8906 6.74522L4.89112 6.74611C5.26606 7.39298 5.20721 7.8062 5.09018 8.00929C4.97308 8.21249 4.64521 8.47001 3.9 8.47001C2.43322 8.47001 1.25 9.66837 1.25 11.12V12.88C1.25 14.3317 2.43322 15.53 3.9 15.53C4.64521 15.53 4.97308 15.7875 5.09018 15.9907C5.20721 16.1938 5.26606 16.607 4.89112 17.2539L4.8906 17.2548C4.16378 18.5128 4.59558 20.1439 5.8679 20.8712L7.59257 21.8581C8.75199 22.5434 10.2226 22.123 10.8946 20.9935L11.0091 20.7958C11.3841 20.1489 11.773 19.9925 12.0087 19.9925C12.2434 19.9925 12.6293 20.1476 12.9993 20.793L13.0009 20.7958L13.1109 20.9858L13.1154 20.9935C13.7874 22.123 15.258 22.5434 16.4174 21.8581L18.1425 20.871C19.4157 20.1431 19.8444 18.5235 19.1212 17.2579L19.1189 17.2539C18.7439 16.607 18.8028 16.1938 18.9198 15.9907C19.0369 15.7875 19.3648 15.53 20.11 15.53C21.5768 15.53 22.76 14.3317 22.76 12.88V11.12C22.76 9.65323 21.5616 8.47001 20.11 8.47001C19.3648 8.47001 19.0369 8.21249 18.9198 8.00929C18.8028 7.8062 18.7439 7.39298 19.1189 6.74611L19.1194 6.74522C19.8463 5.48713 19.4147 3.85604 18.1421 3.12883L16.4175 2.14193C15.2581 1.45656 13.7874 1.877 13.1154 3.00651L13.0009 3.20423C12.6259 3.85115 12.237 4.00751 12.0012 4.00751C11.7666 4.00751 11.3807 3.85247 11.0107 3.20701L11.0091 3.20423L10.8991 3.01421L10.8946 3.00654ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z\" fill=\"#ffffff\"/>\n</g>\n</g>\n</svg>",
 "close": "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"#ffffff\">\n            <path d=\"M18.3 5.71L12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z\"/>\n        </svg>",
 "reset": "<svg version=\"1.1\" width=\"12\" height=\"12\" viewBox=\"0 0 256 256\">\n               <g transform=\"translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)\">\n                   <path d=\"M 75.702 53.014 c -2.142 7.995 -7.27 14.678 -14.439 18.816 c -7.168 4.138 -15.519 5.239 -23.514 3.095 c -16.505 -4.423 -26.335 -21.448 -21.913 -37.953 C 20.258 20.467 37.286 10.64 53.79 15.06 c 4.213 1.129 8.076 3.118 11.413 5.809 l -8.349 8.35 h 26.654 V 2.565 l -8.354 8.354 c -5.1 -4.405 -11.133 -7.61 -17.74 -9.381 C 33.451 -4.882 8.735 9.389 2.314 33.35 c -6.42 23.961 7.851 48.678 31.811 55.098 C 38.001 89.486 41.934 90 45.842 90 c 7.795 0 15.488 -2.044 22.42 -6.046 c 10.407 -6.008 17.851 -15.709 20.962 -27.317 L 75.702 53.014 z\"\n                   style=\"fill: #f0f0f0\" />\n               </g>\n           </svg>"
};

/* ======================= STYLES ======================= */
window.TULSI_CSS = `
/* Tulsi Group - Map & Gallery UI. Layout/look cloned from the Pramukh ABC build (Plot Status removed). */
           #app {
               position: fixed;
               top: 0;
               left: 0;
               width: 100vw;
               height: 100vh;
               display: flex;
               justify-content: center;
               align-items: center;
               background-color: transparent;
               z-index: 9999;
               pointer-events: none;
               font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
           }
           .textPin{
           position:relative;
           background-color: rgba(0, 0, 0, 0.8);
           color: #ffffff;
           padding: 4px 5px;
           border-radius: 8px;
           font-size:10px;
           box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
           cursor: pointer;
           }
           .arrowDiv{
           position:absolute;
           top:100%;
           left:50%;
           transform: translatex(-50%);
           border-right: 8px solid transparent;
           border-left: 8px solid transparent;
           }
           .aboutUs {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               background-color: rgba(0, 0, 0, 0.7);
               backdrop-filter: blur(10px);
               display: flex;
               justify-content: center;
               align-items: center;
               pointer-events: auto;
               z-index: 10;
               cursor: pointer; 
               opacity: 0;
               visibility: hidden;
               transition: opacity 0.5s ease, transform 0.5s ease, visibility 0s linear 0.5s;
               pointer-events: none;
           }
           .aboutUs:hover {
               background-color: rgba(0, 0, 0, 0.7);
           }
           .modal-box {
               background: rgba(20, 20, 20, 0.8);
               color: #ffffff;
               padding: 30px;
               border-radius: 16px;
               box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
               text-align: center;
               width: 90%;
               max-width: 400px;
               position: relative;
           }
           .modal-box h2 {
               margin-top: 0;
               font-size: 1.5rem;
               font-weight: 600;
           }
           .modal-box p {
               margin-bottom: 25px;
               color: #b9b9b9;
               line-height: 1.6;
           }
           .about-logo {
               width: 180px;
               height: auto;
               margin-bottom: 20px;
               display: block;
               margin-left: auto;
               margin-right: auto;
               filter: brightness(15.5);
           }
           .about-contact-section {
               margin: 20px 0;
               text-align: left;
           }
           .about-location {
               display: flex;
               align-items: flex-start;
               gap: 12px;
               margin-bottom: 15px;
               background: rgba(0, 0, 0, 0.3);
               padding: 12px;
               border-radius: 8px;
               border: 1px solid #161616;
           }
           .about-icon {
               width: 22px;
               height: 22px;
               fill: #b9b9b9;
               flex-shrink: 0;
               margin-top: 2px;
           }
           .about-location-content {
               flex: 1;
           }
           .about-location-text {
               font-size: 0.85rem;
               color: #b9b9b9;
               line-height: 1.4;
               font-weight: 500;
           }
           .about-location-btn {
               display: inline-block;
               color: #0066cc;
               text-decoration: underline;
               font-size: 0.8rem;
               font-weight: 500;
               margin-top: 4px;
               cursor: pointer;
           }
           .about-location-btn:hover {
               color: #004499;
           }
           .about-phone {
               display: flex;
               align-items: center;
               gap: 10px;
               margin-top: 10px;
               background: rgba(0, 0, 0, 0.3);
               padding: 12px;
               border-radius: 8px;
               border: 1px solid #161616;
           }
           .about-phone-link {
               color: #b9b9b9;
               text-decoration: none;
               font-weight: 600;
               font-size: 1rem;
           }
           .about-phone-link:hover {
               text-decoration: underline;
           }
           .about-close-btn {
               position: absolute;
               top: 15px;
               right: 15px;
               background: transparent;
               border: none;
               cursor: pointer;
               padding: 5px;
               border-radius: 50%;
               transition: background 0.2s;
           }
           .about-close-btn:hover {
               background: rgba(97, 97, 97, 0.1);
           }
           .about-close-btn svg {
               width: 24px;
               height: 24px;
               fill: #b9b9b9;
           }
           .about-follow-us {
               display: flex;
               align-items: center;
               justify-content: center;
               gap: 15px;
               margin-top: 20px;
               padding-top: 15px;
               border-top: 1px solid rgba(136, 136, 136, 0.1);
           }
           .about-follow-title {
               font-weight: 600;
               color: #b9b9b9;
               font-size: 0.9rem;
           }
           .about-social-icons {
               display: flex;
               gap: 10px;
           }
           .about-social-btn {
               display: flex;
               align-items: center;
               justify-content: center;
               width: 36px;
               height: 36px;
               border-radius: 50%;
               background: #f0f0f0;
               border: 1px solid #ddd;
               transition: all 0.2s;
           }
           .about-social-btn svg {
               width: 18px;
               height: 18px;
               fill: #333;
           }
           .about-social-btn:hover {
               background: #333;
               border-color: #333;
           }
           .about-social-btn:hover svg {
               fill: white;
           }
           .shreepad-btn {
               background: rgba(20,20,20,0.6);
               color: #f0f0f0;
               border: 1px solid rgba(255, 255, 255, 0.3);
               padding: 10px 15px;
               cursor: pointer;
               font-weight: 500;
               margin: 5px;
               border-radius: 8px;
               transition: all 0.2s ease-in-out;
               display: flex;
               align-items: center;
               gap: 8px;
           }
           .shreepad-btn svg {
               width: 18px;
               height: 18px;
               fill: currentColor;
           }
           .shreepad-btn:hover {
               background: rgba(40,40,40,0.8);
               border: 1px solid rgba(255, 255, 255, 0.1);
           }
           .shreepad-btn.active-view {
               background-color: #ffffff;
               color: #000000;
               border-color: #333;
           }
           #instructionBtn {
               display: none;
           }
           #galleryAndMap {
               width: 100%;
               height: 100%;
               display: block;
               background-color: transparent;
               position: relative;
               backdrop-filter: blur(5px);
               background: rgba(255, 255, 255, 0.1);
           }
           #gallery {
               position: fixed;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               background: rgba(0, 0, 0, 0.7);
               backdrop-filter: blur(12px);
               border: 1px solid rgba(255, 255, 255, 0.1);
               display: flex;
               opacity: 0;
               pointer-events: none;
               transition: opacity 0.4s ease-in-out;
               z-index: 4;
               box-sizing: border-box;
               align-items: flex-start;
               justify-content: center;
           }
           #gallery.visible {
               opacity: 1;
               pointer-events: auto;
           }
           .gallery-grid {
               width: 90%;
               height: 75%;
               margin-top: 5%;
               border-radius: 12px;
               background-color: rgba(0, 0, 0, 0.2); 
               box-shadow: 0 0px 25px rgba(255, 255, 255, 0.2);
               padding: 20px;
               box-sizing: border-box;
               overflow: hidden;
           }
           .gallery-grid-inner {
   
       
           width: 100%;
           height: 100%;
   
           display: grid;
           grid-template-columns: repeat(4, 1fr); /* ✅ 4 columns */
   
           grid-auto-rows: min-content;
           gap: 20px;
   
           overflow-y: auto;   /* ✅ vertical scroll */
           overflow-x: hidden;  /* ❌ no horizontal scroll */
   
           scroll-behavior: auto;
           /* scrollbar-width: none; */
   
           scrollbar-color: rgba(255, 255, 255, 0.36) transparent;
           padding-right:10px;
   
           cursor: grab;
   }
   
   .gallery-grid-inner::-webkit-scrollbar {
       display: block; /* or just remove this rule entirely */
   }
   
   
   /* Default (desktop) */
   .gallery-grid-inner {
     grid-template-columns: repeat(4, 1fr);
   }
   
   
   
   .gallery-grid-inner::-webkit-scrollbar {
       display: block;
   }
   
   .gallery-grid-inner.active {
       cursor: grabbing;
   }
   
   
   /* ================= CARD ================= */
   .gallery-item {
       position: relative;
       width: 100%;
       height: 100%;
   
       border-radius: 12px;
       overflow: hidden;
   
       box-shadow: 0 4px 15px rgba(0,0,0,0.07);
   
       display: flex;
       flex-direction: column;
   
       min-height:225px;
   }
   
   /* ================= BACKGROUND ================= */
   .gallery-item-background {
       
       border-radius: 12px;
       position: absolute;
       inset: 0;
       background: transparent;
       backdrop-filter: blur(10px);
       -webkit-backdrop-filter: blur(10px);
       z-index: 1;
   }
   
   /* ================= FOREGROUND ================= */
   .gallery-item-foreground {
       position: relative;
       z-index: 2;
   
       width: 100%;
       height: 100%;
   
       background: rgba(255, 255, 255, 0.8);
   
       display: flex;
       flex-direction: column;
   }
   
   /* ================= IMAGE (70%) ================= */
   .gallery-item-img {
       width: 100%;
       height: 100%;        /* ✅ fixed 70% rule */
       object-fit: cover;
       pointer-events: none;
   }
   
   /* ================= CONTENT (30%) ================= */
   .gallery-item-content {
   
   
       
       position: absolute;
       height: auto;
       padding: 6px 12px 12px 12px;;
       background: rgba(0,0,0,0.8);
   
       width:100%;
   
       display: flex;
       flex-direction: column;
       justify-content: center;
       gap: 4px;
   
       bottom:0;
   }
   
   .gallery-item-content div{
   display:flex;
   flex-direction:row;
   gap:10px;
   }
   
   
   /* Desktop */
   .gallery-item h3 {
       margin: 0;
       font-size: 1.05rem;
       font-weight: 600;
       color: #f0f0f0;
   }
   
   .gallery-item p {
       margin: 0;
       font-size: 0.85rem;
       color: #c2c2c2;
       line-height: 1.4;
   }
   
   
   
   /* Each item */
   
           #map {
               width: 100%;
               height: 100%;
               display: block;
               pointer-events: auto;
           }
   
           .view-switcher {
               position: fixed;
               left: 50%;
               bottom: 20px;
               transform: translateX(-50%);
               pointer-events: auto;
               z-index: 5;
               background: rgba(0, 0, 0, 0.7);
               padding: 4px;
               border-radius: 12px;
               backdrop-filter: blur(6px);
               box-shadow: 0 4px 15px rgba(0,0,0,0.1);
               display: flex;
               gap: 0;
           }
           .view-switcher .shreepad-btn {
               display: flex;
           }
           .view-switcher .toggle-group {
               display: flex;
               gap: 0;
               background: rgba(20,20,20,0.6);
               border: 1px solid rgba(255, 255, 255, 0.3);
               border-radius: 8px;
               padding: 2px;
           }
           .view-switcher .toggle-group .shreepad-btn {
               padding: 8px 16px;
               border-radius: 6px;
               background: transparent; 
               border: none;
               cursor: pointer;
               transition: all 0.3s ease;
               display: flex;
               align-items: center;
               gap: 6px;
               white-space:nowrap;
               transition: all 0.3s ease;
           }
           .view-switcher .toggle-group .shreepad-btn svg {
               width: 18px;
               height: 18px;
               fill: rgba(255, 255, 255, 0.7);
           }
           .view-switcher .toggle-group .shreepad-btn span {
               font-size: 13px;
               font-weight: 500;
               color: rgba(255, 255, 255, 0.7);
           }
           .view-switcher .toggle-group .shreepad-btn.active-view {
               background: white;
               box-shadow: 0 2px 8px rgba(0,0,0,0.2);
   
           }
           .view-switcher .toggle-group .shreepad-btn.active-view svg {
               fill: #333;
           }
           .view-switcher .toggle-group .shreepad-btn.active-view span {
               color: #333;
           }
           .view-switcher .toggle-group .shreepad-btn:hover:not(.active-view) {
               background: rgba(255, 255, 255, 0.1);
           }
   
           /* make parent ready */
           .view-switcher .toggle-group {
               position: relative;
               overflow: hidden;
           }
   
           /* sliding pill */
           .view-switcher .toggle-group .slider-pill {
               position: absolute;
               margin:5px;
               top: 2px;
               left: 2px;
               height: calc(100% - 15px);
               width: calc(50% - 7px); /* 2 buttons */
               background: white;
               border-radius: 6px;
               box-shadow: 0 2px 8px rgba(0,0,0,0.2);
               transition: transform 0.3s ease;
               z-index: 0;
           }
   
           /* keep buttons above pill */
           .view-switcher .toggle-group .shreepad-btn {
               position: relative;
               z-index: 1;
           }
   
           /* remove white bg from active (pill will handle it) */
           .view-switcher .toggle-group .shreepad-btn.active-view {
               background: transparent;
               box-shadow: none;
           }
   
           .view-switcher2{
           left: auto;   
           bottom: auto;         
           top: 20px;           
           right: 20px;         
           transform: none;
           flex-direction:row ;
           background:rgba(0, 0, 0, 0.7);
     }
           
           .view-switcher2 img{
           width: 70px;
           height: auto;
           display: block;
           margin-left: auto;
           margin-right: auto;
           filter: brightness(10);
           }
           .view-switcher2 button{
           margin:2px;
           padding: 8px 12px;
           }
           #filter-panel {
               position: fixed;
               left: 20px;
               bottom: 20px;
               background: rgba(0, 0, 0, 0.7);
               backdrop-filter: blur(16px);
               border-radius: 12px;
               padding: 8px 16px;
               display: flex;
               flex-direction: column;
               opacity: 0;
               transition: opacity 0.4s ease-in-out;
               pointer-events: none;
               z-index: 5;
           }
           #filter-panel.visible {
               opacity: 1;
               pointer-events: auto;
           }
               #filter-panel svg {
               cursor:pointer;
               border-radius: 299px;
               padding:3px;
               transition: background-color 0.25s ease, transform 0.2s ease;
               }
               #filter-panel svg:hover{
   
               background: rgba(0, 0, 0, 0.1);
               
               }
           #filter-slide-panel {
               position: fixed;
               left: 0;
               top: 0;
               width: 15vw;
               min-width: 250px;
               max-width: 500px;
               height: 100vh;
               background: rgba(0, 0, 0, 0.7);
               backdrop-filter: blur(6px);
               padding: 20px;
               display: flex;
               flex-direction: column;
               gap: 15px;
               transform: translateX(-100%);
               transition: transform 0.4s ease-in-out;
               pointer-events: none;
               z-index: 6;
               box-shadow: 4px 0 20px rgba(0,0,0,0.15);
           }
           #filter-slide-panel.visible {
               transform: translateX(0);
               pointer-events: auto;
           }
           .filter-header {
               display: flex;
               /* justify-content: space-arround;  */
               position: relative;
               align-items: center;
               padding-bottom: 15px;
               border-bottom: 1px solid #333;
           }
           .filter-header h3 {
               margin: 0;
               font-size: 1.2rem;
               font-weight: 600;
               color: #f0f0f0;
           }
           .filter-header-div{
               position:absolute;
               right:0%;
               display:flex;
               gap:5px;
               flex-direction: row-reverse;
           }
           .filter-close-btn {
               
               
               background: transparent;
               border: none;
               padding: 8px;
               border-radius: 50%;
               cursor: pointer;
               color: #333;
               transition: all 0.2s ease;
               display: flex;
               align-items: center;
               justify-content: center;
           }
           .filter-close-btn:hover {
               background: rgba(134, 134, 134, 0.1);
           }
           .filter-text-toggle {
               display: flex;
               align-items: center;
               gap: 10px;
               cursor: pointer;
           }
           .filter-text-toggle span {
               color: #333;
               font-weight: 500;
               font-size: 0.9rem;
           }
           .filter-text-toggle .check-icon {
               width: 20px;
               height: 20px;
               border: 2px solid #333;
               border-radius: 4px;
               display: flex;
               align-items: center;
               justify-content: center;
               transition: all 0.2s ease;
           }
           .filter-text-toggle .check-icon svg {
               width: 14px;
               height: 14px;
               fill: #333;
               display: none;
           }
           .filter-text-toggle.active .check-icon {
               background: #333;
           }
           .filter-text-toggle.active .check-icon svg {
               display: block;
               fill: white;
           }
           .filter-divider {
               border: none;
               height: 1px;
               background-color: #ccc;
               margin: 0;
           }
           #category-filters {
               display: flex;
               flex-direction: column;
           }
           .filter-toggle {
               display: flex;
               justify-content: flex-start;
               align-items: center;
               gap: 5px;
               margin: 10px 0px;
           }
           .filter-toggle span {
               color: #f0f0f0;
               font-weight: 500;
               font-size: 0.9rem;
           }
           .switch {
               position: relative;
               display: inline-block;
               width: 40px;
               height: 22px;
           }
           .switch input {
               opacity: 0;
               width: 0;
               height: 0;
           }
           .slider {
               position: absolute;
               cursor: pointer;
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               background-color: rgba(80, 80, 80, 0.8);
               border: 1px solid #rgba(10, 10, 10, 0.8);
               transition: .4s;
           }
           .slider:before {
               position: absolute;
               content: "";
               height: 16px;
               width: 16px;
               left: 3px;
               bottom: 3px;
               background-color: white;
               transition: .4s;
           }
           input:checked + .slider {
               background-color: #dadadad5;
               border: 1px solid rgba(255, 255, 255, 0.1);
           }
           input:checked + .slider:before {
               transform: translateX(18px);
           }
           .slider.round {
               border-radius: 22px;
           }
           .slider.round:before {
               border-radius: 50%;
           }
           #ui-toggle-btn {
               position: fixed;
               left: 20px;
               bottom: 20px;
               z-index: 10001;
               display: none;
           }
           #backBtn {
           
               position: fixed;
               top: 0px;
               left: 0px;
               z-index: 0; 
               pointer-events: auto;
               cursor:pointer;
               background: rgba(0, 0, 0, 0.7);
               backdrop-filter: blur(6px);
               border:none;
               box-shadow: 0 1px 4px rgba(255, 255, 255,0.3);
               border-radius: 0px 0px 15px 0px;
               padding: 10px;
               display: flex;
               align-items: right;
               gap: 5px;
               color:white;
                transition: box-shadow 0.3s ease;
           }
           #backBtn:hover{
           background: rgba(0, 0, 0, 0.7);
           box-shadow: 0 1px 6px rgba(255, 255, 255, 0.6);
           }
   
   .share-btn {
     position: fixed; /* NOT absolute */
     bottom: 20px;
     right: 20px;
     z-index: 9999;
   }
   
           .landmarkTitle{
       font-size: 12px;
       color: #f0f0f0;
       margin-top: 6px;
     }
     
   
   /* Tablet */
   @media (max-width: 1024px) {
   
   #filter-slide-panel{
   
       width:35vw;
   }
   
     .gallery-grid-inner {
       grid-template-columns: repeat(2, 1fr);
     }
     .gallery-grid{
     height:85%;
     }
   
     .gallery-item h3 {
       font-size: 1rem;
     }
   
     .gallery-item p {
       font-size: 0.82rem;
     }
   
     #filter-panel  {
     bottom:8vh ;
     left: 50%  ;
     transform: translateX(-50%);
     }
   
    #category-filters{
       display:none; 
   }
   
   }
   
   /* Small tablet */
   @media (max-width: 768px) {
   
   #filter-slide-panel{
       width:35vw;
   }
   
     .gallery-grid-inner {
       grid-template-columns: repeat(2, 1fr);
       gap:10px;
     }
     .gallery-grid{
     height:85%;
     }
   
     #filter-panel  {
     bottom:10vh ;
     left: 50%  ;
     transform: translateX(-50%);
     }
   
    #category-filters{
       display:none; 
   }
            
     .gallery-item h3 {
       font-size: 0.95rem;
     }
   
     .gallery-item p {
       font-size: 0.8rem;
     }
   }
   
   
   /* Mobile */
   @media (max-width: 480px) {

   #backBtn{
   top:10px;
   height:52px;
    border-radius: 0 14px 14px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
   }

   .filter-toggle{
   margin:6px 0}
   
   #filter-panel{
   left:5%;
   transform: translateX(0%);
   padding: 3px 10px;
   bottom:100px;
   }
   
   .gallery-item{
   min-height:175px;
   }
     .gallery-item h3 {
       font-size: 0.9rem;
     }
     .gallery-grid-inner {
       grid-template-columns: repeat(1, 1fr);
     }
       .gallery-grid{
       height:86dvh;
       padding: 10px 15px 10px 10px;
       }
   
   
     .gallery-item p {
       font-size: 0.78rem;
     }
   
     .view-switcher{
     width:90%;
     bottom:10px;
     }
   /*
     .view-switcher .toggle-group .shreepad-btn {
       flex-direction: column;
       }
   
       .view-switcher .toggle-group .shreepad-btn {
       padding: 4px 25px;
       } */
       .view-switcher .shreepad-btn {
           flex-direction: column;
           margin: 2px;
           padding:5px 2px;
           width:100%;
       } 
       /*
       #filter-slide-panel{
       width:70%;
       gap:0px;
       }  
           */
   
       
       #filter-slide-panel {
           position: fixed;
           left: 50%;
           bottom: 0;
           top: auto;
   
           width: 85%;
           height: 40vh;
           gap:0;
           padding:15px;
           padding-bottom: 0px;
           
   
           
   
           background: background: rgba(0, 0, 0, 0.6);
           border-radius: 16px 16px 0 0;
   
           transform: translateX(-50%) translateY(100%) ; /* 👈 40% visible */
           transition: transform 0.4s ease;
   
           z-index: 999;
   
           pointer-events: auto; /* ✅ FIX CLICK ISSUE */
   
           display: flex;
           flex-direction: column;
   
           overflow: hidden; /* important */
       }
   
       #filter-slide-panel.visible {
           /* transform: translateY(10); */
           /* overflow: scroll; */
           transform: translateX(-50%);
                   
       }
           
   
       .panel-content {
       flex: 1;
       overflow-y: auto;
       -webkit-overflow-scrolling: touch;
   }
   
   .filter-header-div {
       flex-shrink: 0;
   
       display: flex;
       justify-content: flex-end;
       align-items: center;
   
       gap: 8px;
       padding: 10px;
   }
   
   
       .view-switcher2{
           width:auto;
           left: auto;   
           bottom: auto;         
           top: 8px;           
           right: 8px;         
           transform: none;
           flex-direction:row ;
           z-index: 3;
     }
           .view-switcher2 img{
           width: 60px !important ;
           height: auto !important;
           display: block;
           margin-left: auto;
           margin-right: auto;
           }
           
           .view-switcher2 button{
           margin:2px;
           padding: 4px 8px !important ;
           gap:5px;
           display: flex;
           align-items: center;
           justify-content: center;
           
           }
           .view-switcher2 button span{
           display:none;
           }
   
           .modal-box {
           margin: auto 15px;
           }
           #category-filters{
           display:none;
           }
           .view-switcher .toggle-group {
           width: 50%;
           padding: 3px;
   
       }
   
       .view-switcher .toggle-group .shreepad-btn {
           flex-direction: column;
           justify-content: center;
           align-items: center;
           padding: 6px 0;
           gap: 2px;
           width: 100%;
       }
   
       .view-switcher .shreepad-btn {
           margin: 0;
           padding: 6px 0;
           width: 25%;
       }
   
       .view-switcher .toggle-group .shreepad-btn svg {
           width: 16px;
           height: 16px;
       }
   
       .view-switcher .toggle-group .shreepad-btn span {
           font-size: 11px;
       }
   
       /* 🔥 Fix slider for mobile */
       .view-switcher .toggle-group .slider-pill {
           width: calc(50% - 8px); /* match new padding */
           top: 2px;
           left: 3px;
           height: calc(100% - 12px);
           border-radius: 6px;
       }
       .view-switcher{
       gap:5px}
       #showInstructionBtn{
       width:100%;
       }
        .gallery-grid {
       position: relative;
       }
   
   
   
   
   /* ADD ONLY THESE for gallery scroll bar  */
   
   .gallery-grid {
       position: relative;
   }
   
   .gallery-grid-inner {
       scrollbar-width: none; /* Firefox */
   }
   
   .gallery-grid-inner::-webkit-scrollbar {
       display: none; /* Chrome/Safari */
   }
   
   .fake-scrollbar {
       position: absolute;
       top: 10px;
       right: 4px;
   
       width: 4px;
       height: calc(100% - 20px);
   
       background: rgba(255,255,255,0.12);
       border-radius: 999px;
   
       pointer-events: none;
   }
   
   .fake-thumb {
       width: 100%;
       height: 80px;
   
       background: rgba(255,255,255,0.7);
       border-radius: 999px;
   
       transform: translateY(0);
   }
   
   .modal-box{
   padding:20px;
   margin: auto 10px;
   }
   .about-logo{
   margin-bottom:0px;
   }
   .modal-box h2{
   margin-bottom:5px;}
   .modal-box p{
   margin: 10px}
   .about-location{
   margin-bottom:5px;}
   .about-phone{
   margin-top:0px;}
   .about-contact-section {
       margin: 5px 0;}
   .about-follow-us{
   margin-top:10px;
   padding-top:10px;}
       
     }

   /* Selected filters bar - Code 1 dark style */
   .selected-filters-bar {
       background: rgba(10,10,18,0.82) !important;
       border: 1px solid rgba(255,255,255,0.09) !important;
       backdrop-filter: blur(16px) !important;
       color: #f0f0f0 !important;
   }

/* ===== Property filter buttons (from Pramukh build) ===== */
.shree-filter-group { display: flex; flex-wrap: wrap; gap: 5px; }
.shree-filter-btn {
  background: rgba(20,20,20,0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  flex: 0 0 auto;
  color: #f0f0f0;
}
.shree-filter-btn:hover { background: rgba(40, 40, 40, 0.8); }
.shree-filter-btn.active { background: #ffffff; color: #333; border-color: #333; }
@media (max-width: 480px) { .shree-filter-btn { padding: 8px 16px; } }

#custom-filter-panel {
  width: 100%; display: flex; flex-direction: column; gap: 10px; margin-top: 10px;
  overflow-y: scroll; position: relative; scrollbar-width: none;
}
#custom-filter-panel::-webkit-scrollbar { width: 0; height: 0; }
.fake-scrollbar-track {
  display: none; position: absolute; bottom: 0; right: 2px; width: 6px; height: 85%;
  background: rgba(255, 255, 255, 0.2); border-radius: 6px;
}
@media (max-width: 480px) { .fake-scrollbar-track { display: block; } }
.fake-scrollbar-thumb {
  position: absolute; width: 100%; height: 10px; top: 0; left: 0;
  background: rgba(255, 255, 255, 0.8); border-radius: 6px;
}

/* ===== Selected filters bar ===== */
.selected-filters-bar {
  position: absolute; top: 15px; left: 50%;
  transform: translateX(-50%) scale(0.95);
  opacity: 0; visibility: hidden; pointer-events: none;
  padding: 4px 12px 16px 12px;
  background: rgba(0, 0, 0, 0.70);
  backdrop-filter: blur(6px);
  border-radius: 999px; font-size: 13px; color: #f0f0f0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0s linear 0.25s;
  text-align: center; z-index: 5; cursor: pointer; user-select: none; min-width: 140px;
}
.selected-filters-bar span { display: flex; justify-content: center; }
#span2 { position: absolute; left: 50%; bottom: 4px; transform: translateX(-50%); font-size: 10px; color: #c5c5c5; }
.selected-filters-bar.show {
  opacity: 1; visibility: visible; pointer-events: auto;
  transform: translateX(-50%) scale(1);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0s linear 0s;
}
@media (max-width: 480px) {
  .selected-filters-bar { margin-top: 8vh; font-size: 12px; z-index: 6; }
}

/* ===== Floating controls ===== */
.floating-controls {
  position: fixed; bottom: 80px; right: 10px;
  background: rgba(0,0,0,0.7); backdrop-filter: blur(6px);
  border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  padding: 8px; display: flex; flex-direction: column; gap: 8px;
  z-index: 9999; pointer-events: auto;
}
.control-btn {
  width: 38px; height: 38px; border-radius: 10px; background: rgba(255,255,255,0);
  display: flex; align-items: center; justify-content: center; cursor: pointer;
  transition: background 0.2s ease;
}
.control-btn:hover { background: rgba(255,255,255,0.18); }
.control-btn svg { width: 24px; height: 24px; display: block; }
@media (max-width: 480px) {
  .floating-controls { padding: 2px 4px; flex-direction: column; gap: 5px; bottom: 100px; left: auto; transform: none; right: 10px; z-index: 99999; }
  body:has(#filter-slide-panel.visible) .floating-controls { display: none; }
}
.mobile-hidden-btn { opacity: 0; transform: translateY(20px); pointer-events: none; transition: all .3s ease; display: none; }
.mobile-hidden-btn.show { display: flex !important; opacity: 1; transform: translateY(0); pointer-events: auto; }

/* ===== Standalone page ===== */
html, body { margin: 0; height: 100%; background: #0b0d12; }

`;

/* ======================= MARKUP ======================= */
/* Main UI markup (same structure/IDs as the Pramukh build, Plot Status button removed) */
window.TULSI_TEMPLATE = function (C, esc) {
  return `
           <button id = "backBtn" >
               <svg viewBox="0 0 24 24" style="width:15px; height:15px; fill:white;">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </svg>
               <span>Back</span>
           </button>
           <div id="aboutUs" class="aboutUs">
               <div class="modal-box">
                   <button id="aboutUsCloseBtn" class="about-close-btn">
                       <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                   </button>
                   <img src="${esc(C.brand.logo)}" alt="Logo" class="about-logo">
                   <h2>${esc(C.brand.aboutHeading)}</h2>
                   <p>${esc(C.brand.aboutText)}</p>
                   
                   <div class="about-contact-section">
                       <div class="about-location">
                           <svg viewBox="0 0 24 24" class="about-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                           <div class="about-location-content">
                               <div class="about-location-text">${esc(C.contact.address)}</div>
                               <a href="${esc(C.contact.mapsLink)}" target="_blank" class="about-location-btn">Open in Google</a>
                           </div>
                       </div>
                       
                       <div class="about-phone">
                           <svg viewBox="0 0 24 24" class="about-icon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                           <a href="https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(C.contact.whatsappAboutMessage)}" target="_blank" class="about-phone-link">${esc(C.contact.phoneDisplay)}</a>
                       </div>
                   </div>
                   
                   <div class="about-follow-us">
                       <span class="about-follow-title">Follow Us :</span>
                       <div class="about-social-icons">
                           ${C.social.website ? `<a href="${esc(C.social.website)}" target="_blank" class="about-social-btn" title="Website">
                               <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                           </a>` : ''}
                           ${C.social.instagram ? `<a href="${esc(C.social.instagram)}" target="_blank" class="about-social-btn" title="Instagram">
                               <svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
                           </a>` : ''}
                           ${C.social.facebook ? `<a href="${esc(C.social.facebook)}" target="_blank" class="about-social-btn" title="Facebook">
                               <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                           </a>` : ''}
                       </div>
                   </div>
                   
                   <button id="instructionBtn" class="shreepad-btn active-view">
                       <svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                       <span>Explore</span>
                   </button>
               </div>
           </div>
           
           <div id="galleryAndMap">
               <div id="gallery" class="wrapper">
                   <div class="gallery-grid" >
                       <div class="gallery-grid-inner"></div>
                       <div class="fake-scrollbar">
                       <div class="fake-thumb"></div>
                       </div>
                   </div>
               </div>
               <div id="map"></div>


                              <div id="filter-slide-panel">
                   <div class="filter-header">
                       <svg viewBox="0 0 24 24" style=" fill:#f0f0f0; width:18px; margin-right:10px"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></svg>
                       <h3>Property Filter</h3>
                       <div class="filter-header-div">
                       <button id="filterCloseBtn" class="filter-close-btn">
                           <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#f0f0f0">
                               <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                           </svg>
                       </button>
                       </div>
                   </div>
               </div>

                <div class="view-switcher view-switcher2">
                   <img src="${esc(C.brand.logo)}" alt="Logo" >
                   <button id="showInstructionBtn" class="shreepad-btn">
                      <svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                       <span>About Us</span>
                   </button>
               </div>

                <div class="mobileGap">
               <div id="filter-panel" class="visible">
                   <div class="landmarkTitle">Landmark Filter</div>
                   <div class="filter-toggle" id="show-all-container">
                       <label class="switch">
                           <input type="checkbox" id="show-all-toggle" >
                           <span class="slider round"></span>
                       </label>
                       <span>Show All</span>
                       <svg class="upArrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                       <path d="m6 9 6 6 6-6"/>
                       </svg>
                       <svg class="downArrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                       <path d="m18 15-6-6-6 6"/>
                       </svg>
                   </div>
                   <hr class="filter-divider" />
                   <div id="category-filters">
                       <div class="filter-toggle" id="transit-filter">
                           <label class="switch">
                               <input type="checkbox" class="category-toggle" >
                               <span class="slider round"></span>
                           </label>
                           <span>BRTS, Metro, Railway</span>
                       </div>
                       <div class="filter-toggle" id="roads-filter">
                           <label class="switch">
                               <input type="checkbox" class="category-toggle" >
                               <span class="slider round"></span>
                           </label>
                           <span>Roads, Bridges, Circle</span>
                       </div>
                       <div class="filter-toggle" id="school-college-filter" >
                           <label class="switch">
                               <input type="checkbox" class="category-toggle" >
                               <span class="slider round"></span>
                           </label>
                           <span>School, College</span>
                       </div>
                       <div class="filter-toggle" id="hospital-filter">
                           <label class="switch">
                               <input type="checkbox" class="category-toggle" >
                               <span class="slider round"></span>
                           </label>
                           <span>Hospital</span>
                       </div>
                       <div class="filter-toggle" id="grocery-filter">
                           <label class="switch">
                               <input type="checkbox" class="category-toggle" >
                               <span class="slider round"></span>
                           </label>
                           <span>Grocery</span>
                       </div>
                       <div class="filter-toggle" id="water-filter">
                           <label class="switch">
                               <input type="checkbox" class="category-toggle" >
                               <span class="slider round"></span>
                           </label>
                           <span>Garden, Lake, Aquarium</span>
                       </div>
                       <div class="filter-toggle" id="multiplex-filter">
                           <label class="switch">
                               <input type="checkbox" class="category-toggle" >
                               <span class="slider round"></span>
                           </label>
                           <span>Multiplex</span>
                       </div>
                   </div>
                   
               </div>
               
               

   
               
               <div class="view-switcher">
                   <div class="toggle-group">
                       <div class="slider-pill"></div>
                       <button id="showGalleryBtn" class="shreepad-btn">
                           <svg viewBox="0 0 24 24"><path d="M4 10h4v4H4v-4zm0-6h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zm-6 6h4v4h-4v-4zm0 6h4v4h-4v-4zm-6 0h4v4H4v-4zm12-6h4v4h-4v-4zm0 6h4v4h-4v-4z"/></svg>
                           <span>Gallery</span>
                       </button>
                       <button id="showMapBtn" class="shreepad-btn active-view">
                           <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                           <span>Map</span>
                       </button>
                   </div>
                   <button id="showFilterBtn" class="shreepad-btn">
                        <svg viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
                        <span>Filter</span>
                   </button>
                   
               </div>

               </div>
   

   
               
               
   
           </div>
       `;
};

/* ======================= APP ======================= */
/* ==========================================================================
 * Tulsi Group - Map & Gallery UI
 * Behaviour cloned from the Pramukh ABC build, without the Plot Status feature.
 * All content comes from js/config.js - normally you do not need to edit this file.
 * ========================================================================== */
(function () {
  'use strict';

  var C = window.TULSI_CONFIG;
  var ICONS = window.TULSI_ICONS;
  if (!C || !ICONS || !window.TULSI_TEMPLATE) {
    console.error('[Tulsi] config.js / icons.js / template.js must load before app.js');
    return;
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function isMobile() { return window.innerWidth <= 480; }


  /* ---------- state ---------- */
  var mapInstance = null;
  var otherPins = [];         // non-clickable "other projects" pins
  var overlays = [];          // project polygons / overlays / pins   (have .projectName)
  var landmarkMarkers = [];   // landmark pins + road polylines       (have .fname)
  var defaultCenter = C.maps.center, defaultZoom = C.maps.zoom;
  var landmarks = C.landmarks.slice();
  var filterData = C.filterData.slice();
  var availableFilters = [];  // [{ key, label, values[] }]
  var selectedRows = null;

  var LANDMARK_GROUPS = {
    '#transit-filter': ['BRTS', 'Railway', 'Metro'],
    '#roads-filter': ['Circle', 'Bridge', 'RoadS', 'Roads'],
    '#school-college-filter': ['School', 'College'],
    '#hospital-filter': ['Hospital'],
    '#grocery-filter': ['Grocery'],
    '#water-filter': ['Garden', 'Aquarium', 'Lake'],
    '#multiplex-filter': ['Multiplex']
  };
  var LANDMARK_ICONS = {};
  ['BRTS', 'Railway', 'Metro', 'Roads', 'Bridge', 'Circle', 'School', 'College', 'Hospital', 'Grocery',
    'Aquarium', 'Lake', 'Garden', 'Multiplex'].forEach(function (k) { LANDMARK_ICONS[k] = 'images/locationsPin/' + k + '.webp'; });

  /* ==========================================================================
   * RENDER
   * ========================================================================== */
  function ensureCss() {
    if ($('tulsi-style')) return;
    var st = document.createElement('style');
    st.id = 'tulsi-style';
    st.textContent = window.TULSI_CSS;
    document.head.appendChild(st);
  }

  function renderComponent() {
    ensureCss();
    document.title = C.brand.pageTitle || C.brand.name;
    var app = $('app');
    if (!app) { app = document.createElement('div'); app.id = 'app'; document.body.appendChild(app); }
    app.innerHTML = window.TULSI_TEMPLATE(C, esc);

    renderGallery();
    wireViewSwitcher();
    wireAbout();
    wireLandmarkFilter();
    initFilterToggle();
    buildFilterPanel();
    initFloatingControls();
    addGalleryEventListeners();
    addMomentumScrolling();
    initFakeScrollbar();
    loadGoogleMaps();
    if (C.sheetUrl) loadSheet();
  }

  function renderGallery() {
    var grid = qs('.gallery-grid-inner');
    if (!grid) return;
    grid.innerHTML = C.projects.map(function (p) {
      return '<div class="gallery-item" id="' + esc(p.id) + '">' +
        '<div class="gallery-item-background"></div>' +
        '<div class="gallery-item-foreground">' +
        '<img src="' + esc(p.thumbnail) + '" alt="' + esc(p.name) + '" class="gallery-item-img">' +
        '<div class="gallery-item-content"><h3>' + esc(p.name) + '</h3><div>' +
        '<p>' + esc(p.subTitle) + '</p><p>' + esc(p.areaText) + '</p></div></div>' +
        '</div></div>';
    }).join('');
  }

  /* ==========================================================================
   * OPEN A PROJECT  (3DVista tour if present, else tourUrl)
   * ========================================================================== */
  function openProject(p) {
    if (typeof C.onProjectOpen === 'function') { C.onProjectOpen(p); return; }
    if (p.tourUrl) { openIframe(p); return; }
    var bz = window.blazeIT;
    if (bz) {
      try {
        bz.getComponentByName('Floorplan Viewer Close Btn').set('visible', true);
        bz.triggerComponentByName('Floorplan Viewer Close Btn');
      } catch (e) { /* component not present in this tour */ }
      bz.openMediaByName(p.name);
      var gm = $('galleryAndMap'); if (gm) gm.style.display = 'none';
      if (window.resumeTour) window.resumeTour();
    }
  }

  /* project tour inside an iframe overlay, with Back button */
  function openIframe(p) {
    closeIframe();
    var box = document.createElement('div');
    box.id = 'tulsiTourFrame';
    box.style.cssText = 'position:fixed;inset:0;z-index:100000;background:#000;pointer-events:auto;';
    var f = document.createElement('iframe');
    f.src = p.tourUrl; f.title = p.name;
    f.allow = 'fullscreen; gyroscope; accelerometer; autoplay; xr-spatial-tracking';
    f.allowFullscreen = true;
    f.style.cssText = 'width:100%;height:100%;border:0;display:block;';
    var back = document.createElement('button');
    back.id = 'tulsiTourBack';
    back.innerHTML = '<svg viewBox="0 0 24 24" style="width:15px;height:15px;fill:white;"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg><span>Back</span>';
    back.style.cssText = 'position:absolute;top:0;left:0;z-index:2;cursor:pointer;background:rgba(0,0,0,0.7);backdrop-filter:blur(6px);border:none;box-shadow:0 1px 4px rgba(255,255,255,0.3);border-radius:0 0 15px 0;padding:10px;display:flex;gap:5px;color:white;font:14px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;align-items:center;';
    back.addEventListener('click', closeIframe);
    box.appendChild(f); box.appendChild(back);
    document.body.appendChild(box);
  }
  function closeIframe() {
    var b = $('tulsiTourFrame');
    if (b) b.remove();
  }

  function projectByName(name) {
    name = String(name).trim().toLowerCase();
    return C.projects.filter(function (p) { return p.name.trim().toLowerCase() === name; })[0];
  }

  function addGalleryEventListeners() {
    var box = qs('.gallery-grid-inner');
    if (!box) return;
    var dragging = false, sx = 0, sy = 0;
    box.addEventListener('mousedown', function (e) { dragging = false; sx = e.clientX; sy = e.clientY; });
    box.addEventListener('mousemove', function (e) {
      if (Math.abs(e.clientX - sx) > 5 || Math.abs(e.clientY - sy) > 5) dragging = true;
    });
    box.addEventListener('click', function (e) {
      if (dragging) return;
      var item = e.target.closest('.gallery-item');
      if (!item) return;
      var p = projectByName(item.querySelector('h3').textContent);
      if (p) openProject(p);
    });
  }

  /* ==========================================================================
   * GALLERY / MAP / FILTER / ABOUT BUTTONS
   * ========================================================================== */
  function toggleFloatingControls(hide) {
    if (window.innerWidth > 480) return;
    var fc = qs('.floating-controls');
    if (fc) fc.style.display = hide ? 'none' : '';
  }

  function wireViewSwitcher() {
    var showGalleryBtn = $('showGalleryBtn'), showMapBtn = $('showMapBtn'), showFilterBtn = $('showFilterBtn');
    var galleryDiv = $('gallery'), filterPanel = $('filter-panel'), slidePanel = $('filter-slide-panel');
    var slider = qs('.slider-pill');
    if (slider) slider.style.transform = 'translateX(100%)';   // Map is the default view

    showFilterBtn.addEventListener('click', function () {
      var visible = slidePanel.classList.toggle('visible');
      toggleFloatingControls(visible);
      showFilterBtn.classList.toggle('active-view', visible);
    });
    $('filterCloseBtn').addEventListener('click', function () {
      slidePanel.classList.remove('visible');
      showFilterBtn.classList.remove('active-view');
      toggleFloatingControls(false);
    });

    showGalleryBtn.addEventListener('click', function () {
      galleryDiv.classList.add('visible');
      filterPanel.classList.remove('visible');
      slidePanel.classList.remove('visible');
      showFilterBtn.classList.remove('active-view');
      toggleFloatingControls(false);
      showGalleryBtn.classList.add('active-view');
      showMapBtn.classList.remove('active-view');
      if (slider) slider.style.transform = 'translateX(0%)';
    });
    showMapBtn.addEventListener('click', function () {
      galleryDiv.classList.remove('visible');
      filterPanel.classList.add('visible');
      slidePanel.classList.remove('visible');
      showFilterBtn.classList.remove('active-view');
      toggleFloatingControls(false);
      showMapBtn.classList.add('active-view');
      showGalleryBtn.classList.remove('active-view');
      if (slider) slider.style.transform = 'translateX(100%)';
    });

    $('backBtn').addEventListener('click', function () {
      $('galleryAndMap').style.display = 'block';
      if (typeof window.hideGallery === 'function') window.hideGallery();
      if (window.pauseTour) window.pauseTour();
    });
  }

  function wireAbout() {
    var about = $('aboutUs');
    function hide() {
      about.style.transition = 'opacity 0.5s ease, visibility 0s linear 0.5s';
      about.style.opacity = 0; about.style.visibility = 'hidden'; about.style.pointerEvents = 'none';
    }
    function show() {
      about.style.transition = 'opacity 0.5s ease, visibility 0s linear 0s';
      about.style.visibility = 'visible'; about.style.opacity = 1; about.style.pointerEvents = 'auto';
    }
    $('instructionBtn').addEventListener('click', hide);
    $('aboutUsCloseBtn').addEventListener('click', hide);
    $('showInstructionBtn').addEventListener('click', show);
    about.addEventListener('click', function (e) { if (e.target === about) hide(); });
  }

  /* ---------- landmark filter (bottom-left panel) ---------- */
  function wireLandmarkFilter() {
    var all = $('show-all-toggle');
    var cats = qsa('.category-toggle');
    cats.forEach(function (t) {
      t.addEventListener('change', function () { updateLandmarkMarkers(); syncShowAll(); });
    });
    all.addEventListener('change', function (e) {
      cats.forEach(function (t) { t.checked = e.target.checked; });
      updateLandmarkMarkers();
    });
  }
  function syncShowAll() {
    var cats = qsa('.category-toggle');
    $('show-all-toggle').checked = cats.every(function (t) { return t.checked; });
  }
  function setLandmarkVisible(fnames, visible) {
    landmarkMarkers.forEach(function (m) {
      if (fnames.indexOf(m.fname) === -1) return;
      if (m instanceof google.maps.Polyline) m.setMap(visible ? mapInstance : null);
      else m.map = visible ? mapInstance : null;
    });
  }
  function updateLandmarkMarkers() {
    if (!mapInstance) return;
    Object.keys(LANDMARK_GROUPS).forEach(function (sel) {
      var t = qs(sel + ' .category-toggle');
      if (t) setLandmarkVisible(LANDMARK_GROUPS[sel], t.checked);
    });
  }

  function initFilterToggle() {
    var filters = qs('#category-filters'), divider = qs('.filter-divider');
    var down = qs('.downArrow'), up = qs('.upArrow');
    if (!filters || !divider || !down || !up) return;
    filters.style.overflow = 'hidden';
    filters.style.transition = 'max-height 0.35s ease, opacity 0.35s ease';
    up.style.color = down.style.color = '#f0f0f0';

    function arrows(open) { down.style.display = open ? 'none' : 'block'; up.style.display = open ? 'block' : 'none'; }
    function open() {
      divider.style.display = 'block'; filters.style.display = 'block';
      requestAnimationFrame(function () { filters.style.maxHeight = filters.scrollHeight + 'px'; filters.style.opacity = '1'; });
      arrows(true);
    }
    function close() {
      filters.style.maxHeight = '0px'; filters.style.opacity = '0'; arrows(false);
      function h(e) {
        if (e.propertyName === 'max-height') {
          filters.style.display = 'none'; divider.style.display = 'none';
          filters.removeEventListener('transitionend', h);
        }
      }
      filters.addEventListener('transitionend', h);
    }
    function toggle() { (filters.style.display !== 'none') ? close() : open(); }
    down.onclick = up.onclick = toggle;

    if (!isMobile()) {
      filters.style.display = 'block'; divider.style.display = 'block';
      filters.style.maxHeight = filters.scrollHeight + 'px'; filters.style.opacity = '1'; arrows(true);
    } else {
      filters.style.display = 'none'; divider.style.display = 'none';
      filters.style.maxHeight = '0px'; filters.style.opacity = '0'; arrows(false);
    }
  }

  /* ==========================================================================
   * PROPERTY FILTER PANEL (slide-in, left)
   * ========================================================================== */
  function formatTitle(key) {
    return key.split('_').map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(' ');
  }

  function computeFilterGroups() {
    var ignore = C.filterIgnore || [];
    var map = {}, order = [];
    filterData.forEach(function (row) {
      Object.keys(row).forEach(function (k) {
        if (ignore.indexOf(k) !== -1) return;
        var v = row[k];
        if (v === '' || v == null) return;
        if (!map[k]) { map[k] = []; order.push(k); }
        if (map[k].indexOf(v) === -1) map[k].push(v);
      });
    });
    return order.map(function (k) { return { key: k, label: formatTitle(k), values: map[k] }; });
  }

  function buildFilterPanel() {
    var parent = $('filter-slide-panel');
    var title = parent.firstElementChild;
    var box = document.createElement('div');
    box.id = 'custom-filter-panel';
    box.style.gap = isMobile() ? '6px' : '10px';
    box.style.marginTop = isMobile() ? '4px' : '10px';
    title.insertAdjacentElement('afterend', box);

    var track = document.createElement('div'); track.className = 'fake-scrollbar-track';
    var thumb = document.createElement('div'); thumb.className = 'fake-scrollbar-thumb';
    track.appendChild(thumb); parent.appendChild(track);
    function updateThumb() {
      var sh = box.scrollHeight - box.clientHeight, st = box.scrollTop, th = track.clientHeight;
      var thH = Math.max(30, (box.clientHeight / Math.max(box.scrollHeight, 1)) * th);
      thumb.style.height = thH + 'px';
      thumb.style.top = (sh > 0 ? (st / sh) * (th - thH) : 0) + 'px';
    }
    box.addEventListener('scroll', updateThumb);
    window.addEventListener('resize', updateThumb);

    rebuildFilterGroups();
    setupFilterBar();
    updateThumb();
  }

  function rebuildFilterGroups() {
    var box = $('custom-filter-panel');
    box.innerHTML = '';
    availableFilters = computeFilterGroups();
    availableFilters.forEach(function (f) { box.appendChild(createGroup(f)); });
  }

  function resetIcon() { return ICONS.reset; }

  function createGroup(f) {
    var wrapper = document.createElement('div');
    wrapper.className = f.key;

    var header = document.createElement('div');
    header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;color:#b9b9b9;';
    var label = document.createElement('div');
    label.textContent = f.label; label.style.fontSize = '14px';

    var resetBtn = document.createElement('button');
    resetBtn.className = 'group-reset-btn';
    resetBtn.innerHTML = resetIcon();
    resetBtn.style.cssText = 'border:none;background:transparent;cursor:pointer;padding:4px;display:none;';

    var group = document.createElement('div');
    group.className = 'shree-filter-group';
    f.values.forEach(function (val) {
      var btn = document.createElement('button');
      btn.className = 'shree-filter-btn';
      btn.textContent = val;
      btn.dataset.value = val;
      btn.dataset.group = f.key;
      btn.onclick = function () {
        btn.classList.toggle('active');
        resetBtn.style.display = group.querySelector('.shree-filter-btn.active') ? 'block' : 'none';
        applyFilters();
      };
      group.appendChild(btn);
    });
    resetBtn.onclick = function () {
      qsa('.shree-filter-btn', group).forEach(function (b) { b.classList.remove('active'); });
      resetBtn.style.display = 'none';
      applyFilters();
    };

    header.appendChild(label); header.appendChild(resetBtn);
    wrapper.appendChild(header); wrapper.appendChild(group);
    return wrapper;
  }

  function resetFilters() {
    qsa('.shree-filter-btn').forEach(function (b) { b.classList.remove('active'); });
    qsa('.group-reset-btn').forEach(function (b) { b.style.display = 'none'; });
    applyFilters();
  }

  function selectedValues(key) {
    return qsa('.shree-filter-btn[data-group="' + key + '"].active').map(function (b) { return b.dataset.value; });
  }

  /* AND across groups, OR inside a group; cells may hold comma-separated values */
  function rowMatches(row, key, selected) {
    if (!selected.length) return true;
    var have = String(row[key] == null ? '' : row[key]).split(',').map(function (v) { return v.trim().toLowerCase(); });
    return selected.some(function (v) { return have.indexOf(String(v).trim().toLowerCase()) !== -1; });
  }

  function applyFilters() {
    var sel = {};
    availableFilters.forEach(function (f) { sel[f.key] = selectedValues(f.key); });
    selectedRows = filterData.filter(function (row) {
      return availableFilters.every(function (f) { return rowMatches(row, f.key, sel[f.key]); });
    });

    var names = selectedRows.map(function (r) { return String(r.name || '').trim(); }).filter(Boolean);
    showOnlyProjects(names);
    var anyActive = qsa('.shree-filter-btn.active').length > 0;
    otherPins.forEach(function (m) { m.map = anyActive ? null : mapInstance; });
    fitMapToProjects(names);

    var shownIds = {};
    names.forEach(function (n) { var p = projectByName(n); if (p) shownIds[p.id] = true; });
    qsa('.gallery-item').forEach(function (el) { el.style.display = shownIds[el.id] ? '' : 'none'; });

    updateFilterBar();
  }

  /* ---------- selected-filters bar ---------- */
  var masterResets = [];
  function makeMasterReset() {
    var b = document.createElement('button');
    b.innerHTML = resetIcon();
    b.className = 'master-reset-btn';
    b.style.cssText = 'border:none;background:transparent;cursor:pointer;padding:4px;display:none;';
    b.addEventListener('click', function (e) { e.stopPropagation(); resetFilters(); });
    masterResets.push(b);
    return b;
  }
  function setupFilterBar() {
    var bar = document.createElement('div');
    bar.className = 'selected-filters-bar';
    $('galleryAndMap').prepend(bar);
    var headerReset = makeMasterReset();
    qs('.filter-header-div').appendChild(headerReset);
    bar._reset = makeMasterReset();

    bar.addEventListener('click', function () {
      var panel = $('filter-slide-panel'), btn = $('showFilterBtn');
      var v = panel.classList.toggle('visible');
      btn.classList.toggle('active-view', v);
    });
    window.addEventListener('resize', fitBarWidth);
  }
  function fitBarWidth() {
    var bar = qs('.selected-filters-bar');
    if (!bar) return;
    if (!isMobile()) { bar.style.whiteSpace = ''; bar.style.width = ''; bar.style.maxWidth = ''; return; }
    bar.style.whiteSpace = 'nowrap'; bar.style.width = 'fit-content'; bar.style.maxWidth = 'none';
    if (bar.scrollWidth > window.innerWidth * 0.9) {
      bar.style.whiteSpace = 'normal'; bar.style.width = '90vw'; bar.style.maxWidth = '90vw';
    }
  }
  function updateFilterBar() {
    var active = qsa('.shree-filter-btn.active');
    masterResets.forEach(function (b) { b.style.display = active.length ? 'block' : 'none'; });
    var bar = qs('.selected-filters-bar');
    if (!bar) return;
    if (!active.length) { bar.classList.remove('show'); return; }
    bar.innerHTML = '';
    var span = document.createElement('span');
    var span2 = document.createElement('span'); span2.id = 'span2';
    span.appendChild(bar._reset);
    span.appendChild(document.createTextNode(' | ' + active.map(function (b) { return b.dataset.value; }).join(' | ')));
    var n = selectedRows ? selectedRows.length : 0;
    span2.textContent = n === 0 ? 'No project found' : (n === 1 ? '1 project found' : n + ' projects found');
    span.appendChild(span2);
    bar.appendChild(span);
    bar.classList.add('show');
    fitBarWidth();
  }

  /* ==========================================================================
   * GOOGLE MAPS
   * ========================================================================== */
  function loadGoogleMaps() {
    if (window.google && window.google.maps) { initMap(); return; }
    window.initTulsiMap = initMap;
    var s = document.createElement('script');
    s.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(C.maps.apiKey) +
      '&callback=initTulsiMap&libraries=marker&v=weekly';
    s.async = true; s.defer = true;
    document.head.appendChild(s);
  }

  function initMap() {
    var el = $('map');
    if (!el || mapInstance) return;
    mapInstance = new google.maps.Map(el, {
      center: C.maps.center,
      zoom: C.maps.zoom,
      minZoom: C.maps.minZoom,
      mapId: C.maps.mapId,
      mapTypeId: 'hybrid',
      streetViewControl: false,
      fullscreenControl: false,
      gestureHandling: 'greedy'
    });
    window.tulsiMap = mapInstance;

    loadProjectLayers().then(function () {
      renderLandmarks();
      renderRoads();
      updateLandmarkMarkers();   // all landmark layers start hidden (toggles unchecked)
      if (!new URLSearchParams(window.location.search).get('projectname')) fitAllPins();
      setMapFromURLParams();
    });
  }

  function fitAllPins() {
    var b = new google.maps.LatLngBounds(), n = 0;
    C.projects.forEach(function (p) { b.extend({ lat: Number(p.lat), lng: Number(p.lng) }); n++; });
    (C.otherProjects || []).forEach(function (o) { if (o.lat != null) { b.extend({ lat: Number(o.lat), lng: Number(o.lng) }); n++; } });
    if (n) mapInstance.fitBounds(b, 60);
  }

  function setMapFromURLParams() {
    var params = new URLSearchParams(window.location.search);
    var name = params.get('projectname');
    if (!name) return;
    var p = projectByName(decodeURIComponent(name));
    if (!p) return;
    mapInstance.setCenter({ lat: Number(p.lat), lng: Number(p.lng) });
    var z = Number(params.get('zoom'));
    if (params.get('zoom') && !isNaN(z)) mapInstance.setZoom(z);
  }

  /* ---------- project overlays, boundaries and pins ---------- */
  function loadProjectLayers() {
    return google.maps.importLibrary('marker').then(function (lib) {
      var AdvancedMarkerElement = lib.AdvancedMarkerElement;

      C.projects.forEach(function (p) {
        if (p.floorplan && p.bounds) {
          var b = new google.maps.LatLngBounds(
            new google.maps.LatLng(p.bounds.sw.lat, p.bounds.sw.lng),
            new google.maps.LatLng(p.bounds.ne.lat, p.bounds.ne.lng));
          var ov = new google.maps.GroundOverlay(p.floorplan, b, { opacity: 1 });
          ov.setMap(mapInstance); ov.projectName = p.name; overlays.push(ov);
        }
      });

      C.projects.forEach(function (p) {
        if (!p.polygon || !p.polygon.length) return;
        var poly = new google.maps.Polygon({
          map: mapInstance, paths: p.polygon,
          strokeColor: '#000000', strokeOpacity: 0.8, strokeWeight: 3,
          fillColor: '#FF0000', fillOpacity: 0
        });
        poly.projectName = p.name;
        poly.addListener('click', function () { openProject(p); });
        overlays.push(poly);
      });

      function pinImg(src, alt, clickable) {
        var img = document.createElement('img');
        img.src = src; img.alt = alt;
        img.style.cursor = clickable ? 'pointer' : 'default';
        img.onload = function () {            // same scale as the Pramukh pins (292px wide -> 120px)
          img.style.width = Math.round(img.naturalWidth * 0.41) + 'px';
          img.style.height = Math.round(img.naturalHeight * 0.41) + 'px';
        };
        return img;
      }
      var sorted = C.projects.slice().sort(function (a, b) { return a.lat - b.lat; });
      sorted.forEach(function (p, i) {
        var img = pinImg(p.pin, p.name, true);
        var m = new AdvancedMarkerElement({
          position: { lat: Number(p.lat), lng: Number(p.lng) },
          map: mapInstance, content: img, zIndex: 100 - i
        });
        m.projectName = p.name;
        img.addEventListener('click', function () { openProject(p); });
        overlays.push(m);
      });
      (C.otherProjects || []).forEach(function (o) {
        if (o.lat == null || o.lng == null) return;
        otherPins.push(new AdvancedMarkerElement({
          position: { lat: Number(o.lat), lng: Number(o.lng) },
          map: mapInstance, content: pinImg(o.pin, o.name, false), zIndex: 50
        }));
      });
    });
  }

  function setOverlayVisible(o, visible) {
    if (o.setMap) o.setMap(visible ? mapInstance : null); else o.map = visible ? mapInstance : null;
  }
  function showOnlyProjects(names) {
    overlays.forEach(function (o) { setOverlayVisible(o, names.indexOf(o.projectName) !== -1); });
  }
  function fitMapToProjects(names) {
    if (!mapInstance) return;
    var matched = C.projects.filter(function (p) { return names.indexOf(p.name) !== -1; });
    if (!matched.length) return;
    var bounds = new google.maps.LatLngBounds();
    matched.forEach(function (p) { bounds.extend({ lat: Number(p.lat), lng: Number(p.lng) }); });
    mapInstance.fitBounds(bounds, 100);
    if (matched.length === 1) {
      google.maps.event.addListenerOnce(mapInstance, 'bounds_changed', function () {
        mapInstance.setZoom(Math.min(mapInstance.getZoom(), 21) - 4);
      });
    }
  }

  /* ---------- landmark pins ---------- */
  function clearLandmarks() {
    landmarkMarkers = landmarkMarkers.filter(function (m) {
      if (m instanceof google.maps.Polyline) return true;
      m.map = null; return false;
    });
  }
  function renderLandmarks() {
    if (!mapInstance) return;
    clearLandmarks();
    google.maps.importLibrary('marker').then(function (lib) {
      landmarks.forEach(function (loc) {
        var el = document.createElement('div');
        el.className = 'textPin';
        el.style.cssText = 'display:flex;align-items:center;gap:6px;max-width:200px;white-space:pre-wrap;';
        var icon = document.createElement('img');
        icon.src = LANDMARK_ICONS[loc.fname] || LANDMARK_ICONS.Roads;
        icon.style.cssText = 'width:20px;height:20px;flex-shrink:0;';
        var text = document.createElement('span'); text.textContent = loc.name;
        var arrow = document.createElement('div');
        arrow.className = 'arrowDiv'; arrow.style.borderTop = '10px solid rgba(0, 0, 0, 0.8)';
        el.appendChild(icon); el.appendChild(text); el.appendChild(arrow);

        var m = new lib.AdvancedMarkerElement({
          map: null, position: { lat: Number(loc.lat), lng: Number(loc.lng) }, content: el, zIndex: 2
        });
        m.fname = loc.fname;
        el.addEventListener('click', function () {
          window.open('https://www.google.com/maps?q=' + loc.lat + ',' + loc.lng, '_blank');
        });
        landmarkMarkers.push(m);
      });
      updateLandmarkMarkers();
    });
  }
  function renderRoads() {
    (C.roads || []).forEach(function (r) {
      var line = new google.maps.Polyline({
        map: null, path: r.latlng, geodesic: true,
        strokeColor: r.color || '#fffc1f', strokeOpacity: 0.8, strokeWeight: 5
      });
      line.fname = r.fname || 'Roads';
      landmarkMarkers.push(line);
    });
  }

  /* ---------- optional Google-Sheet live data ---------- */
  function loadSheet() {
    fetch(C.sheetUrl).then(function (r) { return r.json(); }).then(function (data) {
      if (data['Filter Data']) {
        filterData = data['Filter Data'];
        rebuildFilterGroups();
      }
      if (data['Landmark']) { landmarks = data['Landmark']; renderLandmarks(); }
    }).catch(function (e) { console.error('[Tulsi] sheet load failed', e); });
  }

  /* ==========================================================================
   * GALLERY SCROLL (drag + momentum, fake scrollbar)
   * ========================================================================== */
  function addMomentumScrolling() {
    var slider = qs('.gallery-grid-inner');
    if (!slider) return;
    var down = false, startY, scrollTop, vel = 0, raf;

    slider.addEventListener('mousedown', function (e) {
      down = true; slider.classList.add('active');
      startY = e.pageY - slider.offsetTop; scrollTop = slider.scrollTop;
      cancelAnimationFrame(raf);
    });
    slider.addEventListener('mousemove', function (e) {
      if (!down) return;
      e.preventDefault();
      var prev = slider.scrollTop;
      slider.scrollTop = scrollTop - (e.pageY - slider.offsetTop - startY);
      vel = slider.scrollTop - prev;
    });
    function end() { down = false; slider.classList.remove('active'); cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); }
    function loop() {
      slider.scrollTop += vel; vel *= 0.95;
      if (Math.abs(vel) > 0.5) raf = requestAnimationFrame(loop);
    }
    slider.addEventListener('mouseup', end);
    slider.addEventListener('mouseleave', function () { if (down) end(); });
  }

  function initFakeScrollbar() {
    var box = qs('.gallery-grid-inner'), thumb = qs('.fake-thumb');
    if (!box || !thumb) return;
    function update() {
      var sh = box.scrollHeight, ch = box.clientHeight, st = box.scrollTop;
      var th = Math.max((ch / Math.max(sh, 1)) * ch, 40);
      thumb.style.height = th + 'px';
      thumb.style.transform = 'translateY(' + (sh > ch ? (st / (sh - ch)) * (ch - th) : 0) + 'px)';
    }
    box.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    update();
  }

  /* ==========================================================================
   * FLOATING CONTROLS (share / enquire / VR / music / autoplay / fullscreen)
   * ========================================================================== */
  function initFloatingControls() {
    var bz = window.blazeIT;
    var hasTour = !!bz;
    var showTourBtns = hasTour || (C.controls && C.controls.alwaysShow);

    var controls = document.createElement('div');
    controls.className = 'floating-controls';

    function createBtn(svg, click, title) {
      var b = document.createElement('div');
      b.className = 'control-btn'; b.innerHTML = svg; b.title = title;
      b.addEventListener('click', function () { click(b); });
      return b;
    }

    var shareBtn = createBtn(ICONS.share, function () {
      var url = C.share.url || location.href;
      var data = { title: C.share.title, text: C.share.text, url: url };
      if (navigator.share) {
        navigator.share(data).catch(function () { });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(data.text + ' ' + url).then(function () { alert('Link copied!'); });
      } else { alert(data.text + ' ' + url); }
    }, 'Share');

    var vrBtn = createBtn(ICONS.vr, function () {
      var gm = $('galleryAndMap'); if (gm) gm.style.display = 'none';
      if (window.blazeIT) window.blazeIT.triggerHotspotByName('openvr');
    }, 'VR');

    var enquireBtn = createBtn(ICONS.enquire, function () {
      window.open('https://wa.me/' + C.contact.whatsapp + '?text=' + encodeURIComponent(C.contact.whatsappEnquireMessage), '_blank');
    }, 'Enquire');

    var music = null, musicOn = true;
    if (bz && bz.getMediaByName) music = bz.getMediaByName('backgroundaudio');
    if (music && bz.playAudio) bz.playAudio(music, { playOnlyOnCurrentMedia: false, stopGlobalMusic: true });
    var musicBtn = createBtn(ICONS.musicOn, function (btn) {
      if (!music) return;
      musicOn = !musicOn;
      if (musicOn) { if (bz.playAudio) bz.playAudio(music, { playOnlyOnCurrentMedia: false, stopGlobalMusic: true }); btn.innerHTML = ICONS.musicOn; }
      else { if (bz.pauseAudio) bz.pauseAudio(music); btn.innerHTML = ICONS.musicOff; }
    }, 'Music');

    var fsBtn = createBtn(ICONS.fsOff, function (btn) {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
        btn.innerHTML = ICONS.fsOn;
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        btn.innerHTML = ICONS.fsOff;
      }
    }, 'Fullscreen');
    document.addEventListener('fullscreenchange', function () {
      fsBtn.innerHTML = document.fullscreenElement ? ICONS.fsOn : ICONS.fsOff;
    });

    var autoBtn = createBtn(ICONS.autoplay, function () {
      if (window.blazeIT) window.blazeIT.triggerHotspotByName('autoplay_play_pause');
    }, 'Autoplay');

    if (window.innerWidth > 600) {
      controls.appendChild(shareBtn);
      controls.appendChild(enquireBtn);
      if (showTourBtns) { controls.appendChild(vrBtn); controls.appendChild(musicBtn); controls.appendChild(autoBtn); }
      controls.appendChild(fsBtn);
    } else {
      var hidden = showTourBtns ? [vrBtn, musicBtn, autoBtn, fsBtn] : [];
      hidden.forEach(function (b) { b.classList.add('mobile-hidden-btn'); controls.appendChild(b); });
      if (showTourBtns) {
        var opened = false;
        var gear = createBtn(ICONS.settings, function (btn) {
          opened = !opened;
          if (opened) {
            btn.innerHTML = ICONS.close;
            hidden.forEach(function (b, i) {
              setTimeout(function () { b.style.display = 'flex'; requestAnimationFrame(function () { b.classList.add('show'); }); }, i * 70);
            });
          } else {
            btn.innerHTML = ICONS.settings;
            hidden.slice().reverse().forEach(function (b, i) {
              setTimeout(function () { b.classList.remove('show'); setTimeout(function () { b.style.display = 'none'; }, 300); }, i * 70);
            });
          }
        }, 'Settings');
        controls.appendChild(gear);
      } else {
        controls.appendChild(fsBtn);
      }
      controls.appendChild(shareBtn);
      controls.appendChild(enquireBtn);
    }
    document.body.appendChild(controls);
  }

  /* ---------- public hooks (for the tour's "back to map" button etc.) ---------- */
  window.TulsiMap = {
    show: function () { var gm = $('galleryAndMap'); if (gm) gm.style.display = 'block'; },
    hide: function () { var gm = $('galleryAndMap'); if (gm) gm.style.display = 'none'; },
    resetFilters: resetFilters,
    closeTour: closeIframe,
    openProject: function (name) { var p = projectByName(name); if (p) openProject(p); }
  };

  renderComponent();
  if (window.pauseTour) window.pauseTour();
})();
