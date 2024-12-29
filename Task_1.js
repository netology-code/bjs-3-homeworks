"use strict";

function solveEquation(a, b, c) {
  // Вычисляем дискриминант
  const discriminant = b ** 2 - 4 * a * c;

  // Если дискриминант меньше нуля, корней нет
  if (discriminant < 0) {
    return [];
  }

  // Если дискриминант равен нулю, один корень
  if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  }

  // Если дискриминант больше нуля, два корня
  const sqrtDiscriminant = Math.sqrt(discriminant);
  const root1 = (-b + sqrtDiscriminant) / (2 * a);
  const root2 = (-b - sqrtDiscriminant) / (2 * a);
  return [root1, root2];
}
