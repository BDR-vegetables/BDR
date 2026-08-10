/**
 * BDR Vegetables — Central Business Configuration
 * ------------------------------------------------
 * Update business information, messages and vegetable categories here.
 * The website derives all phone, WhatsApp, email, map and visible contact
 * information from this file wherever practical.
 */

window.BDR_CONFIG = {
  business: {
    name: "BDR Vegetables Wholesale Shop",
    shortName: "BDR Vegetables",
    tagline: "Fresh Vegetables • Wholesale Supply • Quality Service",
    owner: "Badeti Dharma Rao",
    shopNumbers: ["41", "42", "43", "44"],
    description:
      "BDR Vegetables Wholesale Shop delivers fresh produce, dependable wholesale supply and responsive service for retailers, businesses, traders and institutional buyers.",
    contacts: {
      bdr: {
        label: "BDR",
        number: "9848122236",
        whatsappMessage:
          "Hello BDR Vegetables, I would like to enquire about wholesale vegetable supply."
      },
      ramesh: {
        label: "Ramesh",
        number: "9948122236",
        whatsappMessage:
          "Hello BDR Vegetables, I would like to discuss a wholesale/supplier enquiry."
      },
      shop1: { label: "Shop Staff", number: "9948279995" },
      shop2: { label: "Shop Staff", number: "9948279994" }
    },
    email: "bdrvegetablesvja@gmail.com",
    emailSubject: "BDR Vegetables Business Enquiry",
    address: {
      market: "Sri Durga Malleswara Wholesale Vegetable Market",
      road: "Nunna Bypass Road",
      locality: "Nunna",
      state: "Andhra Pradesh",
      pincode: "521212"
    },
    maps: "https://maps.app.goo.gl/eSxsCNk1rtC9Xaxu9?g_st=ac"
  },

  hero: {
    eyebrow: "Fresh produce. Direct business communication.",
    titleLine1: "Fresh Vegetables.",
    titleLine2: "Reliable Wholesale Supply.",
    supplierCta: "Become a Supplier"
  },

  supplier: {
    title: "Interested in Supplying Vegetables?",
    message:
      "Farmers, traders and vegetable suppliers can contact BDR Vegetables for supplier-related enquiries and business discussions."
  },

  vegetableCategories: [
    { name: "Leafy Vegetables", image: "assets/vegetables/leafy.svg" },
    { name: "Root Vegetables", image: "assets/vegetables/root.svg" },
    { name: "Tomatoes", image: "assets/vegetables/tomato.svg" },
    { name: "Onions", image: "assets/vegetables/onion.svg" },
    { name: "Green Chillies", image: "assets/vegetables/chilli.svg" },
    { name: "Gourds", image: "assets/vegetables/gourd.svg" },
    { name: "Cabbage & Cauliflower", image: "assets/vegetables/cabbage.svg" },
    { name: "Seasonal Produce", image: "assets/vegetables/seasonal.svg" }
  ],

  /**
   * Future product catalogue structure.
   * Keep empty until actual product/availability information is supplied.
   */
  products: []
};
