/**
 * BDR Vegetables — Central business configuration
 * ------------------------------------------------
 * Edit this file for business/contact/location/message updates.
 * Keep phone numbers as uninterrupted digits.
 */
window.BDR_DATA = {
  BUSINESS: {
    name: "BDR Vegetables Wholesale Shop",
    shortName: "BDR Vegetables",
    tagline: "Fresh Vegetables • Wholesale Supply • Quality Service",
    owner: "Badeti Dharma Rao",
    shopNumbers: ["41", "42", "43", "44"],

    primaryContact: {
      name: "Ramesh",
      phone: "9948122236",
      international: "919948122236",
      whatsappMessage:
        "Hello BDR Vegetables, I would like to enquire about wholesale vegetable supply."
    },

    contacts: {
      bdr: {
        name: "BDR",
        phone: "9848122236",
        international: "919848122236",
        whatsappMessage:
          "Hello BDR Vegetables, I would like to discuss a wholesale/supplier enquiry."
      },
      shop1: { name: "Shop Staff", phone: "9948279995" },
      shop2: { name: "Shop Staff", phone: "9948279994" }
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

  SITE_SETTINGS: {
    defaultLanguage: "en",
    defaultTheme: "system",
    themeStorageKey: "bdr-theme",
    languageStorageKey: "bdr-language",
    whatsappPrimary: "9948122236",
    repository: "BDR",
    githubUser: "bdr-vegetables",
    basePath: "/BDR/",
    canonicalUrl: "https://bdr-vegetables.github.io/BDR/"
  },

  MESSAGES: {
    primaryWhatsApp:
      "Hello BDR Vegetables, I would like to enquire about wholesale vegetable supply.",
    supplierWhatsApp:
      "Hello BDR Vegetables, I would like to discuss a wholesale/supplier enquiry.",
    productWhatsAppTemplate:
      "Hello BDR Vegetables, I would like to enquire about {product} availability."
  }
};
