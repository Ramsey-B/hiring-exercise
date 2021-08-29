import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Ctx } from "../../App";
import { Button, TextField } from "@material-ui/core";
import "./Login.scss";

interface Props {
  setToken: Dispatch<SetStateAction<string>>;
}

export const Login: React.FC<Props> = props => {
  const ctx = React.useContext(Ctx);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await ctx?.authService
      .Login({
        username,
        password
      })
      .then(res => {
        props.setToken(res.auth_token);
        ctx.user = res.user;
      });
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <TextField
          label="Username"
          type="text"
          required={true}
          className="username-input"
          InputLabelProps={{
            className: "username-input"
          }}
          value={username}
          onChange={e => setUsername(e.target.value)}
          error={false}
        />
        <TextField
          label="Password"
          type="password"
          required={true}
          className="password-input"
          InputProps={{
            className: "password-input",
            style: { color: "white" }
          }}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" className="login-btn" variant="outlined">
          Login
        </Button>
      </form>
    </div>
  );
};