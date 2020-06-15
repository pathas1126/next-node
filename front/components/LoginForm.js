import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // Props로 넘겨지는 함수는 useCallback을 사용하는 것이 최적화에 도움이 됨
  const onChangeId = useCallback((e) => {
    const { value } = e.target;
    setId(value);
  }, []);

  const onChangePassword = useCallback((e) => {
    const { value } = e.target;
    setPassword(value);
  }, []);

  // styled-components 가 싫다면 useMemo를 통해서 값을 캐싱
  // const style = useMemo(() => ({ marginTop: 10 }), []);
  // 리렌더링해도 같은 객체가 유지됨

  const onSubmitForm = useCallback(() => {
    /* onFinish:  e.preventDefault 가 적용되어 있음
      앤트디자인에서는 따로 작성하지 않음*/
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      {/* style을 인라인으로 작성하게 되면 {} !== {} 이기 때문에 불필요한 리렌더링 발생!!!
      객체는 새로 생성될 때마다 서로 다른 것으로 취급됨 => 성능이 아주 중요할 때가 아니면 집착할 필요는 없음 */}
      <ButtonWrapper style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
