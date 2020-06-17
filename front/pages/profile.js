import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const [followingList, setFollowingList] = useState([
    { nickname: "pathas" },
    { nickname: "pathas11" },
    { nickname: "pathas27" },
  ]);
  const [followerList, setFollowerList] = useState([
    { nickname: "pathas" },
    { nickname: "pathas11" },
    { nickname: "pathas27" },
  ]);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
