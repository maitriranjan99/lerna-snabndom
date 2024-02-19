import { h, eventListenersModule, init } from "snabbdom";

const patch = init([eventListenersModule]);
export default function Counter() {
  let count = 0;

  function handleClick() {
    count++;
    updateState();
    console.log("State changed:", count);
  }
  function view() {
    return h("div", [
      h("h1", `Count: ${count}`),
      h("button", { on: { click: handleClick } }, "Add"),
    ]);
  }
  let vnode = view();

  function updateState() {
    const newVnode = view();
    patch(vnode, newVnode);
    vnode = newVnode;
  }
  return vnode;
}

const root = document.getElementById("root");
patch(root, Counter());
