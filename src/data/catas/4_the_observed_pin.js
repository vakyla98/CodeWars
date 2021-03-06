const code = `function getPINs(observed) {
  if (observed === '') return []
  const neighbours = [
    ['8', '0'], ['1', '2', '4'], ['1', '2', '3', '5'], ['2', '3', '6'],
    ['1', '4', '5', '7'], ['2', '4', '5', '6', '8'], ['3', '5', '6', '9'],
    ['4', '7', '8'], ['5', '7', '8', '9', '0'], ['6', '8', '9']
  ]

  const brutArray = [...observed].map(el => el = neighbours[+el])

  const answ = []

  function brutForse(el, array) {
    for (let i = 0; i < array[0].length; i++) {
      if (array.length > 1) {
        brutForse(el + array[0][i], array.slice(1))
      }
      answ.push(el + array[0][i])
    }
  }

  brutForse('', brutArray)
}`

export default {
  lang: 'JS',
  name:'The Observed Pin',
  q: 4,
  code
}