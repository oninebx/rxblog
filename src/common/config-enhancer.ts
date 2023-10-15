import { Label } from "../types";

const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const lables2Category = (labels: Label[], categories: string[]) => {
  
  if(!labels || labels.length === 0) {
    return '';
  }
  if(!categories || categories.length === 0){
    return labels[0];
  }
  const targetLabels = labels.filter(l => categories.includes(capitalize(l.name)));
  return targetLabels.length === 0 ? '' : targetLabels[0].name;
}

export {
  lables2Category
}