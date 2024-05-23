import React from "react";
import withAuthentication from "../HOC/withAuthentication";

function UserProfile(){
    return<>
        <h1>This is Your Profile</h1>
    </>
}

export default withAuthentication(UserProfile);