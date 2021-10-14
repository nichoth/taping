// // import * as test from 'tape'
// var test = require('tape')
// var api = require('../src')
// // import * as api from '../src/'

// test('example', t => {
//     var res = api.foo('aaa')
//     t.equal(res, 'aaa', 'should return the argument')
//     t.end()
// })

// import { mount } from '@vue/test-utils'
import * as api from './src'

describe('api', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3'
    const wrapper = mount(HelloWorld, { props: { msg } })

    expect(wrapper.find('h1').text()).toEqual(msg)
  })
})

