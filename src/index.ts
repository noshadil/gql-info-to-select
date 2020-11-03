const mapIncludes = (info: any): any => {
  let returnVal;

  for (const key in info.selections) {
    const field = info.selections[key];
    if (field.selectionSet) {
      returnVal = {
        include: { [field.name.value]: mapIncludes(field.selectionSet) },
      };
    }
  }
  return returnVal || true;
};

export const includes = (info: any) =>
  mapIncludes(info.fieldNodes[0].selectionSet);
