import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return( 
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId='c834a634-9802-46c9-ad0c-6a3279c6ae11'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%'}}
        />
    </div> 

    )
}

export default ChatsPage