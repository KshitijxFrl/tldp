import { featurebullets } from "../types";

export const navItems = [
  { label: "Commands", href: "#commands" },
  { label: "Version", href: "#download" },
  { label: "About", href: "#about" },
];

export const checklistItems: featurebullets[] = [
  {
    title: "Natural Language Communication",
    description:
      "Communicate with Tochi using natural language and accelerate your application development.",
  },
  {
    title: "Flexible Model Selection",
    description: "Choose the AI model that best fits your application's needs.",
  },
  {
    title: "Automated Query Execution",
    description:
      "Automatically translate natural language into SQL queries and execute them directly on the database.",
  },
  {
    title: "Query Caching",
    description: "Optimize performance by caching frequently used queries. ",
  },
  {
    title: "Cross-Language Support",
    description:
      "Supports integration with Python, C++, and other languages through API requests.",
  },
];

export const commandList = [
  {
    command: "> tochi init",
    description:
      " Initializes Tochi in the current directory with default settings, creating the necessary configuration files for database and AI model integration [for now tochi needs a qroq ai key for ai integration ].",
  },
  {
    command: '> tochi listen "query"',
    description:
      "Processes the provided natural language query by utilizing tokens from the selected AI model. The query is interpreted, converted into an SQL command, and executed to modify or retrieve data from the database.",
  },
  {
    command: "> tochi runserver",
    description:
      "Starts Tochi's query processing server, enabling communication via POST requests. It use the tochi id and port set during initializing a new tochi project. Tochi takes control of the CRUD layer of your application, handling database operations seamlessly through natural language queries.",
  },
  {
    command: "> tochi update",
    description: "Update tochi settings of a project.",
  },
];
