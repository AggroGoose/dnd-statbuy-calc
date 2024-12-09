import React, { useEffect, useState } from "react";

export default function Stat({
  statName,
  statValue,
  setStat,
  pointValue,
  setPoints,
}: {
  statName: string;
  statValue: number;
  setStat: React.Dispatch<React.SetStateAction<number>>;
  pointValue: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isMin, setIsMin] = useState(true);
  const [isMax, setIsMax] = useState(false);
  const [enoughPoints, setEnoughPoints] = useState(true);
  const [pointCost, setPointCost] = useState(1);
  const [modifier, setModifier] = useState(-1);

  useEffect(() => {
    const calcMod = Math.floor((statValue - 10) / 2);
    setModifier(calcMod);
    if (statValue === 8) {
      setIsMin(true);
      setIsMax(false);
      setPointCost(1);
    }
    if (statValue > 8 && statValue < 18) {
      setIsMin(false);
      setIsMax(false);
      if (
        statValue === 9 ||
        statValue === 10 ||
        statValue === 11 ||
        statValue === 12
      )
        setPointCost(1);
      if (statValue === 13 || statValue === 14 || statValue === 15)
        setPointCost(2);
      if (statValue === 16 || statValue === 17) setPointCost(3);
    }
    if (statValue === 18) {
      setIsMin(false);
      setIsMax(true);
    }
  }, [statValue]);

  useEffect(() => {
    if (pointCost <= pointValue) {
      setEnoughPoints(true);
    } else {
      setEnoughPoints(false);
    }
  }, [pointValue, pointCost]);

  function handleInc() {
    if (isMax) return;
    if (!enoughPoints) return;
    setStat(statValue + 1);
    setPoints(pointValue - pointCost);
  }

  function handleDec() {
    if (isMin) return;

    let pointReturn = pointCost;
    if (statValue === 13 || statValue === 16) pointReturn = pointCost - 1;
    setStat(statValue - 1);
    setPoints(pointValue + pointReturn);
  }

  return (
    <section className="flex gap-4">
      <button disabled={isMin} onClick={handleDec}>
        -
      </button>
      <p>{statName + ": "}</p>
      <p>{`${statValue} (${modifier >= 0 ? "+" : ""}${modifier})`}</p>
      <button disabled={isMax} onClick={handleInc}>
        +
      </button>
    </section>
  );
}
