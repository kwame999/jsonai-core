// jsonai-core: turn friendly text into simple JSON
// v0.1 – single parent, flat child properties

// ─────────────────────────────────────────────
// 1. Tokenization
// ─────────────────────────────────────────────

function tokenize(input) {
  const trimmed = input.trim();
  const lower = trimmed.toLowerCase();
  const rawTokens = lower.split(" ");
  const sanitizedTokens = rawTokens.filter((t) => t !== "" && t);
  return sanitizedTokens;
}

// ─────────────────────────────────────────────
// 2. Error metadata (not thrown yet, just data)
// ─────────────────────────────────────────────

const pathWatchError = {
  errorTypes: [
    {
      type: "Syntax Error",
      message: "No Pointer (>) operand detected",
      resources: {
        solution:
          "Try making sure declared objects are followed by a Pointer operand (>).",
        links: null, // future docs link
      },
      icon: "Warning Circle",
      hexcode: "red",
    },
    {},
    {},
  ],
};

// ─────────────────────────────────────────────
// 3. Path detection (parent > child)
// ─────────────────────────────────────────────

function pathDetection(sanitizedToken) {
  // Returns an array of path segments and metadata

  let pathSegment = [];
  let tokenNodes = {};
  const tokenNodePaths = [];

  // If no ">" at all, bail out for now (UI can use pathWatchError)
  if (sanitizedToken.every((token) => token !== ">")) {
    return null;
  }

  for (let i = 0; i < sanitizedToken.length; i++) {
    if (sanitizedToken[i] === ">") {
      const leftTokenNode = sanitizedToken[i - 1]; // parent
      const rightTokenNode = sanitizedToken[i + 1]; // child
      const leftTokenNodeIndex = i - 1;
      const rightTokenNodeIndex = i + 1;

      pathSegment = [leftTokenNode, rightTokenNode];
      tokenNodes = {
        leftTokenNode,
        rightTokenNode,
        leftTokenNodeIndex,
        rightTokenNodeIndex,
      };

      tokenNodePaths.push({
        path: pathSegment,
        tokenPath: tokenNodes,
        pointerOpparand: true,
        tokenRelations: `Parent: ${leftTokenNode}, Child:${rightTokenNode}`,
        tokenDefault: { [leftTokenNode]: { [rightTokenNode]: null } },
        values: {},
      });
    }
  }

  return tokenNodePaths;
}

// ─────────────────────────────────────────────
// 4. Value detection (key : value)
// ─────────────────────────────────────────────

function valueDetection(sanitizedToken) {
  const tokenValueSetted = [];
  let value;
  let key;

  for (let i = 0; i < sanitizedToken.length; i++) {
    if (sanitizedToken[i] === ":") {
      value = sanitizedToken[i + 1];
      key = sanitizedToken[i - 1];

      // e.g. { breed: "bulldog" }
      tokenValueSetted.push({ [key]: value });
    }
  }

  return tokenValueSetted;
}

// ─────────────────────────────────────────────
// 5. Build JSON object from path + values
// ─────────────────────────────────────────────
//
// v0.1 assumption: one parent object, flat children.
// Example:
//   "Dog > breed : bulldog, owner : me"
//   -> { dog: { breed: "bulldog", owner: "me" } }
//

function buildJSON(path, values) {
  if (!path || path.length === 0) return null;
  if (!values || values.length === 0) return null;

  const parent = path[0].tokenPath.leftTokenNode;

  // Merge [{breed: "bulldog"}, {owner: "me"}] into one object
  const childProps = Object.assign({}, ...values);

  return { [parent]: childProps };
}

// ─────────────────────────────────────────────
// 6. High-level helper
// ─────────────────────────────────────────────

function parseTextToJSON(text) {
  const tokens = tokenize(text);
  const path = pathDetection(tokens);

  if (!path) {
    // caller can decide what to do with this
    return {
      error: pathWatchError,
      result: null,
    };
  }

  const values = valueDetection(tokens);
  const result = buildJSON(path, values);

  return result;
}

// ─────────────────────────────────────────────
// 7. Exports
// ─────────────────────────────────────────────

export {
  parseTextToJSON,
  tokenize,
  pathDetection,
  valueDetection,
  buildJSON,
  pathWatchError,
};
