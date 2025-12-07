// commands.js
import {parseTextToJSON,} from "./jsonai.js";

const jsonai = {

  /**
   * Mass-generate multiple empty objects inside a parent.
   * Example: "assets >: 5" => { assets: [{}, {}, {}, {}, {}] }
   */

  createMany(commandText) {
    const tokens = tokenize(commandText); // e.g. ["assets", ">:","5"]

    const parentName = tokens[0];
    const count = Number(tokens[2]);

    if (!parentName || Number.isNaN(count) || count <= 0) {
      throw new Error("Invalid createMany command syntax.");
    }

    // Create the array of empty objects
    const items = Array.from({ length: count }, () => ({}));

    return {
      [parentName]: items,
    };
  },

  /**
   * Parse a mass key-value assignment string.
   * Example: "year1 : iphone1, year2 : iphone2" =>
   *          { year1: "iphone1", year2: "iphone2" }
   */

  parseProperties(propertyText) {
    
    // Remove commas so they don’t break tokenizing
    const cleaned = propertyText.replace(/,/g, "");

    const tokens = tokenize(cleaned);
    const result = {};

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === ":") {
        const key = tokens[i - 1];
        const value = tokens[i + 1];

        if (key && value) {
          result[key] = value;
        }
      }
    }

    return result;
  }
};

export { jsonai }