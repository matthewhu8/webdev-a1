"use client";
import * as client from "../client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/kambaz/dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <FormControl value={credentials.username || ""} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="wd-username mb-2" placeholder="username" id="wd-username" />
      <FormControl value={credentials.password || ""} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="wd-password mb-2" placeholder="password" type="password" id="wd-password" />
      <Button onClick={signin} className="wd-signin-btn btn btn-primary mb-2 w-100" id="wd-signin-btn"> Sign in </Button><br />
      <Link href="/kambaz/account/signup" id="wd-signup-link">Sign up</Link>
    </div>
  );
}
