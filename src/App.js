import LibraryUtilitiesOperationsMenu from "Views/Library/Utilities/Operations/Menu.json";
import LibraryUtilitiesOperations from "Views/Library/Utilities/Operations/Operations.js";
import LibraryUtilitiesOperationsValueMode from "Views/Library/Utilities/Operations/Modes.js";
import LibraryUtilitiesOperationsMutableValues from "Views/Library/Utilities/Operations/MutuableValues.js";
import LibraryUtilitiesOperationsOperationsMath from "Views/Library/Utilities/Operations/OperationsMath.js";
import LibraryUtilitiesOperationsOperationsIntrinsic from "Views/Library/Utilities/Operations/OperationsIntrinsic.js";
import LibraryUtilitiesOperationsOperationsClamp from "Views/Library/Utilities/Operations/OperationsClamp.js";
import LibraryUtilitiesOperationsOperationsWrap from "Views/Library/Utilities/Operations/OperationsWrap.js";
import LibraryUtilitiesOperationsTargetComponents from "Views/Library/Utilities/Operations/TargetComponents.js";
import LibraryUtilitiesOperationsInputAndOutputTypes from "Views/Library/Utilities/Operations/InputAndOutputTypes.js";


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
import LibraryDecoratorsCollapsable from "Views/Library/Decorators/Collapsable.js";
import LibraryDecoratorsNonEditable from "Views/Library/Decorators/NonEditable.js";
import LibraryDecoratorsProgressBar from "Views/Library/Decorators/ProgressBar.js";
import LibraryDecoratorsReferenceValue from "Views/Library/Decorators/ReferenceValue.js";
import LibraryDecoratorsCollapsableList from "Views/Library/Decorators/CollapsableList.js";

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
import LibraryStructuresDebugState from "Views/Library/Structures/DebugState.js";
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
import LibrarySystemsSpriteAnimationSystem from "Views/Library/Systems/AnimationSystem.js";
import LibrarySystemsTweakSystem from "Views/Library/Systems/TweakSystem.js";
import LibrarySystemsAudioSystem from "Views/Library/Systems/AudioSystem.js";
import LibrarySystemsDialogSystem from "Views/Library/Systems/DialogSystem.js";

import LibraryTools from "Views/Library/Tools/_Tools.js";
import LibraryToolsButton from "Views/Library/Tools/Button.js";
import LibraryToolsShowIf from "Views/Library/Tools/ShowIf.js";
import LibraryToolsKeyBinding from "Views/Library/Tools/KeyBinding.js";
import LibraryToolsCurveEditor from "Views/Library/Tools/CurveEditor.js";
import LibraryToolsReferenceConsole from "Views/Library/Tools/ReferenceConsole.js";
import LibraryToolsHierarchyTool from "Views/Library/Tools/HierarchyTool.js";

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
          <Route exact path="/library/decorators/collapsable" element={<Library content={<LibraryDecoratorsCollapsable />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/nonEditable" element={<Library content={<LibraryDecoratorsNonEditable />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/progressBar" element={<Library content={<LibraryDecoratorsProgressBar />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/referenceValue" element={<Library content={<LibraryDecoratorsReferenceValue />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/collapsableList" element={<Library content={<LibraryDecoratorsCollapsableList />} menu={LibraryMenu} />}></Route>

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
          <Route exact path="/library/structures/debugState" element={<Library content={<LibraryStructuresDebugState />} menu={LibraryMenu} />}></Route>
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
          <Route exact path="/library/systems/animationSystem" element={<Library content={<LibrarySystemsSpriteAnimationSystem />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/systems/tweakSystem" element={<Library content={<LibrarySystemsTweakSystem />} menu={LibraryMenu} />}></Route>          
          <Route exact path="/library/systems/audioSystem" element={<Library content={<LibrarySystemsAudioSystem />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/systems/dialogSystem" element={<Library content={<LibrarySystemsDialogSystem />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/tools" element={<Library content={<LibraryTools />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/button" element={<Library content={<LibraryToolsButton />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/showIf" element={<Library content={<LibraryToolsShowIf />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/keyBinding" element={<Library content={<LibraryToolsKeyBinding />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/curveEditor" element={<Library content={<LibraryToolsCurveEditor />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/referenceConsole" element={<Library content={<LibraryToolsReferenceConsole />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/hierarchyTool" element={<Library content={<LibraryToolsHierarchyTool />} menu={LibraryMenu} />}></Route>
 


          <Route exact path="/library/utilities/operations" element={<Library content={<LibraryUtilitiesOperations />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/modes" element={<Library content={<LibraryUtilitiesOperationsValueMode />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/mutableValues" element={<Library content={<LibraryUtilitiesOperationsMutableValues />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsMath" element={<Library content={<LibraryUtilitiesOperationsOperationsMath />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsIntrinsic" element={<Library content={<LibraryUtilitiesOperationsOperationsIntrinsic />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsClamp" element={<Library content={<LibraryUtilitiesOperationsOperationsClamp />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsWrap" element={<Library content={<LibraryUtilitiesOperationsOperationsWrap />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/targetComponents" element={<Library content={<LibraryUtilitiesOperationsTargetComponents />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/inputAndOutputTypes" element={<Library content={<LibraryUtilitiesOperationsInputAndOutputTypes />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}