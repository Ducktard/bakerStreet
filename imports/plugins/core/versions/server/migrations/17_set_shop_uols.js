import { Migrations } from "meteor/percolate:migrations";
import { Shops } from "/lib/collections";

Migrations.add({
  // Initializes shops without a baseUOL and without unitsOfLength to our default
  version: 17,
  up() {
    Shops.update({
      baseUOL: { $exists: false },
      unitsOfLength: { $exists: false }
    }, {
      $set: {
        baseUOL: "in",
        unitsOfLength: [{
          uol: "in",
          label: "Inches"
          
        }, {
          uol: "cm",
          label: "Centimeters",
          default: true
        }, {
          uol: "ft",
          label: "Feet"
        }]
      }
    }, { multi: true });
  },
  down() {
    Shops.update({
      baseUOL: { $exists: true },
      unitsOfLength: { $exists: true }
    }, {
      $unset: {
        baseUOL: "",
        unitsOfLength: ""
      }
    }, { multi: true });
  }
});
