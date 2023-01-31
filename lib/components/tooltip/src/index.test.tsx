import * as React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "./index";

describe("tooltip", () => {
  it("tooltip appears when mouse over is triggered", async () => {
    const text = "this is a tooltip text";

    const wrapper = render(
      <Tooltip text={text} asChild>
        <button type="button">test button</button>
      </Tooltip>
    );

    expect(wrapper.queryByText(text)).not.toBeInTheDocument();

    await userEvent.hover(wrapper.getByRole("button"));

    await waitFor(() =>
      expect(wrapper.getByRole("tooltip")).toBeInTheDocument()
    );
  });
});
