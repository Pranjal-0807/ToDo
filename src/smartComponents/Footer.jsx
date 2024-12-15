import React from "react";
import Button from "../components/Button";
import ParagraphFooter from "../components/ParagraphFooter";
import ColorFilterOption from "../components/ColorFilterOption";
import { colorArray } from "../utils/colorArray";
import { useSelector } from "react-redux";

const Footer = () => {
  const todoLength = useSelector((store) => store.todo.items.length);
  return (
    <>
      <div className="border-t-4"></div>
      <div className="flex justify-between">
        <div>
          <ParagraphFooter paraText="Actions" />
          <Button btnText="Mark All Completed" />
          <br />
          <Button btnText="Clear Completed" />
        </div>

        <div>
          <ParagraphFooter paraText="Remaining Todos" />
          <p className="text-center">{todoLength} item left</p>
        </div>

        <div>
          <ParagraphFooter paraText="Filter by Status" />
          <div className="text-center">
            <Button btnText="All" />
            <br />
            <Button btnText="Active" />
            <br />
            <Button btnText="Completed" />
          </div>
        </div>

        <div>
          <ParagraphFooter paraText="Filter by Color" />
          <div className="space-y-3">
            {colorArray.map((color) => (
              <ColorFilterOption color={color} key={color} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
