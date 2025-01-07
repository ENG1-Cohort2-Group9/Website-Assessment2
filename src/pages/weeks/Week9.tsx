import { Stack, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function Week9() {
  return (
    <>
      <Title>Week 9</Title>
      <Stack>
      <CustomImage src={`${import.meta.env.BASE_URL}images/wk9-1.png`} />
      </Stack>
    </>
  );
}
