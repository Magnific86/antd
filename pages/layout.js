import { Progress, Space } from "antd";
import Container from "./components/Container";


export default function Layout() {
  return (
   <Container title="Layout later">
         <Progress percent={30} />
    <Progress  percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
    <Space>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </Space>
   </Container>
  )
}
