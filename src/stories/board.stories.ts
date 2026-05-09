import type { Meta, StoryObj } from "@storybook/react";

import Board from "../components/board/board.component";

const meta: Meta<typeof Board> = {
  title: "Components/Board",
  component: Board,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    boardData: {
      control: "text",
      description: 'Format: "x,y DIRECTION"',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Board>;

export const Playground: Story = {
  args: {
    boardData: "2,2 NORTH",
  },
};

export const FacingNorth: Story = {
  args: {
    boardData: "2,2 NORTH",
  },
};

export const FacingSouth: Story = {
  args: {
    boardData: "2,2 SOUTH",
  },
};

export const FacingEast: Story = {
  args: {
    boardData: "2,2 EAST",
  },
};

export const FacingWest: Story = {
  args: {
    boardData: "2,2 WEST",
  },
};

export const CornerTopLeft: Story = {
  args: {
    boardData: "0,0 NORTH",
  },
};

export const CornerBottomRight: Story = {
  args: {
    boardData: "4,4 SOUTH",
  },
};

export const CenterPosition: Story = {
  args: {
    boardData: "2,2 EAST",
  },
};

export const InvalidInput: Story = {
  args: {
    boardData: "INVALID",
  },
};