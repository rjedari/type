import { expect, test } from 'vitest'
import { isPalindrome } from './../q1'

test('test Plaindrome cases', () => {
  const factory = (str = 'glg') => isPalindrome(str)
  const e1 = factory('glg glg');
  const e2 = factory('Cigar? Toss it in a can. It is so tragic');
  const e3 = factory('sit ad est love');
  expect(e1).toBe(true)
  expect(e2).toBe(true)
  expect(e3).toBe(false)
})

// const config = {  props: {
//   asghar: '',
//   akbar: ''
// },
// emit: ['select'],}

// const x = (payload) => fn({
//   ...config,
//   ...payload
// })

// x({props: {...config.props, asghar: 'akbar'}})