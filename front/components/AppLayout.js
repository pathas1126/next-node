import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        {/* 개발 모드에서는 링크가 다소 느리게 작동할 수 있으나,
          프로덕션 모드에서는 지연 현상이 해소됨 */}
        <Link href="/">
          <a>Node Bird</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
