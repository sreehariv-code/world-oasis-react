import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllGuests } from "../../services/apiGuests";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useGuests() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //Query
  const {
    isLoading,
    data: { data: guests, count } = {},
    error,
  } = useQuery({
    queryKey: ["guests", page],
    queryFn: () => getAllGuests({ page }),
  });

  //Pre-fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  //next page
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["guests", page + 1],
      queryFn: () => getAllGuests({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["guests", page - 1],
      queryFn: () => getAllGuests({ page: page - 1 }),
    });

  return { guests, isLoading, error, count };
}
