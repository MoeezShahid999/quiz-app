interface indChoice {
  name: string;
  status: boolean;
}
interface questions {
  question: string;
  choices: indChoice[];
}

const questions: questions[] = [
  {
    question: "A man presses more weight on earth at :",
    choices: [
      { name: "Sitting position", status: false },
      { name: "Standing Position", status: true },
      { name: "Lying Position", status: false },
      { name: "None of these", status: false },
    ],
  },
  {
    question:
      "A piece of ice is dropped in a vesel containing kerosene. When ice melts, the level of kerosene will",
    choices: [
      { name: "Rise", status: false },
      { name: "Remain Same", status: false },
      { name: "Fall", status: true },
      { name: "None of these", status: false },
    ],
  },
  {
    question: "An artificial Satellite revolves round the Earth in circular orbit, which quantity remains constant?",
    choices: [
      { name: "Angular Momentum", status: true },
      { name: "Linear Velocity", status: false },
      { name: "Angular Displacement", status: false },
      { name: "None of these", status: false },
    ],
  },
  {
    question: "If electrical conductivity increases with the increase of temperature of a substance, then it is a:",
    choices: [
      { name: "Conductor", status: false },
      { name: "Insulator", status: false },
      { name: "Carborator", status: false },
      { name: "Semi Conductor", status: true },
    ],
  },
  {
    question: "Product of force and velocity is called:",
    choices: [
      { name: "Work", status: false },
      { name: "Energy", status: false },
      { name: "Power", status: true },
      { name: "Momentum", status: false },
    ],
  },
  {
    question: "With the increase of pressure, the boiling point of any substance:",
    choices: [
      { name: "Increases", status: true },
      { name: "Decreases", status: false },
      { name: "Remain Same", status: false },
      { name: "None of these", status: false },
    ],
  },
  {
    question: "Elecronegativity is the measure of:",
    choices: [
      { name: "Non-Metallic Character", status: true },
      { name: "Metallic Character", status: false },
      { name: "Basic Character", status: false },
      { name: "None of these", status: false },
    ],
  },
  {
    question: "The rotational effect of a force on a body about an axis of rotation is described in terms of the:",
    choices: [
      { name: "Center of gravtiy", status: false },
      { name: "Centripetal force", status: false },
      { name: "Centrifugal force", status: false },
      { name: "Moment of force", status: true },
    ],
  },
  {
    question: "If no external force acts on a system of bodies, the total linear momentum of the system of bodies remains constant. Which law states that ?",
    choices: [
      { name: "Newton's first law", status: false },
      { name: "Newton's second law", status: false },
      { name: "Newton's third law", status: false },
      { name: "Principle of conservation of linear momentum", status: true },
    ],
  },
  {
    question: "Which law is also called the law of inertia ?:",
    choices: [
      { name: "Newton's first law", status: true },
      { name: "Newton's second law", status: false },
      { name: "Newton's third law", status: false },
      { name: "All of these", status: false },
    ],
  },

];

export default questions;
