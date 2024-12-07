import React from "react"
import { useAuth } from "../../../../shared/redux-hooks"
import { useNavigation, useNavigationPage } from "../../../../shared/hooks"

interface NewCodeProps {
  email: string
}

export const NewCode: React.FC<NewCodeProps> = ({ email }) => {

  const { generateNewVerificationCode } = useAuth()
  const { getToken } = useNavigationPage()
  const { onGoPage } = useNavigation()

  const onGenerateNewVerificationCode = () => {
    onGoPage('/auth/login')
    generateNewVerificationCode({email}, getToken() )
  }

  return (
    <div className="flex flex-end">
      <a onClick={ onGenerateNewVerificationCode } href='#' className='form-verify__link'>Volver a generar código</a>
    </div>
  )
}
