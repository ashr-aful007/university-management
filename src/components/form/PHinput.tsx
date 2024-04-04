import { Controller, useFormContext } from "react-hook-form"


function PHinput({type, name, label}) {
     const {register} = useFormContext()
  return (
     <div style={{marginBottom: '20px'}}>
     {label ? label : null}
      <Controller
        name={name}
        render={({field}) => <input {...field} type={type} id={name}></input>}
      />
     </div>
  )
}

export default PHinput