// deck.js - main slide entrypoint
// Files need to be explicily imported...

import s00 from './slides/00-intro.mdx'
import s10 from './slides/10-getting-started.mdx'
import s20 from './slides/20-workflow.mdx'
import s30 from './slides/30-outro.mdx'

export default [
  ...s00,
  ...s10,
  ...s20,
  ...s30
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
