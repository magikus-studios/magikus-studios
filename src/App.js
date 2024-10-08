import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from 'Views/Main/Header';
import Footer from 'Views/Main/Footer';
import Home from 'Views/Main/Home';
import AboutUs from 'Views/Main/AboutUs';
import Library from 'Views/Library/Library';
import LibraryInConstruction from "Views/Library/InConstruction";

import LibraryMenu from "Views/Library/Library/Menu.json";
import LibraryLibrary from "Views/Library/Library/Library";
import LibraryChangelog from "Views/Library/Library/Changelog";
import LibraryLicense from "Views/Library/Library/License";

import LibraryDecorators from "Views/Library/Decorators/Decorators.js";


import LibraryUtilities from "Views/Library/Utilities/Utilities.js";

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


import LibraryStructures from "Views/Library/Structures/Structures.js";


import LibraryMachines from "Views/Library/Machines/Machines.js";
import LibraryMachinesUpdater from "Views/Library/Machines/Updater/Updater.js";
import LibraryMachinesCycle from "Views/Library/Machines/Cycle/Cycle.js";
import LibraryMachinesState from "Views/Library/Machines/State/State.js";
import LibraryMachinesTween from "Views/Library/Machines/Tween/Tween.js";

import LibrarySystems from "Views/Library/Systems/Systems.js";

import LibrarySystemsAudioSystemMenu from "Views/Library/Systems/AudioSystem/Menu.json";
import LibrarySystemsAudioSystem from "Views/Library/Systems/AudioSystem/AudioSystem.js";
import LibrarySystemsAudioSystemSoundManagerComponent from "Views/Library/Systems/AudioSystem/SoundManagerComponent.js";
import LibrarySystemsAudioSystemSoundLibraryAsset from "Views/Library/Systems/AudioSystem/SoundLibraryAsset.js";
import LibrarySystemsAudioSystemSoundAsset from "Views/Library/Systems/AudioSystem/SoundAsset.js";
import LibrarySystemsAudioSystemSoundMasterAsset from "Views/Library/Systems/AudioSystem/SoundMasterAsset.js";
import LibrarySystemsAudioSystemSoundLabelAsset from "Views/Library/Systems/AudioSystem/SoundLabelAsset.js";

import LibrarySystemsDialogSystemMenu from "Views/Library/Systems/DialogSystem/Menu.json";
import LibrarySystemsDialogSystem from "Views/Library/Systems/DialogSystem/DialogSystem.js";
import LibrarySystemsDialogSystemDialogManagerComponent from "Views/Library/Systems/DialogSystem/DialogManagerComponent.js";
import LibrarySystemsDialogSystemDialogAsset from "Views/Library/Systems/DialogSystem/DialogAsset.js";
import LibrarySystemsDialogSystemDialogLine from "Views/Library/Systems/DialogSystem/DialogLine.js";
import LibrarySystemsDialogSystemDialogCharacterAsset from "Views/Library/Systems/DialogSystem/DialogCharacterAsset.js";
import LibrarySystemsDialogSystemDialogSettingsAsset from "Views/Library/Systems/DialogSystem/DialogSettingsAsset.js";

import LibrarySystemsSpriteAnimationSystemMenu from "Views/Library/Systems/SpriteAnimationSystem/Menu.json";
import LibrarySystemsSpriteAnimationSystem from "Views/Library/Systems/SpriteAnimationSystem/SpriteAnimationSystem.js";
import LibrarySystemsSpriteAnimationSystemSpriteAnimatorComponent from "Views/Library/Systems/SpriteAnimationSystem/SpriteAnimatorComponent.js";
import LibrarySystemsSpriteAnimationSystemSpriteAnimationAsset from "Views/Library/Systems/SpriteAnimationSystem/SpriteAnimationAsset.js";

