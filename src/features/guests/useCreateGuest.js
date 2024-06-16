import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditGuest } from "../../services/apiGuests";
import toast from "react-hot-toast";

export function useCreateGuest() {
  const queryClient = useQueryClient();

  const { mutate: createGuest, isPending: isCreating } = useMutation({
    mutationFn: createEditGuest,
    onSuccess: () => {
      toast.success("New Guest successfully created");
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createGuest };
}
