import React from 'react';

type MainProps = {
  title: string;
  paragraph: string;
};

export const Main = ({ title, paragraph }: MainProps) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);
