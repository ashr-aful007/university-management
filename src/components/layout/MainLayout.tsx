import { Button, Layout,  theme } from "antd"
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";



const { Header, Content,Footer } = Layout;


function MainLayout() {
  
  const dispatch = useAppDispatch()
     const handleLogout = () =>{
         dispatch(logout());
     }
   

  const {
    token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();
  return (
    <Layout style={{height: "100vh"}}>
      {/* sidebar from layOut */}
      <Sidebar></Sidebar>
      <Header><Button onClick={handleLogout}>Logout</Button></Header>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/*  relative components render in this area  */}
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout