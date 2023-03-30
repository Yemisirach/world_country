import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from '../redux/store';
import Countries from '../components/countries';

describe('testing countries components', () => {
  it('test countries component', () => {
    const data = render(
      <Provider store={Store}>
        <Countries />
      </Provider>,
    );
    expect(data).toMatchSnapshot();
  });
});
