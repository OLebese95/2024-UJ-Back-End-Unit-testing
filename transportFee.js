export function transportFee(shift) {
    
    if (shift.includes('morning')) {
       return 'R20';
   } else if (shift.includes('afternoon')) {
       return 'R10';
   } else if (shift.includes('nightshift')) {
       return 'free';
   } else {
       return 'Invalid shift';
   }
}

