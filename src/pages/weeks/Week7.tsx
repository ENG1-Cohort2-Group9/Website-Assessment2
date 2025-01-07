import { Stack, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function Week7() {
  return (
    <>
      <Title>Week 7</Title>
      <Stack>
      <CustomImage src={`${import.meta.env.BASE_URL}images/wk7-1.png`} />
      </Stack>
    </>
  );
}
