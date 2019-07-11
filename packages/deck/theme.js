
// default, dark, code,condensed and future are the ones I like
import { dark as mdxDeckTheme } from 'mdx-deck/themes'

// Get CodeSurfer themes from here:
// https://github.com/FormidableLabs/prism-react-renderer/tree/master/themes
// nightOwl: backgroundColor: "#011627" color: "#d6deeb"
import prismReactTheme from "prism-react-renderer/themes/nightOwl"
// import prismReactTheme from "prism-react-renderer/themes/dracula"
// import prismReactTheme from "prism-react-renderer/themes/vsDark"

// Get colors from mdx-deck/themes/*
//  or steal values from prism-react-renderer/themes/*
//  or reveal.js theme colors

const moonSolarizedDark = { // from hakimel/reveal.js moon.scss (a.k.a Solarized Dark, used in hugo version)
  background: "#002b36",
  code: "#93a1a1",
  link: "#268bd2",
  // pre: "#f0f", // not used yet?
  // preBackground: "#333", // not used yet?
  quote: '#93a1a1',
  text: "#93a1a1",
  heading: "#eee8d5" // non-standard property, used below 
}

const prismForMDXDeck = { // prism colors (nightOwl) back into MDX-Deck
  background: prismReactTheme.plain.backgroundColor,
  text: prismReactTheme.plain.color,
  heading: prismReactTheme.plain.color // non-standard property, used below 
}

const colors = {
  ...mdxDeckTheme.colors,
  ...moonSolarizedDark,
  ...prismForMDXDeck
}

export default {
  ...mdxDeckTheme,
  font: '"Roboto Condensed", system-ui, sans-serif',
  monospace: '"Roboto Mono", monospace',
  colors:colors,
  // remove uppercase transform
  heading: {
    textTransform: 'none',
    color: colors.heading
  },
  link:{
    textDecoration: 'none'
  },
  blockquote: {
    fontStyle: 'italic'
  },
  codeSurfer: {
    ...prismReactTheme,
    showNumbers: false
  }

}
