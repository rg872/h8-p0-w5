function attack (damage) {
  return damage - 2;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  if (numberOfAttacks === 0) {
    return 0;
  } else {
    numberOfAttacks--;
    return attack(damagePerAttack) + damageCalculation(numberOfAttacks, damagePerAttack);
  }
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
