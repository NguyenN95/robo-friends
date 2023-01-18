import React from "react";
import Card from "./Card";

interface ICardListProps {
  robots: Robot[];
}

const CardList: React.FC<ICardListProps> = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
        );
      })}
    </div>
  );
};

export default CardList;
