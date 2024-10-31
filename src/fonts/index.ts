import localFont from 'next/font/local'

const superstore = localFont({
  variable: '--font-superstore',
  src: [
    {
      path: './superstore/Superstore-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './superstore/Superstore-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'swap',
})

const superstoreBold = localFont({
  variable: '--font-superstore-bold',
  src: [
    {
      path: './superstore/Superstore-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './superstore/Superstore-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
})

const superstoreBook = localFont({
  variable: '--font-superstore-book',
  src: [
    {
      path: './superstore/Superstore-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './superstore/Superstore-BookItalic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'swap',
})

const superstoreLight = localFont({
  variable: '--font-superstore-light',
  src: [
    {
      path: './superstore/Superstore-Light.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
})

const csPrajad = localFont({
  variable: '--font-cs-prajad',
  src: [
    {
      path: './cs_prajad/CSPraJad-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './cs_prajad/CSPraJad.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
})

const csPrajadBold = localFont({
  variable: '--font-cs-prajad-bold',
  src: [
    {
      path: './cs_prajad/CSPraJad-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './cs_prajad/CSPraJad-boldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
})

const fontPackage = [
  superstore.variable,
  superstoreBold.variable,
  superstoreBook.variable,
  superstoreLight.variable,
  csPrajad.variable,
  csPrajadBold.variable,
]

export {
  superstore,
  superstoreBold,
  superstoreBook,
  superstoreLight,
  csPrajad,
  csPrajadBold,
  fontPackage,
}
