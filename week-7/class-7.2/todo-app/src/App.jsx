import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms';

//RecoilRoot

function App() {
  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  console.log(networkNotificationCount)

  const jobsNotificationCount = useRecoilValue(jobsAtom)

  const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom);

  const notificationAtomCount = useRecoilValue(notificationAtom)


  return(
    <div>
    <button>Home</button>

    <button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>

    <button>Jobs({jobsNotificationCount >= 0 ? jobsNotificationCount : "0" })</button>

    <button>Messaging({messagingAtomCount >= 0 ?messagingAtomCount : "0" })</button>

    <button>Notifications({notificationAtomCount >= 0 ? notificationAtomCount : "0"})</button>

    <button onClick={()=>{
      setMessagingAtomCount(c => c + 1)
    }}>Click Me</button>

    <ButtonUpdater/>
  </div>
  )
}

function ButtonUpdater(){
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);


  return(<div>
    <button onClick={() => {
      setMessagingAtomCount(c => c+ 1);
    }}>Me</button>
  </div>)
}

export default App
