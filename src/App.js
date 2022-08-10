import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LibraryMenu from "./Data/LibraryMenu.json";
import UtilitiesModifiersMenu from "./Data/UtilitiesModifiersMenu.json";

import Header from 'Views/Main/Header';
import Footer from 'Views/Main/Footer';
import Home from 'Views/Main/Home';
import Library from 'Views/Library/Library';
import LibraryInConstruction from "Views/Library/InConstruction";

import LibraryGettingStarted from "Views/Library/Library/GettingStarted";
import LibraryChangelog from "Views/Library/Library/Changelog";
import LibraryLicense from "Views/Library/Library/License";
import LibraryUtilities from "Views/Library/Utilities/Utilities";
import LibraryStructures from "Views/Library/Structures/Structures";
import LibraryTools from "Views/Library/Tools/Tools";

import LibraryUtilitiesModifiers from "Views/Library/Utilities/Modifiers/Introduction";
import LibraryUtilitiesModifiersValueMode from "Views/Library/Utilities/Modifiers/Modes";
import LibraryUtilitiesModifiersMutableValues from "Views/Library/Utilities/Modifiers/MutuableValues";
import LibraryUtilitiesModifiersOperationsMath from "Views/Library/Utilities/Modifiers/OperationsMath";
import LibraryUtilitiesModifiersOperationsIntrinsic from "Views/Library/Utilities/Modifiers/OperationsIntrinsic";
import LibraryUtilitiesModifiersOperationsClamp from "Views/Library/Utilities/Modifiers/OperationsClamp";
import LibraryUtilitiesModifiersOperationsWrap from "Views/Library/Utilities/Modifiers/OperationsWrap";
import LibraryUtilitiesModifiersTargetComponents from "Views/Library/Utilities/Modifiers/TargetComponents";
import LibraryUtilitiesModifiersInputAndOutputTypes from "Views/Library/Utilities/Modifiers/InputAndOutputTypes";

export default function App() {
  return (
    <div className='app bg-dark-4'>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/library" element={<Navigate to="/library/gettingStarted" />}></Route>
          <Route exact path="/library/inConstruction" element={<Library content={<LibraryInConstruction />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/gettingStarted" element={<Library content={<LibraryGettingStarted />} menu={LibraryMenu} submenu={LibraryMenu[0].items} />}></Route>
          <Route exact path="/library/changelog" element={<Library content={<LibraryChangelog />} menu={LibraryMenu} submenu={LibraryMenu[0].items} />}></Route>
          <Route exact path="/library/License" element={<Library content={<LibraryLicense />} menu={LibraryMenu} submenu={LibraryMenu[0].items} />}></Route>
          
          <Route exact path="/library/utilities" element={<Library content={<LibraryUtilities />} menu={LibraryMenu} submenu={LibraryMenu[1].items} />}></Route>
          <Route exact path="/library/structures" element={<Library content={<LibraryStructures />} menu={LibraryMenu} submenu={LibraryMenu[2].items} />}></Route>
          <Route exact path="/library/tools" element={<Library content={<LibraryTools />} menu={LibraryMenu} submenu={LibraryMenu[3].items} />}></Route>

          <Route exact path="/library/utilities/modifiers" element={<Library content={<LibraryUtilitiesModifiers />} menu={LibraryMenu} submenu={UtilitiesModifiersMenu} />}></Route>
          <Route exact path="/library/utilities/modifiers/modes" element={<Library content={<LibraryUtilitiesModifiersValueMode />} menu={LibraryMenu} submenu={UtilitiesModifiersMenu} />}></Route>
          <Route exact path="/library/utilities/modifiers/mutableValues" element={<Library content={<LibraryUtilitiesModifiersMutableValues />} menu={LibraryMenu} submenu={UtilitiesModifiersMenu} />}></Route>
          <Route exact path="/library/utilities/modifiers/operationsMath" element={<Library content={<LibraryUtilitiesModifiersOperationsMath />} menu={LibraryMenu} submenu={UtilitiesModifiersMenu} />}></Route>
          <Route exact path="/library/utilities/modifiers/operationsIntrinsic" element={<Library content={<LibraryUtilitiesModifiersOperationsIntrinsic />} menu={LibraryMenu} submenu={UtilitiesModifiersMenu} />}></Route>
          <Route exact path="/library/utilities/modifiers/operationsClamp" element={<Library content={<LibraryUtilitiesModifiersOperationsClamp />} menu={LibraryMenu} submenu={UtilitiesModifiersMenu} />}></Route>
          <Route exact path="/library/utilities/modifiers/operationsWrap" element={<Library content={<LibraryUtilitiesModifiersOperationsWrap />} menu={LibraryMenu} submenu={UtilitiesModifiersMenu} />}></Route>
          <Route exact path="/library/utilities/modifiers/targetComponents" element={<Library content={<LibraryUtilitiesModifiersTargetComponents />} menu={LibraryMenu} submenu={UtilitiesModifiersMenu} />}></Route>
          <Route exact path="/library/utilities/modifiers/inputAndOutputTypes" element={<Library content={<LibraryUtilitiesModifiersInputAndOutputTypes />} menu={LibraryMenu} submenu={UtilitiesModifiersMenu} />}></Route>
        </Routes>

        <Footer />
        </Router>
    </div>
  );
}