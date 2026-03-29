"use client";
import * as client from "../client";
import { RootState } from "../../store";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { redirect } from "next/navigation";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    redirect("/kambaz/account/signin");
  };
  useEffect(() => {
    if (currentUser) {
      setProfile(currentUser);
    }
  }, [currentUser]);
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input id="wd-username" value={profile.username || ""} placeholder="username" className="form-control mb-2 wd-username"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          <input id="wd-password" value={profile.password || ""} placeholder="password" type="password" className="form-control mb-2 wd-password"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
          <input id="wd-firstname" value={profile.firstName || ""} placeholder="First Name" className="form-control mb-2 wd-firstname"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
          <input id="wd-lastname" value={profile.lastName || ""} placeholder="Last Name" className="form-control mb-2 wd-lastname"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
          <input id="wd-dob" value={profile.dob || ""} type="date" className="form-control mb-2 wd-dob"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
          <input id="wd-email" value={profile.email || ""} type="email" className="form-control mb-2 wd-email"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          <select id="wd-role" className="form-control mb-2 wd-role" value={profile.role || "USER"}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
          <button onClick={signout} className="wd-signout-btn btn btn-danger w-100" id="wd-signout-btn">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
