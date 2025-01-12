import React from "react";

export interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  admin: boolean;
  birthYear: number;
  favoriteColor: string;
}
