import './App.css'
import { Amplify } from 'aws-amplify'
import { type AuthUser } from "aws-amplify/auth"
import { type UseAuthenticator } from '@aws-amplify/ui-react-core'
import { Authenticator, Button, Heading } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

type AppProps = {
  signOut?: UseAuthenticator['signOut']
  user?: AuthUser
}

const App: React.FC<AppProps> = ({ signOut, user }) => {
  return (
    <Authenticator socialProviders={['google']}>
      <div>
        <Heading level={1}>Hello {user?.username}</Heading>
        <Button onClick={signOut}>Sign out</Button>
      </div>
    </Authenticator>
  )
}

export default App
