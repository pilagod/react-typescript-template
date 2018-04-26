import * as React from 'react'
import { shallow } from 'enzyme'
import { Hello } from '../Hello'

describe('Hello', () => {
  it('should render a h1 with text contains props compiler and framework', () => {
    const compiler = 'This is compiler string'
    const framework = 'This is framework string'

    const wrapper = shallow(<Hello compiler={compiler} framework={framework}/>)

    const renderText = wrapper.find('h1').text()

    expect(renderText).toContain(compiler)
    expect(renderText).toContain(framework)
  })
})
