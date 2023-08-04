import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LibraryMenu from "Views/Library/Library/LibraryMenu.json";

import Header from 'Views/Main/Header';
import Footer from 'Views/Main/Footer';
import Home from 'Views/Main/Home';
import AboutUs from 'Views/Main/AboutUs';
import Library from 'Views/Library/Library';
import LibraryInConstruction from "Views/Library/InConstruction";

import LibraryGettingStarted from "Views/Library/Library/GettingStarted";
import LibraryChangelog from "Views/Library/Library/Changelog";
import LibraryLicense from "Views/Library/Library/License";

import LibraryUtilities from "Views/Library/Utilities/Utilities";

import UtilitiesOperationsMenu from "Views/Library/Utilities/Operations/UtilitiesOperationsMenu.json";
import LibraryUtilitiesOperations from "Views/Library/Utilities/Operations/Operations";
import LibraryUtilitiesOperationsValueMode from "Views/Library/Utilities/Operations/Modes";
import LibraryUtilitiesOperationsMutableValues from "Views/Library/Utilities/Operations/MutuableValues";
import LibraryUtilitiesOperationsOperationsMath from "Views/Library/Utilities/Operations/OperationsMath";
import LibraryUtilitiesOperationsOperationsIntrinsic from "Views/Library/Utilities/Operations/OperationsIntrinsic";
import LibraryUtilitiesOperationsOperationsClamp from "Views/Library/Utilities/Operations/OperationsClamp";
import LibraryUtilitiesOperationsOperationsWrap from "Views/Library/Utilities/Operations/OperationsWrap";
import LibraryUtilitiesOperationsTargetComponents from "Views/Library/Utilities/Operations/TargetComponents";
import LibraryUtilitiesOperationsInputAndOutputTypes from "Views/Library/Utilities/Operations/InputAndOutputTypes";

import LibrarySystems from "Views/Library/Systems/Systems";

import LibrarySystemsAudioSystemMenu from "Views/Library/Systems/AudioSystem/Menu.json";
import LibrarySystemsAudioSystem from "Views/Library/Systems/AudioSystem/AudioSystem.js";
import LibrarySystemsAudioSystemSoundManagerComponent from "Views/Library/Systems/AudioSystem/SoundManagerComponent.js";
import LibrarySystemsAudioSystemSoundLibraryAsset from "Views/Library/Systems/AudioSystem/SoundLibraryAsset.js";
import LibrarySystemsAudioSystemSoundAsset from "Views/Library/Systems/AudioSystem/SoundAsset.js";
import LibrarySystemsAudioSystemSoundMasterAsset from "Views/Library/Systems/AudioSystem/SoundMasterAsset.js";
import LibrarySystemsAudioSystemSoundLabelAsset from "Views/Library/Systems/AudioSystem/SoundLabelAsset.js";
import LibrarySystemsAudioSystemChangelog from "Views/Library/Systems/AudioSystem/Changelog.js";

import LibrarySystemsDialogSystemMenu from "Views/Library/Systems/DialogSystem/Menu.json";
import LibrarySystemsDialogSystem from "Views/Library/Systems/DialogSystem/DialogSystem.js";
import LibrarySystemsDialogSystemChangelog from "Views/Library/Systems/DialogSystem/Changelog.js";

import LibrarySystemsSpriteAnimationSystemMenu from "Views/Library/Systems/SpriteAnimationSystem/Menu.json";
import LibrarySystemsSpriteAnimationSystem from "Views/Library/Systems/SpriteAnimationSystem/SpriteAnimationSystem.js";
import LibrarySystemsSpriteAnimationSystemChangelog from "Views/Library/Systems/SpriteAnimationSystem/Changelog.js";

import LibrarySystemsTweakSystemMenu from "Views/Library/Systems/TweakSystem/Menu.json";
import LibrarySystemsTweakSystem from "Views/Library/Systems/TweakSystem/TweakSystem.js";
import LibrarySystemsTweakSystemChangelog from "Views/Library/Systems/TweakSystem/Changelog.js";

import LibraryTools from "Views/Library/Tools/Tools";

import LibraryToolsButtonToolMenu from "Views/Library/Tools/ButtonTool/Menu.json";
import LibraryToolsButtonTool from "Views/Library/Tools/ButtonTool/ButtonTool.js";
import LibraryToolsButtonToolChangelog from "Views/Library/Tools/ButtonTool/Changelog.js";

