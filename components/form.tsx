// import { API_URL } from "@/utils/api";
import { Input, Button, Card, Title, Stack } from "@mantine/core";
import Modal from "react-modal";
import { useEffect, useState, ChangeEvent, FC } from "react";
import axios from "axios";
import { API_URL } from "../utils/api";
import { getInitData } from "../utils/helper";

const Form: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.id === "firstName") setFirstName(e.target.value);
    if (e.target.id === "lastName") setLastName(e.target.value);
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "amount") setAmount(e.target.value);
  }

  useEffect(() => {
    const initData = getInitData(false);
    setFirstName(initData.firstName);
    setLastName(initData.lastName);
    setEmail(initData.email);
    setAmount(initData.amount);
  }, []);

  function reset() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAmount("");
  }
  const values = {
    firstName,
    lastName,
    email,
    amount,
  };
  // async function sendData(e: ChangeEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const result = formSchema.safeParse(values);
  //   if (!result.success) {
  //     console.log(result);
  //     setError(JSON.stringify(result.error.issues));
  //     return;
  //   }
  //   try {
  //     const res = await axios.post(API_URL + "donate", values);
  //     setOpen(false);
  //     // fetchUsers();
  //     reset();
  //   } catch (err: any) {
  //     console.log(err);
  //     setError(err?.message || "Error sending data");
  //   }
  // }

  return (
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>
      <div id="form">
        <form>
          <Stack spacing={"xs"}>
            <Input.Wrapper>
              <Input.Label>First Name</Input.Label>
              <Input id="firstName" value={firstName} onChange={onChange} />
              <Input.Error></Input.Error>
            </Input.Wrapper>

            <Input.Wrapper>
              <Input.Label>Last Name</Input.Label>
              <Input id="lastName" value={lastName} onChange={onChange} />
              <Input.Error>{}</Input.Error>
            </Input.Wrapper>

            <Input.Wrapper>
              <Input.Label>Email</Input.Label>
              <Input id="email" value={email} onChange={onChange} />
              <Input.Error>{}</Input.Error>
            </Input.Wrapper>

            <Input.Wrapper>
              <Input.Label>Donation Amount</Input.Label>
              <Input id="amount" value={amount} onChange={onChange} />
              <Input.Error>{}</Input.Error>
            </Input.Wrapper>
            <Button
              type="submit"
              onClick={() => {
                reset();
              }}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </div>
    </Card>
  );
};

export default Form;
