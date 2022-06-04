import { render } from '@testing-library/react'
import { Main } from './index'

describe('should render Main component', () => {
  it('', () => {
    const { getAllByTestId } = render(<Main />)
    const text = getAllByTestId('teste')
    console.log(text)
    expect(text).toBeTruthy()
  })
})