export default function App() {

  return (
    <div className='app bg-dark-4'>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/aboutUs" element={<AboutUs/>}></Route>
          
          <Route exact path="/library" element={<Navigate to="/library/gettingStarted" />}></Route>
          <Route exact path="/library/inConstruction" element={<Library content={<LibraryInConstruction />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/gettingStarted" element={<Library content={<LibraryGettingStarted />} menu={LibraryMenu} submenu={LibraryMenu[0].items} />}></Route>
          <Route exact path="/library/changelog" element={<Library content={<LibraryChangelog />} menu={LibraryMenu} submenu={LibraryMenu[0].items} />}></Route>
          <Route exact path="/library/License" element={<Library content={<LibraryLicense />} menu={LibraryMenu} submenu={LibraryMenu[0].items} />}></Route>
          

          <Route exact path="/library/utilities" element={<Library content={<LibraryUtilities />} menu={LibraryMenu} submenu={LibraryMenu[1].items} />}></Route>

          <Route exact path="/library/utilities/operations" element={<Library content={<LibraryUtilitiesOperations />} menu={LibraryMenu} submenu={UtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/modes" element={<Library content={<LibraryUtilitiesOperationsValueMode />} menu={LibraryMenu} submenu={UtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/mutableValues" element={<Library content={<LibraryUtilitiesOperationsMutableValues />} menu={LibraryMenu} submenu={UtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsMath" element={<Library content={<LibraryUtilitiesOperationsOperationsMath />} menu={LibraryMenu} submenu={UtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsIntrinsic" element={<Library content={<LibraryUtilitiesOperationsOperationsIntrinsic />} menu={LibraryMenu} submenu={UtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsClamp" element={<Library content={<LibraryUtilitiesOperationsOperationsClamp />} menu={LibraryMenu} submenu={UtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/operationsWrap" element={<Library content={<LibraryUtilitiesOperationsOperationsWrap />} menu={LibraryMenu} submenu={UtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/targetComponents" element={<Library content={<LibraryUtilitiesOperationsTargetComponents />} menu={LibraryMenu} submenu={UtilitiesOperationsMenu} />}></Route>
          <Route exact path="/library/utilities/operations/inputAndOutputTypes" element={<Library content={<LibraryUtilitiesOperationsInputAndOutputTypes />} menu={LibraryMenu} submenu={UtilitiesOperationsMenu} />}></Route>

          
          <Route exact path="/library/systems" element={<Library content={<LibrarySystems />} menu={LibraryMenu} submenu={LibraryMenu[2].items} />}></Route>

          <Route exact path="/library/systems/audioSystem" element={<Library content={<LibrarySystemsAudioSystem />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/soundManagerComponent" element={<Library content={<LibrarySystemsAudioSystemSoundManagerComponent />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/soundLibraryAsset" element={<Library content={<LibrarySystemsAudioSystemSoundLibraryAsset />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/soundAsset" element={<Library content={<LibrarySystemsAudioSystemSoundAsset />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/soundMasterAsset" element={<Library content={<LibrarySystemsAudioSystemSoundMasterAsset />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/soundLabelAsset" element={<Library content={<LibrarySystemsAudioSystemSoundLabelAsset />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>
          <Route exact path="/library/systems/audioSystem/changelog" element={<Library content={<LibrarySystemsAudioSystemChangelog />} menu={LibraryMenu} submenu={LibrarySystemsAudioSystemMenu} />}></Route>

          <Route exact path="/library/systems/dialogSystem" element={<Library content={<LibrarySystemsDialogSystem />} menu={LibraryMenu} submenu={LibrarySystemsDialogSystemMenu} />}></Route>
          <Route exact path="/library/systems/dialogSystem/changelog" element={<Library content={<LibrarySystemsDialogSystemChangelog />} menu={LibraryMenu} submenu={LibrarySystemsDialogSystemMenu} />}></Route>

          <Route exact path="/library/systems/spriteAnimationSystem" element={<Library content={<LibrarySystemsSpriteAnimationSystem />} menu={LibraryMenu} submenu={LibrarySystemsSpriteAnimationSystemMenu} />}></Route>
          <Route exact path="/library/systems/spriteAnimationSystem/changelog" element={<Library content={<LibrarySystemsSpriteAnimationSystemChangelog />} menu={LibraryMenu} submenu={LibrarySystemsSpriteAnimationSystemMenu} />}></Route>

          <Route exact path="/library/systems/tweakSystem" element={<Library content={<LibrarySystemsTweakSystem />} menu={LibraryMenu} submenu={LibrarySystemsTweakSystemMenu} />}></Route>
          <Route exact path="/library/systems/tweakSystem/changelog" element={<Library content={<LibrarySystemsTweakSystemChangelog />} menu={LibraryMenu} submenu={LibrarySystemsTweakSystemMenu} />}></Route>

          
          <Route exact path="/library/tools" element={<Library content={<LibraryTools />} menu={LibraryMenu} submenu={LibraryMenu[3].items} />}></Route>

          <Route exact path="/library/tools/buttonTool" element={<Library content={<LibraryToolsButtonTool />} menu={LibraryMenu} submenu={LibraryToolsButtonToolMenu} />}></Route>
          <Route exact path="/library/tools/buttonTool/changelog" element={<Library content={<LibraryToolsButtonToolChangelog />} menu={LibraryMenu} submenu={LibraryToolsButtonToolMenu} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}