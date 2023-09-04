// import { API_URL } from "../utils/api";
// import { type Donation } from "@/utils/types";
import { Paper, Text, Stack, Group, Title, Card } from "@mantine/core";
import dayjs from "dayjs";
import getDonationData from "@/utils/getDoantion";
import { useEffect, useState } from "react";
import { type Donation } from "../utils/types";
export default function Donation() {
  const [data, setData] = useState<Donation[]>([]); // Initialize data as an empty array

  useEffect(() => {
    getDonationData()
      .then((donationData: Donation[]) => {
        console.log(donationData);
        setData(donationData);
      })
      .catch((error: any) => {
        console.error("An error occurred:", error);
      });
  }, []);

  const totalAmount = data?.reduce((accumulator, donation) => {
    return accumulator + donation.amount;
  }, 0);

  return (
    <Card withBorder shadow="xs" bg="gray.3">
      <Group mb={20}>
        <Title order={1} color="gray">
          Total
        </Title>
        <Title order={1} variant="gradient">
          {totalAmount}
        </Title>
        <Title order={1} color="gray">
          THB
        </Title>
      </Group>
      <Stack>
        {data?.map((data, key) => (
          <Paper shadow="xs" p="md" key={key}>
            <Group>
              <Text>{data.firstName}</Text>
              <Text>{data.lastName}</Text>
              <Text>{data.email}</Text>
              <Text>{data.amount}</Text>
              <Text>{dayjs(data.time).format("D-MMM HH:mm:ss")}</Text>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}
