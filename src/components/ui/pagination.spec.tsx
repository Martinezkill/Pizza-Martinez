import { render } from "@testing-library/react";

import { Pagination } from "./pagination";

describe("Pagination", () => {
  it("should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    );

    expect(
      wrapper.getByText((content) => /p[áa]gina\s*1\s*de\s*20/i.test(content)),
    ).toBeInTheDocument();
    expect(
      wrapper.getByText((content) =>
        /total\s*de\s*200\s*item\(s\)/i.test(content),
      ),
    ).toBeInTheDocument();
  });
});
