import React, { ReactChildren } from "react";
import { Heart } from "./Heart";
import styled from "styled-components";

export const Bar = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12px, 1fr));
  grid-column-gap: 3px;
  margin-top: 0;
`;

export function Lifebar({
  life,
  max,
  enhance,
  children,
}: {
  life: number;
  max: number;
  enhance?: number;
  children?: ReactChildren;
}) {
  return (
    <Bar className="lifebar">
      {Array.from(Array(life), (_, i) => (
        <li key={i}>
          <Heart fill={true} color="#F00" enhance={enhance === 1} />
        </li>
      ))}
      {Array.from(Array(max - life), (_, i) => (
        <li key={i}>
          <Heart fill={false} color="#F00" enhance={enhance === 1} />
        </li>
      ))}
      {children}
    </Bar>
  );
}
