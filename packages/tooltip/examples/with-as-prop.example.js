/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef } from "react";
import ReachTooltip from "@reach/tooltip";
import "@reach/tooltip/styles.css";

let name = "As a span";

function Example() {
  const coolRef = useRef();
  return (
    <div>
      <Tooltip id="wow" label="Notifications">
        <button style={{ fontSize: 25 }} ref={coolRef}>
          <span aria-hidden>🔔</span>
        </button>
      </Tooltip>
      <Tooltip label="Settings">
        <button style={{ fontSize: 25 }}>
          <span aria-hidden>⚙️</span>
        </button>
      </Tooltip>
      <Tooltip label="Your files are safe with us">
        <button style={{ fontSize: 25 }}>
          <span aria-hidden>💾</span> Save
        </button>
      </Tooltip>

      <div style={{ float: "right" }}>
        <Tooltip label="Notifications" ariaLabel="3 Notifications">
          <button style={{ fontSize: 25 }}>
            <span>🔔</span>
            <span>3</span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

function Tooltip(props) {
  return <ReachTooltip style={{ display: "block" }} as="span" {...props} />;
}

Example.story = { name };
export const Comp = Example;
export default { title: "Tooltip" };
