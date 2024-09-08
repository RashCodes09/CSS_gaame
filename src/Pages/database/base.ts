export const base = [
  {
    id: 1,
    question:
      "Welcome to FlexSquirelly, a game where you help yourself and friends by writing CSS Code! Guide the squirrel to the burrow on the right by using the justify-content property, which aligns items horizontally and accepts the following values ",
    insight:
      "flex-start: Items align to the left side of the container. flex-end: Items align to the right side of the container. center: Items align at the center of the container.  space-between:Items display with equal spacing between them.  space-around:  Items display with equal spacing around them. For example, justify-content: flex-end; will move the squirrel to the right",
    answer: "justify-content: flex-end;",
  },
  {
    id: 2,
    question:
      "flex-start: Items align to the left side of the container. flex-end: Items align to the right side of the container. center: Items align at the center of the container. space-between: Items display with equal spacing between them. space-around: Items display with equal spacing around them.",
    insight:
      "Use justify-content again to help these squirrels get to their burrows. Remember that this CSS property aligns items horizontally and accepts the following values:",
    answer: "justify-content: center;",
  },
  {
    id: 3,
    question:
      "If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on justify-content.",
    insight:
      " Help all three squirrels find their burrows just by using justify-content. This time, the trees have lots of space all around them.",
    answer: "justify-content: space-around;",
  },
  {
    id: 4,
    question:
      "Now the burrows on the edges have drifted to the forest, increasing the space between them. Use justify-content. This time, the burrows have equal spacing between them.",
    insight:
      " Help all three squirrels find their burrows just by using justify-content. This time, the trees have lots of space in between them.",
    answer: "justify-content: space-between;",
  },
  {
    id: 5,
    question:
      "Now use align-items to help the squirrels get to the bottom of the forest. This CSS property aligns items vertically and accepts the following values:",
    insight:
      "flex-start: Items align to the left side of the container. flex-start: Items align to the top of the container. Items align at the center of the container. center: Items align at the vertical center of the container.  baseline: Items display at the baseline of the container. flex-end: Items align to the bottom of the container.",
    answer: "align-items: flex-end;",
  },
  {
    id: 6,
    question:
      "Lead the squirrel to the center of the forest using a combination of justify-content and align-items.",
    insight: "",
    answer: "align-items: center; justify-content: center;",
  },
  {
    id: 7,
    question:
      "The squirells need to cross the forest again, this time for some burrows with plenty of space around them. Use a combination of justify-content and align-items.",
    insight: "",
    answer: "justify-content: space-around; align-items: flex-end;",
  },
  {
    id: 8,
    question:
      "The squirrels need to get in the same order as their burrows using flex-direction. This CSS property defines the direction items are placed in the container, and accepts the following values:",
    insight:
      "row: Items are placed the same as the text direction. row-reverse: Items are placed opposite to the text direction. column: Items are placed top to bottom. column-reverse: Items are placed bottom to top.",
    answer: "flex-direction: row-reverse;",
  },
  {
    id: 9,
    question:
      "Help the squirells find their column of burrows using flex-direction. This CSS property defines the direction items are placed in the container, and accepts the following values:",
    insight:
      "row: Items are placed the same as the text direction. row-reverse: Items are placed opposite to the text direction. column: Items are placed top to bottom. column-reverse: Items are placed bottom to top.",
    answer: "flex-direction: column;",
  },
  {
    id: 10,
    question:
      "Help the squirrels get to their own burrows. Although they seem close, it will take both flex-direction and justify-content to get them there.",
    insight:
      "Notice that when you set the direction to a reversed row or column, start and end are also reversed.",
    answer: "flex-direction: column; justify-content: flex-end;",
  },
  {
    id: 11,
    question:
      "Help the squirrels find their burrows using flex-direction and justify-content.",
    insight:
      "Notice that when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal",
    answer: "flex-direction: column; justify-content: flex-end;",
  },
  {
    id: 12,
    question:
      "Help the squirrels find their burrows using flex-direction and justify-content.",
    insight: "",
    answer: "flex-direction: column; justify-content: flex-end;",
  },
  {
    id: 13,
    question:
      "Help the squirrels find their burrows using flex-direction, align-items and justify-content.",
    insight: "",
    answer:
      "flex-direction: row-reverse; justify-content: center; align-items: flex-end;",
  },
  {
    id: 14,
    question:
      "Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the order property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-3,-2, -1, 0, 1, 2,3).",
    insight:
      "Use the order property to reorder the squirrels according to their burrows in the order of red, blue, yellow.",
    answer: "order: 1;",
  },
  {
    id: 15,
    question: "Use the order property to send the red red squirrel to red log.",
    insight:
      "Use the order property to send the squirrel to the burrows in the order of yellow, blue, red and green.",
    answer: "order: -1;",
  },
  {
    id: 16,
    question:
      "Another property you can apply to individual items is align-self. This property accepts the same values as align-items and its value for the specific item.",
    insight:
      "Use the align-self property to send the brown and blue squirrel to his burrow.",
    answer: "align-self: flex-end;",
  },
  {
    id: 17,
    question:
      "Combine order with align-self to help the squirrels to their destinations.",
    insight: "",
    answer: "order: 2; align-self: flex-end;",
  },
  {
    id: 18,
    question:
      "Oh no! The squirrels are all squeezed onto a single row of burrows. Spread them out using the flex-wrap property, which accepts the following values:",
    insight:
      "  nowrap: Every item is fit to a single line. wrap: Items wrap around to additional lines. wrap-reverse: Items wrap around to additional lines in reverse. For example, flex-wrap:  will wrap the elements to a new row",
    answer: "flex-wrap: wrap;",
  },
  {
    id: 19,
    question:
      "Help this army of squirrels form three orderly columns using a combination of flex-direction and flex-wrap.",
    insight: "",
    answer: "flex-direction: column; flex-wrap: wrap;",
  },
  {
    id: 20,
    question:
      "The two properties flex-direction and flex-wrap are used so often together that the shorthand property flex-flow was created to combine them. This shorthand property accepts the value of the two properties separated by a space.",
    insight:
      "For example, you can use flex-flow: row wrap to set rows and wrap them.",
    answer: "flex-flow: column wrap;",
  },
  {
    id: 21,
    question:
      "The squirrels are spread all over the forest, but the burrows are bunched at the top. You can use align-content to set how multiple lines are spaced apart from each other. This property takes the following values:",
    insight:
      "flex-start: Lines are packed at the top of the container. flex-end: Lines are packed at the bottom of the container. center: Lines are packed at the vertical center of the container. space-between: Lines display with equal spacing between them. space-around: Lines display with equal spacing around them. stretch: Lines are stretched to fit the container.  align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.",
    answer: "align-content: flex-start;",
  },
  {
    id: 22,
    question:
      "Now the current has bunched the lilypads at the bottom. Use align-content to guide the frogs there.",
    insight: "",
    answer: "align-content: flex-end;",
  },
  {
    id: 23,
    question:
      "The squirrels have had a party, but it is time to go home. Use a flex-direction to get them to their burrows.",
    insight: "",
    answer: "flex-direction: column-reverse;",
  },
  {
    id: 24,
    question:
      "THIS IS THE END!! Bring the squirrels home one last time by using the CSS properties you've learned:",
    insight:
      " justify-content, align-items, flex-direction, order, align-self, flex-wrap, flex-flow, align-content",
    answer:
      "flex-flow: column-reverse wrap-reverse; justify-content: center; align-content: space-between;",
  },
];
