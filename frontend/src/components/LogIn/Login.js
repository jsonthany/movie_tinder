import { Form, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const Login = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    }
        
    return (
        <>
        <Divider orientation="center">Log In</Divider>
        <Row type="flex" justify="space-between" align="middle" style={{minHeight: '50vh'}}>
        <Col span={8}></Col>
        <Col span={8}>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                
                <Form.Item
                    name="username"
                    rules={[{ 
                        required: true,
                        type: 'email', 
                        message: 'Please input your email!' 
                    }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
            
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Row justify="space-between" align="bottom">
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                <Link to='/register'>
                ... or register now!
                </Link>
                {/* <a href="">... or register now!</a> */}
                </Row>
            </Form.Item>
            </Form>
            </Col>
            <Col span={8}></Col>
            </Row>
            </>
        )
}

export default Login
