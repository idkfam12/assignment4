/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */
window.products = [
  {
    id: "P1",
    title: "Chanel No. 5",
    description: "A timeless, iconic fragrance with notes of rose, jasmine, and vanilla.",
    price: 15999, // $159.99
    discontinued: false,
    categories: ["c2", "c4"]
  },
  {
    id: "P2",
    title: "Bleu de Chanel",
    description: "A woody aromatic fragrance for men with citrus and amber notes.",
    price: 12999, // $129.99
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P3",
    title: "Tom Ford Black Orchid",
    description: "A luxurious blend of black truffle, orchid, and spice notes.",
    price: 18999, // $189.99
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P4",
    title: "Dior Sauvage",
    description: "Fresh bergamot and ambroxan creating a powerful masculine scent.",
    price: 14999, // $149.99
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P5",
    title: "Jo Malone Wood Sage & Sea Salt",
    description: "A fresh, earthy fragrance capturing the spirit of the ocean.",
    price: 13999, // $139.99
    discontinued: true,
    categories: ["c3"]
  },
  {
    id: "P6",
    title: "La Vie Est Belle",
    description: "An elegant iris-based fragrance with sweet praline notes.",
    price: 12999, // $129.99
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "P7",
    title: "Acqua di Gio",
    description: "Mediterranean-inspired aquatic fragrance with citrus notes.",
    price: 11999, // $119.99
    discontinued: true,
    categories: ["c1"]
  },
  {
    id: "P8",
    title: "Baccarat Rouge 540",
    description: "Luxurious amber floral fragrance with jasmine and saffron.",
    price: 29999, // $299.99
    discontinued: false,
    categories: ["c3", "c4"]
  }
];
