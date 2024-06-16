import { Controller, useForm } from "react-hook-form";
import { Button, Form, FormRow, Input } from "../../ui";
import Select from "react-select";
import styled from "styled-components";
import { listCountries } from "../../utils/helpers";
import { useEffect, useState } from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledLayout = styled.div`
  margin-top: 2rem;
`;

function AddGuestForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm({});

  const { isDarkMode } = useDarkMode();

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listCountries();
        setOptions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCountryChange = (option) => {
    const { value, label } = option;
    const flagUrl = `https://flagcdn.com/${value}.svg`; // Assuming the flag URL structure
    setValue("nationality", label);
    setValue("countryFlag", flagUrl);
  };

  return (
    <StyledLayout>
      <Form
        type="modal"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormRow label="National ID">
          <Input {...register("nationalId")} />
        </FormRow>
        <FormRow label="Guest Name">
          <Input {...register("fullName")} />
        </FormRow>
        <FormRow label="Email">
          <Input type="email" {...register("email")} />
        </FormRow>
        <FormRow label="Nationality" error={errors?.description?.message}>
          <div style={{ zIndex: 999 }}>
            <Controller
              name="nationality"
              control={control}
              rules={{ required: "Nationality is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  {...register("nationality", {
                    required: "Nationality is required",
                  })}
                  options={options}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  onChange={(option) => {
                    handleCountryChange(option);
                    field.onChange(option.label);
                  }}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: isDarkMode ? "#18212f" : "#ffffff",
                    }),
                    option: (provided) => ({
                      ...provided,
                      backgroundColor: isDarkMode ? "#18212f" : "#ffffff",
                      color: isDarkMode ? "#fffff" : "#18212f",
                      borderBottom: `1px solid  ${
                        isDarkMode ? "#939090" : "#e2e3e4"
                      }`,
                    }),
                  }}
                  onBlur={field.onBlur}
                  value={
                    options.find(
                      (option) => option.label === getValues("nationality")
                    ) || null
                  }
                />
              )}
            />
          </div>
        </FormRow>

        <FormRow>
          <Button type="reset" variation="secondary">
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </FormRow>
      </Form>
    </StyledLayout>
  );
}

export default AddGuestForm;
