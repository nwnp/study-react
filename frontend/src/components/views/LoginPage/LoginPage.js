import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { loginUser } from "../../../_actions/user_actions";

function LoginPage(props) {
  const dispatch = useDispatch;

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const payload = { email: Email, password: Password };
    dispatch(
      loginUser(payload).then((res) => {
        if (res.payload.success) {
          alert("로그인에 성공했습니다.");
          document.location.href = "/";
        } else alert("error");
      })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
