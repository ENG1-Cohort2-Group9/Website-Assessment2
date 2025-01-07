import { Stack, Text, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function AutomatedTesting() {
  return (
    <>
      <Title>Automated Testing</Title>
      <Stack>
        <Text>
          Bla bla bla - images below etc..
          <br />
          Will eventually comprise testing results and coverage reports for automated testing.
        </Text>
        <CustomImage src={`${import.meta.env.BASE_URL}images/wk1-1.png`} />
      </Stack>
    </>
  );
}
