import { _Base } from "./assets/jap_components/_base.js";

const getProperties = (component) => {
  const properties = [];
  const traverseChain = (obj) => {
    if (obj instanceof _Base) {
      properties.push(...Object.getOwnPropertyNames(obj));
      let protoType = Object.getPrototypeOf(obj);
      traverseChain(protoType);
    }
  }
  traverseChain(component);
  return properties
}

export { getProperties };

