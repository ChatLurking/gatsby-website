export const getData = (nodeName, data) => {
  return data.allDataJson.edges[0].node[`${nodeName}`];
};
