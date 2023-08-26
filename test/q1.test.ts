import { describe, expect, test } from 'vitest'
import { isPalindrome } from '../q1'
 test("if it is true " ,()=>{
    expect( isPalindrome("Cigar? Toss it in a can. It is so tragic")).toBe(true)
 })
 test("if it is true " ,()=>{
    expect( isPalindrome("sit ad est love")).toBe(false)
 })
