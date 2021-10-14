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
//
import api from './'

describe('api', () => {
  it('should be an example', () => {
    var res = api.foo('ok')
    expect(res).toEqual('ok')
  })
})

