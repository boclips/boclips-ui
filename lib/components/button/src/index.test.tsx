// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Badge from "./index";
//
// describe("Badge component", () => {
//   it("renders the component with label and value", () => {
//     render(<Badge label="Subject:" value="History" />);
//
//     expect(screen.getByText("History")).toBeInTheDocument();
//     expect(screen.getByText("Subject:")).toBeInTheDocument();
//   });
//
//   it("renders the component with label and value and icon", () => {
//     const SVGIcon = () => (
//       <svg className="svg-icon" viewBox="0 0 20 20">
//         <title>badge svg icon</title>
//         <path d="M9.719" />
//       </svg>
//     );
//
//     render(<Badge label="Subject:" value="History" icon={<SVGIcon />} />);
//
//     expect(screen.getByText("History")).toBeInTheDocument();
//     expect(screen.getByText("Subject:")).toBeInTheDocument();
//     expect(screen.getByTitle("badge svg icon")).toBeInTheDocument();
//   });
// });
