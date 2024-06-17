import { HiOutlineUserAdd } from "react-icons/hi";
import { ButtonIcon, Heading, Modal } from "../../ui";

import BookingForm from "./BookingForm";

function AddBooking() {
  return (
    <Modal>
      <Modal.Open opens="add-user">
        <ButtonIcon>
          <HiOutlineUserAdd />
        </ButtonIcon>
      </Modal.Open>
      <Modal.Window name="add-user">
        <BookingForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddBooking;
