import { Stack, Text, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function ManualTesting() {
  return (
    <>
      <Title>Manual Testing</Title>
      <Stack>
        <Text>
          Please find below the manual testing tables
          <br />
        </Text>
        <CustomImage src={`${import.meta.env.BASE_URL}images/test-ur.png`} />
        <CustomImage src={`${import.meta.env.BASE_URL}images/test-fr.png`} />
        <Text>
          Please find below the test plan
        </Text>
        <CustomImage src={`${import.meta.env.BASE_URL}images/test-plan.png`} />
      </Stack>
    </>
  );
}
