import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddBooking from "../features/bookings/AddBooking";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Row type="horizontal">
          <Heading as="h1">All bookings</Heading>
          <AddBooking />
        </Row>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
