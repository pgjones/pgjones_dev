import * as React from "react";

const BINGO_NAMES = {
  1: "Kelly's Eye",
  2: "One little duck",
  3: "Cup of tea",
  4: "Knock at the door",
  5: "Man alive",
  6: "Tom Mix",
  7: "Lucky",
  8: "Garden gate",
  9: "Doctor's Orders",
  10: "Boris's Den",
  11: "Legs eleven",
  12: "One dozen",
  13: "Unlucky for some",
  14: "The Lawnmower",
  15: "Young and Keen",
  16: "Never been kissed",
  17: "Dancing Queen",
  18: "Coming of Age",
  19: "Goodbye Teens",
  20: "Getting Plenty",
  21: "Key of the Door",
  22: "Two little ducks",
  23: "The Lord is My Shepherd",
  24: "Double dozen",
  25: "Duck and dive",
  26: "Two and six, half a crown",
  27: "Duck and a crutch",
  28: "In a state",
  29: "Rise and Shine",
  30: "Dirty Gertie",
  31: "Get Up and Run",
  32: "Buckle My Shoe",
  33: "Fish, chips and peas",
  34: "Ask for More",
  35: "Jump and Jive",
  36: "Triple dozen",
  37: "More than 11",
  38: "Christmas cake",
  39: "Steps",
  40: "Life Begins",
  41: "Time for Fun",
  42: "Winnie the Pooh",
  43: "Down on your knees",
  44: "Droopy drawers",
  45: "Halfway there",
  46: "Up to tricks",
  47: "Aneurin Bevan",
  48: "Four Dozen",
  49: "Coronavirus fine",
  50: "Snow White, 5 - 0, 5 - 0, its off to work",
  51: "Tweak of the Thumb",
  52: "Chicken vindaloo",
  53: "Here comes Herbie",
  54: "Man at the door",
  55: "All the fives",
  56: "Shotts Bus",
  57: "Heinz Varieties",
  58: "Make Them Wait",
  59: "The Brighton Line",
  60: "Grandma's getting frisky",
  61: "Bakers Bun",
  62: "Tickety-boo",
  63: "Tickle Me 63",
  64: "Red Raw",
  65: "Old Age Pension",
  66: "Clickety click",
  67: "Stairway to Heaven",
  68: "Pick a Mate",
  69: "Anyway up, Meal for Two, A Favourite of mine",
  70: "Three Score and 10",
  71: "Bang on the Drum",
  72: "Danny La Rue",
  73: "Queen Bee",
  74: "Hit the Floor",
  75: "Was she worth it?",
  76: "Trombones",
  77: "Two little crutches",
  78: "39 more steps",
  79: "One More Time",
  80: "Gandhi's Breakfast",
  81: "Fat Lady with a walking stick",
  82: "I'm gonna get more right than you",
  83: "Time for Tea",
  84: "Seven dozen",
  85: "Staying alive",
  86: "Between the sticks",
  87: "Torquay in Devon",
  88: "Two Fat Ladies",
  89: "Nearly there",
  90: "Top of the shop",
};

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
        <td>{BINGO_NAMES[value]}</td>
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
