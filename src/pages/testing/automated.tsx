import { Stack, Text, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function AutomatedTesting() {
  return (
    <>
      <Title>Automated Testing</Title>
      <Stack>
        <Text>
          Please find below the automated testing results. There is a traceability matrix and a JaCoCo coverage report.
          <br />
        </Text>
        <CustomImage src={`${import.meta.env.BASE_URL}images/jacoco-report.png`} />
        <CustomImage src={`${import.meta.env.BASE_URL}images/test-matrix.png`} />
        <Text>
          Please find below the test plan
        </Text>
        <CustomImage src={`${import.meta.env.BASE_URL}images/test-plan.png`} />
      </Stack>
    </>
  );
}
