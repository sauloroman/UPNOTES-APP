import { useEffect, useMemo, useState } from "react"

type Validators = {
  [key: string]: [((value: string) => boolean), string];
}

export const useForm = <T extends Record<string, any>>( initialState: T, formValidations: Validators ) => {

  const [formState, setFormState] = useState<T>( initialState )
  const [formValidation, setFormValidation] = useState<any>({})

  useEffect(() => {
    createValidators()
  }, [formState])

  const isFormValid = useMemo<boolean>(() => 
    Object.values( formValidation ).every( (value) => value === null )
  , [formValidation])

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value
    })

  }

  const onResetForm = () => setFormState( initialState )

  const createValidators = () => {

    const formCheckedValues: any = {}
    
    for( const formField in formValidations ) {
      const [ fn, errorMessage ] = formValidations[formField]
      formCheckedValues[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage
    }

    setFormValidation( formCheckedValues )
  }

  return {
    ...formState,
    formState,
    ...formValidation,
    isFormValid,

    onInputChange,
    onResetForm,
  }

}