import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import * as SWMIconPack from 'react-swm-icon-pack';

import { deleteEvent } from '../../../api/api';

import {
  BackDrop,
  CloseBtn,
  Modal,
  Content,
  ConfirmButton,
  RejectButton,
} from './ConfirmModal.styled';

const ConfirmModal = ({ text, onClose, eventId }) => {
  const navigate = useNavigate();

  const onDelete = async () => {
    await deleteEvent(eventId);

    navigate(`/`, { replace: true });
    onClose(false);
  };

  return (
    <BackDrop>
      <Modal>
        <CloseBtn type="button" onClick={() => onClose(false)}>
          <SWMIconPack.Cross set="outline" size={24} color="#7B61FF" />
        </CloseBtn>
        <Content>
          <p>{text}</p>
          <div>
            <ConfirmButton type="button" onClick={onDelete}>
              Yes
            </ConfirmButton>
            <RejectButton type="button" onClick={() => onClose(false)}>
              No
            </RejectButton>
          </div>
        </Content>
      </Modal>
    </BackDrop>
  );
};

export default ConfirmModal;

ConfirmModal.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  eventId: PropTypes.string.isRequired,
};
