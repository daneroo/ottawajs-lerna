import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import { Adder } from '../src'

afterEach(cleanup);

describe('Adder', () => {
  test('import Adder from "ottawajs-lerna-react"', () => {
    expect(typeof Adder).toBe('function')
  })
  it('renders the component', () => {
    const { asFragment } = render(<Adder numbers={[1,2,3]} />)
    expect(asFragment()).toMatchSnapshot();
   })
})
