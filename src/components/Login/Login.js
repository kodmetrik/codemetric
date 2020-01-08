import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../../Firebase/context';
import withAuth from '../../Session/withAuth'
import { Card, Row,Input,Button,Form,Icon } from 'antd'
import { Typography } from 'antd';
import './Login.scss'
import { DASHBOARD } from '../../constants/routes'

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const spaceRegex = /[^-\s]/gi
const { Title } = Typography;
class Login extends Component {
  state={ 
    email:'',
    password:'',
    emailError:'',
    passwordError: ''
  }
  componentDidMount = () => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    if(authUser){
      this.props.history.push(DASHBOARD)
    }
  }
  checkEmailIsValid = (mail) =>{
    return emailRegex.test(mail)
  }
  checkPasswordIsValid= () =>{
    return this.state.password.length > 4 && spaceRegex.test(this.state.password)
  }
  handleValidation(){
    let isValid= true;
    if (emailRegex.test(this.state.email) === false){
      console.log(this.checkEmailIsValid(this.state.email))
      debugger
      isValid=false
      this.setState({ emailError: 'Lütfen mail adresinizi kontrol edin.' })
    }
    if (!this.checkPasswordIsValid()){
      isValid=false
      this.setState({ passwordError: 'Lütfen parolanızı kontrol edin.' })
    }
    return isValid
  }
  handleChange= (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit =async e => {
    e.preventDefault();
    if (!this.handleValidation()){
      return
    }
    try {
      this.setState({
        emailError: '',
        passwordError: ''
      })
      const user = await this.props.firebase.login(this.state.email, this.state.password)
      if(user){
        this.props.history.push(DASHBOARD)
      }
      
    } catch (error) {
    }
    
  };
  render() {
    return (
      <div className="Login">
        <Card style={{width: 400,padding: 20}}>
          <Form onSubmit={this.handleSubmit}>
            <Row type="flex" justify="center" align="middle" style={{ marginBottom: 20 }}>
                <Title level={4}>Giriş Yap</Title>
            </Row>
            <Row style={{ marginBottom: 20 }}>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Kullanıcı Adı"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              {this.state.emailError.length > 0 && <small>{this.state.emailError}</small>}
            </Row>
            <Row style={{ marginBottom: 20 }}>
              <Input.Password 
                name="password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Şifre"
                onChange={this.handleChange}
              />
              {this.state.passwordError.length>0 &&<small>{this.state.passwordError}</small>}
            </Row>
            <Row type="flex" justify="center" align="middle">
              <Button type="primary" htmlType="submit" block>Giriş Yap</Button>
            </Row>
          </Form>
        </Card>
      </div>
    )
  }
}
export default withAuth(withRouter(Login))