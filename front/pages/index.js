// Next.js는 react를 import 할 필요 없음
// pages 폴더 내부의 컴포넌트들을 코드 스플리팅이 적용된 페이지로 만들어 줌
import React from "react";

import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div>Hello, Next!</div>
    </AppLayout>
  );
};

export default Home;
