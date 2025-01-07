import { NavLink, Title } from "@mantine/core";
import { NavLink as ReactNavLink } from "react-router-dom";

export default function TestingPage() {
  return (
    <>
      <Title>Testing</Title>
      <NavLink
        label={"Automated"}
        component={ReactNavLink}
        to="/testing/automated"
      />
        <NavLink
            label={"Manual"}
            component={ReactNavLink}
            to="/testing/manual"
        />
    </>
  );
}