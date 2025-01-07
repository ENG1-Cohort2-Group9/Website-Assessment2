import { Stack, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function Week11() {
  return (
    <>
      <Title>Week 11</Title>
      <Stack>
      <CustomImage src={`${import.meta.env.BASE_URL}images/wk11-1.png`} />
      </Stack>
    </>
  );
}