import LibrarySystemsTweakSystemMenu from "Views/Library/Systems/TweakSystem/Menu.json";
import LibrarySystemsTweakSystem from "Views/Library/Systems/TweakSystem/TweakSystem.js";
import LibrarySystemsTweakSystemTweakManagerComponent from "Views/Library/Systems/TweakSystem/TweakManagerComponent.js";
import LibrarySystemsTweakSystemTweakPositionAsset from "Views/Library/Systems/TweakSystem/TweakPositionAsset.js";
import LibrarySystemsTweakSystemTweakRotationAsset from "Views/Library/Systems/TweakSystem/TweakRotationAsset.js";
import LibrarySystemsTweakSystemTweakScaleAsset from "Views/Library/Systems/TweakSystem/TweakScaleAsset.js";
import LibrarySystemsTweakSystemTweakColorAsset from "Views/Library/Systems/TweakSystem/TweakColorAsset.js";
import LibrarySystemsTweakSystemTweakSequenceAsset from "Views/Library/Systems/TweakSystem/TweakSequenceAsset.js";

import LibraryTools from "Views/Library/Tools/Tools.js";
import LibraryToolsCurveEditor from "Views/Library/Tools/CurveEditor/CurveEditor.js";
import LibraryToolsReferenceConsole from "Views/Library/Tools/ReferenceConsole/ReferenceConsole.js";
import LibraryToolsHierarchyTool from "Views/Library/Tools/HierarchyTool/HierarchyTool.js";

