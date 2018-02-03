/*------------------------------------------------------------------------------
   About      : Spec File for Testing.
   
   Created on : Mon Jan 22 2018
   Author     : Akash Dathan
------------------------------------------------------------------------------*/


import {should}                                  from 'chai'
import {tag}                                     from '../index'
import * as Types                                from '../types'


describe("Calais Tagging", () => {
  describe("Tag", () => {
    it("JSON Response", async () => {
        const content = `For all of Musk's products and pursuits, from electric cars and space to linking human brains 
                         to computers, to a tunneling company and concerns over the rise of artificial intelligence, 
                         there is nothing quite like the Falcon Heavy, the most powerful American rocket since the 
                         Apollo-era Saturn V. With 27 engines, the rocket is three times more powerful than the 
                         workhorse Falcon 9 rocket the company has been flying since 2010. If it can launch 
                         successfully, the Pentagon wants to use it to launch national security satellites. Musk has 
                         said he plans to use it to fly cargo to Mars and an undisclosed couple of people in a tourist 
                         jaunt around the moon.`

        const accessToken = `ym2rpqymeSW7hyVYX5n61R4kJP0J5sa4`

        const result = await tag({content, accessToken})
        should().exist(result)
    })
  })
})


