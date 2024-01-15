const h1=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"hello there"),React.createElement("h1",{id:"heading"},"hello there")])
,React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"hello there"),React.createElement("h1",{id:"heading"},"hello there")])]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);
