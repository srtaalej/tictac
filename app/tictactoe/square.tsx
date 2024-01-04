import React from "react";
type Props = {
  index: number;
  onClick(event: any): void;
  player?: string;
};

function Square({ index, onClick, player }: Props) {
  const textColor = player === "X" ? "text-yellow-200" : "text-fuchsia-300";

  return (
    <div
      data-cell-index={index}
      className={`h-36 md:h-40 border-solid border-4 border-slate-200 font-display text-5xl md:text-7xl text-center flex justify-center items-center cursor-pointer`}
      {...{ onClick }}
    >
      <span
        data-cell-index={index}
        className={`transform transition-all duration-150 ease-out ${textColor}`}
      >
        {player}
      </span>
    </div>
  );
}

export default Square;
