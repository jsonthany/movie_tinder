import { Form, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Logout = () => {

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
                name="normal_logout"
                className="logout-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                <Button type="primary" htmlType="submit" className="logout-form-button">
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

export default Logout
