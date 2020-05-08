import * as React from "react";

const shuffle = (array: number[]) => {
  // Adapted from https://stackoverflow.com/a/2450976/1293256
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const column = (value: number) => {
  return value === 90 ? 8 : Math.floor(value / 10);
};

const validRow = (row: number[]) => {
  const columns = new Array(10).fill(0);
  for (const value of row) {
    columns[column(value)] += 1;
  }
  return !columns.some((element) => element > 1);
};

const extractRow = (array: number[]) => {
  const row: number[] = [];
  while (row.length !== 5) {
    const value = array.shift() as number;
    if (row.some((element) => column(element) === column(value))) {
      array.push(value);
    } else {
      row.push(value);
    }
  }
  return row;
};

const build = () => {
  let tries = 0;
  let rows = [];
  while (tries < 10) {
    const numbers = [];
    for (let i = 1; i <= 90; i++) {
      numbers.push(i);
    }
    shuffle(numbers);

    rows = [];
    for (let i = 0; i < 17; i++) {
      rows.push(extractRow(numbers));
    }
    if (validRow(numbers)) {
      rows.push(numbers);
      return rows;
    } else {
      tries++;
    }
  }
  throw Error("Cannot build");
};

const Bingo = () => {
  const [caller, setCaller] = React.useState(false);

  let content;
  if (caller) {
    const numbers = [];
    for (let i = 1; i <= 90; i++) {
      numbers.push(i);
    }
    shuffle(numbers);
    content = numbers.map((value) => (
      <tr key={value}>
        <td
          onClick={(event) => {
            (event.target as any).classList.toggle("clicked");
          }}
        >
          {value}
        </td>
      </tr>
    ));
  } else {
    const rows = build();

    const cards = rows.map((row, index) => {
      row.sort();
      const elements = [];
      for (let i = 0; i < 9; i++) {
        let text;
        for (const value of row) {
          if (column(value) === i) {
            text = value.toString();
          }
        }
        let element = <td key={index * 100 + i} />;
        if (text) {
          element = (
            <td
              key={index * 100 + i}
              onClick={(event) => {
                (event.target as any).classList.toggle("clicked");
              }}
            >
              {text}
            </td>
          );
        }
        elements.push(element);
      }
      return <tr key={index}>{elements}</tr>;
    });
    content = <>{cards}</>;
  }
  return (
    <div className="container p-3">
      <table className="bingo">
        <tbody>{content}</tbody>
      </table>
      <button onClick={() => setCaller((value) => !value)}>Toggle mode</button>
    </div>
  );
};

export default Bingo;
