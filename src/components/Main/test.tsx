import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
    it('rendereize head', () => {
        render(<Main />);

        expect(
            screen.getByRole('heading', { name: /Boilerplate NextJs/i })
        ).toBeInTheDocument();
    });
});
