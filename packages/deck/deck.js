// deck.js - main slide entrypoint
// Files need to be explicily imported...

import s00 from './slides/00-intro.mdx'
import s10 from './slides/10-getting-started.mdx'

export default [
  ...s00,
  ...s10
]
export { default as theme } from 'theme.js'

export { components } from "mdx-deck-code-surfer"


// For V2 (Waiting for CodeSurfer to catch up)
// import { slides as s00 } from './slides/00-intro.mdx'
// import { slides as s10 } from './slides/10-getting-started.mdx'
// export const slides = [
//   ...s00,
//   ...s10
// ]
