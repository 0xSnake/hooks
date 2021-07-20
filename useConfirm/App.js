import React from "react";

const useConfirm = (message, onConfirm, onCancel) => {
  // if(!onConfirm && typeof onConfirm === 'function') {
  //   return;
  // }
  // if(onCancel && typeof onCancel === 'function') {
  //   return;
  // }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleted = () => console.log("delete");
  const about = () => console.log("about");
  const confirmDelete = useConfirm("Are you sure?", deleted, about);
  return <button onClick={confirmDelete}>Delete</button>;
};

export default App;