import { Layout, Menu, MenuProps, theme } from "antd"


const { Header, Sider, Content,Footer } = Layout;


const items: MenuProps['items'] = [
  { 
    key: "asdkjfakjsdfkjsd",
    label: "Dashbord"
  },
  { 
    key: "asdkjfakjdrdfd",
    label: "Dashbord"
  },
  { 
    key: "asdkjfakjsdfvvsd",
    label: "Dashbord",
    children:[{
      key: "dddds",
      label: "dashbord2"
    }]
  },
]

function MainLayout() {

  const {
    token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();

  return (
    <Layout style={{height: "100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
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
            content
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