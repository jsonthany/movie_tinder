import { Form, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Register = () => {

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
                name="normal_register"
                className="register-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                
                <Form.Item
                    name="email"
                    rules={[{ 
                        required: true, 
                        type: 'email', 
                        message: 'Please input your Username!' 
                    }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                
                <Form.Item
                    name="create_password"
                    rules={[{ required: true, message: 'Create Password' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Create Password"
                    />
                </Form.Item>

                <Form.Item
                    name="confirm_password"
                    rules={[{ required: true, message: 'Confirm Password' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </Form.Item>
            
            <Form.Item>
            
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Row justify="space-between" align="middle">
                <Checkbox>Remember me</Checkbox>
                <Button type="primary" htmlType="submit" className="register-form-button">
                    Register Account
                </Button>
                </Row>
            </Form.Item>

            </Form.Item>

            {/* <Form.Item> */}
            {/* <Row justify="space-between" align="bottom"> */}
            
            {/* </Row> */}
            {/* </Form.Item> */}
            </Form>
            </Col>
            <Col span={8}></Col>
            </Row>
            </>
        )
}

export default Register
