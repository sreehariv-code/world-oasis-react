import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Button, Input, Form, Textarea, FileInput, FormRow } from "../../ui";

import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins";

function CreateCabinForm() {
  //To Invalidate and refetch the data
  const queryClient = useQueryClient();
  const { handleSubmit, register, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New Cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }
  function onError(err) {
    // console.log(err);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          disabled={isCreating}
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity must be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          disabled={isCreating}
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price must be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          disabled={isCreating}
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          disabled={isCreating}
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