export default function App() {

  return (
    <div className='app bg-dark-4 star'>
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


          <Route exact path="/library/utilities" element={<Library content={<LibraryUtilities />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/utilities/operations" element={<Library content={<LibraryUtilitiesOperations />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/modes" element={<Library content={<LibraryUtilitiesOperationsValueMode />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/mutableValues" element={<Library content={<LibraryUtilitiesOperationsMutableValues />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsMath" element={<Library content={<LibraryUtilitiesOperationsOperationsMath />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsIntrinsic" element={<Library content={<LibraryUtilitiesOperationsOperationsIntrinsic />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsClamp" element={<Library content={<LibraryUtilitiesOperationsOperationsClamp />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsWrap" element={<Library content={<LibraryUtilitiesOperationsOperationsWrap />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/targetComponents" element={<Library content={<LibraryUtilitiesOperationsTargetComponents />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/inputAndOutputTypes" element={<Library content={<LibraryUtilitiesOperationsInputAndOutputTypes />} menu={LibraryMenu} submenu={LibraryUtilitiesOperationsMenu} />}></Route>

          <Route exact path="/library/structures" element={<Library content={<LibraryStructures />} menu={LibraryMenu} />}></Route>


          <Route exact path="/library/machines" element={<Library content={<LibraryMachines />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/updater" element={<Library content={<LibraryMachinesUpdater />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/cycle" element={<Library content={<LibraryMachinesCycle />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/state" element={<Library content={<LibraryMachinesState />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/tween" element={<Library content={<LibraryMachinesTween />} menu={LibraryMenu} />}></Route>


          <Route exact path="/library/systems" element={<Library content={<LibrarySystems />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/systems/audioSystem" element={<Library content={<LibrarySystemsAudioSystem />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/soundManagerComponent" element={<Library content={<LibrarySystemsAudioSystemSoundManagerComponent />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/soundLibraryAsset" element={<Library content={<LibrarySystemsAudioSystemSoundLibraryAsset />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/soundAsset" element={<Library content={<LibrarySystemsAudioSystemSoundAsset />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/soundMasterAsset" element={<Library content={<LibrarySystemsAudioSystemSoundMasterAsset />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/soundLabelAsset" element={<Library content={<LibrarySystemsAudioSystemSoundLabelAsset />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          
          <Route exact path="/library/systems/dialogSystem" element={<Library content={<LibrarySystemsDialogSystem />} menu={LibraryMenu} submenu={LibrarySystemsDialogSystemMenu} />}></Route>
          <Route exact path="/library/systems/dialogSystem/dialogManagerComponent" element={<Library content={<LibrarySystemsDialogSystemDialogManagerComponent />} menu={LibraryMenu} submenu={LibrarySystemsDialogSystemMenu} />}></Route>
          <Route exact path="/library/systems/dialogSystem/dialogAsset" element={<Library content={<LibrarySystemsDialogSystemDialogAsset />} menu={LibraryMenu} submenu={LibrarySystemsDialogSystemMenu} />}></Route>
          <Route exact path="/library/systems/dialogSystem/dialogLine" element={<Library content={<LibrarySystemsDialogSystemDialogLine />} menu={LibraryMenu} submenu={LibrarySystemsDialogSystemMenu} />}></Route>
          <Route exact path="/library/systems/dialogSystem/dialogCharacterAsset" element={<Library content={<LibrarySystemsDialogSystemDialogCharacterAsset />} menu={LibraryMenu} submenu={LibrarySystemsDialogSystemMenu} />}></Route>
          <Route exact path="/library/systems/dialogSystem/dialogSettingsAsset" element={<Library content={<LibrarySystemsDialogSystemDialogSettingsAsset />} menu={LibraryMenu} submenu={LibrarySystemsDialogSystemMenu} />}></Route>

          <Route exact path="/library/systems/spriteAnimationSystem" element={<Library content={<LibrarySystemsSpriteAnimationSystem />} menu={LibraryMenu} submenu={LibrarySystemsSpriteAnimationSystemMenu} />}></Route>
          <Route exact path="/library/systems/spriteAnimationSystem/spriteAnimatorComponent" element={<Library content={<LibrarySystemsSpriteAnimationSystemSpriteAnimatorComponent />} menu={LibraryMenu} submenu={LibrarySystemsSpriteAnimationSystemMenu} />}></Route>
          <Route exact path="/library/systems/spriteAnimationSystem/spriteAnimationAsset" element={<Library content={<LibrarySystemsSpriteAnimationSystemSpriteAnimationAsset />} menu={LibraryMenu} submenu={LibrarySystemsSpriteAnimationSystemMenu} />}></Route>

          <Route exact path="/library/systems/tweakSystem" element={<Library content={<LibrarySystemsTweakSystem />} menu={LibraryMenu} submenu={LibrarySystemsTweakSystemMenu} />}></Route>
          <Route exact path="/library/systems/tweakSystem/tweakManagerComponent" element={<Library content={<LibrarySystemsTweakSystemTweakManagerComponent />} menu={LibraryMenu} submenu={LibrarySystemsTweakSystemMenu} />}></Route>
          <Route exact path="/library/systems/tweakSystem/tweakPositionAsset" element={<Library content={<LibrarySystemsTweakSystemTweakPositionAsset />} menu={LibraryMenu} submenu={LibrarySystemsTweakSystemMenu} />}></Route>
          <Route exact path="/library/systems/tweakSystem/tweakRotationAsset" element={<Library content={<LibrarySystemsTweakSystemTweakRotationAsset />} menu={LibraryMenu} submenu={LibrarySystemsTweakSystemMenu} />}></Route>
          <Route exact path="/library/systems/tweakSystem/tweakScaleAsset" element={<Library content={<LibrarySystemsTweakSystemTweakScaleAsset />} menu={LibraryMenu} submenu={LibrarySystemsTweakSystemMenu} />}></Route>
          <Route exact path="/library/systems/tweakSystem/tweakColorAsset" element={<Library content={<LibrarySystemsTweakSystemTweakColorAsset />} menu={LibraryMenu} submenu={LibrarySystemsTweakSystemMenu} />}></Route>
          <Route exact path="/library/systems/tweakSystem/tweakSequenceAsset" element={<Library content={<LibrarySystemsTweakSystemTweakSequenceAsset />} menu={LibraryMenu} submenu={LibrarySystemsTweakSystemMenu} />}></Route>

          <Route exact path="/library/tools" element={<Library content={<LibraryTools />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/curveEditor" element={<Library content={<LibraryToolsCurveEditor />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/referenceConsole" element={<Library content={<LibraryToolsReferenceConsole />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/hierarchyTool" element={<Library content={<LibraryToolsHierarchyTool />} menu={LibraryMenu} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}