import { useQuery } from "@tanstack/react-query";
import { getAllGuests } from "../../services/apiGuests";

export function useGuests() {
  const {
    isLoading,
    data: guests,
    error,
  } = useQuery({
    queryKey: ["guests"],
    queryFn: getAllGuests,
  });

  return { guests, isLoading, error };
}
