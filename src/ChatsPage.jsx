// import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
// const ChatsPage=(props)=>{
//     const chatProps=useMultiChatLogic('49497eae-d310-478b-85cc-f2fdc7795d28',props.user.username,props.user.secret)
//     return <div style={{height:'100vh'}}>
//         <MultiChatSocket{...chatProps}/>
//         <MultiChatWindow{...chatProps} style={{height:'100%'}}/>
//     </div>
// }
// export default  ChatsPage
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID=
            'd4752d02-4c2f-4820-8364-347ecadf6a72'}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;