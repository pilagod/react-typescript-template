import { configure } from 'enzyme'
import * as EnzymeAdapter from 'enzyme-adapter-react-16'

configure({
  // [ts] Only a void function can be called with the 'new' keyword.
  adapter: new EnzymeAdapter()
})
