import { render, screen } from '@testing-library/react-native';

import { Header } from '../../Header/index';
import { headerMock } from '../../../mock/editorJsOutputData';

describe('Header', () => {
  it('Should be able to render a Header with value', async () => {
    const component = (
      <Header data={headerMock.data} />
    );

    render(component);

    const header = await screen.findByText(headerMock.data.text);

    expect(!!header).toBeTruthy();
  });

  it('Should to have accessibilityRole as header', async () => {
    const component = (
      <Header data={headerMock.data} />
    );

    render(component);

    expect(await screen.findAllByRole('header')).toBeTruthy();
  });
});
