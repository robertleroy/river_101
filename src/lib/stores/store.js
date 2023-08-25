import { writable } from 'svelte/store';

export const routes = writable([
  { name: "River Basics", path: "/", children: [
    { name: "101", path: "#x101" },
    { name: "Swimming", path: "#swimming" },
    { name: "Boating", path: "#boating" },
    { name: "Highside", path: "#highside" },
    { name: "What to Carry", path: "#kit" },
    { name: "Miscellaneous", path: "#misc" },
  ]},
  { name: "River Dynamics", path: "/dynamics", children: [
    { name: "Features", path: "#features" },
    { name: "Hazards: Strainers", path: "#strainers" },
    { name: "Hazards: Low Head Dams", path: "#low_head" },
    { name: "River Flows", path: "#flows" },
    { name: "Force of Water", path: "#force" },
    { name: "", path: "#" },
    { name: "", path: "#" },
  ]},
  { name: "First Week", path: "/week_1", children: [
    { name: "First Miles", path: "#week_1" },
    { name: "Begginer Runs", path: "#class2" },
    { name: "More on reading current", path: "#reading_currents" },
  ]},
  { name: "Links", path: "/links" },
  { name: "About", path: "/about" },
]);

export const sidebarOpen = writable(true);

