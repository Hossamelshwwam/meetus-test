import DashboardContainer from "@/components/dashboard-layout/dashboardContainer/DashboardContainer";
import SignOut from "@/components/sign-out/SignOut";
import ErrorPage from "@/components/ui/ErrorPage/ErrorPage";
import ProviderWrapper from "@/components/ui/ProviderWrapper";
import SaveDataInReduxClient from "@/components/ui/SaveDataInReduxClient";
import SessionProviderComp from "@/components/ui/SessionProvider";
import nextAuth from "@/utils/nextAuthProvider";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";

const fetchUserData = async () => {
  const session = await getServerSession(nextAuth);

  if (!session || !session.user.token) {
    throw new Error("No token found");
  }

  const response = await fetch(`${process.env.API_LINK}v1/user/info`, {
    method: "GET",
    headers: {
      Authorization: `${process.env.PREFIX_KEY} ${session.user.token}`,
    },
    cache: "no-cache",
  });

  if (response.status === 401) {
    return { unAuthricated: true };
  }

  if (!response.ok) {
    throw new Error("Failed to fetch company data");
  }

  const data = await response.json();

  return data;
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  let user;
  try {
    user = await fetchUserData();

    if (user.unAuthricated) {
      return <SignOut />;
    }
  } catch (error) {
    return <ErrorPage />;
  }

  return (
    <SessionProviderComp>
      <ProviderWrapper>
        <SaveDataInReduxClient
          data={{ id: user.id, email: user.email, name: user.name }}
        />
        <DashboardContainer>{children}</DashboardContainer>
      </ProviderWrapper>
    </SessionProviderComp>
  );
};

export default layout;
