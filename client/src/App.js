import React from "react";
import DaycareContainer from "./components/DaycareContainer";
import Modal from 'react-modal';

// Bind modal to your appElement
Modal.setAppElement('#root')

const App = () => <DaycareContainer />;

export default App;