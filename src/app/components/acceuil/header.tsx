'use client';

import {useUserConnection} from "../../context/AuthContext";
import NavBarUser from '../dashboard/navBarUser';
import NavBarClient from '../dashboard/navBarClient';

export default function Header() {

  const {token} = useUserConnection();

  return (
    <>
      { token ? <NavBarClient /> : <NavBarUser /> }
    </>
  );
}
