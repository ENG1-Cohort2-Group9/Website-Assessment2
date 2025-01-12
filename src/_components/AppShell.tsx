import {
  Anchor,
  AppShell,
  Breadcrumbs,
  Burger,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { CNavLink } from "./CustomNavLink";
import {
  FaCalendar,
  FaExternalLinkAlt,
  FaGithub,
  FaHome,
  FaJava,
} from "react-icons/fa";
import { LayoutContext } from "./LayoutContext";
import { IoDocumentText } from "react-icons/io5";
import { MdArchitecture } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { FaUsers} from "react-icons/fa";

export function AppLayout() {
  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] =
    useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure();

  const { pathname } = useLocation();

  const items =
    pathname != "/"
      ? pathname
          .split("/")
          .map((item, index) => (
            <Anchor
              component={NavLink}
              to={pathname
                .split("/")
                .filter((_i, idx) => index >= idx)
                .join("/")}
            >
              {index == 0
                ? "Home"
                : `${item.charAt(0).toUpperCase()}${item.slice(1)}`}
            </Anchor>
          ))
          .slice(0, -1)
      : [];

  console.log(items);

  return (
    <LayoutContext.Provider
      value={{
        navbar: {
          mobile: {
            opened: mobileOpened,
            toggle: toggleMobile,
            close: closeMobile,
          },
          desktop: {
            opened: desktopOpened,
            toggle: toggleDesktop,
          },
        },
      }}
    >
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group
            h="100%"
            px="md"
          >
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
            <Text
              component={NavLink}
              to={"/"}
              onClick={closeMobile}
            >
              <Title>ENG1 CH2 GRP9</Title>
            </Text>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <CNavLink
            to="/"
            label="Home"
            leftSection={<FaHome />}
          />
          <CNavLink
            to="https://github.com/ENG1-Cohort2-Group9/Assessment-2"
            label="GitHub"
            leftSection={<FaGithub />}
            rightSection={<FaExternalLinkAlt opacity={0.5} />}
            external
          />
          <CNavLink
            to="https://drive.google.com/drive/u/1/folders/1M3vroH6AywbhHFex6nZibBRfIAgvQYHz"
            label="Deliverables + Jar"
            leftSection={
              <Group>
                <FaFilePdf />
                <FaJava />
              </Group>
            }
            rightSection={<FaExternalLinkAlt opacity={0.5} />}
            external
          />
                    <CNavLink
            to="https://www.dropbox.com/scl/fi/985mr4175hphiokng6aur/User-Evaluation-for-UniSim.papert?rlkey=tvqapan8oved85lomq892k8tc&dl=0"
            label="User Evaluation"
            leftSection={<FaUsers />}
            rightSection={<FaExternalLinkAlt opacity={0.5} />}
            external
          />
          <CNavLink
            to="/arch1"
            label="Arch1"
            leftSection={<MdArchitecture />}
          >
            <CNavLink
              to="/arch1/crc-cards"
              label={`CRC Cards`}
            />
            <CNavLink
              to="/arch1/behavioral"
              label={`Behavioral Diagrams`}
            />
            <CNavLink
              to="/arch1/structural"
              label={`Structural Diagrams`}
            />
          </CNavLink>
          <CNavLink
            to="/weeks"
            leftSection={<FaCalendar />}
            label="Weeks"
            onClick={closeMobile}
          >
            {[...Array(11)].map((_v, idx) => (
              <CNavLink
                to={`/weeks/${idx + 1}`}
                label={`Week ${idx + 1}`}
              />
            ))}
          </CNavLink>
          <CNavLink
            to="/testing"
            label="Testing"
            leftSection={<GrTest />}
            >
            <CNavLink
              to="/testing/automated"
              label="Automated"
            />
            <CNavLink
              to="/testing/manual"
              label="Manual"
            />
          </CNavLink>
          <CNavLink
            to="/licenses"
            label="Game Licenses"
            leftSection={<IoDocumentText />}
          />
        </AppShell.Navbar>
        <AppShell.Main>
          <Breadcrumbs>{items}</Breadcrumbs>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </LayoutContext.Provider>
  );
}
