import { Filter, SortBy, TableOperations } from "../../ui";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price (Low First)" },
          { value: "regularPrice-desc", label: "Sort by Price (High FIrst)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity (Low First)" },
          { value: "maxCapacity-desc", label: "Sort by Capacity (High FIrst)" },
        ]}
      />
    </TableOperations>
  );
}
