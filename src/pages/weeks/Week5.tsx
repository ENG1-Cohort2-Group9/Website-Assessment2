import { Stack, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function Week5() {
  return (
    <>
      <Title>Week 5</Title>
      <Stack>
      <CustomImage src={`${import.meta.env.BASE_URL}images/wk5-1.png`} />
      </Stack>
    </>
  );
}
