import { Image } from "antd";
import Container from "./components/Container";



export default function Home() {
  return (
    <>
      <Container title="Main Page">
          <h1 className="text-center text-7xl">Welcome</h1>
          <Image.PreviewGroup>
    <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
    <Image
      width={200}
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
  </Image.PreviewGroup>
      </Container>
    </>
  );
}
