import { createRoot } from "react-dom/client";

import "~/Utility";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div
      style={{
        position: "absolute",
        overflow: "scroll",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingBottom: "2em",

        background: "hsla(130, 20%, 70%, 1)",

        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      }}
    >
      <Deck />
    </div>
  );
}

type Deck = ReturnType<typeof Deck.unshuffled>;

function Deck() {
  const [deck, setDeck] = React.useState(Deck.unshuffled());
  const [selected, setSelected] = React.useState<Deck.Selected>([]);

  const shuffle = () =>
    setDeck((deck) => {
      const shuffled = [...deck];

      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return shuffled;
    });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flexBasis: "100%",

          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          onClick={shuffle}
          role="button"
          style={{
            margin: "1em",
            padding: "0.7em 1.5em",

            cursor: "pointer",
            borderRadius: "20em",
            background: `linear-gradient(135deg, hsla(350, 90%, 60%, 1) 0%, hsla(10, 90%, 60%, 1) 100%)`,
            boxShadow: `0 0.2em 0.6em hsla(350, 90%, 60%, 0.5)`,

            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",

            transition: "all 0.2s",
          }}
        >
          Shuff'em
        </div>
        <div
          onClick={() => setDeck(Deck.unshuffled())}
          role="button"
          style={{
            margin: "1em",
            padding: "0.7em 1.5em",

            cursor: "pointer",
            borderRadius: "20em",
            background: `linear-gradient(300deg, hsla(100, 70%, 40%, 1) 0%, hsla(160, 80%, 40%, 1) 100%)`,
            boxShadow: `0 0.2em 0.6em hsla(160, 90%, 60%, 0.5)`,

            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",

            transition: "all 0.2s",
          }}
        >
          Unshuff
        </div>
      </div>
      {deck.map((card, index) => (
        <Card
          {...{ card }}
          key={card.symbol}
          position={index}
          isSelected={selected.includes(card.symbol)}
          onClick={() =>
            setSelected((selected) =>
              selected.includes(card.symbol)
                ? selected.filter((symbol) => symbol !== card.symbol)
                : [...selected, card.symbol]
            )
          }
        />
      ))}
    </div>
  );
}

namespace Deck {
  export const unshuffled = () =>
    (
      [
        [1, "Spades", "Ace of Spades", "As"],
        [2, "Spades", "Two of Spades", "2s"],
        [3, "Spades", "Three of Spades", "3s"],
        [4, "Spades", "Four of Spades", "4s"],
        [5, "Spades", "Five of Spades", "5s"],
        [6, "Spades", "Six of Spades", "6s"],
        [7, "Spades", "Seven of Spades", "7s"],
        [8, "Spades", "Eight of Spades", "8s"],
        [9, "Spades", "Nine of Spades", "9s"],
        [10, "Spades", "Ten of Spades", "Ts"],
        [11, "Spades", "Jack of Spades", "Js"],
        [12, "Spades", "Queen of Spades", "Qs"],
        [13, "Spades", "King of Spades", "Ks"],
        [1, "Hearts", "Ace of Hearts", "Ah"],
        [2, "Hearts", "Two of Hearts", "2h"],
        [3, "Hearts", "Three of Hearts", "3h"],
        [4, "Hearts", "Four of Hearts", "4h"],
        [5, "Hearts", "Five of Hearts", "5h"],
        [6, "Hearts", "Six of Hearts", "6h"],
        [7, "Hearts", "Seven of Hearts", "7h"],
        [8, "Hearts", "Eight of Hearts", "8h"],
        [9, "Hearts", "Nine of Hearts", "9h"],
        [10, "Hearts", "Ten of Hearts", "Th"],
        [11, "Hearts", "Jack of Hearts", "Jh"],
        [12, "Hearts", "Queen of Hearts", "Qh"],
        [13, "Hearts", "King of Hearts", "Kh"],
        [1, "Diamonds", "Ace of Diamonds", "Ad"],
        [2, "Diamonds", "Two of Diamonds", "2d"],
        [3, "Diamonds", "Three of Diamonds", "3d"],
        [4, "Diamonds", "Four of Diamonds", "4d"],
        [5, "Diamonds", "Five of Diamonds", "5d"],
        [6, "Diamonds", "Six of Diamonds", "6d"],
        [7, "Diamonds", "Seven of Diamonds", "7d"],
        [8, "Diamonds", "Eight of Diamonds", "8d"],
        [9, "Diamonds", "Nine of Diamonds", "9d"],
        [10, "Diamonds", "Ten of Diamonds", "Td"],
        [11, "Diamonds", "Jack of Diamonds", "Jd"],
        [12, "Diamonds", "Queen of Diamonds", "Qd"],
        [13, "Diamonds", "King of Diamonds", "Kd"],
        [1, "Clubs", "Ace of Clubs", "Ac"],
        [2, "Clubs", "Two of Clubs", "2c"],
        [3, "Clubs", "Three of Clubs", "3c"],
        [4, "Clubs", "Four of Clubs", "4c"],
        [5, "Clubs", "Five of Clubs", "5c"],
        [6, "Clubs", "Six of Clubs", "6c"],
        [7, "Clubs", "Seven of Clubs", "7c"],
        [8, "Clubs", "Eight of Clubs", "8c"],
        [9, "Clubs", "Nine of Clubs", "9c"],
        [10, "Clubs", "Ten of Clubs", "Tc"],
        [11, "Clubs", "Jack of Clubs", "Jc"],
        [12, "Clubs", "Queen of Clubs", "Qc"],
        [13, "Clubs", "King of Clubs", "Kc"],
      ] as const
    ).map(([rank, suit, name, symbol]) => ({
      rank,
      suit,
      name,
      symbol,
    }));

  export type Selected = Card.Symbol[];
}

type Card = Deck[number];

function Card({ isSelected, onClick, card }: Card.Props) {
  const suit =
    card.suit === "Clubs"
      ? "♣️"
      : card.suit === "Spades"
      ? "♠️"
      : card.suit === "Hearts"
      ? "♥️"
      : "♦️";

  return (
    <div
      {...{ onClick }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",

        margin: "1em",
        padding: "1em",

        width: "6em",
        height: "10em",

        cursor: "pointer",
        borderRadius: "1em",
        background: `hsla(200, 100%, ${isSelected ? 80 : 95}%, 1)`,
        boxShadow: `0 0.2em 0.6em hsla(200, 40%, 60%, 0.3)`,

        ...(isSelected && { transform: "scale(1.1)" }),

        color:
          card.suit === "Clubs" || card.suit === "Spades"
            ? "hsla(300, 5%, 20%, 1)"
            : "hsla(350, 80%, 55%, 1)",

        transition: "all 0.2s",
      }}
    >
      {card.rank == 1 || card.rank > 10 ? (
        <span
          style={{
            padding: "0.1em 0",
            fontSize: "3em",
          }}
        >
          <span style={{ fontWeight: 900 }}>{card.symbol[0]}</span>
          {suit}
        </span>
      ) : (
        Array(card.rank)
          .fill(0)
          .map(() => (
            <span
              style={{
                margin: "-0.4em 0.2em",
                fontSize: "2.1em",
              }}
            >
              {card.suit === "Clubs"
                ? "♣️"
                : card.suit === "Spades"
                ? "♠️"
                : card.suit === "Hearts"
                ? "♥️"
                : "♦️"}
            </span>
          ))
      )}
    </div>
  );
}

namespace Card {
  export type Props = {
    card: Card;
    position: number;
    isSelected?: boolean;
    onClick?: () => void;
  };

  export type Symbol = Card["symbol"];
}
