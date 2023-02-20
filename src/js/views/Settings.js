import React, {useState} from "react";
import '../index.scss'

export default function Settings () {

  const [isDark,setIsDark] = useState(false);
  const [isNotiEnable,setIsNotiEnable] = useState(false);
  const [isNotiSound,setIsNotiSound] = useState(false);

  return (
    <div className="settings-wrapper">
      <div className="form-name">
        <h1>
          SETTINGS
        </h1>
        <div className="setting-buttons">
          <div className="setting">
              <label for="theme">
                Dark Theme
              </label>
              <input type="checkbox" id="switch" checked={isDark ? true : false} />
              <label onClick={()=>setIsDark(isDark => !isDark)} className="switch-label">Toggle</label>
          </div>  
          <div className="setting">
              <label for="noti-enable">
                Enable Notification
              </label>
              <input type="checkbox" id="switch" checked={isNotiEnable ? true : false} />
              <label onClick={()=>setIsNotiEnable(isNotiEnable => !isNotiEnable)} className="switch-label">Toggle</label>
          </div>  
          <div className="setting">
              <label for="sound-noti">
                Sound Notification
              </label>
              <input type="checkbox" id="switch" checked={isNotiSound ? true: false} />
              <label className="switch-label" onClick={()=>setIsNotiSound(isNotiSound => !isNotiSound)}>Toggle</label>
          </div> 
        </div>

        <button className="small-button">
          SAVE
        </button>
      </div>
    </div>
  )
}