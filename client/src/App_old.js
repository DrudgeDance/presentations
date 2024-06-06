import React from "react";

import Header from './components/TheSciencingChallenge/Header.js';
import Welcome from './components/TheSciencingChallenge/Welcome.js';
import ProfessionalDevelopment from './components/TheSciencingChallenge/ProfessionalDevelopment.js';
import WatchLive from './components/TheSciencingChallenge/WatchLive.js';
import ModerationPanel from './components/TheSciencingChallenge/ModerationPanel.js';
import UniversityAcknowledgment from './components/TheSciencingChallenge/UniversityAcknowledgment.js';
// import ThankYou from './components/TheSciencingChallenge/ThankYou.js';

import Footer from './components/TheSciencingChallenge/Footer.js';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen-415 relative">
      {/* <BackgroundVideo /> */}
      {/* <NavBar /> */}
      <div className="flex flex-col items-center w-full flex-grow space-y-8">
        <Header />
        <Welcome />
        <WatchLive />
        <ProfessionalDevelopment />
        <ModerationPanel />
        <UniversityAcknowledgment />
        {/* <ThankYou /> */}
        <Footer />
      </div>
      <div className="w-full bg-[#9b088c]  bottom-0 left-0" style={{ height: '1rem' }}></div>
    </div>
  );
};

export default App;