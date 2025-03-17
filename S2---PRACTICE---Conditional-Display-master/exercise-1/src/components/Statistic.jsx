import React from "react";

function Statistics({ courseResults }) {
  if (courseResults.length === 0) return null; // Prevent errors if empty

  const scores = courseResults.map(student => student.score);
  const minScore = Math.min(...scores);
  const maxScore = Math.max(...scores);
  const avgScore = (scores.reduce((acc, score) => acc + score, 0) / scores.length).toFixed(2);

  return (
    <div className="stats">
      <p><strong>Min Score:</strong> {minScore}</p>
      <p><strong>Max Score:</strong> {maxScore}</p>
      <p><strong>Avg Score:</strong> {avgScore}</p>
    </div>
  );
}

export default Statistics;
