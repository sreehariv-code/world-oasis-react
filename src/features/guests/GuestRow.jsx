import styled from "styled-components";
import { Table } from "../../ui";

const Cell = styled.div`
  margin: 0.4rem 0;
`;

const Image = styled.img`
  width: 20px;
`;

export default function GuestRow({
  guest: { id: guestId, fullName, email, nationality, countryFlag },
}) {
  return (
    <Table.Row>
      <div>{guestId}</div>
      <Cell>{fullName}</Cell>
      <Cell>{email}</Cell>
      <Cell>{nationality}</Cell>
      <Cell>
        <Image src={countryFlag} alt={nationality} />
      </Cell>
    </Table.Row>
  );
}
