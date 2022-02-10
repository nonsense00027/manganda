import React from "react";
import firebase from "../assets/firebase.png";
import reactjs from "../assets/reactjs.png";

function TechStackPage() {
  return (
    <div className="mt-6">
      <h2 className="text-center font-semibold text-3xl mb-4">Tech Stack</h2>
      <div className="flex items-center gap-3 justify-center">
        <div className="flex flex-col gap-2 items-center">
          <img
            className="h-20 object-contain"
            src={firebase}
            width={130}
            height={170}
          />
          <p>Firebase (Database)</p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <img
            className="h-20 object-contain"
            src={reactjs}
            width={150}
            height={150}
          />
          <p>React JavaScript (Programming Language)</p>
        </div>
      </div>
    </div>
  );
}

export default TechStackPage;
