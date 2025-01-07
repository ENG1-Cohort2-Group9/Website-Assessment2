import { Stack, Title } from "@mantine/core";
import CustomImage from "../../_components/CustomImage";

export default function Week10() {
  return (
    <>
      <Title>Week 10</Title>
      <Stack>
      <CustomImage src={`${import.meta.env.BASE_URL}images/wk10-1.png`} />
      </Stack>
    </>
  );
}
