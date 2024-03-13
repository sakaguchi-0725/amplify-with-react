import './App.css'
import { Amplify } from 'aws-amplify'
import { I18n } from 'aws-amplify/utils'
import { type AuthUser } from "aws-amplify/auth"
import { type UseAuthenticator } from '@aws-amplify/ui-react-core'
import { Authenticator, Button, Heading } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

const dict = {
  ja: {
    'Sign In': 'サインイン',
    'Sign in': 'サインイン',
    'Sign Up': 'サインアップ',
    'Create Account': '会員登録',
    'Forgot your password?': 'パスワードをお忘れですか?',
    'Reset Password': 'パスワードをリセット',
    'Send code': '認証コードを送信',
    'Back to Sign In': 'サインインに戻る'
  }
}
I18n.putVocabularies(dict)
I18n.setLanguage('ja')

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
