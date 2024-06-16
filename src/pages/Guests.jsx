import AddGuests from "../features/guests/AddGuests";
import GuestTable from "../features/guests/GuestTable";
import { Heading, Row } from "../ui";

export default function Guests() {
  return (
    <div>
      <Row type="horizontal">
        <Heading as="h1">Guests</Heading>
        <AddGuests />
      </Row>
      <GuestTable />
    </div>
  );
}
