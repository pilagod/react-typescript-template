// https://basarat.gitbooks.io/typescript/docs/testing/jest.html
import { configure } from 'enzyme'
import * as EnzymeAdapter from 'enzyme-adapter-react-16'

configure({
  adapter: new EnzymeAdapter()
})
