import FormLogin from "@/components/form/FormLogin";
import { Button, Col, Flex, Form, Input, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const {Item} = Form;

export default function Login() {
    return (
      <div style={{ height: '100vh' }}>
        <Row style={{ height: '100%' }}>
          {/* Left half */}
          <Col span={12} style={{ backgroundColor: '#41A0E4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Flex style={{width: '70%'}} justify="center" align="center" vertical>
              <Title>Nama Aplikasi</Title>
              <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
            </Flex>
          </Col>

          {/* Right half */}
          <Col span={12} style={{ backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <FormLogin/>
          </Col>
        </Row>
      </div>
    );
  }
  