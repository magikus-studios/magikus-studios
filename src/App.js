import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LibraryMenu from "./Data/LibraryMenu.json";

import Header from 'Views/Main/Header';
import Footer from 'Views/Main/Footer';
import Home from 'Views/Main/Home';
import Library from 'Views/Library/Library';

import LibraryIntroduction from "Views/Library/Library/Introduction";
import LibraryMethods from "Views/Library/Library/Methods";
import LibraryStructures from "Views/Library/Library/Structures";
import LibraryTools from "Views/Library/Library/Tools";

import LibraryMethodsModifiersIntroduction from "Views/Library/Methods/Modifiers/Introduction";
import LibraryMethodsModifiersValueMode from "Views/Library/Methods/Modifiers/Modes";
import LibraryMethodsModifiersMutableValues from "Views/Library/Methods/Modifiers/MutuableValues";
import LibraryMethodsModifiersOperationsBasic from "Views/Library/Methods/Modifiers/OperationsBasic";
import LibraryMethodsModifiersOperationsNoInput from "Views/Library/Methods/Modifiers/OperationsNoInput";
import LibraryMethodsModifiersOperationsClamp from "Views/Library/Methods/Modifiers/OperationsClamp";
import LibraryMethodsModifiersOperationsWrap from "Views/Library/Methods/Modifiers/OperationsWrap";
import LibraryMethodsModifiersTargetComponents from "Views/Library/Methods/Modifiers/TargetComponents";
import LibraryMethodsModifiersInputAndOutputTypes from "Views/Library/Methods/Modifiers/InputAndOutputTypes";

export default function App() {
  return (
    <div className='app bg-dark-4'>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/library" element={<Library menu={LibraryMenu} />}></Route>

          <Route exact path="/library/introduction" element={<Library content={<LibraryIntroduction />} menu={LibraryMenu} submenu={LibraryMenu[0].items} />}></Route>
          <Route exact path="/library/methods" element={<Library content={<LibraryMethods />} menu={LibraryMenu} submenu={LibraryMenu[1].items} />}></Route>
          <Route exact path="/library/structures" element={<Library content={<LibraryStructures />} menu={LibraryMenu} submenu={LibraryMenu[2].items} />}></Route>
          <Route exact path="/library/tools" element={<Library content={<LibraryTools />} menu={LibraryMenu} submenu={LibraryMenu[3].items} />}></Route>

          <Route exact path="/library/methods/modifiers/introduction" element={<Library content={<LibraryMethodsModifiersIntroduction />} menu={LibraryMenu} submenu={LibraryMenu[1].items[0].items} />}></Route>
          <Route exact path="/library/methods/modifiers/modes" element={<Library content={<LibraryMethodsModifiersValueMode />} menu={LibraryMenu} submenu={LibraryMenu[1].items[0].items} />}></Route>
          <Route exact path="/library/methods/modifiers/mutableValues" element={<Library content={<LibraryMethodsModifiersMutableValues />} menu={LibraryMenu} submenu={LibraryMenu[1].items[0].items} />}></Route>
          <Route exact path="/library/methods/modifiers/operationsBasic" element={<Library content={<LibraryMethodsModifiersOperationsBasic />} menu={LibraryMenu} submenu={LibraryMenu[1].items[0].items} />}></Route>
          <Route exact path="/library/methods/modifiers/operationsNoInput" element={<Library content={<LibraryMethodsModifiersOperationsNoInput />} menu={LibraryMenu} submenu={LibraryMenu[1].items[0].items} />}></Route>
          <Route exact path="/library/methods/modifiers/operationsClamp" element={<Library content={<LibraryMethodsModifiersOperationsClamp />} menu={LibraryMenu} submenu={LibraryMenu[1].items[0].items} />}></Route>
          <Route exact path="/library/methods/modifiers/operationsWrap" element={<Library content={<LibraryMethodsModifiersOperationsWrap />} menu={LibraryMenu} submenu={LibraryMenu[1].items[0].items} />}></Route>
          <Route exact path="/library/methods/modifiers/targetComponents" element={<Library content={<LibraryMethodsModifiersTargetComponents />} menu={LibraryMenu} submenu={LibraryMenu[1].items[0].items} />}></Route>
          <Route exact path="/library/methods/modifiers/inputAndOutputTypes" element={<Library content={<LibraryMethodsModifiersInputAndOutputTypes />} menu={LibraryMenu} submenu={LibraryMenu[1].items[0].items} />}></Route>
        </Routes>

        <Footer />
        </Router>
    </div>
  );
}