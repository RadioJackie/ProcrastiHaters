import React, { useState, useEffect, useRef } from 'react';

import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';
import { Button, Row }  from 'reactstrap';


function Timer() {
  const audioElement = useRef(null);
  const [currentSessionType, setCurrentSessionType] = useState('Session'); // 'Session' or 'Break'
  const [intervalId, setIntervalId] = useState(null);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  // change timeLeft whenever sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60);
  };

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(sessionLength + 60);
  };

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      // if we are in started mode:
      // we want to stop the timer
      // clearInterval
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      // if we are in stopped mode:
      // decrement timeLeft by one every second (1000 ms)
      // to do this we'll use setInterval
      const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          // time left is less than zero
          audioElement.current.play();
          // if session:
          if (currentSessionType === 'Session') {
            // switch to break
            // setCurrentSessionType('Break');
            // // setTimeLeft to breakLength
            // setTimeLeft(breakLength);
          }
          // if break:
          else if (currentSessionType === 'Break') {
            // switch to session
            setCurrentSessionType('Session');
            // setTimeLeft to sessionLength
            setTimeLeft(sessionLength);
          }
        });
      }, 1000); // TODO: turn back into 1000
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    // reset audio
    audioElement.current.load();
    // clear the timeout interval
    clearInterval(intervalId);
    // set the intervalId null
    setIntervalId(null);
    // set the sessiontype to 'Session'
    setCurrentSessionType('Session');
    // reset the session length to 25 minutes
    setSessionLength(60 * 25);
    // reset the break length to 5 minutes
    setBreakLength(60 * 5);
    // reset the timer to 25 minutes (initial session length)
    setTimeLeft(60 * 25);
  };

  return (
    
    
    <div className="justify-content-center">
      
    <TimeLeft
        handleStartStopClick={handleStartStopClick}
        startStopButtonLabel={isStarted ? 'Stop' : 'Start'}
         timeLeft={timeLeft}
        
      />
      
      
      <div>
        
      <Session 
        sessionLength={sessionLength}
        decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
        incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
        
      />
      
      </div>
      <div>
      <button  id="reset" onClick={handleResetButtonClick}>
        Reset
      </button>
      <audio id="beep" ref={audioElement}>
        <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
      </audio>
      </div>
      
      </div>
      
  );
}

export default Timer;
