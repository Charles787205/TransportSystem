import type { Dispatch, SetStateAction } from 'react';
import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from '../ui/dialog';

const CreateClientModal = (
  { isOpen, setIsOpen }:
    {
      isOpen: boolean;
      setIsOpen: Dispatch<SetStateAction<boolean>>
  }
) => {
  return (
    <div>CreateClientModal</div>
  )
}

export default CreateClientModal