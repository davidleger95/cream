import { styled } from 'linaria/react';

export const Table = styled.table`
  width: 100%;
  color: var(--toast-color);
  background-color: var(--gs-100);
  border-left: 5px solid var(--toast-color);
  border-radius: 0.25rem;
  border-collapse: collapse;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
`;

export const TableRow = styled.tr`
  background-color: var(--gs-100);
  transition: all 50ms ease-in-out;

  &:nth-child(even) {
    background-color: var(--gs-97);
  }
`;

export const TableHeader = styled.thead``;
export const TableBody = styled.tbody`
  ${TableRow}:hover {
    box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.25),
      0 0 1rem 0 rgba(0, 0, 0, 0.15);
    transform: scale(1.025);
  }
`;
export const TableFooter = styled.tfoot``;

export const TableCell = styled.td<{ right?: boolean }>`
  padding: 0.75rem 0.5rem;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
`;

export const TableHeaderCell = styled.th<{ right?: boolean }>`
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 1rem 0.5rem;
  color: var(--gs-90);
  font-size: 0.9rem;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  text-transform: uppercase;
  background-color: var(--gs-10);
`;
