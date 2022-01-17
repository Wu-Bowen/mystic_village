import React from 'react';

type CardProps = {
  title: string,
  paragraph: string
}

export const App = ({ title, paragraph }: CardProps) => <aside>
  <h2>{ title }</h2>
  <p>
    { paragraph }
  </p>
</aside>