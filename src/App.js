import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from 'Views/Main/Header';
import Footer from 'Views/Main/Footer';
import Home from 'Views/Main/Home';
import AboutUs from 'Views/Main/AboutUs';
import Library from 'Views/Library/Library';
import LibraryInConstruction from "Views/Library/InConstruction";

import LibraryMenu from "Views/Library/Library/Menu.json";
import LibraryLibrary from "Views/Library/Library/Introduction.js";
import LibraryChangelog from "Views/Library/Library/Changelog.js";
import LibraryLicense from "Views/Library/Library/License.js";

import LibraryDecorators from "Views/Library/Decorators/_Decorators.js";
import LibraryDecoratorsLine from "Views/Library/Decorators/Line.js";
import LibraryDecoratorsTextBox from "Views/Library/Decorators/TextBox.js";
import LibraryDecoratorsTitle from "Views/Library/Decorators/Title.js";
import LibraryDecoratorsToggle from "Views/Library/Decorators/Toggle.js";
import LibraryDecoratorsCollapse from "Views/Library/Decorators/Collapse.js";
import LibraryDecoratorsNonEditable from "Views/Library/Decorators/NonEditable.js";
import LibraryDecoratorsProgressBar from "Views/Library/Decorators/ProgressBar.js";

import LibraryUtilities from "Views/Library/Utilities/_Utilities.js";
import LibraryUtilitiesCreate from "Views/Library/Utilities/Create.js";
import LibraryUtilitiesAdapt from "Views/Library/Utilities/Adapt.js";
import LibraryUtilitiesRandget from "Views/Library/Utilities/Randget.js";
import LibraryUtilitiesLooping from "Views/Library/Utilities/Looping.js";
import LibraryUtilitiesEasing from "Views/Library/Utilities/Easing.js";
import LibraryUtilitiesFiles from "Views/Library/Utilities/Files.js";
import LibraryUtilitiesControl from "Views/Library/Utilities/Control.js";
import LibraryUtilitiesMath from "Views/Library/Utilities/Math.js";
import LibraryUtilitiesText from "Views/Library/Utilities/Text.js";
import LibraryUtilitiesList from "Views/Library/Utilities/List.js";

import LibraryStructures from "Views/Library/Structures/_Structures.js";
import LibraryStructuresGrids from "Views/Library/Structures/Grids.js";
import LibraryStructuresToggles from "Views/Library/Structures/Toggles.js";
import LibraryStructuresVectors from "Views/Library/Structures/Vectors.js";
import LibraryStructuresCouples from "Views/Library/Structures/Couples.js";
import LibraryStructuresRanges from "Views/Library/Structures/Ranges.js";
import LibraryStructuresTier from "Views/Library/Structures/Tier.js";
import LibraryStructuresLabel from "Views/Library/Structures/Label.js";
import LibraryStructuresTimeScale from "Views/Library/Structures/TimeScale.js";
import LibraryStructuresEvents from "Views/Library/Structures/Events.js";
import LibraryStructuresValueAssets from "Views/Library/Structures/ValueAssets.js";
import LibraryStructuresSwitches from "Views/Library/Structures/Switches.js";

import LibraryMachines from "Views/Library/Machines/_Machines.js";
import LibraryMachinesUpdater from "Views/Library/Machines/Updater.js";
import LibraryMachinesCycle from "Views/Library/Machines/Cycle.js";
import LibraryMachinesState from "Views/Library/Machines/State.js";
import LibraryMachinesTween from "Views/Library/Machines/Tween.js";

import LibrarySystems from "Views/Library/Systems/_Systems.js";
import LibrarySystemsAnimationSystem from "Views/Library/Systems/AnimationSystem.js";
import LibrarySystemsTweakSystem from "Views/Library/Systems/TweakSystem.js";
import LibrarySystemsAudioSystem from "Views/Library/Systems/AudioSystem.js";
import LibrarySystemsDialogSystem from "Views/Library/Systems/DialogSystem.js";

