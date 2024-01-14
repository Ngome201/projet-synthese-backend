
export function estNullUndefinedOuVide(valeur: any) {
    // Vérifier si la valeur est null ou undefined
    if (valeur === null || valeur === undefined) {
      return true;
    }
  
    // Vérifier si la valeur est une chaîne vide
    if (typeof valeur === 'string' && valeur.trim() === '') {
      return true;
    }
  
    // Vérifier si la valeur est un tableau vide
    if (Array.isArray(valeur) && valeur.length === 0) {
      return true;
    }
  
    // Autrement, la valeur n'est ni null, ni undefined, ni vide
    return false;
  }

export function toNombre(variable: any) {
    variable = parseInt(variable)
    return typeof variable === 'number' && !isNaN(variable);
  }