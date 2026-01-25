import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from 'Views/Main/Header';
import Footer from 'Views/Main/Footer';
import Home from 'Views/Main/Home';
import About from 'Views/Main/About';
import Magikus from 'Views/Library/Magikus';
import LibraryInConstruction from "Views/Library/InConstruction";

import LibraryMenu from "Views/Library/Library/Menu.json";
import LibraryMain from "Views/Library/Library/MainMagikus.js";
import LibraryInstallation from "Views/Library/Library/Installation.js";
import LibraryChangelog from "Views/Library/Library/Changelog.js";
import LibraryLicense from "Views/Library/Library/License.js";

import LibraryDecorators from "Views/Library/Decorators.js";
import LibraryDecoratorsConditional from "Views/Library/Decorators/Conditional.js";
import LibraryDecoratorsLine from "Views/Library/Decorators/Line.js";
import LibraryDecoratorsTitle from "Views/Library/Decorators/Title.js";
import LibraryDecoratorsMessage from "Views/Library/Decorators/Message.js";
import LibraryDecoratorsShowHide from "Views/Library/Decorators/ShowHide.js";
import LibraryDecoratorsBlock from "Views/Library/Decorators/Block.js";
import LibraryDecoratorsToggle from "Views/Library/Decorators/Toggle.js";
import LibraryDecoratorsCollapse from "Views/Library/Decorators/Collapse.js";
import LibraryDecoratorsBar from "Views/Library/Decorators/Bar.js";
import LibraryDecoratorsDebutton from "Views/Library/Decorators/Debutton.js";
import LibraryDecoratorsCreate from "Views/Library/Decorators/Create.js";
import LibraryDecoratorsKeycode from "Views/Library/Decorators/Keycode.js";

import LibraryUtilities from "Views/Library/Utilities.js";
import LibraryUtilitiesCreate from "Views/Library/Utilities/Create.js";
import LibraryUtilitiesAdapt from "Views/Library/Utilities/Adapt.js";
import LibraryUtilitiesControls from "Views/Library/Utilities/Controls.js";
import LibraryUtilitiesEasing from "Views/Library/Utilities/Easing.js";
import LibraryUtilitiesLooping from "Views/Library/Utilities/Looping.js";
import LibraryUtilitiesDatafile from "Views/Library/Utilities/Datafile.js";
import LibraryUtilitiesRandop from "Views/Library/Utilities/Randop.js";
import LibraryUtilitiesMathop from "Views/Library/Utilities/Mathop.js";
import LibraryUtilitiesTextop from "Views/Library/Utilities/Textop.js";
import LibraryUtilitiesListop from "Views/Library/Utilities/Listop.js";

import LibraryStructures from "Views/Library/Structures.js";
import LibraryStructuresDebase from "Views/Library/Structures/Debase.js";
import LibraryStructuresToggles from "Views/Library/Structures/Toggles.js";
import LibraryStructuresFlexors from "Views/Library/Structures/Flexors.js";
import LibraryStructuresSwitches from "Views/Library/Structures/Switches.js";
import LibraryStructuresTier from "Views/Library/Structures/Tier.js";
import LibraryStructuresClist from "Views/Library/Structures/Clist.js";
import LibraryStructuresInteref from "Views/Library/Structures/Interef.js";
import LibraryStructuresLabel from "Views/Library/Structures/Label.js";
import LibraryStructuresTimescale from "Views/Library/Structures/Timescale.js";
import LibraryStructuresSOAP from "Views/Library/Structures/SOAP.js";
import LibraryStructuresCycle from "Views/Library/Structures/Cycle.js";
import LibraryStructuresState from "Views/Library/Structures/State.js";
import LibraryStructuresTween from "Views/Library/Structures/Tween.js";

import LibrarySystems from "Views/Library/Systems.js";
import LibrarySystemsPool from "Views/Library/Systems/Pool.js";
import LibrarySystemsAudio from "Views/Library/Systems/Audio.js";
import LibrarySystemsAnimation from "Views/Library/Systems/Animation.js";
import LibrarySystemsTweak from "Views/Library/Systems/Tweak.js";

import LibraryTools from "Views/Library/Tools.js";
import LibraryToolsHierarchyEditor from "Views/Library/Tools/HierarchyEditor.js";
import LibraryToolsCurveEditor from "Views/Library/Tools/CurveEditor.js";
import LibraryToolsReferenceConsole from "Views/Library/Tools/ReferenceConsole.js";
import LibraryToolsScriptManager from "Views/Library/Tools/ScriptManager.js";

import LibraryStructuresGrids from "Views/Library/Structures/Grids.js";
import LibrarySystemsDialog from "Views/Library/Systems/Dialog.js";
import LibrarySystemsNavigation from "Views/Library/Systems/Navigation.js";

