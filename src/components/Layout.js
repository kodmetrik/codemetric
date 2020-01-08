import React from 'react'
import { Layout, Menu,Icon } from 'antd';
import {withRouter} from 'react-router-dom'
import { withFirebase} from '../Firebase/context'
import './Layout.scss'
import { Typography } from 'antd';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom'
const { Title } = Typography;
const { Header, Content,Sider } = Layout;

class Container extends React.Component {
  state = {
    collapsed: false,
    error:''
  };
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  handleLogout = () => {
    try {
      this.props.firebase.signOut()
    } catch (error) {
      this.setState({error})
    }
    
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header">
          <div className="logo" >
            <Title level={3} style={{color: '#fff'}}>Kodmetrik</Title>
          </div>
          <div className="logout">
            <button onClick={() => this.handleLogout()}><Title level={4}>Çıkış Yap</Title></button>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[this.props.location.pathname]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key={ROUTES.DASHBOARD}><Link to={ROUTES.DASHBOARD}>Dashboard</Link></Menu.Item>
            <Menu.Item key={ROUTES.GRAPHS}><Link to={ROUTES.GRAPHS}>İstatistikler</Link></Menu.Item>
            
          </Menu>
        </Header>
        <Layout>
          {/* <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={[this.props.location.pathname]} mode="inline">
              <Menu.Item key={ROUTES.DASHBOARD}>
                <Icon type="pie-chart" />
                <span><Link to={ROUTES.DASHBOARD}>Dashboard</Link></span>
              </Menu.Item>
              <Menu.Item key={ROUTES.GRAPHS}>
                <Icon type="desktop" />
                <span><Link to={ROUTES.GRAPHS}>İstatistikler</Link></span>
              </Menu.Item>
            </Menu>
          </Sider> */}
          <Content style={{ margin: '0 16px'}}>
            <div style={{ padding: 24, background: '#fff', minHeight: '100%',marginTop:20 }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withFirebase(withRouter(Container)) 