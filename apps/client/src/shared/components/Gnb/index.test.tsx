import { cleanup, render, screen } from '@testing-library/react';
import { Gnb, GNB_ITEMS } from './index';
import userEvent from '@testing-library/user-event';

describe('Gnb', () => {
  it('주어진 Gnb 항목을 화면에 렌더링해야 한다.', () => {
    render(<Gnb pathname="/" />);

    GNB_ITEMS.forEach(({ name }) => {
      expect(screen.getByText(new RegExp(name))).toBeInTheDocument();
    });
  });

  it('Gnb 항목을 클릭하면, 해당 페이지로 이동한다.', () => {
    const user = userEvent.setup();
    render(<Gnb pathname="/" />);

    GNB_ITEMS.forEach(async (item) => {
      await user.click(screen.getByText(new RegExp(item.name)));

      expect(window.location.pathname).toBe(item.pathname);
    });
  });

  describe('특정 메인 페이지로 이동 시,', () => {
    it('특정 Gnb 항목이 하이라이트 되어야 한다.', () => {
      GNB_ITEMS.forEach(({ pathname, name }) => {
        const iconNamePrefix = pathname.slice(1);

        cleanup();
        render(<Gnb pathname={pathname} />);
        expect(screen.getByText(name).previousSibling).toHaveTextContent(new RegExp(`${iconNamePrefix}-on`));
      });
    });
  });
});
