// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
// https://legacy.gitbook.com/book/basarat/typescript/details
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Hello } from './components/Hello'

ReactDOM.render(
  <Hello compiler='TypeScript' framework='React'/>,
  document.getElementById('example')
)
