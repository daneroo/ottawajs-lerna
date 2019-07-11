import React, { useState } from 'react';
import { sum } from '@daneroo/ottawajs-lerna-math';

export default function Adder({numbers}) {
  return (
    <div>
      <p>Adding numbers: {JSON.stringify(numbers)}</p>
      <p>Yields: {sum(...numbers)} </p>
    </div>
  );
}


