import React from 'react'
import { render } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
    test('rendered', () => {
        const { asFragment } = render(<Header />)
        expect(asFragment()).toMatchSnapshot()
    })
})
