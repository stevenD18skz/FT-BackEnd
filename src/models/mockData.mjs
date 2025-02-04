// src/models/mockData.js
export const transactions = [
  { id: 1, description: "Comida", amount: -20, date: "2023-10-01" },
  { id: 2, description: "Salario", amount: 1000, date: "2023-10-05" },
  { id: 3, description: "Transporte", amount: -10, date: "2023-10-10" },
];

export const planningGoals = [
  {
    id: 1,
    title: "Buy a car",
    current: 25000,
    target: 47000,
    status: "active", // Agregado
    priority: "high", // Agregado
    createdAt: "2024-03-10T10:00:00Z", // Agregado
    updatedAt: "2024-03-10T10:00:00Z", // Agregado
    dueDate: "Dec 2025",
    description: "Saving to buy a new car for personal use.", // Agregado
    linkGoal: "https://www.ford.com.co/performance/mustang/",
    milestones: [
      // Agregado
      { title: "Research car models", completed: true },
      { title: "Save 50% of target amount", completed: false },
      { title: "Get insurance quotes", completed: false },
    ],
  },
  {
    id: 2,
    title: "Motorola Edge 50 Fusion",
    current: 15000,
    target: 50000,
    status: "active", // Agregado
    priority: "medium", // Agregado
    createdAt: "2024-03-10T10:00:00Z", // Agregado
    updatedAt: "2024-03-10T10:00:00Z", // Agregado
    dueDate: "Dec 2025",
    description: "Saving to purchase the latest Motorola smartphone.", // Agregado
    linkGoal:
      "https://www.ktronix.com/celular-motorola-edge-50-fusion-256gb-verde/p/840023261879?fuente=google&medio=cpc&campaign=KT_COL_MAX_PEF_CPC_AON_CEL_TLP_Celulares_PAC&keyword=&gad_source=1&gclid=Cj0KCQiAst67BhCEARIsAKKdWOl_tbaoz1uxTmnCwQOqRzED3OVtfCmI-j-uPaY7mTysDpspkrGVEh8aAvr7EALw_wcB",
    milestones: [
      // Agregado
      { title: "Research phone models", completed: true },
      { title: "Save 30% of target amount", completed: false },
      { title: "Compare prices from different stores", completed: false },
    ],
  },
  {
    id: 3,
    title: "Trip to Japan",
    current: 10000,
    target: 20000,
    status: "active", // Agregado
    priority: "medium", // Agregado
    createdAt: "2024-03-10T10:00:00Z", // Agregado
    updatedAt: "2024-03-10T10:00:00Z", // Agregado
    dueDate: "Jun 2026",
    description:
      "Saving for a dream trip to Japan to explore its culture and landmarks.", // Agregado
    linkGoal: "https://www.japan.travel/en/",
    milestones: [
      // Agregado
      { title: "Research travel destinations", completed: true },
      { title: "Save 50% of target amount", completed: false },
      { title: "Book flights and accommodations", completed: false },
    ],
  },
  {
    id: 4,
    title: "MacBook Pro M2",
    current: 20000,
    target: 60000,
    status: "active", // Agregado
    priority: "high", // Agregado
    createdAt: "2024-03-10T10:00:00Z", // Agregado
    updatedAt: "2024-03-10T10:00:00Z", // Agregado
    dueDate: "Dec 2026",
    description:
      "Saving to buy a new MacBook Pro for work and personal projects.", // Agregado
    linkGoal: "https://www.apple.com/macbook-pro-14-and-16/",
    milestones: [
      // Agregado
      { title: "Research MacBook models", completed: true },
      { title: "Save 30% of target amount", completed: false },
      { title: "Compare prices and configurations", completed: false },
    ],
  },
  {
    id: 5,
    title: "Buy LED lights",
    current: 1500,
    target: 1500,
    status: "completed", // Agregado
    priority: "medium", // Agregado
    createdAt: "2025-01-27T10:00:00Z", // Agregado
    updatedAt: "2025-01-27T10:00:00Z", // Agregado
    dueDate: "Jun 2025",
    description: "Saving to purchase LED lights for home decoration.", // Agregado
    linkGoal: "https://www.philips.com/c-m-li/led-lights",
    milestones: [
      // Agregado
      { title: "Measure the areas for installation", completed: true },
      { title: "Save 50% of target amount", completed: false },
      { title: "Research color and style options", completed: false },
    ],
  },
  {
    id: 6,
    title: "Charity Fundraiser",
    current: 5000,
    target: 10000,
    status: "active", // Agregado
    priority: "high", // Agregado
    createdAt: "2024-03-10T10:00:00Z", // Agregado
    updatedAt: "2024-03-10T10:00:00Z", // Agregado
    dueDate: "Nov 2025",
    description: "Saving to organize a charity fundraiser for a good cause.", // Agregado
    linkGoal: "https://www.globalgiving.org/",
    milestones: [
      // Agregado
      { title: "Identify charity organization", completed: true },
      { title: "Reach 50% of fundraising goal", completed: false },
      { title: "Organize fundraising event", completed: false },
    ],
  },
];
