import { memo } from 'react';
import { TableTh } from './ContactsList.styled';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

// const ContactsListItem = ({ id, name, phone, removeContact }) => {
//   return (
//     <ListElement>
//       {name}: {phone}
//       <DeleteBtn type="button" onClick={() => removeContact(id)}>
//         Delete
//       </DeleteBtn>
//     </ListElement>
//   );
// };

const ContactsListItem = ({ id, name, number, removeContact }) => {
  return (
    <tr>
      <TableTh>{name}</TableTh>
      <TableTh>{number}</TableTh>
      <TableTh>
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          size="small"
          type="button"
          onClick={() => removeContact(id)}
        >
          Delete
        </Button>
      </TableTh>
    </tr>
  );
};

export default memo(ContactsListItem);
