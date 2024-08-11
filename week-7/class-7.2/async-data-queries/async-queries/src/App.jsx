import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notificationAtom, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from "axios"


function App() {

  return (
    <div>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </div>
  )
}

function MainApp(){
  const [notificationCount, setNotificationCount] = useRecoilState(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // useEffect(() => {
  //   //fetch
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //     .then(res => {
  //       setNotificationCount(res.data)
  //     })
  // },[])
  
  return(
    <div>
      <button>Home</button>

      <button>My network({notificationCount.network >= 100 ? "99+" : notificationCount.network})</button>
      <button>Jobs({notificationCount.jobs})</button>
      <button>Messages({notificationCount.messaging})</button>
      <button>Notifications({notificationCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>

    </div>
  )
}

export default App
