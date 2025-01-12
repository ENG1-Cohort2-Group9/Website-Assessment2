import { useEffect, useState } from "react";
import { Card, Stack, Text, Title } from "@mantine/core";

type TLicense = { name: string; url: string; dependencies: string[] };

export default function LicensePage() {
  const [data, setData] = useState<TLicense[]>();

  // Example data to display
  const exampleData: TLicense[] = [
    { name: "", url: "", dependencies: [] },
    { name: "", url: "", dependencies: [] },
  ];

  useEffect(() => {
    // Set example data
    setData(exampleData);
  }, []);

  return (
    <Stack>
      <Title>Licenses</Title>
      {data?.map((license) => (
        <Card key={license.name}>
          <Text>{license.name}</Text>
          <Text>{license.url}</Text>
        </Card>
      ))}
    </Stack>
  );
}