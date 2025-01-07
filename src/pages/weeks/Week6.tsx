import { Stack, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function Week6() {
  return (
    <>
      <Title>Week 6</Title>
      <Stack>
      <CustomImage src={`${import.meta.env.BASE_URL}images/wk6-1.png`} />
      </Stack>
    </>
  );
}
