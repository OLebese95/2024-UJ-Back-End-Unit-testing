export function fromWhere(town) {
    
    if (town.startsWith('CY')) {
       return 'Bellville';
   } else if (town.startsWith('CJ')) {
       return 'Paarl';
   } else if (town.startsWith('CA')) {
       return 'Cape Town';
   } else {
       return 'Some other place!';
   }
}

