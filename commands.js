// commands.js
import {parseTextToJSON,} from "./jsonai.js";

const jsonai = {
    
    createMultiJSON: (amount, getName) => {
    const quickObjects = [];
    if (!amount || amount <= 0) return quickObjects;

    for (let i = 0; i < amount; i++) {
      const name = getName ? getName(i) : `object_${i + 1}`;
      quickObjects.push({ [name]: {} });
    }

    return quickObjects;
  },

  parseTextToJSON,
  // later: parentSet, quickCommands, etc.
};

export { jsonai };
