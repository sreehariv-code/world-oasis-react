import { Empty, Spinner, Table } from "../../ui";
import GuestRow from "./GuestRow";
import { useGuests } from "./useGuests";

export default function GuestTable() {
  const { guests, isLoading, error } = useGuests();

  if (isLoading) return <Spinner />;

  if (!guests.length) return <Empty resourceName="guests" />;

  return (
    <Table columns="0.6fr 2fr 1.4fr 1fr 1fr 0.5fr">
      <Table.Header>
        <div>Id</div>
        <div>Guest Name</div>
        <div>Email</div>
        <div>Nationality</div>
        <div>Country Flag</div>
      </Table.Header>
      <Table.Body
        data={guests}
        render={(guest) => <GuestRow key={guest.id} guest={guest} />}
      />
    </Table>
  );
}
