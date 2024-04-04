import { Button, Row } from "antd";
import { FieldValues, useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifytoken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHFrom from "../components/form/PHFrom";
import PHinput from "../components/form/PHinput";


function Login() {
  const navigate = useNavigate()
   const dispatch = useAppDispatch()
   const [login,] = useLoginMutation()

        const onSubmit = async(data: FieldValues) =>{
          
        const toastId =  toast.loading("logging in");
          try{ 
            const userInfo ={
              id: data.userId,
              password: data.password,
            }

            console.log(userInfo);

            const res = await login(userInfo).unwrap()
            const user = verifyToken(res.data.accessToken) as TUser

            dispatch(setUser({
              user: user,
              token: res.data.accessToken}
              ))
              
            toast.success('Logged in', {id: toastId, duration: 2000})
            navigate(`/${user?.role}/dashboard`)
          }catch(err){
            toast.error('Something went wrong', {id: toastId, duration: 2000})
          }
        }
  return (
    <Row justify="center" align="middle" style={{height: '100vh'}}>
    <PHFrom onSubmit={onSubmit}>
        <PHinput type="text" name="userId" label="ID:"/>
        <PHinput type="text" name="password" label="Password"/>
      <Button htmlType="submit">Login</Button>
    </PHFrom>
 </Row>
  )
}

export default Login
