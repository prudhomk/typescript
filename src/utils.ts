export function shuffleCups(ball) {
  if(ball === 3) {
    return 'CupC';
  }

  if(ball === 2) {
    return 'CupB';
  }

  if(ball === 1) {
    return 'CupA';
  }
}
