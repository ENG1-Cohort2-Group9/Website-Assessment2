import { Stack, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function Week8() {
  return (
    <>
      <Title>Week 8</Title>
      <Stack>
      <CustomImage src={`${import.meta.env.BASE_URL}images/wk8-1.png`} />
      </Stack>
    </>
  );
}
