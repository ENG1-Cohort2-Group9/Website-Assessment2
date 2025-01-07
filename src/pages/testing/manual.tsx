import { Stack, Text, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function ManualTesting() {
  return (
    <>
      <Title>Manual Testing</Title>
      <Stack>
        <Text>
          Placeholder for test coverage results - images below etc..
          <br />
          Will eventually comprise descriptions of manual test cases we 
          designed to test the parts of code that could not be covered by 
          the automated tests.
        </Text>
        <CustomImage src={`${import.meta.env.BASE_URL}images/wk2-1.png`} />
      </Stack>
    </>
  );
}
