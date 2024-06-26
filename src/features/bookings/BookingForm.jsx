import { useForm } from "react-hook-form";
import { Button, Form, FormRow, Input } from "../../ui";
import styled from "styled-components";

const StyledLayout = styled.div`
  margin-top: 2rem;
`;

function BookingForm({ onCloseModal }) {
  const { handleSubmit, register, formState } = useForm({});
  const { errors } = formState;
  return (
    <StyledLayout>
      <Form
        type="modal"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormRow label="National ID">
          <Input {...register("fullName")} />
        </FormRow>
        <FormRow label="Guest Name">
          <Input {...register("guestId")} />
        </FormRow>
        <FormRow label="Email">
          <Input type="email" {...register("email")} />
        </FormRow>
        <FormRow label="Nationality">
          <Input {...register("nationality")} />
        </FormRow>
        <FormRow>
          <Button
            type="reset"
            variation="secondary"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </FormRow>
      </Form>
    </StyledLayout>
  );
}

export default BookingForm;