export default function App() {
  
  return (
    <div className='app'>
      <div className="star-container">
        <div className="star"></div>
      </div>
      <div className="mountain-container">
          <div className="mountain1"></div>
          <div className="mountain2"></div>
      </div>

      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          
          <Route exact path="/magikus" element={<Magikus content={<LibraryMain />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/installation" element={<Magikus content={<LibraryInstallation />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/changelog" element={<Magikus content={<LibraryChangelog />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/License" element={<Magikus content={<LibraryLicense />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/inConstruction" element={<Magikus content={<LibraryInConstruction />} menu={LibraryMenu} />}></Route>

          <Route exact path="/magikus/utilities" element={<Magikus content={<LibraryUtilities />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/utilities/create" element={<Magikus content={<LibraryUtilitiesCreate />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/utilities/adapt" element={<Magikus content={<LibraryUtilitiesAdapt />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/utilities/mathop" element={<Magikus content={<LibraryUtilitiesMathop />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/utilities/textop" element={<Magikus content={<LibraryUtilitiesTextop />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/utilities/listop" element={<Magikus content={<LibraryUtilitiesListop />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/utilities/randop" element={<Magikus content={<LibraryUtilitiesRandop />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/utilities/looping" element={<Magikus content={<LibraryUtilitiesLooping />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/utilities/easing" element={<Magikus content={<LibraryUtilitiesEasing />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/utilities/datafile" element={<Magikus content={<LibraryUtilitiesDatafile />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/utilities/controls" element={<Magikus content={<LibraryUtilitiesControls />} menu={LibraryMenu} />}></Route>

          <Route exact path="/magikus/decorators" element={<Magikus content={<LibraryDecorators />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/debutton" element={<Magikus content={<LibraryDecoratorsDebutton />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/toggle" element={<Magikus content={<LibraryDecoratorsToggle />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/conditional" element={<Magikus content={<LibraryDecoratorsConditional />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/showHide" element={<Magikus content={<LibraryDecoratorsShowHide />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/block" element={<Magikus content={<LibraryDecoratorsBlock />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/create" element={<Magikus content={<LibraryDecoratorsCreate />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/collapse" element={<Magikus content={<LibraryDecoratorsCollapse />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/keycode" element={<Magikus content={<LibraryDecoratorsKeycode />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/line" element={<Magikus content={<LibraryDecoratorsLine />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/message" element={<Magikus content={<LibraryDecoratorsMessage />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/title" element={<Magikus content={<LibraryDecoratorsTitle />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/decorators/bar" element={<Magikus content={<LibraryDecoratorsBar />} menu={LibraryMenu} />}></Route>

          <Route exact path="/magikus/structures" element={<Magikus content={<LibraryStructures />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/debase" element={<Magikus content={<LibraryStructuresDebase />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/toggles" element={<Magikus content={<LibraryStructuresToggles />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/flexors" element={<Magikus content={<LibraryStructuresFlexors />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/switches" element={<Magikus content={<LibraryStructuresSwitches />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/tier" element={<Magikus content={<LibraryStructuresTier />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/clist" element={<Magikus content={<LibraryStructuresClist />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/interef" element={<Magikus content={<LibraryStructuresInteref />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/label" element={<Magikus content={<LibraryStructuresLabel />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/timescale" element={<Magikus content={<LibraryStructuresTimescale />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/SOAP" element={<Magikus content={<LibraryStructuresSOAP />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/cycle" element={<Magikus content={<LibraryStructuresCycle />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/state" element={<Magikus content={<LibraryStructuresState />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/structures/tween" element={<Magikus content={<LibraryStructuresTween />} menu={LibraryMenu} />}></Route>
          
          <Route exact path="/magikus/systems" element={<Magikus content={<LibrarySystems />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/systems/pool" element={<Magikus content={<LibrarySystemsPool />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/systems/audio" element={<Magikus content={<LibrarySystemsAudio />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/systems/animation" element={<Magikus content={<LibrarySystemsAnimation />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/systems/tweak" element={<Magikus content={<LibrarySystemsTweak />} menu={LibraryMenu} />}></Route>          
          
          <Route exact path="/magikus/tools" element={<Magikus content={<LibraryTools />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/tools/hierarchyEditor" element={<Magikus content={<LibraryToolsHierarchyEditor />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/tools/curveEditor" element={<Magikus content={<LibraryToolsCurveEditor />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/tools/referenceConsole" element={<Magikus content={<LibraryToolsReferenceConsole />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/tools/scriptManager" element={<Magikus content={<LibraryToolsScriptManager />} menu={LibraryMenu} />}></Route>

{/* 

          <Route exact path="/magikus/structures/grids" element={<Magikus content={<LibraryStructuresGrids />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/systems/dialog" element={<Magikus content={<LibrarySystemsDialog />} menu={LibraryMenu} />}></Route>
          <Route exact path="/magikus/systems/navigation" element={<Magikus content={<LibrarySystemsNavigation />} menu={LibraryMenu} />}></Route>
*/}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}