import LibraryTools from "Views/Library/Tools/_Tools.js";
import LibraryToolsBaseComponent from "Views/Library/Tools/BaseComponent.js";
import LibraryToolsButtonAttribute from "Views/Library/Tools/ButtonAttribute.js";
import LibraryToolsShowIfAttribute from "Views/Library/Tools/ShowIfAttribute.js";
import LibraryToolsReferenceValueAttribute from "Views/Library/Tools/ReferenceValueAttribute.js";
import LibraryToolsKeyBindingDrawer from "Views/Library/Tools/KeyBindingDrawer.js";
import LibraryToolsHierarchyEditor from "Views/Library/Tools/HierarchyEditor.js";
import LibraryToolsCurveEditor from "Views/Library/Tools/CurveEditor.js";
import LibraryToolsReferenceConsole from "Views/Library/Tools/ReferenceConsole.js";
import LibraryToolsScriptManager from "Views/Library/Tools/ScriptManager.js";

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
          <Route exact path="/aboutUs" element={<AboutUs/>}></Route>
          
          <Route exact path="/library" element={<Library content={<LibraryLibrary />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/changelog" element={<Library content={<LibraryChangelog />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/License" element={<Library content={<LibraryLicense />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/inConstruction" element={<Library content={<LibraryInConstruction />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/decorators" element={<Library content={<LibraryDecorators />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/line" element={<Library content={<LibraryDecoratorsLine />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/textBox" element={<Library content={<LibraryDecoratorsTextBox />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/title" element={<Library content={<LibraryDecoratorsTitle />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/toggle" element={<Library content={<LibraryDecoratorsToggle />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/collapse" element={<Library content={<LibraryDecoratorsCollapse />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/nonEditable" element={<Library content={<LibraryDecoratorsNonEditable />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/progressBar" element={<Library content={<LibraryDecoratorsProgressBar />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/utilities" element={<Library content={<LibraryUtilities />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/create" element={<Library content={<LibraryUtilitiesCreate />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/adapt" element={<Library content={<LibraryUtilitiesAdapt />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/randget" element={<Library content={<LibraryUtilitiesRandget />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/looping" element={<Library content={<LibraryUtilitiesLooping />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/easing" element={<Library content={<LibraryUtilitiesEasing />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/files" element={<Library content={<LibraryUtilitiesFiles />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/control" element={<Library content={<LibraryUtilitiesControl />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/math" element={<Library content={<LibraryUtilitiesMath />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/text" element={<Library content={<LibraryUtilitiesText />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/list" element={<Library content={<LibraryUtilitiesList />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/structures" element={<Library content={<LibraryStructures />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/grids" element={<Library content={<LibraryStructuresGrids />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/toggles" element={<Library content={<LibraryStructuresToggles />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/vectors" element={<Library content={<LibraryStructuresVectors />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/couples" element={<Library content={<LibraryStructuresCouples />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/ranges" element={<Library content={<LibraryStructuresRanges />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/tier" element={<Library content={<LibraryStructuresTier />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/label" element={<Library content={<LibraryStructuresLabel />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/timeScale" element={<Library content={<LibraryStructuresTimeScale />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/events" element={<Library content={<LibraryStructuresEvents />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/valueAssets" element={<Library content={<LibraryStructuresValueAssets />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/switches" element={<Library content={<LibraryStructuresSwitches />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/machines" element={<Library content={<LibraryMachines />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/updater" element={<Library content={<LibraryMachinesUpdater />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/cycle" element={<Library content={<LibraryMachinesCycle />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/state" element={<Library content={<LibraryMachinesState />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/tween" element={<Library content={<LibraryMachinesTween />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/systems" element={<Library content={<LibrarySystems />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/systems/animationSystem" element={<Library content={<LibrarySystemsAnimationSystem />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/systems/tweakSystem" element={<Library content={<LibrarySystemsTweakSystem />} menu={LibraryMenu} />}></Route>          
          <Route exact path="/library/systems/audioSystem" element={<Library content={<LibrarySystemsAudioSystem />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/systems/dialogSystem" element={<Library content={<LibrarySystemsDialogSystem />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/tools" element={<Library content={<LibraryTools />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/baseComponent" element={<Library content={<LibraryToolsBaseComponent />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/buttonAttribute" element={<Library content={<LibraryToolsButtonAttribute />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/showIfAttribute" element={<Library content={<LibraryToolsShowIfAttribute />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/referenceValueAttribute" element={<Library content={<LibraryToolsReferenceValueAttribute />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/keyBindingDrawer" element={<Library content={<LibraryToolsKeyBindingDrawer />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/hierarchyEditor" element={<Library content={<LibraryToolsHierarchyEditor />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/curveEditor" element={<Library content={<LibraryToolsCurveEditor />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/referenceConsole" element={<Library content={<LibraryToolsReferenceConsole />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/scriptManager" element={<Library content={<LibraryToolsScriptManager />} menu={LibraryMenu} />}></Route>
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}