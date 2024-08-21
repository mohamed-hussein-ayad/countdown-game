import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={}></TimerChallenge>
        <TimerChallenge title="Not easy" targetTime={}></TimerChallenge>
        <TimerChallenge title="Getting tough" targetTime={}></TimerChallenge>
        <TimerChallenge title="Pros only" targetTime={}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
