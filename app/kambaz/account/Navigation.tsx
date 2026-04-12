"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  return (
    <div id="wd-account-navigation">
      <Link href="/kambaz/account/signin" id="wd-account-signin-link">Sign in</Link><br />
      <Link href="/kambaz/account/signup" id="wd-account-signup-link">Sign up</Link><br />
      <Link href="/kambaz/account/profile" id="wd-account-profile-link">Profile</Link><br />
      {currentUser && currentUser.role === "ADMIN" && (
        <>
          <Link href="/kambaz/account/users" id="wd-account-users-link">Users</Link><br />
        </>
      )}
    </div>
  );
}
